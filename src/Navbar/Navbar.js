import React, { Component } from 'react'
import SliderColorMode from './Components/SliderColorMode'

//css
import './Navbar.css'

class Navbar extends Component {

    render () {

        // Home
        if(window.location.pathname === "/") {
            return (
                <header>
                    <div className="link">
                        <h1>Portfolio</h1>
                        <div className="switch-color">
                            <SliderColorMode/>
                        </div>
                        <a href="/Contact" >Contact</a>
                        <a href="/Projets" >Projets</a>
                        <a style={{backgroundColor: '#A4A4A4'}} href="/" >Home</a>
                        <a style={{backgroundColor: '#A4A4A4'}} className='smart-screen' href="/" >Home</a>
                        <a className='smart-screen' href="/Projets" >Projets</a>
                        <a className='smart-screen' href="/Contact" >Contact</a>
                        <div className="switch-color-smart">
                            <SliderColorMode/>
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
                            <SliderColorMode/>
                        </div>
                        <a href="/Contact" >Contact</a>
                        <a style={{backgroundColor: '#A4A4A4'}} href="/Projets" >Projets</a>
                        <a href="/" >Home</a>
                        <a className='smart-screen' href="/" >Home</a>
                        <a style={{backgroundColor: '#A4A4A4'}} className='smart-screen' href="/Projets" >Projets</a>
                        <a className='smart-screen' href="/Contact" >Contact</a>
                        <div className="switch-color-smart">
                            <SliderColorMode/>
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
                            <SliderColorMode/>
                        </div>
                        <a style={{backgroundColor: '#A4A4A4'}} href="/Contact" >Contact</a>
                        <a href="/Projets" >Projets</a>
                        <a href="/" >Home</a>
                        <a className='smart-screen' href="/" >Home</a>
                        <a className='smart-screen' href="/Projets" >Projets</a>
                        <a style={{backgroundColor: '#A4A4A4'}} className='smart-screen' href="/Contact" >Contact</a>
                        <div className="switch-color-smart">
                            <SliderColorMode/>
                        </div>
                    </div>
                </header>
            )
        }
    }
}

export default Navbar