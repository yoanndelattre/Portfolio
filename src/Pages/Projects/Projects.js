import React, { Component, Fragment } from 'react'

// Components
import Navbar from '../../Navbar/Navbar'
import { ProjectCard1, ProjectCard2, ProjectCard3, ProjectCard4, ProjectCard5 } from './Components/ProjectCard'

// css
import './Projects.css'

class Projects extends Component {
    render () {
        return (
            <Fragment>
                <Navbar/>
                    <h1 className="title">Mes Projects</h1>
                    <div className="cards">
                        {ProjectCard1}
                        {ProjectCard2}
                        {ProjectCard3}
                        {ProjectCard4}
                        {ProjectCard5}
                    </div>
            </Fragment>
        )
    }
}

export default Projects