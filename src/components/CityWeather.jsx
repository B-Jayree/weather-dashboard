import React from 'react'
import '../styles/CityWeather.css'

export default function CityWeather({city, temperature, condition}) {
  return (
    <div className='city-weather'>
        <h2>{city}</h2>
        <h2>Temperature: {temperature}</h2>
        <h2>Condition: {condition}</h2>
        <div className='icon-placeholder'>☀️</div>
    </div>
  )
}
