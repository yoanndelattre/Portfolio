import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Reaptcha from 'reaptcha';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import Noty from 'noty';
import ReactLoading from 'react-loading';

// Components
import Navbar from '../../Navbar/Navbar';
import Formulaire from './Components/Formulaire';
import {ReportProblem} from '../../Report-Problem/Report-Problem';
import ShareButton from '../../Share-Button/ShareButton';
import CookieAlert from '../../Cookie-Alert/Cookie-Alert';
import {flagsSelecting} from '../../Language/flags-selector';
import {backgroundContainer, displayShareButton} from './assets/style';
import {languageHtmlTag} from './assets/language';

// css
import '../../../node_modules/noty/lib/noty.css';
import '../../../node_modules/noty/lib/themes/bootstrap-v4.css';
import './Contact.css';
import './loading.css';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      verifyCaptcha: '',
      name: '',
      email: '',
      message: '',
      valueSubmit: '✉',
      loadingSubmit: false,
      fontSizeSubmit: '15px',
      paddingSubmit: '8px 12px',
      borderSubmit: '',
      borderForm: 'none',
      widthForm: '370px',
      heightForm: '430px',

      // load
      displayApp: 'none',
      displayLoading: 'flex',

      // display Captcha
      displaySubmit: 'none',
      displayCapcha: 'inline-block',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    handleSubmit(e) {
      if (this.state.verifyCaptcha === 'true') {
        e.preventDefault(
            this.setState({
              loadingSubmit: true,
            }),
            this.sendMessage(),
        );
      }
    }

    sendMessage = () => {
      const {name, email, message} = this.state;
      const languageUser = flagsSelecting();

      axios.post(process.env.REACT_APP_URL_POST, {
        name,
        email,
        message,
        languageUser,
      }).then((response) => {
        const status = response.status;
        if (status === 200) {
          this.sendingConfirmationTrue();
        } else {
          this.sendingConfirmationFalse();
        }
      }).catch( (error) => {
        this.sendingConfirmationFalse();
        console.log(error);
      });
    }

    sendingConfirmationTrue = () => {
      this.setState({
        name: '',
        email: '',
        message: '',
        valueSubmit: '✓',
        loadingSubmit: false,
        fontSizeSubmit: '35px',
        paddingSubmit: '0 6px',
        borderSubmit: '2px solid green',
        borderForm: '3px solid green',
        widthForm: '367px',
        heightForm: '427px',
      });
      this.notificationSpamMailTrue();
      setTimeout(() => {
        window.location.reload();
      }, 15000);
    }

    sendingConfirmationFalse = () => {
      this.setState({
        name: '',
        email: '',
        message: '',
        valueSubmit: 'X',
        loadingSubmit: false,
        fontSizeSubmit: '35px',
        paddingSubmit: '0 6px',
        borderSubmit: '2px solid red',
        borderForm: '3px solid red',
        widthForm: '367px',
        heightForm: '427px',
      });
      this.notificationSpamMailFalse();
      setTimeout(() => {
        window.location.reload();
      }, 15000);
    }

    ThemeCapcha = () => {
      const TokenKey = '6LcSSJIUAAAAAL5q0Z-IT9INdd5dEjq_XgVGTGgG';

      return (
        <div style={{display: this.state.displayCapcha}}>
          <Reaptcha
            onRender={this.Loading}
            onVerify={this.onVerify}
            sitekey={TokenKey}
          />
        </div>
      );
    }

    onVerify = () => {
      this.setState({verifyCaptcha: 'true'});
      setTimeout(() => {
        this.setState({
          displaySubmit: 'block',
          displayCapcha: 'none',
        });
      }, 1000);
    }

    Loading = () => {
      this.setState({
        displayApp: 'block',
        displayLoading: 'none',
      });
    }

    notificationSpamMailTrue = () => {
      if (flagsSelecting() === 'fr') {
        new Noty({
          text: 'Un mail de confirmation vous a été envoyé. Si vous ne le trouvez pas, vérifier dans les courriers indésirables.',
          theme: 'bootstrap-v4',
          type: 'success',
          layout: 'bottomCenter',
        }).show();
      } else {
        new Noty({
          text: 'A confirmation email has been sent to you. If you can not find it, check in junk mail.',
          theme: 'bootstrap-v4',
          type: 'success',
          layout: 'bottomCenter',
        }).show();
      }
    }

    notificationSpamMailFalse = () => {
      if (flagsSelecting() === 'fr') {
        new Noty({
          text: 'Une erreur est survenue. Veuillez réessayer plus tard.',
          theme: 'bootstrap-v4',
          type: 'error',
          layout: 'bottomCenter',
        }).show();
      } else {
        new Noty({
          text: 'An error has occurred. Please try again later.',
          theme: 'bootstrap-v4',
          type: 'error',
          layout: 'bottomCenter',
        }).show();
      }
    }

    render() {
      return (
        <Fragment>
          <HelmetProvider>
            <Helmet>
              <title>Contact • Yoann Delattre | Portfolio</title>
            </Helmet>
            <Helmet htmlAttributes={{lang: languageHtmlTag()}}/>
          </HelmetProvider>
          <CookieAlert/>
          <div className="loadingpage" style={{display: this.state.displayLoading}}>
            <ReactLoading
              type="bars"
              color="#fff"
              width={'10%'}
            />
          </div>
          <div className="ContactContainer" style={{display: this.state.displayApp, backgroundColor: backgroundContainer(), height: '100%'}}>
            <Navbar/>
            <Formulaire
              displaySubmit={this.state.displaySubmit}
              ThemeCapcha={this.ThemeCapcha}
              heightForm={this.state.heightForm}
              widthForm={this.state.widthForm}
              borderForm={this.state.borderForm}
              borderSubmit={this.state.borderSubmit}
              paddingSubmit={this.state.paddingSubmit}
              fontSizeSubmit={this.state.fontSizeSubmit}
              valueSubmit={this.state.valueSubmit}
              loadingSubmit={this.state.loadingSubmit}
              name={this.state.name}
              email={this.state.email}
              message={this.state.message}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <ShareButton display={displayShareButton()}/>
            {ReportProblem}
          </div>
        </Fragment>
      );
    }
}

export default Contact;
