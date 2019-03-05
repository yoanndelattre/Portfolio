import React, { Component, Fragment } from 'react'

// Components
import Navbar from '../../Navbar/Navbar'
import Me from './Components/Me'
import ReactLoading from 'react-loading'

// css
import './Home.css'

// background
import Mainbackground from './img/Mainbackground.jpg'

class Home extends Component {

    state = {
        backgroundImage: `url(${ Mainbackground })`,
        backgroundColor: 'none',
        
        //load
        displayApp: 'none',
        displayLoading: 'flex',
    }

    componentDidMount () {
        if (window.innerWidth <= 768) {
            this.setState({ backgroundImage: "none", backgroundColor: 'rgb(107, 107, 107)' })
        }
    }

    Loading = () => {
        this.setState ({ displayApp: 'block', displayLoading: 'none' })
    }

    render () {
        return (
            <Fragment>
                <div className="loadingpage" style={{ display: this.state.displayLoading }}>
                    <ReactLoading
                        type="bars"
                        color="#fff"
                        width={'10%'}
                    />
                </div>
                <div onLoad={this.Loading} className="mainContainer" style={{ display: this.state.displayApp, backgroundImage: this.state.backgroundImage, backgroundColor: this.state.backgroundColor }}>
                    <Navbar/>
                    <span className="version">v1.0</span>
                    <div className="home_card">
                        <Me/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home