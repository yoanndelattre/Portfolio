import React, { Component } from 'react'

// Components
import Navbar from '../../Navbar/Navbar'
import Me from './Components/Me'

// css
import './Home.css'

// background
import Mainbackground from './img/Mainbackground.jpg'

class Home extends Component {
    render () {
        return (
            <div className="mainContainer" style={{ backgroundImage: `url(${ Mainbackground })` }}>
                <Navbar/>
                <span className="version">v1.0</span>
                <div className="home_card">
                    <Me/>
                </div>
            </div>
        )
    }
}

export default Home