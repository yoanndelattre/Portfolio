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
            message: '',
            borderForm: 'none'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault(
            this.setState({ name: '', email: '', message: '', borderForm: '3px solid green' }),
        )

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
        console.log(form)
    }

    render () {
        return (
            <div>
                <Navbar/>
                <Formulaire borderForm={this.state.borderForm} name={this.state.name} email={this.state.email} message={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Contact