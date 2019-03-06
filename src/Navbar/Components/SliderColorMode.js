import React, { Component, Fragment } from 'react'

import './SliderColorMode.css'

// ico
import sun_ico from './ico/sun.png'
import moon_ico from './ico/moon.png'

class SliderColorMode extends Component {

    handleChange = (event) => {
        if (event.target.checked === true) {
            localStorage.setItem('DarkMode', true)
        }
        if (event.target.checked === false) {
            localStorage.removeItem('DarkMode')
        }
    }

    render () {
        return (
            <Fragment>
                <img className="ico-sun" src={sun_ico} alt="sun mode" />
                <label className="switch">
                    <input defaultChecked={localStorage.getItem('DarkMode')} onChange={this.handleChange} type="checkbox"/>
                    <span className="slider"></span>
                </label>
                <img className="ico-moon" src={moon_ico} alt="sun mode" />
            </Fragment>
        )

    }
}

export default SliderColorMode