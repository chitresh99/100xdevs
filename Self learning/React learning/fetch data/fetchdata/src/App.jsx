import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // API endpoint
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]); 
  
  // Function to fetch data using Axios
  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="App">
        <h1 style={{ color: 'green' }}>Using Axios Library to Fetch Data</h1>
      </div>
      <center>
        {/* Render each data object */}
        {data.map((dataObj, index) => {
          return (
            <div
              key={dataObj.id} // Added key prop to each list item for React optimization
              style={{
                width: '15em',
                backgroundColor: '#CD8FFD',
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </>
  );
}

export default App;
