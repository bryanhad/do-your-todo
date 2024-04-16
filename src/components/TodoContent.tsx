'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { X, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

function TodoContent({ title, id }: { title: string; id: number }) {
    const { pending } = useFormStatus()

    return (
        <Button asChild>
            <div className="flex gap-4 max-w-full">
                <p
                    className={cn('truncate md:whitespace-normal', {
                        'text-muted-foreground': pending,
                    })}
                >
                    {title}
                </p>
                <Button type="submit">
                    {pending ? <Loader2 className="animate-spin" /> : <X />}
                </Button>
            </div>
        </Button>
    )
}

export default TodoContent
