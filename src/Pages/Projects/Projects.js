import React, { Component, Fragment } from 'react'

// Components
import Navbar from '../../Navbar/Navbar'
import ReactLoading from 'react-loading'
import ProjectCard1 from './Components/ProjectsCards/ProjectCard1'
import ProjectCard2 from './Components/ProjectsCards/ProjectCard2'
import ProjectCard3 from './Components/ProjectsCards/ProjectCard3'
import ProjectCard4 from './Components/ProjectsCards/ProjectCard4'
import ProjectCard5 from './Components/ProjectsCards/ProjectCard5'

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
        classUserCard: "",
        textTitle: '',
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
                <div onLoad={this.Loading} className={this.state.classprojectsContainer} style={{ display: this.state.displayApp, backgroundImage: this.state.backgroundImage, backgroundColor: this.state.backgroundContainer}}>
                    <Navbar UpdateComponent={this.UpdateComponent} />
                        <h1 style={{ color: this.state.textTitle }} className="title">Mes Projets</h1>
                        <div className="cards">
                            <ProjectCard1 classUserCard={this.state.classUserCard} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                            <ProjectCard2 classUserCard={this.state.classUserCard} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                            <ProjectCard3 classUserCard={this.state.classUserCard} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                            <ProjectCard4 classUserCard={this.state.classUserCard} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                            <ProjectCard5 classUserCard={this.state.classUserCard} textFlippingCard={this.state.textFlippingCard} backgroundFlippingCardBack={this.state.backgroundFlippingCardBack} />
                        </div>
                </div>
            </Fragment>
        )
    }
}

export default Projects