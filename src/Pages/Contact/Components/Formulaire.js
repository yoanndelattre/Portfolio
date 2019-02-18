import React, { Component } from 'react'

// Captcha
import ReCAPTCHA from "react-google-recaptcha";

//css
import './Formulaire.css'

export default class Formulaire extends Component {

    state = {
        displaySubmit: 'none',
        displayCapcha: 'inline-block'
    }

    onChange = () => {
        setTimeout(() => {
            this.setState({ displaySubmit: 'block' })
            this.setState({ displayCapcha: 'none' }) 
        }, 1000);
    }

    render () {
        return (
            <form 
                onSubmit={this.props.handleSubmit} 
                className="form" 
                onKeyPress={event => {
                    if (event.which === 13 /* Enter */) {
                        event.preventDefault();
                    }
                }}>
                <h2>CONTACTEZ-MOI</h2>
                <p type="Nom:"><input required name="name" onChange={this.props.handleChange} ></input></p>
                <p type="Email:"><input required name="email" onChange={this.props.handleChange} ></input></p>
                <p type="Message:"><input required name="message" onChange={this.props.handleChange} ></input></p>
                <input style={{ display: this.state.displaySubmit }} type="submit" value="Envoyer" />
                <ReCAPTCHA style={{ display: this.state.displayCapcha }} onChange={this.onChange} sitekey="6LcSSJIUAAAAAL5q0Z-IT9INdd5dEjq_XgVGTGgG"/>
            </form>
        )
    }
}
