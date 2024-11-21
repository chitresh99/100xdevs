import { useState, useEffect, useRef } from 'react';
import { FadeInAnimation } from './animation.js'; // Assuming this is correctly defined elsewhere
import './App.css';

function Welcome() {
  const ref = useRef(null); // Initialize the ref

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current); // Use the ref
    animation.start(1000);
    
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h1
      ref={ref} // Assign the ref to the h1 element
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
      }}
    >
      Welcome
    </h1>
  );
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  );
}

export default App;