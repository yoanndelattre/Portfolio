import React, { Component, Fragment } from 'react'

//css
import './Navbar.css'
import './SliderColorMode.css'

// ico
import sun_ico from './ico/sun.png'
import moon_ico from './ico/moon.png'

class Navbar extends Component {

    state = {
        ColorText: '',
        backgroundNavBar: '',
        backgroundNavBarSmart: '',
        ColorTextFocus: '',
        backgroundTextFocusHome: '',
        backgroundTextFocusProjects: '',
        backgroundTextFocusContact: '',
        backgroundTextHoverHome: '',
        backgroundTextHoverProjects: '',
        backgroundTextHoverContact: '',

    }

    componentDidMount () {
        this.UpdateComponent()
    }

    handleChange = (event) => {
        if (event.target.checked === true) {
            localStorage.setItem('DarkMode', true)
        }
        if (event.target.checked === false) {
            localStorage.removeItem('DarkMode')
        }

        // Update Component
        this.props.UpdateComponent()
        this.UpdateComponent()
    }

    UpdateComponent = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            this.setState ({ 
                backgroundNavBar: "#333", 
                ColorText: 'white', 
                backgroundNavBarSmart: "rgb(165, 165, 165)", 
                ColorTextFocus: "black", 
                backgroundTextFocusHome: "rgb(218, 218, 218)", 
                backgroundTextFocusProjects: "rgb(218, 218, 218)", 
                backgroundTextFocusContact: "rgb(218, 218, 218)" 
            })
        }
        
        if (localStorage.getItem('DarkMode') === null) {
            this.setState ({ 
                backgroundNavBar: "rgb(218, 218, 218)", 
                ColorText: 'black', 
                backgroundNavBarSmart: "rgb(218, 218, 218)", 
                ColorTextFocus: "white", 
                backgroundTextFocusHome: "rgb(51, 51, 51)", 
                backgroundTextFocusProjects: "rgb(51, 51, 51)", 
                backgroundTextFocusContact: "rgb(51, 51, 51)" 
            })
        }
    }

    OnMouseEnterHome = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            this.setState ({ backgroundTextHoverHome: "rgb(165, 165, 165)" })
        }

        if (localStorage.getItem('DarkMode') === null) {
            this.setState ({ backgroundTextHoverHome: "rgb(107, 107, 107)" })
        }
    }

    OnMouseEnterProjects = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            this.setState ({ backgroundTextHoverProjects: "rgb(165, 165, 165)" })
        }

        if (localStorage.getItem('DarkMode') === null) {
            this.setState ({ backgroundTextHoverProjects: "rgb(107, 107, 107)" })
        }
    }

    OnMouseEnterContact = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            this.setState ({ backgroundTextHoverContact: "rgb(165, 165, 165)" })
        }

        if (localStorage.getItem('DarkMode') === null) {
            this.setState ({ backgroundTextHoverContact: "rgb(107, 107, 107)" })
        }
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
                    <div style={{ backgroundColor: this.state.backgroundNavBar }} className="link">
                        <h1 style={{ color: this.state.ColorText }}>Portfolio</h1>
                        <div className="switch-color">
                            {SliderColorMode}
                        </div>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverContact }} onMouseEnter={this.OnMouseEnterContact} onMouseLeave={() => {this.setState ({ backgroundTextHoverContact: "" })}} href="/Contact" >Contact</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverProjects }} onMouseEnter={this.OnMouseEnterProjects} onMouseLeave={() => {this.setState ({ backgroundTextHoverProjects: "" })}} href="/Projets" >Projets</a>
                        <a style={{ color: this.state.ColorTextFocus, background: this.state.backgroundTextFocusHome}} href="/" >Home</a>
                        <a style={{ color: this.state.ColorTextFocus, background: this.state.backgroundTextFocusHome}} className='smart-screen' href="/" >Home</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverProjects }} onMouseEnter={this.OnMouseEnterProjects} onMouseLeave={() => {this.setState ({ backgroundTextHoverProjects: "" })}} className='smart-screen' href="/Projets" >Projets</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverContact }} onMouseEnter={this.OnMouseEnterContact} onMouseLeave={() => {this.setState ({ backgroundTextHoverContact: "" })}} className='smart-screen' href="/Contact" >Contact</a>
                        <div style={{ background: this.state.backgroundNavBarSmart }} className="switch-color-smart">
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
                    <div style={{ backgroundColor: this.state.backgroundNavBar }} className="link">
                        <h1 style={{ color: this.state.ColorText }}>Portfolio</h1>
                        <div className="switch-color">
                            {SliderColorMode}
                        </div>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverContact }} onMouseEnter={this.OnMouseEnterContact} onMouseLeave={() => {this.setState ({ backgroundTextHoverContact: "" })}} href="/Contact" >Contact</a>
                        <a style={{ color: this.state.ColorTextFocus, background: this.state.backgroundTextFocusProjects}} href="/Projets" >Projets</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverHome }} onMouseEnter={this.OnMouseEnterHome} onMouseLeave={() => {this.setState ({ backgroundTextHoverHome: "" })}} href="/" >Home</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverHome }} onMouseEnter={this.OnMouseEnterHome} onMouseLeave={() => {this.setState ({ backgroundTextHoverHome: "" })}} className='smart-screen' href="/" >Home</a>
                        <a style={{ color: this.state.ColorTextFocus, background: this.state.backgroundTextFocusProjects }} className='smart-screen' href="/Projets" >Projets</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverContact }} onMouseEnter={this.OnMouseEnterContact} onMouseLeave={() => {this.setState ({ backgroundTextHoverContact: "" })}} className='smart-screen' href="/Contact" >Contact</a>
                        <div style={{ background: this.state.backgroundNavBarSmart }} className="switch-color-smart">
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
                    <div style={{ backgroundColor: this.state.backgroundNavBar }} className="link">
                        <h1 style={{ color: this.state.ColorText }}>Portfolio</h1>
                        <div className="switch-color">
                            {SliderColorMode}
                        </div>
                        <a style={{ color: this.state.ColorTextFocus, background: this.state.backgroundTextFocusContact }} href="/Contact" >Contact</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverProjects }} onMouseEnter={this.OnMouseEnterProjects} onMouseLeave={() => {this.setState ({ backgroundTextHoverProjects: "" })}} href="/Projets" >Projets</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverHome }} onMouseEnter={this.OnMouseEnterHome} onMouseLeave={() => {this.setState ({ backgroundTextHoverHome: "" })}} href="/" >Home</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverHome }} onMouseEnter={this.OnMouseEnterHome} onMouseLeave={() => {this.setState ({ backgroundTextHoverHome: "" })}} className='smart-screen' href="/" >Home</a>
                        <a style={{ color: this.state.ColorText, background: this.state.backgroundTextHoverProjects }} onMouseEnter={this.OnMouseEnterProjects} onMouseLeave={() => {this.setState ({ backgroundTextHoverProjects: "" })}} className='smart-screen' href="/Projets" >Projets</a>
                        <a style={{ color: this.state.ColorTextFocus, background: this.state.backgroundTextFocusContact }} className='smart-screen' href="/Contact" >Contact</a>
                        <div style={{ background: this.state.backgroundNavBarSmart }} className="switch-color-smart">
                            {SliderColorMode}
                        </div>
                    </div>
                </header>
            )
        }
    }
}

export default Navbar