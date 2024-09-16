import React, { useRef, useState, useEffect } from 'react';

export default function FormWithMountLog() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const [lastSubmission, setLastSubmission] = useState({ name: '', email: '' });

  useEffect(() => {
    console.log('Component mounted. Initial ref values:');
    console.log('Name ref:', nameInputRef.current ? nameInputRef.current.value : 'not set');
    console.log('Email ref:', emailInputRef.current ? emailInputRef.current.value : 'not set');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameInputRef.current.value === '') {
      nameInputRef.current.focus();
    } else if (emailInputRef.current.value === '') {
      emailInputRef.current.focus();
    } else {
      setLastSubmission({
        name: nameInputRef.current.value,
        email: emailInputRef.current.value
      });
    }
  };

  const logCurrentValues = () => {
    console.log('Current name:', nameInputRef.current.value);
    console.log('Current email:', emailInputRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input ref={nameInputRef} id="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input ref={emailInputRef} id="email" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={logCurrentValues}>Log Current Values</button>
      <div>
        <h3>Last Submitted Values:</h3>
        <p>Name: {lastSubmission.name}</p>
        <p>Email: {lastSubmission.email}</p>
      </div>
    </div>
  );
}