'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { createTodo } from '@/lib/actions'
import { AddTodoValues, addTodoSchema } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import LoadingButton from './LoadingButton'
import { Input } from './ui/input'
import { toast } from 'sonner'

function TodoForm() {
    const form = useForm<AddTodoValues>({
        resolver: zodResolver(addTodoSchema),
        defaultValues: {
            title: '',
        },
    })

    const {
        control,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = form

    async function onSubmit(values: AddTodoValues) {
        try {
            await createTodo(values)
            reset()
        } catch (err) {
            toast.error('Something went wrong')
        }
    }

    return (
        <Form {...form}>
            <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Todo's title goes here"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <LoadingButton loading={isSubmitting} type="submit">
                    Submit Todo
                </LoadingButton>
            </form>
        </Form>
    )
}

export default TodoForm
