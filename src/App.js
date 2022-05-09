import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import React, {useState} from 'react'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    var newTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="column">
    <Form addTodo={addTodo} />
      {todos.map((todo)=>(
        <div key={todo.id}>
        <TodoItem deleteTodo={deleteTodo} todo={todo}/>
        </div>
      ))}
    
    </div>
    </div>
  );
}

export default App;
