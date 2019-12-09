import React from 'react'
import './Weather.css'

const WeatherType = (type) => {
    let theType = type.type.toLowerCase()
    // theType.toLowerCase()
    if(theType === "clouds"){
        // this.setstate({weatherType: "cloudy"})
        let theType = "cloudy"
        return <i className={"wi wi-day-"+theType}></i>

    }        
    console.log(theType)
    return <i className={"wi wi-day-"+theType}></i>
}

export default WeatherType