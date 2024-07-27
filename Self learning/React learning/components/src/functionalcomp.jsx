import React, { useState } from 'react';
import './App.css';

function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Chitresh" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
