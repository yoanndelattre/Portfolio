import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Reaptcha from 'reaptcha'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Noty from 'noty'

// Components
import Navbar from '../../Navbar/Navbar'
import ReactLoading from 'react-loading'
import Formulaire from './Components/Formulaire'
import {ReportProblem} from '../../Report-Problem/Report-Problem'
import ShareButton from '../../Share-Button/ShareButton'
import CookieAlert from '../../Cookie-Alert/Cookie-Alert'

// css
import '../../../node_modules/noty/lib/noty.css'
import '../../../node_modules/noty/lib/themes/bootstrap-v4.css'
import './Contact.css'

class Contact extends Component {

    constructor() {
        super()
        this.state = {
            verifyCaptcha: '',
            name: '',
            email: '',
            message: '',
            valueSubmit: '✉',
            fontSizeSubmit: '15px',
            paddingSubmit: '8px 12px',
            borderSubmit: '',
            borderForm: 'none',
            widthForm: '370px',
            heightForm: '430px',
            backgroundContainer: "",

            //load
            displayApp: 'none',
            displayLoading: 'flex',

            //display Captcha
            displaySubmit: 'none',
            displayCapcha: 'inline-block',
	
            //DarkMode
            ColorText: "",
	        BorderH2: "",
            backgroundInput: "",
            classPlaceholderForm: "",

            //DisplayShareButton
            displayShareButton: 'flex',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
        this.UpdateComponent()

        if (window.innerWidth <= 768) {
            this.setState ({ displayShareButton: 'none' })
        }
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit(e) {
        if (this.state.verifyCaptcha === "true") {
            e.preventDefault(
                this.setState({
                    valueSubmit: 'loading...'
                }),
                this.SendMessage()
            )
        }
    }

    SendMessage = () => {
        const { name, email, message } = this.state
        const languageUser = localStorage.getItem('language')

            axios.post(process.env.REACT_APP_URL_POST, {
                name,
                email,
                message,
                languageUser
            }).then((response) => {
                const status = response.status
                if (status === 200) {
                    this.SendingConfirmationTrue()
                }
                else {
                    this.SendingConfirmationFalse()
                }
            }).catch( error => {
                this.SendingConfirmationFalse()
                console.log(error)
            })
    }

    SendingConfirmationTrue = () => {
        this.setState({
            name: '', 
            email: '', 
            message: '', 
            valueSubmit: '✓', 
            fontSizeSubmit: '35px', 
            paddingSubmit: '0 6px', 
            borderSubmit: '2px solid green', 
            borderForm: '3px solid green', 
            widthForm: '367px', 
            heightForm: '427px'
        })
        this.NotificationSpamMailTrue()
    }

    SendingConfirmationFalse = () => {
        this.setState({
            name: '', 
            email: '', 
            message: '', 
            valueSubmit: 'X', 
            fontSizeSubmit: '35px', 
            paddingSubmit: '0 6px', 
            borderSubmit: '2px solid red', 
            borderForm: '3px solid red', 
            widthForm: '367px', 
            heightForm: '427px'
        })
        this.NotificationSpamMailFalse()
    }

    UpdateComponent = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            this.setState ({ 
                backgroundContainer: "rgb(88, 88, 88)",
                ColorText: "#e6e6e6",
                BorderH2: "3px solid #e6e6e6",
                backgroundInput: "#6C6C6C" ,
                classPlaceholderForm: "classPlaceholderFormDark",
                borderSubmit: "2px solid #e6e6e6",
            })
        }
        
        if (localStorage.getItem('DarkMode') === null) {
            this.setState ({ 
                backgroundContainer: "rgb(165, 165, 165)",
                ColorText: "rgb(77, 92, 102)",
                BorderH2: "3px solid rgb(77, 92, 102)",
                backgroundInput: "#e6e6e6",
                classPlaceholderForm: "classPlaceholderFormLight",
                borderSubmit: "2px solid rgb(77, 92, 102)"
            })
        }
    }

    ThemeCapcha = () => {
        const token_key = "6LcSSJIUAAAAAL5q0Z-IT9INdd5dEjq_XgVGTGgG"
        
        return (
            <div style={{ display: this.state.displayCapcha }}>
                <Reaptcha 
                    onRender={this.Loading} 
                    onVerify={this.onVerify} 
                    sitekey={token_key} 
                />
            </div>
        )
    }

    onVerify = () => {
        this.setState({ verifyCaptcha: "true" })

        setTimeout(() => {
            this.setState({ 
                displaySubmit: 'block', 
                displayCapcha: 'none' 
            })
        }, 1000);
    }

    Loading = () => {
        this.setState ({ 
            displayApp: 'block', 
            displayLoading: 'none' 
        })
    }

    NotificationSpamMailTrue = () => {
        if(localStorage.getItem('language') === 'FR') {
            new Noty({
                text: 'Un mail de confirmation vous a été envoyé. Si vous ne le trouvez pas, vérifier dans les courriers indésirables.',
                theme: 'bootstrap-v4',
                type: 'success',
                layout: 'bottomCenter'
            }).show();
        }
        else {
            new Noty({
                text: 'A confirmation email has been sent to you. If you can not find it, check in junk mail.',
                theme: 'bootstrap-v4',
                type: 'success',
                layout: 'bottomCenter'
            }).show();
        }
    }

    NotificationSpamMailFalse = () => {
        if(localStorage.getItem('language') === 'FR') {
            new Noty({
                text: 'Une erreur est survenue. Veuillez réessayer plus tard.',
                theme: 'bootstrap-v4',
                type: 'error',
                layout: 'bottomCenter'
            }).show();
        }
        else {
            new Noty({
                text: 'An error has occurred. Please try again later.',
                theme: 'bootstrap-v4',
                type: 'error',
                layout: 'bottomCenter'
            }).show();
        }
    }

    LanguageHtmlTag () {
        if(localStorage.getItem('language') === 'FR') {
            return('fr')
        }
        else {
            return('en')
        }
    }

    render () {
        return (
            <Fragment>
                <HelmetProvider>
                    <Helmet>
                        <title>Contact • Yoann Delattre | Portfolio</title>
                    </Helmet>
                    <Helmet htmlAttributes={{ lang : this.LanguageHtmlTag() }}/>
                </HelmetProvider>
                <CookieAlert/>
                <div className="loadingpage" style={{ display: this.state.displayLoading }}>
                    <ReactLoading
                        type="bars"
                        color="#fff"
                        width={'10%'}
                    />
                </div>
                <div className="ContactContainer" style={{ display: this.state.displayApp, backgroundColor: this.state.backgroundContainer, height: "100%" }}>
                    <Navbar UpdateComponent={this.UpdateComponent} />
                    <Formulaire 
                        displaySubmit={this.state.displaySubmit} 
                        ThemeCapcha={this.ThemeCapcha} 
                        classPlaceholderForm={this.state.classPlaceholderForm} 
                        backgroundInput={this.state.backgroundInput} 
                        BorderH2={this.state.BorderH2} 
                        ColorText={this.state.ColorText} 
                        heightForm={this.state.heightForm} 
                        widthForm={this.state.widthForm} 
                        borderForm={this.state.borderForm} 
                        borderSubmit={this.state.borderSubmit} 
                        paddingSubmit={this.state.paddingSubmit} 
                        fontSizeSubmit={this.state.fontSizeSubmit} 
                        valueSubmit={this.state.valueSubmit} 
                        name={this.state.name} 
                        email={this.state.email}
                        message={this.state.message} 
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit} 
                    />
                    <ShareButton display={this.state.displayShareButton}/>
                    {ReportProblem}
                </div>
            </Fragment>
        )
    }
}

export default Contact