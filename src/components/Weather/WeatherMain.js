import React, {Component } from 'react'
import './Weather.css'
import WeatherType from './WeatherType'
import Error from '../Error'

const WeatherMain = (props) => {  

    const today = props.today;
    return ( 
        <div className="col-md-4" id="main">

            <h1>{today.name}, {today.sys.country}</h1>
            <br/>
            <div className="row">
            <div className="col-md-6">
            <WeatherType type={today.weather[0].main}/>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <h3>{Math.round(today.main.temp)}°C</h3>
                </div>
                <div className="col-md-12">
                    <h3>{today.weather[0].main}</h3>
                </div>
                </div>

            </div>
            <br/>
            <div className="row justify-content-center">
                <div className="col-md-12">
                <h2>Humidity {today.main.humidity}</h2>
                </div>
            </div> 
                <br/>
            <div className="row">
                <div className="col-md-6">
                <h2>{Math.round(today.main.temp_min)}°C Min</h2>
                </div>
                <div className="col-md-6">
                    <h2>{Math.round(today.main.temp_max)}°C Max</h2>
                </div>
            </div>        
             
        </div>
    )
}

export default WeatherMain
