import {db} from "../../db";
import { sendError} from "h3"
export default defineEventHandler( (e) => {
const method = e.req.method;
const context =  e.context;
const {id} = context.params;
const findTodoById = (todoId) => {
    let index;
    const todo =  db.todos.find((t, i) => {
        if(t.id === todoId){
            index = i;
            return true
        }
        return false
    });
    if(!todo) {
        const TodoNotFoundError = createError({
            statusCode: 404,
            statusMessage: "Todo Not Found",
            data: {}
        });
        sendError(e, TodoNotFoundError)
    }

    return {todo, index}
}
if(method === "PUT"){
const {todo, index} = findTodoById(id)

const updatedTodo = {
    ...todo,
    completed: !todo.completed
}
db.todos[index] = updatedTodo

return updatedTodo; 
}

if(method === "DELETE"){
const {index} = findTodoById(id);

db.todos.splice(index, 1);
return {
     message: "Itme Deleted"
}
}
})