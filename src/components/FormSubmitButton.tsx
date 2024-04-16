'use client'

import { useFormStatus } from 'react-dom'
import LoadingButton from './LoadingButton'

function FormSubmitButton() {
    const { pending } = useFormStatus()
    return (
        <LoadingButton loading={pending} type="submit">
            Submit
        </LoadingButton>
    )
}

export default FormSubmitButton
