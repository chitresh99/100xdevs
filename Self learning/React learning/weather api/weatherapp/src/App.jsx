import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const apiKey = 'fbf2040440837e7f5e7415f68b58de21';
  const city = 'London';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const [data, setData] = useState(null); // use null instead of [] for data

  const fetchInfo = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching the weather data:', error.message);
    console.error('Error details:', error.response ? error.response.data : error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Weather in {data.name}</h1>
          <p>Temperature: {data.main.temp}K</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
