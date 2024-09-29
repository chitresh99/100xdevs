import { useMemo,useState } from 'react'
import './App.css'

//Use memo is a hook which we use to some operations frequently without re-rendering the whole page

const items = [
  { id: 1, name: 'Apple', price: 0.5 },
  { id: 2, name: 'Banana', price: 0.3 },
  { id: 3, name: 'Orange', price: 0.6 },
  { id: 4, name: 'Mango', price: 1.0 },
]

function App() {
  
  const [cart,setCart] = useState([]);
  const [rerender, setRerender] = useState(0);
   
  const addtocart = (item) => {
    setCart([...cart,item]);
  }
  
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  }, [cart]);

  return (
    <>
      <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul className="mb-4">
        {items.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button 
              onClick={() => addtocart(item)}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <p className="font-bold">Total Price: ${totalPrice}</p>
      <button 
        onClick={() => setRerender(prev => prev + 1)}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Force Rerender (Count: {rerender})
      </button>
    </div>
    </>
  )
}

export default App
