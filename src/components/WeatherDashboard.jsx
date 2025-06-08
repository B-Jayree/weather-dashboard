import React from 'react'
import CityWeather from './CityWeather'
import '../styles/WeatherDashboard.css'

export default function WeatherDashboard() {
  return (
    <div className='weather-dashboard'>
        <CityWeather city="New York" temperature="15C" condition="Sunny" />
        <CityWeather city="London" temperature="10C" condition="Rainy" />
        <CityWeather city="Tokyo" temperature="20C" condition="Cloudy" />
        <div className='icon-placeholder'></div>
    </div>
  )
}
