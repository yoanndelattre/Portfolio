import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Reaptcha from 'reaptcha';
import {Helmet} from 'react-helmet'

// Components
import Navbar from '../../Navbar/Navbar'
import ReactLoading from 'react-loading'
import Formulaire from './Components/Formulaire'
import {ReportProblem} from '../../Report-Problem/Report-Problem'
import ShareButton from '../../Share-Button/ShareButton'


class Contact extends Component {

    constructor() {
        super()
        this.state = {
            verifyCaptcha: '',
            name: '',
            email: '',
            message: '',
            valueSubmit: 'Envoyer',
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
            backgroundForm: "",
            classPlaceholderForm: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount () {
        this.UpdateComponent()
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        })
    }

    async handleSubmit(e) {
        if (this.state.verifyCaptcha === "true") {
            e.preventDefault(
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
                }),
                
                setTimeout(() => {
                    window.location.reload();
                }, 7500)
            )
    
            const { name, email, message } = this.state
    
            const form = await axios.post('https://mail-send.yoanndelattre.com/mail/send', {
                name,
                email,
                message
            })
            console.log(form)
        }
    }

    UpdateComponent = () => {
        if (localStorage.getItem('DarkMode') === "true") {
            this.setState ({ 
                backgroundContainer: "rgb(88, 88, 88)",
                ColorText: "#e6e6e6",
                BorderH2: "3px solid #e6e6e6",
                backgroundForm: "#6C6C6C" ,
                classPlaceholderForm: "classPlaceholderFormDark",
                borderSubmit: "2px solid #e6e6e6",
            })
        }
        
        if (localStorage.getItem('DarkMode') === null) {
            this.setState ({ 
                backgroundContainer: "rgb(165, 165, 165)",
                ColorText: "rgb(77, 92, 102)",
                BorderH2: "3px solid rgb(77, 92, 102)",
                backgroundForm: "#e6e6e6",
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

    render () {
        return (
            <Fragment>
                <Helmet>
                    <title>Contact • Yoann Delattre | Portfolio</title>
                </Helmet>
                <div className="loadingpage" style={{ display: this.state.displayLoading }}>
                    <ReactLoading
                        type="bars"
                        color="#fff"
                        width={'10%'}
                    />
                </div>
                <div style={{ display: this.state.displayApp, backgroundColor: this.state.backgroundContainer, height: "100%" }}>
                    <Navbar UpdateComponent={this.UpdateComponent} />
                    <Formulaire 
                        displaySubmit={this.state.displaySubmit} 
                        ThemeCapcha={this.ThemeCapcha} 
                        classPlaceholderForm={this.state.classPlaceholderForm} 
                        backgroundForm={this.state.backgroundForm} 
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
                    <ShareButton/>
                    {ReportProblem}
                </div>
            </Fragment>
        )
    }
}

export default Contact