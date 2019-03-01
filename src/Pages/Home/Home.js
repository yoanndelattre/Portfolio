import React, { Component, Fragment } from 'react'

// Components
import Navbar from '../../Navbar/Navbar'
import Me from './Components/Me'

// css
import './Home.css'

class Home extends Component {
    render () {
        return (
            <Fragment>
                <Navbar/>
                <div className="home_card">
                    <Me/>
                </div>
            </Fragment>
        )
    }
}

export default Home