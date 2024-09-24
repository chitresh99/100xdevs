import { useState } from 'react'
import './App.css'

function App() {
  
  const [form, setform] = useState({
    firstname : 'chitresh',
    lastname : 'poojary',
    email:'chitreshpoojary@gmail.com'
  })
  
  const resetbutton = () => {
    setform({
      firstname : 'chitresh',
    lastname : 'poojary',
    email:'chitreshpoojary@gmail.com'
    });
  }
  return (
    <>
      <label>
        First name :
        <input value = {form.firstname}
        onChange = {
          e =>{
            setform({
              ...form, 
              firstname: e.target.value
            });
          }
        }/>
      </label>
       
       <label>
        Last name:

        <input
          value={form.lastname}
          onChange={e => {
            setform({
              ...form,
              lastName: e.target.value
            });
          }}
        />

       </label>

      <label>
        Email:
        <input value = {form.email}
        onChange={e => {
          setform({
            ...form,
            email:e.target.value,
          });
        }}
        
        >
        </input>
      </label>
      
      <button onClick= {resetbutton}>
        Reset
      </button>
      
    </>
  )
}

export default App
