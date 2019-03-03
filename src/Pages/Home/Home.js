import React, { Component } from 'react'

// Components
import Navbar from '../../Navbar/Navbar'
import Me from './Components/Me'

// css
import './Home.css'

// background
import Mainbackground from './img/Mainbackground.jpg'

class Home extends Component {

    state = {
        backgroundImage: `url(${ Mainbackground })`,
        backgroundColor: 'none'
    }

    componentDidMount () {
        if (window.innerWidth <= 768) {
            this.setState({ backgroundImage: "none", backgroundColor: 'rgb(107, 107, 107)' })
        }
    }

    render () {
        return (
            <div className="mainContainer" style={{ backgroundImage: this.state.backgroundImage, backgroundColor: this.state.backgroundColor }}>
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