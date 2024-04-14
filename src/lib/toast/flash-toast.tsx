import { cookies } from 'next/headers'
import { Toaster } from 'sonner'
import ToastClient from './toast-client'

export function FlashToast() {
    const flashToast = cookies().get('flash-toast')
    return (
        <>
            <Toaster />
            <ToastClient toastCookie={flashToast?.value} />
        </>
    )
}

export function setFlashToastCookie(flash: {
    type: 'success' | 'error'
    message: string
}) {
    cookies().set('flash-toast', JSON.stringify(flash), {
        path: '/',
        expires: new Date(Date.now() + 1000), //expires in 1 second
    })
}
