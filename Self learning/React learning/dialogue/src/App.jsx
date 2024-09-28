import { useState } from 'react';
import ModalDialog from './ModelDialog';
import './App.css'

function App() {
  const [show, setshow] = useState(false);
  return (
    <>
      <button onClick={() => setshow(true)}>
        Open Dialog
      </button>
      <ModalDialog isOpen={show}>
      Hello there!
        <br/>
        <button onClick={() => {
          setshow(false);
        }}>Close</button>
      </ModalDialog>
    </>
  )
}

export default App
