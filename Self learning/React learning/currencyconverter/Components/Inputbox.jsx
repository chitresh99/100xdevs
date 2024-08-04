import React, {useId} from 'react'

function Inputbox({
    label,
    amount,
    onamountchange,
    oncurrencychange,
    currencyoptions = [],
    selectedcurrency = 'usd',
    amountdisabled = false,
    currencydisabled = false,
    classname = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex${classname}`}>
            <div className='w-1-2'> {/*Second div*/}
                <label htmlFor= {id} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input 
                id = {id}
                type="number"
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='Amount'
                    value={amount}
                    disabled = {amountdisabled}
                    onChange={(e) => onamountchange && onamountchange(Number(e.target.value))}
                ></input>
            </div> {/*Second div*/}

            <div className='w-1/2 flex flex-wrap justify-end text-right'> {/*Third div*/}
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectedcurrency}
                    onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
                    disabled={currencydisabled}>
                    {currencyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                            value={currency}
                        </option>
                    ))}

                </select>
            </div> {/*Third div*/}
        </div>
    )
}

export default Inputbox 