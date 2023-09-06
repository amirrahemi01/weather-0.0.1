import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './services/WeatherServices';




function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
  

  const forecastFetch = fetch(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );

  Promise.all([currentWeatherFetch, forecastFetch])
  .then(async (response) => {
    const weatherResponse = await response[0].json();
    const forcastResponse = await response[1].json();

    setCurrentWeather({ city: searchData.label, ...weatherResponse });
    setForecast({ city: searchData.label, ...forcastResponse });
  })
  .catch(console.log);
};

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} /> }

      <br/>
      <code className='version'>Version: 1.0.0</code>
      <p className='version'>&copy; RIMA 2023</p>
    </div>
  );
}

export default App;

