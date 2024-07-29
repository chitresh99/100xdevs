import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('red')

  // function changecolour(color){
  //   setcolor(color)  
  // }

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setcolor('blue')}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'Blue'}}>Blue</button>
          <button onClick={() => setcolor('Green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black 'style={{backgroundColor:'Green'}}>Green</button>
          <button onClick={() => setcolor('Orange')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black 'style={{backgroundColor:'Orange'}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
