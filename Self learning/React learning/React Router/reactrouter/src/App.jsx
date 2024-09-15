import './App.css'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'  // Outlet for rendering child routes

function App() {
  return (
    <>
      <div className='flex justify-center mt-3 mb-4'>
        Chitresh
        </div>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
