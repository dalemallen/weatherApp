import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './components/Search';
import WeatherList from './components/WeatherList'
const API_KEY = "2b05391391f6e0c00d0d4a7bc27bf59d";

class App extends Component  {
    constructor(){
      super();
      this.state = {
        weatherlist: []
      }
    }

  getWeather = async (e) => {
    e.preventDefault (e);
    
    const city = e.target.city.value;
    const country = e.target.country.value;

    // adjust unit of measurement 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();

    // add logic for 5 days
    
    // the response is now set to the state
    this.setState({weatherlist: data.list});
    console.log(this.state)

  }

  render() {
    return (
      <div className="App">
          <Search getWeather={this.getWeather} />
          {/* if weatherlist is empty dont display*/}
          {this.state.weatherlist.length !== 0 && <WeatherList weatherlist={this.state.weatherlist} />}

      </div>
    );
  }
}

export default App;
