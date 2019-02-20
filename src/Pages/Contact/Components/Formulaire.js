import React, { Component } from 'react'

// Captcha
import ReCAPTCHA from "react-google-recaptcha";

// css
import './Formulaire.css'

export default class Formulaire extends Component {

    state = {
        displaySubmit: 'none',
        displayCapcha: 'inline-block',
        valueSubmit: 'Envoyer',
        fontSizeSubmit: '15px',
        paddingSubmit: '8px 12px',
        borderSubmit: '2px solid rgb(77, 92, 102)',
        borderForm: 'none',
        widthForm: '370px',
        heightForm: '430px'
    }

    onChange = () => {
        setTimeout(() => {
            this.setState({ displaySubmit: 'block' })
            this.setState({ displayCapcha: 'none' }) 
        }, 1000);
    }

    handleClick = () => {
        this.setState({ valueSubmit: '✓', fontSizeSubmit: '35px', paddingSubmit: '0 6px', borderSubmit: '2px solid green', borderForm: '3px solid green', widthForm: '367px', heightForm: '427px' })
        setTimeout(() => {
            window.location.reload();
        }, 7500);
    }

    render () {
        return (
            <form 
                onSubmit={this.props.handleSubmit}
                style={{ border: this.state.borderForm, width: this.state.widthForm, height: this.state.heightForm }} 
                className="form" 
                onKeyPress={event => {
                    if (event.which === 13 /* Enter */) {
                        event.preventDefault();
                    }
                }}>
                <h2>CONTACTEZ-MOI</h2>
                <p type="Nom:"><input value={this.props.name} required name="name" onChange={this.props.handleChange} ></input></p>
                <p type="Email:"><input value={this.props.email} required name="email" onChange={this.props.handleChange} ></input></p>
                <p type="Message:"><input value={this.props.message} required name="message" onChange={this.props.handleChange} ></input></p>
                <input style={{ display: this.state.displaySubmit, fontSize: this.state.fontSizeSubmit, padding: this.state.paddingSubmit, border: this.state.borderSubmit }} onClick={this.handleClick} type="submit" value={this.state.valueSubmit} />
                <ReCAPTCHA theme="dark" style={{ display: this.state.displayCapcha }} onChange={this.onChange} sitekey="6LcSSJIUAAAAAL5q0Z-IT9INdd5dEjq_XgVGTGgG"/>
            </form>
        )
    }
}
