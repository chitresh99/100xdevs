import { useState } from 'react'

import './App.css'

function Counter() {
  const [count , setcount] = useState(0);

  return(
    <>
   <p>You clicked {count} times</p>
   <button onClick={() => setcount(count + 1)}>Click me</button>
   </>
  )
}

export default Counter