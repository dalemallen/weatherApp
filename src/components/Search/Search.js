import React, { Component } from 'react'
import './Search.css'

const Search = (props) => {

    return ( 
        <div className="container">
            <form onSubmit={props.getWeather}>
                <div className="form-group row" id="searchbar">
                    <div className="col-md-4">
                        <div className="row">
                            <label htmlFor="city" className="col-md-2 col-form-label">City</label>
                            <div className="col-md-10">
                                <input className="form-control" type="text" id="city"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row ">
                            <label htmlFor="country" className="col-md-2 col-form-label">Country</label>
                            <div className="col-md-10">
                            <input className="form-control" type="text" id="country"/> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 ">
                        <button className="btn btn-outline-primary text-center" type="submit">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
