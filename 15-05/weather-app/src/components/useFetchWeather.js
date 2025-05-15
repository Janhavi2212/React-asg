import React, {useEffect, useState } from 'react'

const useFetchWeather = (city) => {
    const [weatherData,setWeatherdata]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;

     const fetchData = async () => {
             setLoading(true)
            setError(null)
            try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            setWeatherdata(data)
            setLoading(false)
            
        } catch (error) {
            setError(error.message)
            setWeatherdata(null)
            setLoading(false)
        } 
        }

    useEffect(()=>{
       fetchData()        
    },[city])
  return {weatherData,loading,error}
}

export default useFetchWeather