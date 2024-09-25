import { useState, useEffect } from 'react';
import './App.css'

function App() {
   
  const [position, setposition] = useState({
    x : 0,
    y : 0
  })
  
  useEffect(()=> {
    function handlemove(e){
      setposition({
        x : e.clientX,
        y : e.clientY
      });
    }

    window.addEventListener("pointermove",handlemove);
    return () => {
      window.removeEventListener("pointermove",handlemove);
    };
  },[]);

  return (
    <>
      <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />

    </>
  )
}

export default App
