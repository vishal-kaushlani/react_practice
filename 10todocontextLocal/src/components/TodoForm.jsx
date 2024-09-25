import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    
const [todo, setTodo] = useState('')
const {addTodo} = useTodo()

const add = (e) => {
    e.preventDefault()
    if(!todo)return
    // addTodo({id:Date.now, todo:todo,completed:false})
    addTodo({todo, completed:false})  // inshort form (date.now is already in addTodo function in app.jsx and if key and index same [here todo] so we can take todo only [no need of todo:todo])
    setTodo('')
}
    return (
        <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


