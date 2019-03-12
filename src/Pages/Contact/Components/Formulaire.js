import React, { Component } from 'react'

// css
import './Formulaire.css'

export default class Formulaire extends Component {
    render () {
        return (
            <form 
                onSubmit={this.props.handleSubmit}
                style={{ border: this.props.borderForm, width: this.props.widthForm, height: this.props.heightForm, background: this.props.backgroundForm }} 
                className="form" 
                onKeyPress={event => {
                    if (event.which === 13 /* Enter */) {
                        event.preventDefault();
                    }
                }}>
                <h2 style={{ color: this.props.ColorText, borderBottom: this.props.BorderH2 }}>CONTACTEZ-MOI</h2>
                <p className={this.props.classPlaceholderForm} type="Nom:"><input style={{ color: this.props.ColorText }} type="text" value={this.props.name} required name="name" onChange={this.props.handleChange} ></input></p>
                <p className={this.props.classPlaceholderForm} type="Email:"><input style={{ color: this.props.ColorText }} type="email" value={this.props.email} required name="email" onChange={this.props.handleChange} ></input></p>
                <p className={this.props.classPlaceholderForm} type="Message:"><input style={{ color: this.props.ColorText }} type="text" value={this.props.message} required name="message" onChange={this.props.handleChange} ></input></p>
                <input style={{ display: this.props.displaySubmit, fontSize: this.props.fontSizeSubmit, padding: this.props.paddingSubmit, border: this.props.borderSubmit }} type="submit" value={this.props.valueSubmit} />
                <div className="Capcha">
                    <this.props.ThemeCapcha/>
                </div>
            </form>
        )
    }
}
