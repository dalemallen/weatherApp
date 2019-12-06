import React, { Component } from 'react'
import './Weather.css'


const Weather = (props) => {
         const weather = props.weather;   
         return (  <div className="col-2 border border-primary">
                <h3>Weather</h3>
                {weather.weather[0].main}
                <br/>
                {weather.weather[0].description}
                <div className="row">
                    <div className="col-12">
                        {Math.round(weather.main.temp)}
                    </div>
                    <div className="col-6">
                        {Math.round(weather.main.temp_min)} Min
                    </div>
                    <div className="col-6">
                        {Math.round(weather.main.temp_max)} Max
                    </div>
                </div>               
            </div>
         )
}

export default Weather
