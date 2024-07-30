import { useState } from 'react'
import './App.css'

function App() {
  const [length ,setlength] = useState(8)//setting the default password length
  const [numberallowed , setnumberallower] = useState(false) //by default they are not allowed
  const [charallowed , setcharallowed] = useState(false)
  const [password , setpassword] = useState('') //the password which we will be generating we will be setting this as empty

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'></div>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type = "text"></input>
     </div>
    </>
  )
}

export default App
