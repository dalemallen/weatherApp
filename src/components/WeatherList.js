import React, { Component } from 'react'
import Weather from './Weather'

class WeatherList extends Component {

    render() {
        return (
            <div>
                Weather Forecast
                
                {/* loop through and display weather comps */}
                {this.props.weatherlist && this.props.weatherlist.map((weather) => {
                return <Weather  key={weather.dt} weather={weather}/> })
          }
                
            </div>
        )
    }
}

export default WeatherList
