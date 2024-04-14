'use server'

import { revalidatePath } from 'next/cache'
import { db } from './db'
import { setFlashToastCookie } from './toast'

export async function createTodo(formData: FormData) {
    const todoTitle = formData.get('title') as string
    const todo = await db.todo.create({ data: { title: todoTitle } })
    console.log({ createTodoResult: todo })
    setFlashToastCookie({
        type: 'success',
        message: `'${todo.title}' has been added`,
    })
    revalidatePath('/')
    return todo.title
}

export async function getAllTodos() {
    const todos = await db.todo.findMany()
    return todos
}

export async function deleteTodo(id: number) {
    const todo = await db.todo.delete({ where: { id } })
    console.log({ deleteTodoResult: todo })
    setFlashToastCookie({
        type: 'error',
        message: `'${todo.title}' has been removed`,
    })
    revalidatePath('/')
    return todo.title
}
