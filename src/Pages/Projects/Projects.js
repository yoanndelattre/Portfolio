import React, { Component, Fragment } from 'react'

// Components
import Navbar from '../../Navbar/Navbar'
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
        backgroundImage: `url(${ Projectsbackground })`
    }

    componentDidMount () {
        if (window.innerWidth <= 768) {
            this.setState({ backgroundImage: "none" })
        }
    }

    render () {
        return (
            <div className="projectsContainer" style={{ backgroundImage: this.state.backgroundImage}}>
                <Navbar/>
                    <h1 className="title">Mes Projets</h1>
                    <div className="cards">
                        {ProjectCard1}
                        {ProjectCard2}
                        {ProjectCard3}
                        {ProjectCard4}
                        {ProjectCard5}
                    </div>
            </div>
        )
    }
}

export default Projects