import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search/Search';
import WeatherList from './components/Weather/WeatherList'
// import Error from './components/Error'
const API_KEY = "2b05391391f6e0c00d0d4a7bc27bf59d";

class App extends Component  {
    constructor(){
      super();
      this.state = {
        todaysWeather: [],
        weatherlist: [],
        isLoading: false,
        hasError: false
      }  
    }

  getWeather = async (e) => {
    
    e.preventDefault (e);

    this.setState({ hasError: false, isLoading: true});

    const city = e.target.city.value;
    const country = e.target.country.value;

    if(city.trim().length === 0 || country.trim().length === 0){
      return  this.setState({ hasError: true, isLoading: false});

      
    }
    const dt = new Date().toTimeString().split(" ", 2)
    const time = dt[0]
    console.log(time)


    
    //const current = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`;
    //const forecast = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)

    Promise.all([fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then(response => {     
        this.setState({todaysWeather: response})
    }).catch(error => {
      return  this.setState({ hasError: true, isLoading: false});
    }),
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then(response => {  
      const dailyWeather = response.list.filter(reading =>  reading.dt_txt.includes("18:00:00"))        
      console.log(dailyWeather)       
      this.setState({weatherlist: dailyWeather})
    })
    .catch(error => {
      return  this.setState({ hasError: true, isLoading: false});
   })
    
  ])

    this.setState({isLoading: false})
    
  }

  render() {
    return (
      <div className="container-fluid">
          <Search getWeather={this.getWeather} />    
          <div className="jusfity-content-center">
            {this.state.isLoading? <h1>Loading</h1> : <h1></h1>}
            {this.state.hasError? <h1>The weather is fickle and it seems so is the App.</h1>: <h1></h1>}
          </div>  
          <br/>
          <br/>
          {this.state.weatherlist.length !== 0 && !this.state.hasError && <WeatherList todaysWeather={this.state.todaysWeather} weatherlist={this.state.weatherlist} />}
      </div>
    );
  }
}

export default App;
