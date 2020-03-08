import React, { Component, Fragment } from 'react'
import ReactLoading from 'react-loading'
import {Helmet} from 'react-helmet'

// Components
import Navbar from '../../Navbar/Navbar'
import ProjectCard1 from './Components/ProjectsCards/ProjectCard1'
import ProjectCard2 from './Components/ProjectsCards/ProjectCard2'
import ProjectCard3 from './Components/ProjectsCards/ProjectCard3'
import ProjectCard4 from './Components/ProjectsCards/ProjectCard4'
import {ReportProblem} from '../../Report-Problem/Report-Problem'
import ShareButton from '../../Share-Button/ShareButton'
import CookieAlert from '../../Cookie-Alert/Cookie-Alert'

// css
import './Projects.css'

// background
import Projectsbackground from './img/Projectsbackground.jpg'

class Projects extends Component {

    state = {
        backgroundImage: `url(${ Projectsbackground })`,
        backgroundContainer: "",
        classprojectsContainer: "",

        //load
        displayApp: 'none',
        displayLoading: 'flex',

        //DarkMode
        textFlippingCard: "",
        backgroundFlippingCardBack: "",
        textTitle: '',

        //DisplayShareButton
        displayShareButton: 'flex',
    }

    componentDidMount () {
        if (window.innerWidth <= 768) {
            this.setState({ 
                backgroundImage: "none",
                classprojectsContainer: "projectsContainerSmart" 
            })

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

            this.setState ({ displayShareButton: 'none' })

        }
        else {
            this.setState({ 
                classprojectsContainer: "projectsContainer" 
            }) 
        }

        this.UpdateComponent()
    }

    Loading = () => {
        this.setState ({ displayApp: 'block', displayLoading: 'none' })
    }

    UpdateComponent = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            this.setState ({ 
                textFlippingCard: "white",
                backgroundFlippingCardBack: "rgb(51, 51, 51)",
                classUserCard: "classUserCardDark",
                textTitle: "black",
            })
        }
        
        if (localStorage.getItem('DarkMode') === null) {
            this.setState ({
                textFlippingCard: "black",
                backgroundFlippingCardBack: "rgb(218, 218, 218)",
                classUserCard: "classUserCardWhite",
                textTitle: "white",
            })
        }

        if (window.innerWidth <= 768) {

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
    }

    LanguageHtmlTag () {
        if(localStorage.getItem('language') === 'FR') {
            return('fr')
        }
        else {
            return('en')
        }
    }

    ProjectsHtmlName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Projets')
        }
        else {
            return('Projects')
        }
    }

    MyProjectsName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Mes Projets')
        }
        else {
            return('My Projects')
        }
    }

    DetailsName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Détails:')
        }
        else {
            return('Details:')
        }
    }

    render () {
        return (
            <Fragment>
                <Helmet>
                    <title>{this.ProjectsHtmlName()} • Yoann Delattre | Portfolio</title>
                </Helmet>
                <Helmet htmlAttributes={{ lang : this.LanguageHtmlTag() }}/>
                <CookieAlert/>
                <div className="loadingpage" style={{ display: this.state.displayLoading }}>
                    <ReactLoading
                        type="bars"
                        color="#fff"
                        width={'10%'}
                    />
                </div>
                <div>
                    <div onLoad={this.Loading} className={this.state.classprojectsContainer} style={{ display: this.state.displayApp, backgroundImage: this.state.backgroundImage, backgroundColor: this.state.backgroundContainer}}>
                        <Navbar UpdateComponent={this.UpdateComponent} />
                        <h1 style={{ color: this.state.textTitle }} className="title">
                            {this.MyProjectsName()}
                        </h1>
                        <div className="cards">
                            <ProjectCard1 DetailsName={this.DetailsName()} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                            <ProjectCard2 DetailsName={this.DetailsName()} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                            <ProjectCard3 DetailsName={this.DetailsName()} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                            <ProjectCard4 DetailsName={this.DetailsName()} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                        </div>
                        <ShareButton display={this.state.displayShareButton}/>
                        {ReportProblem}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Projects