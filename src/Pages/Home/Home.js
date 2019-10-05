import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import axios from 'axios'
import {Helmet} from 'react-helmet'

// Components
import Navbar from '../../Navbar/Navbar'
import Me from './Components/Me'
import {ReportProblem} from '../../Report-Problem/Report-Problem'
import ShareButton from '../../Share-Button/ShareButton'
import CookieAlert from '../../Cookie-Alert/Cookie-Alert'

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

        // Releases number Repo GitHub
        ReleasesRepo: '',
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

        // Releases number Repo GitHub
        axios.get('https://api.github.com/repos/yoanndelattre/Portfolio/releases/latest')
            .then(response => this.setState({ ReleasesRepo: response.data.tag_name}))
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

    LanguageHtmlTag () {
        if(localStorage.getItem('language') === 'FR') {
            return('fr')
        }
        else {
            return('en')
        }
    }

    render () {
        return (
            <div>
                <Helmet htmlAttributes={{ lang : this.LanguageHtmlTag() }}/>
                <CookieAlert/>
                <div className="loadingpage" style={{ display: this.state.displayLoading }}>
                    <ReactLoading
                        type="bars"
                        color="#fff"
                        width={'10%'}
                    />
                </div>
                <div onLoad={this.Loading} className="mainContainer" style={{ display: this.state.displayApp, backgroundImage: this.state.backgroundImage, backgroundColor: this.state.backgroundContainer }}>
                    <Navbar UpdateComponent={this.UpdateComponent} />
                    <span className="version" style={{ background: this.state.backgroundVersion, color: this.state.ColorText }}>
                        <a className="version-link" href="https://github.com/yoanndelattre/Portfolio/releases" target="blank" style={{ color: this.state.ColorText }}>{this.state.ReleasesRepo}</a>
                    </span>
                    <div className="home_card">
                        <Me 
                            ColorText={this.state.ColorText} 
                            backgroundMeCard={this.state.backgroundMeCard} 
                            backgroundCard={this.state.backgroundCard} 
                        />
                    </div>
                    <ShareButton display='flex'/>
                    {ReportProblem}
                </div>
            </div>
        )
    }
}

export default Home