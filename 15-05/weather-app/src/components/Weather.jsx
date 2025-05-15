import React, { useEffect, useState } from 'react'
const Weather = () => {
const [cityName,setCityName]= useState('')
const [weatherData,setWeatherdata]=useState({})
    const search = async (city) => {
        try {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setWeatherdata(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleClick = ()=>{
        setCity(cityName)
        search(cityName)
    }
  return (
    <div>
        <h1>Weather - app</h1>
        <div className='search-bar'>
             <input type='text' placeholder='Search' onChange={(e)=>setCityName(e.target.value)}/>
             <button type='submit' onClick={handleClick}>Search</button>
        </div>

        <div className='weatherData'>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main?.temp}°C</p>
            <p>Humidity: {weatherData.main?.humidity}%</p>
        </div>
    </div>
  )
}

export default Weather