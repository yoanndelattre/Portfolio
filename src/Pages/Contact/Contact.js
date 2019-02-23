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
            message: '',
            valueSubmit: 'Envoyer',
            fontSizeSubmit: '15px',
            paddingSubmit: '8px 12px',
            borderSubmit: '2px solid rgb(77, 92, 102)',
            borderForm: 'none',
            widthForm: '370px',
            heightForm: '430px'
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
            this.setState({ valueSubmit: '✓', fontSizeSubmit: '35px', paddingSubmit: '0 6px', borderSubmit: '2px solid green', borderForm: '3px solid green', widthForm: '367px', heightForm: '427px' }),
            setTimeout(() => {
                window.location.reload();
            }, 7500)
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
                <Formulaire heightForm={this.state.heightForm} widthForm={this.state.widthForm} borderForm={this.state.borderForm} borderSubmit={this.state.borderSubmit} paddingSubmit={this.state.paddingSubmit} fontSizeSubmit={this.state.fontSizeSubmit} valueSubmit={this.state.valueSubmit} name={this.state.name} email={this.state.email} message={this.state.message} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </Fragment>
        )
    }
}

export default Contact