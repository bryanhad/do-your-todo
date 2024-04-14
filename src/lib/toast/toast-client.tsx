'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

type ToastProps = {
    toastCookie: string | undefined
}

export default function ToastClient({ toastCookie }: ToastProps) {
    useEffect(() => {
        if (!!toastCookie) {
            const { type, message } = JSON.parse(toastCookie)
            if (type === 'success') {
                toast.success(message)
            } else if (type === 'error') {
                toast.error(message)
            }
        }
    }, [toastCookie])
    return null
}
