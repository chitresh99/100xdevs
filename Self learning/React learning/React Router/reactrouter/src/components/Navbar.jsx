import React from 'react'
import { Link } from 'react-router-dom' 

export const Navbar = () => {
  return (
    <div classname = 'bg-slate-500'>
     <nav>
        <ul className='flex justify-center space-x-3 '>
       <Link to ="/"><li>Home</li></Link> 
       <Link to ="/about"><li>About</li></Link> 
       <Link to ="/login"><li>Login</li></Link> 
       <Link to="/contact"><li>Contact</li></Link>
       <Link to="/user"><li>User</li></Link>
       </ul>
     </nav>
    </div>
  )
}
