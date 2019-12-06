import React, { Component } from 'react'
import Weather from './Weather'
import WeatherMain from './WeatherMain'
import './Weather.css'

const WeatherList = (props) => {  
    return ( 
            <div className="container">
                Weather Forecast
                <div className="row justify-content-center">
                    <WeatherMain today={props.todaysWeather}/>
                    {/* loop through and display weather list */}
                    {props.weatherlist && props.weatherlist.map((weather, i) => {
                    return <Weather  key={i} weather={weather}/> })}
                </div>

          
                
            </div>
    )
}

export default WeatherList
