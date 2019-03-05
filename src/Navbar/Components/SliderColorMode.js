import React, { Component, Fragment } from 'react'

import './SliderColorMode.css'

// ico
import sun_ico from './ico/sun.png'
import moon_ico from './ico/moon.png'

class SliderColorMode extends Component {

    state = {
        DarkMode: '',
    }

    componentDidMount () {
        if (localStorage.getItem('DarkModeStorage')) {
          this.setState({ DarkMode: localStorage.getItem('DarkModeStorage') })
        }
        
        else  {
            this.setState ({ DarkMode: false })
        }
    }

    componentDidUpdate () {
        localStorage.setItem('DarkModeStorage', this.state.DarkMode)
    }
    
    handleChange = (event) => {
        this.setState({ DarkMode: event.target.checked })
    }


    render () {
        return (
            <Fragment>
                <img className="ico-sun" src={sun_ico} alt="sun mode" />
                <label className="switch">
                    <input defaultChecked={this.state.DarkMode} onChange={this.handleChange} type="checkbox"/>
                    <span className="slider"></span>
                </label>
                <img className="ico-moon" src={moon_ico} alt="sun mode" />
            </Fragment>
        )

    }
}

export default SliderColorMode