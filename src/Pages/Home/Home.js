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
        backgroundContainer: "",
        
        //load
        displayApp: 'none',
        displayLoading: 'flex',

        //DarkMode
        ColorText: '',
        backgroundMeCard: '',
        backgroundMeCardSmart: '',
        backgroundVersion: '',
        backgroundCard: '',
    }

    componentDidMount () {
        if (window.innerWidth <= 768) {
            this.setState({ backgroundImage: "none" })

            if (localStorage.getItem('DarkMode') === "true") {
                this.setState ({ 
                    backgroundContainer: "rgb(88, 88, 88)"
                })
            }
            
            if (localStorage.getItem('DarkMode') === null) {
                this.setState ({
                    backgroundContainer: "rgb(165, 165, 165)"
                })
            }

        }
        this.UpdateComponent()
    }

    Loading = () => {
        this.setState ({ displayApp: 'block', displayLoading: 'none' })
    }

    UpdateComponent = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            this.setState ({ 
                backgroundMeCard: "rgb(107, 107, 107)", 
                backgroundVersion: "gray", 
                ColorText: 'white', 
                backgroundCard: "rgb(63, 63, 63)" 
            })
        }
        
        if (localStorage.getItem('DarkMode') === null) {
            this.setState ({ 
                backgroundMeCard: "rgb(218, 218, 218)", 
                backgroundVersion: "rgb(218, 218, 218)", 
                ColorText: "black", 
                backgroundCard: "rgb(165, 165, 165)" 
            })
        }

        
        if (window.innerWidth <= 768) {
            if (localStorage.getItem('DarkMode') === "true") {
                this.setState ({ backgroundMeCardSmart: "rgb(107, 107, 107)", backgroundContainer: "rgb(88, 88, 88)" })
            }
            
            if (localStorage.getItem('DarkMode') === null) {
                this.setState ({ backgroundMeCardSmart: "rgb(218, 218, 218)", backgroundContainer: "rgb(165, 165, 165)" })
            }
        }
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
                <div onLoad={this.Loading} className="mainContainer" style={{ display: this.state.displayApp, backgroundImage: this.state.backgroundImage, backgroundColor: this.state.backgroundContainer }}>
                    <Navbar UpdateComponent={this.UpdateComponent} />
                    <span className="version" style={{ background: this.state.backgroundVersion, color: this.state.ColorText }} >v1.0</span>
                    <div className="home_card">
                        <Me ColorText={this.state.ColorText} backgroundMeCard={this.state.backgroundMeCard} backgroundCard={this.state.backgroundCard} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home