import React, { Component } from 'react'
import './Weather.css'
import WeatherType from './WeatherType'

const Day = (props) => {
    const dt = props.dt;   
    const thedate = new Date(dt);
    const weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    const day = weekdays[thedate.getDay()];
    return day
}

const Weather = (props) => {
         const weather = props.weather;   
         return (  
            <div className="col-md-12" id="weather"> 
                <div className="row justify-content-center">
                    <div className="col-md-2"> 
                        <WeatherType type={weather.weather[0].main}/> 
                    </div>
                    <div className="col-md-4"> 
                        <h2><Day dt={weather.dt_txt} /></h2>
                    </div>
                    <div className="col-md-6"> 
                    <h2>{Math.round(weather.main.temp)}°C</h2>
                        {/* <h2><span>{Math.round(weather.main.temp_min)}°C Min</span>  <span>{Math.round(weather.main.temp_max)}°C Max</span></h2> */}
                    </div>                      
                </div>     
            </div>          
         )
}

export default Weather
