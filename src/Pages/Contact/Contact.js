import React, { Component } from 'react'
import axios from 'axios'

import Navbar from '../../Navbar/Navbar'
import Formulaire from './Components/Formulaire'


class Contact extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render () {
        return (
            <div>
                <Navbar/>
                <Formulaire handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Contact