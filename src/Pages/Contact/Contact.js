import React, { Component } from 'react'

import Navbar from '../../Navbar/Navbar'

class Contact extends Component {
    render () {
        console.log(this.props.location.pathname)
        return (
            <div>
                {Navbar}
                <div className="main">
                    <h1>Contact</h1>
                </div>
            </div>
        )
    }
}

export default Contact