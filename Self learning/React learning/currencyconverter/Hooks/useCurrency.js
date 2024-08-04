// import { useEffect, useState } from "react";

// function useCurrency(currency) {
//     const [data, setData] = useState({});

//     useEffect(() => {
//         const fetchdata = async () => {

//             // try{

//             //     const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
//             //     const result = await response.json();
//             //     setData(result); 
//             // }catch(error){
//             //     console.error('Error fetching currency data:',error)
//             // }

//             fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//                 .then((res) => res.json())
//                 .then((res) => setData(res[currency]))
//         }

//     }, [currency]);
    
//     console.log(data)
//     return data
// }

// export default useCurrency;

import { useEffect, useState } from "react";


function useCurrency(currency){
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
    }, [currency])

    console.log(data);
    return data
    
}


export default useCurrency;

