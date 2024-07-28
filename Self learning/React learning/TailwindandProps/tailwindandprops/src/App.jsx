import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let newArr = [1,2,3,4,5,6,7]
  return (
    <>
      <h1 className="text-3xl bg-blue-500 p-3 rounded-md">Hello, vite with tailwind</h1>
      <Card username = "chitresh" myArr = {newArr}/>
      <Card username = "Dilin" post='Rapper'/>
      <Card />
    </>
  )
}

export default App
