import React, {useState} from 'react'

export default function Form (props) {
    let [text, setText] = useState(null)
    let [id, setId] = useState(0)

    const todoCreate = (text) => {
        const todoObj = {text: text, id: id }
        setId(id+ 1)
        props.addTodo(todoObj)
    }
return (
    <div>
        <h1>Todo List</h1>
        <input type="text" onChange={(e)=> setText(e.target.value)} placeholder='Tarefa' />
        <button onClick={()=>todoCreate(text)}>Add</button>
    </div>
)
}