import React, { Component } from 'react'
import './Weather.css'

const WeatherMain = (props) => {
 
    const today = props.today;   
    return ( 
        <div className="col-12 border border-primary">
            <h1>Todays</h1>
            <h1>{today.weather[0].main}</h1>
            <br/>
            {today.weather[0].description}
            <div className="row">
                <div className="col-12">
                    {Math.round(today.main.temp)}
                </div>
                <div className="col-6">
                    {Math.round(today.main.temp_min)} Min
                </div>
                <div className="col-6">
                    {Math.round(today.main.temp_max)} Max
                </div>
            </div>        
            {today.main.humidity} 
        </div>
    )
}

export default WeatherMain
