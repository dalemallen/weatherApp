import React, { Component } from 'react'
import Weather from './Weather'
import WeatherMain from './WeatherMain'
import './Weather.css'
import Error from '../Error'


const WeatherList = (props) => {  
    return ( 
            <div className="container">
                <div className="row" id="weatherlist">
                    <WeatherMain today={props.todaysWeather}/>
                    <div className="col-md-8" id="forecast">
                        <h1 id="forecastTitle">5Day Forecast</h1>
                        {/* loop through and display weather list */}
                        {props.weatherlist && props.weatherlist.map((weather, i) => {
                        return <Weather  key={i} weather={weather}/> })}
                    </div>
                </div> 
            </div>
    )
}

export default WeatherList
