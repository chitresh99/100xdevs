import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem,setNewItem] = useState("") 
  {/*This line above is a hook in react*/}
  return(
    <>
    <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New item</label>
      <input value = {newItem}
       onInput= {e => setNewItem(e.target.value)} 
       type="text" id="item" />
    </div>
    <button className="btn">
    Add
    </button>
  </form>
  <h1 className="header">To do list</h1>
  {/*rendering out our list*/}
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}

//1) We created a label that says new item 
//2) When used together with the <label> element, 
//the for attribute specifies which form element a label is bound to.