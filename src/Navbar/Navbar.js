import React, { Component, Fragment } from 'react'

//css
import './Navbar.css'
import './SliderColorMode.css'

// ico
import sun_ico from './ico/sun.png'
import moon_ico from './ico/moon.png'

class Navbar extends Component {

    handleChange = (event) => {
        if (event.target.checked === true) {
            localStorage.setItem('DarkMode', true)
        }
        if (event.target.checked === false) {
            localStorage.removeItem('DarkMode')
        }

        // Update Component
        this.props.UpdateComponent()
    }

    render () {

        const SliderColorMode = (
            <Fragment>
                <img className="ico-sun" src={sun_ico} alt="sun mode" />
                <label className="switch">
                    <input defaultChecked={localStorage.getItem('DarkMode')} onChange={this.handleChange} type="checkbox"/>
                    <span className="slider"></span>
                </label>
                <img className="ico-moon" src={moon_ico} alt="sun mode" />
            </Fragment>
        )

        // Home
        if(window.location.pathname === "/") {
            return (
                <header>
                    <div className="link">
                        <h1>Portfolio</h1>
                        <div className="switch-color">
                            {SliderColorMode}
                        </div>
                        <a href="/Contact" >Contact</a>
                        <a href="/Projets" >Projets</a>
                        <a style={{backgroundColor: '#A4A4A4'}} href="/" >Home</a>
                        <a style={{backgroundColor: '#A4A4A4'}} className='smart-screen' href="/" >Home</a>
                        <a className='smart-screen' href="/Projets" >Projets</a>
                        <a className='smart-screen' href="/Contact" >Contact</a>
                        <div className="switch-color-smart">
                        {SliderColorMode}
                        </div>
                    </div>
                </header>
            )
        }

        // Projects
        if(window.location.pathname === "/Projets") {
            return (
                <header>
                    <div className="link">
                        <h1>Portfolio</h1>
                        <div className="switch-color">
                            {SliderColorMode}
                        </div>
                        <a href="/Contact" >Contact</a>
                        <a style={{backgroundColor: '#A4A4A4'}} href="/Projets" >Projets</a>
                        <a href="/" >Home</a>
                        <a className='smart-screen' href="/" >Home</a>
                        <a style={{backgroundColor: '#A4A4A4'}} className='smart-screen' href="/Projets" >Projets</a>
                        <a className='smart-screen' href="/Contact" >Contact</a>
                        <div className="switch-color-smart">
                            {SliderColorMode}
                        </div>
                    </div>
                </header>
            )
        }

        
        // Contact
        if(window.location.pathname === "/Contact") {
            return (
                <header>
                    <div className="link">
                        <h1>Portfolio</h1>
                        <div className="switch-color">
                            {SliderColorMode}
                        </div>
                        <a style={{backgroundColor: '#A4A4A4'}} href="/Contact" >Contact</a>
                        <a href="/Projets" >Projets</a>
                        <a href="/" >Home</a>
                        <a className='smart-screen' href="/" >Home</a>
                        <a className='smart-screen' href="/Projets" >Projets</a>
                        <a style={{backgroundColor: '#A4A4A4'}} className='smart-screen' href="/Contact" >Contact</a>
                        <div className="switch-color-smart">
                            {SliderColorMode}
                        </div>
                    </div>
                </header>
            )
        }
    }
}

export default Navbar