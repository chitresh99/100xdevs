import React , {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

// e -> event 
// {(e)=> setUsername(e.target.value)} //event fire

function Login() {
    
    const [user,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username,password})
    }

    return (
        <>
        <h2>Login</h2>
        <input type = 'text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'></input>
        <input type = 'text' value = {password} onChange = {(e)=> setPassword(e.target.value)}placeholder='Password'></input>
        <button onClick = {handleSubmit}>Submit</button>
        </>
    )
}

export default Login