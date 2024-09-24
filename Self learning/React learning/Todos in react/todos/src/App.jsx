import { useState } from 'react';
import './App.css';

function createInitialTodos() {
  const initialtodos = [];
  for (let i = 0; i < 50; i++) {
    initialtodos.push({
      id: i,
      text: 'Item ' + (i + 1)
    });
  }
  return initialtodos;
}



function App() {
  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState('');
  
  function removeAllTodos() {
    setTodos([]); 
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button onClick={() => {
        setText('');
        setTodos([
          { id: todos.length, text: text },
          ...todos
        ]);
      }}>
        Add item
      </button>
      
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
          
        ))}
      </ul>
      <button onClick={removeAllTodos}>Remove All Todos</button>
    </>
  );
}

export default App;
