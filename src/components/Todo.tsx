import { Todo as TodoProps } from '@prisma/client'
import { deleteTodo } from '@/lib/actions'
import TodoContent from './TodoContent'

function Todo({ todo }: { todo: TodoProps }) {
    const deleteTodoWithId = deleteTodo.bind(null, todo.id)
    return (
        <form action={deleteTodoWithId}>
            <TodoContent title={todo.title} id={todo.id} />
        </form>
    )
}

export default Todo
