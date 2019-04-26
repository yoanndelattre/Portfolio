import React, { Component, Fragment } from 'react'

// css
import './Formulaire.css'

export default class Formulaire extends Component {

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
                    
                    <h1 style={{ color: this.props.ColorText, borderBottom: this.props.BorderH2 }}>
                        CONTACTEZ-MOI
                    </h1>
                    
                    <p className={this.props.classPlaceholderForm} type="Nom:">
                        <input style={{ color: this.props.ColorText }} type="text" value={this.props.name} required name="name" onChange={this.props.handleChange} />
                    </p>
                    
                    <p className={this.props.classPlaceholderForm} type="Email:">
                        <input style={{ color: this.props.ColorText }} type="email" value={this.props.email} required name="email" onChange={this.props.handleChange} />
                    </p>
                    
                    <p className={this.props.classPlaceholderForm} type="Message:">
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
                    <div className="help-mailsend">
                        <span style={{ color: this.props.ColorText, background: this.props.backgroundInput }}>▲</span>
                        <div></div>
                        <p style={{ color: this.props.ColorText, background: this.props.backgroundInput }}>Un mail de confirmation vous a été envoyé. Si vous ne le trouvez pas, vérifier dans les courriers indésirables.</p>
                    </div>
                </form>
            </Fragment>
        )
    }
}
