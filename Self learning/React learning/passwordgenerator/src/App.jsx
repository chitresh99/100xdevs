import { useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)//setting the default password length
  const [numberallowed, setnumberallowed] = useState(false) //by default they are not allowed
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState('') //the password which we will be generating we will be setting this as empty

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'> {/*First div*/}
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>{/*Second div*/}
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
          <div
            className='flex text-sm gap-x-2'
          >
          </div>


        </div> {/*Second div*/}
        <div className='flex items-center gap-x-1'> {/*Third Div*/}
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setlength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor='length'>Length : {length}</label>

          <input type="checkbox"
            defaultChecked={numberallowed}
            onChange={() => {
              setnumberallowed((prev) => !prev) 
            }}
            name="" id="" />
          <label htmlFor='number'>Numbers</label>

          <input 
          type="checkbox"
          defaultChecked={charallowed}
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="charInput">Character</label>

        </div> {/*Third Div*/}
      </div> {/*First div*/}
    </>
  )
}

export default App
