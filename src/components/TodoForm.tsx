import { createTodo } from '@/lib/actions'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function TodoForm() {
    return (
        <form action={createTodo}>
            <div className="space-y-4">
                <Input placeholder="Insert Todo title" name="title" />
                <Button type="submit">Add Todo</Button>
            </div>
        </form>
    )
}

export default TodoForm
