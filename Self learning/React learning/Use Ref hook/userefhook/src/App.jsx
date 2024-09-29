import { useEffect, useRef,useState } from 'react'
import './App.css'

//focusing means the center of attention for keyboard events

function App() {
  
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect (() => {
   inputRef.current.focus();
  },[]);
  
  const handlebuttonclick = () => {
    inputRef.current.focus();
  }


  return (
    <>
   <input ref ={inputRef} type = "text" className="border border-gray-300 rounded px-2 py-1 mb-2 w-full"
        placeholder="This input is focused on mount" />
   <button ref = {buttonRef} onClick={handlebuttonclick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Click me
    </button>
   </> 
  )
}

export default App
