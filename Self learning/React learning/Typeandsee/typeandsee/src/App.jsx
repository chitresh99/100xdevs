import { useState } from 'react'
import './App.css'

function Form() {
  const [name, setname] = useState('chitresh');

  return (
    <>
      <input
        value={name}
        onChange={e => setname(e.target.value)}
      />
      <p>Hello, {name}.</p>
    </>
  );
}


function App() {
    
  const [version, setversion] = useState(0);
  function handlereset(){
    setversion(version + 1);
  }

  return (
    <>
     <button onClick={handlereset}>Reset</button>
     <Form key={version} />
    </>
  );
  
  
}

export default App
