import React, { Component, Fragment } from 'react'

// css
import './Formulaire.css'

export default class Formulaire extends Component {

    ContactMe () {
        if(localStorage.getItem('language') === 'FR') {
            return('Contactez-Moi')
        }
        else {
            return('Contact Me')
        }
    }

    NameUser () {
        if(localStorage.getItem('language') === 'FR') {
            return('Nom et Prénom :')
        }
        else {
            return('Name :')
        }
    }

    MessageUser () {
        if(localStorage.getItem('language') === 'FR') {
            return('Votre Message :')
        }
        else {
            return('Your Message :')
        }
    }

    WidthborderBottom () {
        if(localStorage.getItem('language') === 'FR') {
            return('180px')
        }
        else {
            return('140px')
        }
    }

    render () {
        return (
            <Fragment>
                <form 
                    onSubmit={this.props.handleSubmit}
                    style={{ border: this.props.borderForm, width: this.props.widthForm, height: this.props.heightForm, background: this.props.backgroundInput }} 
                    className="form" 
                    onKeyPress={event => {
                        if (event.which === 13 /* Enter */) {
                            event.preventDefault();
                        }
                    }}>
                    
                    <h1 style={{ color: this.props.ColorText, borderBottom: this.props.BorderH2, width: this.WidthborderBottom() }}>
                        {this.ContactMe()}
                    </h1>
                    
                    <p className={this.props.classPlaceholderForm} type={this.NameUser()}>
                        <input style={{ color: this.props.ColorText }} type="text" value={this.props.name} required name="name" onChange={this.props.handleChange} />
                    </p>
                    
                    <p className={this.props.classPlaceholderForm} type="Email :">
                        <input style={{ color: this.props.ColorText }} type="email" value={this.props.email} required name="email" onChange={this.props.handleChange} />
                    </p>
                    
                    <p className={this.props.classPlaceholderForm} type={this.MessageUser()}>
                        <input style={{ color: this.props.ColorText }} type="text" value={this.props.message} required name="message" onChange={this.props.handleChange} />
                    </p>
                    
                    <input 
                        style={{ display: this.props.displaySubmit, fontSize: this.props.fontSizeSubmit, padding: this.props.paddingSubmit, border: this.props.borderSubmit, color: this.props.ColorText }} 
                        type="submit" 
                        value={this.props.valueSubmit} 
                    />
                    
                    <div className="Capcha">
                        <this.props.ThemeCapcha/>
                    </div>
                </form>
            </Fragment>
        )
    }
}