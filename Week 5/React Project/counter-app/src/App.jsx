import './App.css';
import { useState } from 'react';

// Button component should start with an uppercase letter
function CustomButton(props) {
    // Define the onclickhandler function
    function onclickhandler() {
        props.setCount(props.count + 1);
    }

    return (
        <button onClick={onclickhandler}>
            Counter: {props.count}
        </button>
    );
}

// Main App component
function App() {
    // Initialize the state
    const [count, setCount] = useState(0);

    // Render the component
    return (
        <div>
            <CustomButton count={count} setCount={setCount} />
        </div>
    );
}

export default App;
