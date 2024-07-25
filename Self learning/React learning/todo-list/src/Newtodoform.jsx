import {useState} from "react";

export function Newtodoform() {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTodos(currentTodos => [
          ...currentTodos,
          { id: crypto.randomUUID(), title: newItem, completed: false },
        ]);
        setNewItem(""); // Reset input field after submission
      }
    
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}