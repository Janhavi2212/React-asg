import React, { useState } from 'react'

export const SearchBar = ({setCity}) => {
    const [cityName,setCityName]=useState('')
    const handleSearch=()=>{
      setCity(cityName)
    }
    
  return (
    <div>
        <input type='text' placeholder='Enter city name' value={cityName} onChange={(e)=>setCityName(e.target.value)}/>
        <button type='submit' onClick={handleSearch}>Search</button>
    </div>
  )
}
