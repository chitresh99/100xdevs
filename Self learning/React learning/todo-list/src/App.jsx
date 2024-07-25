import { useState } from "react";
import { Newtodoform } from "./newtodoform";
import "./styles.css";

export default function App() {
  
  const [todos, setTodos] = useState([]);

  

  function deletetodo(id){
    setTodos(currentTodos=> {
      return currentTodos.filter(todo => todo.id !==id)
    })
  }

  return (
    <>
    <Newtodoform />
      <h1 className="header">To do list</h1>

      <ul className="list">

        {todos.length === 0 && "No Todos"}
        {todos.map(todo => (
          <li key={todo.id}>  {/*putting a key so we have some type of unique identifier*/}
            <label>
              <input type="checkbox" />
              {todo.title}
            </label>
            <button onClick={() => deletetodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
