'use client'
import { Todo as TodoProps } from '@prisma/client'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { deleteTodo } from '@/lib/actions'

function Todo({ todo }: { todo: TodoProps }) {
    async function handleDelete(id: number) {
        await deleteTodo(id)
    }
    return (
        <Button asChild>
            <div className="flex gap-4 max-w-full">
                <p className='truncate md:whitespace-normal'>
                {todo.title}

                </p>
                <Button onClick={() => handleDelete(todo.id)}>
                    <X />
                </Button>
            </div>
        </Button>
    )
}

export default Todo
