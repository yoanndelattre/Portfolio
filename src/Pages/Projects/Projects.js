import React, { Component } from 'react'

import Navbar from '../../Navbar/Navbar'

class Projects extends Component {
    render () {
        return (
            <div>
                {Navbar}
                <div className="main">
                    <h1>Projects</h1>
                </div>
            </div>
        )
    }
}

export default Projects