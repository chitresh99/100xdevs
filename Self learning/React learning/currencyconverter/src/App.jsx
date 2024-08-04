import { useState } from 'react'
import './App.css'
import {Inputbox} from '../Components/index.js'
import useCurrency from '../Hooks/useCurrency'

function App() {
   const [amount,setamount] = useState(0)
   const [from,setfrom] = useState('usd')
   const [to,setto] = useState('inr')
   const [convertedamount , setconvertedamount] = useState(0)
   
   const currencyinfo = useCurrency(from)
   const options = Object.keys(currencyinfo)
   
   const swap =  () => {
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
   }

   const convert = () => {
     setconvertedamount(amount * currencyinfo[to]) //whatever amount the user gave us we multiply it by the currency value

   }

  return (
    <>
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/what-are-different-types-of-stocks.jpg.optimal.jpg")' }}
    >
    </div>
    
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blue-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault()
          convert() //to prevent it to submitting to default
        }}>
          <div className='w-full mb-1'>
             <Inputbox
             label="from"
             amount={amount}
             currencyoptions={options}
             oncurrencychange={(currency)=> setfrom(currency)}
             onamountchange={(amount)=> setamount(amount)} 
             selectedcurrency={from}></Inputbox>
          </div>

          
        </form>
      </div>
    </div>

    </>
  )
}

export default App
