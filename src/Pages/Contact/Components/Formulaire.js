import React, { Component } from 'react'

//css
import './Formulaire.css'

export default class Formulaire extends Component {
    render () {
        return (
            <form onSubmit={this.props.handleSubmit} className="form">
                <h2>CONTACTEZ-MOI</h2>
                <p type="Nom:"><input required name="name" onChange={this.props.handleChange} ></input></p>
                <p type="Email:"><input required name="email" onChange={this.props.handleChange} ></input></p>
                <p type="Message:"><input required name="message" onChange={this.props.handleChange} ></input></p>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}
