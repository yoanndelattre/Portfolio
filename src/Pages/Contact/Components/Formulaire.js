import React, {Component, Fragment} from 'react';
import ReactLoading from 'react-loading';
import {colorText, borderH2, backgroundInput, classPlaceholderForm} from './assets/style';

// css
import './Formulaire.css';

export default class Formulaire extends Component {
  contactMe() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Contactez-Moi');
    } else {
      return ('Contact Me');
    }
  }

  nameUser() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Nom et Prénom :');
    } else {
      return ('Name :');
    }
  }

  messageUser() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Votre Message :');
    } else {
      return ('Your Message :');
    }
  }

  widthborderBottom() {
    if (localStorage.getItem('language') === 'FR') {
      return ('180px');
    } else {
      return ('140px');
    }
  }

  loadingSubmit() {
    if (this.props.loadingSubmit === true) {
      return (<ReactLoading type="spin" color="#000000" width={'15%'} className="loadingSubmit" />);
    } else {
      return (<input style={{display: this.props.displaySubmit, fontSize: this.props.fontSizeSubmit, padding: this.props.paddingSubmit, border: this.props.borderSubmit, color: colorText()}} type="submit" value={this.props.valueSubmit} />);
    }
  }

  render() {
    return (
      <Fragment>
        <form
          onSubmit={this.props.handleSubmit}
          style={{
            border: this.props.borderForm,
            width: this.props.widthForm,
            height: this.props.heightForm,
            background: backgroundInput(),
          }}
          className="form"
          onKeyPress={(event) => {
            if (event.which === 13 /* Enter */) {
              event.preventDefault();
            }
          }}>

          <h1
            style={{
              color: colorText(),
              borderBottom: borderH2(),
              width: this.widthborderBottom(),
            }}>
            {this.contactMe()}
          </h1>

          <p
            className={classPlaceholderForm()}
            type={this.nameUser()}>
            <input style={{color: colorText()}} type="text" value={this.props.name} required name="name" onChange={this.props.handleChange} />
          </p>

          <p
            className={classPlaceholderForm()}
            type="Email :">
            <input style={{color: colorText()}} type="email" value={this.props.email} required name="email" onChange={this.props.handleChange} />
          </p>

          <p
            className={classPlaceholderForm()}
            type={this.messageUser()}>
            <input style={{color: colorText()}} type="text" value={this.props.message} required name="message" onChange={this.props.handleChange} />
          </p>

          {this.loadingSubmit()}

          <div className="Capcha">
            <this.props.ThemeCapcha/>
          </div>
        </form>
      </Fragment>
    );
  }
}
