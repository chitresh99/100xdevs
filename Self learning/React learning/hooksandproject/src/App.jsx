import {useState} from 'react'
import './App.css'

function App() {
  // const[] = useState(0);
  //variable injection

  const [counter ,setcounter] = useState(0);

  const addvalue = () => {
    setcounter((prevcounter) => prevcounter + 1)
    setcounter((prevcounter) => prevcounter + 1)
    setcounter((prevcounter) => prevcounter + 1)
    setcounter((prevcounter) => prevcounter + 1)
  }

  const removevalue = () => {
    setcounter((prevrmcounter) => prevrmcounter - 1)
    setcounter((prevrmcounter) => prevrmcounter - 1)
    setcounter((prevrmcounter) => prevrmcounter - 1)
    setcounter((prevrmcounter) => prevrmcounter - 1)
  }
  return (
    <>
    <h1>React Learning {counter}</h1>
    <h2>Counter Value : {counter} </h2>
    <button onClick={addvalue}>Add Value</button> {" "}
    <button onClick={removevalue}>Remove Value</button>
    <p>Footer :{counter} </p>
    </>
  )
}

export default App
