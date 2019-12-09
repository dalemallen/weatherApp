import React, { Component } from 'react'
import './Search.css'

const Search = (props) => {

    return ( 
        <div className="container">
            <form onSubmit={props.getWeather}>
                <div className="form-group row" id="searchbar">
                    <div className="col-4">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city"/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="country">Country</label>
                        <input className="form-control" type="text" id="country"/>
                    </div>
                    <div className="col-2 ">
                        <button className="btn btn-outline-primary" type="submit">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
