import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //variable , function and intial value

  return (
    <>
      <div>
        This is the count {count}
      </div>
      <button onClick={() => {setCount(count + 1)}}>Increment</button> {/*function called*/}
      <button onClick={() => {setCount(count - 1)}}>Decrement</button>
    </>
  )
}

export default App
