import { useState } from 'react';
import './App.css';
import { Inputbox } from '../Components/index.js';
import useCurrency from '../Hooks/useCurrency';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]); // Multiply the amount by the currency value
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/what-are-different-types-of-stocks.jpg.optimal.jpg")' }}
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blue-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault();
              convert(); // Prevent default form submission
            }}>
              <div className='w-full mb-4'>
                <Inputbox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className='w-full flex justify-center mb-4'>
                <button
                  type="button"
                  className='border-2 border-white rounded-md bg-blue-600 text-white px-4 py-2'
                  onClick={swap}
                >Swap</button>
              </div>
              <div className='w-full mb-4'>
                <Inputbox
                  label="To"
                  currencyOptions={options}
                  amount={convertedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                />
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
