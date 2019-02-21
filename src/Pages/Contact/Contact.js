import React, { Component, Fragment } from 'react'
import axios from 'axios'

// Components
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
        e.preventDefault(
            this.setState({ name: '', email: '', message: '' }),
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
            <Fragment>
                <Navbar/>
                <Formulaire name={this.state.name} email={this.state.email} message={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </Fragment>
        )
    }
}

export default Contact