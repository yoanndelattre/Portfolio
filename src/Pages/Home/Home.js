import React, { Component } from 'react'

import Navbar from '../../Navbar/Navbar'

class Home extends Component {
    render () {
        return (
            <div>
                {Navbar}
                <div className="main">
                    <h1>Home</h1>
                </div>
            </div>
        )
    }
}

export default Home