import React from 'react'

export default function TodoItem ({todo, deleteTodo}) {
   return (
        <div>
            <div>
                 <input type="checkbox"/>
                  {todo.text} 
            </div>  
            <button onClick={()=>deleteTodo(todo.id)}>x</button>
        </div>
    )
}