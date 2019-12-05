import React, { Component } from 'react'

class search extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getWeather}>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city"/>
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country"/>
                    <button type="submit">Get Weather</button>
                </form>
            </div>
        )
    }
}

export default search
