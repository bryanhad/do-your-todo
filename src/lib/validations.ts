import { z } from 'zod'

export const addTodoSchema = z.object({
    title: z.string().min(5, 'Title must be at least 5 characters long')
}).refine(data => data.title.trim() !== '', {message: 'Title is required'})

export type AddTodoValues = z.infer<typeof addTodoSchema>