import React, { Component } from 'react'

class Weather extends Component {

    render() {
        return (
            <div>
                {this.props.weather.weather[0].main}
                {this.props.weather.weather[0].description}
                {this.props.weather.main.temp}
                {this.props.weather.main.temp_min}
                {this.props.weather.main.temp_max}
                {this.props.weather.main.humidity}
            </div>
        )
    }
}

export default Weather
