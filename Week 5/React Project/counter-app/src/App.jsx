import './App.css'
//this is called a hook
import { useState } from 'react';

//defining the global state
// let state =  {
//     count : 0
// }


//button which renders state.count
function App() {
    
    //initialising the state
    const [count, setCount] = useState(0);

    function onclickhander(){
        setCount(count + 1); //setting the state
    }
    
    //returning the dynamic html
 return (
  <div>
  <button onClick={onclickhander}>Counter {count}</button>
  </div>
 )
}

export default App
