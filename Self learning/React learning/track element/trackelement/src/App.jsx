import { useState } from 'react'
import './App.css'
import Box from './Components/Box'

function App() {
  function LongSection() {
    const items = [];
    for (let i = 0; i < 50; i++) {
      items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
    }
    return <ul>{items}</ul>
  }

  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </>
  )
}

export default App
