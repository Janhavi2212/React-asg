import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
import useFetchWeather from './useFetchWeather'
import WeatherInfo from './WeatherInfo'
import Loading from './Loading'

export const WeatherApp = () => {
const [city,setCity]=useState('')
const {weatherData,loading,error}=useFetchWeather(city)

  // if(loading) return <Loading/>
  // if(error) return <Error message={error}/>
  // if(weatherData) return <WeatherInfo weatherData={weatherData}/>
    
  return (
 <div>
  <SearchBar setCity={setCity}/>
            
  {loading && <Loading />}
  {error && <Error message={error} />}
   {weatherData && <WeatherInfo weatherData={weatherData} />}
    </div>
  )
}
