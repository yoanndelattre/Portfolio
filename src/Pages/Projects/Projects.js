import React, { Component, Fragment } from 'react'

// Components
import Navbar from '../../Navbar/Navbar'
import ReactLoading from 'react-loading'
import { ProjectCard1 } from './Components/ProjectsCards/ProjectCard1'
import { ProjectCard2 } from './Components/ProjectsCards/ProjectCard2'
import { ProjectCard3 } from './Components/ProjectsCards/ProjectCard3'
import { ProjectCard4 } from './Components/ProjectsCards/ProjectCard4'
import { ProjectCard5 } from './Components/ProjectsCards/ProjectCard5'

// css
import './Projects.css'

// background
import Projectsbackground from './img/Projectsbackground.jpg'

class Projects extends Component {

    state = {
        backgroundImage: `url(${ Projectsbackground })`,

        //load
        displayApp: 'none',
        displayLoading: 'flex',
    }

    componentDidMount () {
        if (window.innerWidth <= 768) {
            this.setState({ backgroundImage: "none" })
        }
        this.UpdateComponent()
    }

    Loading = () => {
        this.setState ({ displayApp: 'block', displayLoading: 'none' })
    }

    UpdateComponent = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            console.log('true')
        }
        
        if (localStorage.getItem('DarkMode') === null) {
            console.log('false')
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
                <div onLoad={this.Loading} className="projectsContainer" style={{ display: this.state.displayApp, backgroundImage: this.state.backgroundImage}}>
                    <Navbar UpdateComponent={this.UpdateComponent} />
                        <h1 className="title">Mes Projets</h1>
                        <div className="cards">
                            {ProjectCard1}
                            {ProjectCard2}
                            {ProjectCard3}
                            {ProjectCard4}
                            {ProjectCard5}
                        </div>
                </div>
            </Fragment>
        )
    }
}

export default Projects