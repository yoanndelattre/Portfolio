import React, { Component } from 'react'

import Navbar from '../../Navbar/Navbar'
import { Formulaire } from './Components/Formulaire'


class Contact extends Component {
    render () {
        return (
            <div>
                <Navbar/>
                {Formulaire}
            </div>
        )
    }
}

export default Contact