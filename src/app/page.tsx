import Todo from '@/components/Todo'
import TodoForm from '@/components/TodoForm'
import { getAllTodos } from '@/lib/actions'
import { Todo as TodoProps } from '@prisma/client'
import React from 'react'

async function HomePage() {
    const todos = await getAllTodos()
    return (
        <>
            <h1 className="font-semibold text-2xl">TODOS</h1>
            <TodoForm/>
            <div className="border p-4 rounded-md flex-1">
              <div className='flex flex-wrap gap-2'>
                {todos.map((todo: TodoProps) => (
                    <Todo todo={todo} key={todo.id} />
                ))}

              </div>
            </div>
        </>
    )
}

export default HomePage
