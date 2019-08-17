import React, { Component } from 'react'
import CookieBanner from 'react-cookie-banner'

class CookieAlert extends Component {

    state = {
        dismissOnScroll: false
    }

    CookieBannerMessage () {
        if(localStorage.getItem('language') === 'FR') {
            return('Ce site utilise des cookies.')
        }
        else {
            return('This website uses cookies.')
        }
    }

    CookieBannerButton () {
        if(localStorage.getItem('language') === 'FR') {
            return ('Accepter')
        }
        else {
            return('Accept')
        }
    }

    render () {

        // Mobile
        if (window.innerWidth <= 768) {
            if (localStorage.getItem('DarkMode') === null) {
                return (
                    <CookieBanner
                        message={this.CookieBannerMessage()}
                        cookie="user-accept-cookies"
                        buttonMessage={this.CookieBannerButton()}
                        dismissOnScroll={this.state.dismissOnScroll} 
                        styles={{
                            banner: {
                                position: 'fixed',
                                bottom: '0',
                                width: '100%',
                                backgroundColor: 'rgb(218, 218, 218)',
                                textAlign: 'left'
                            },
                            message: {
                                color: 'black',
                                marginLeft: '20px'
                            },
                            button: {
                                backgroundColor: 'grey',
                                color: 'white'
                            }
                        }} />
                )
            }
    
            if (localStorage.getItem('DarkMode') === "true") {
                return (
                    <CookieBanner
                        message={this.CookieBannerMessage()}
                        cookie="user-accept-cookies"
                        buttonMessage={this.CookieBannerButton()}
                        dismissOnScroll={this.state.dismissOnScroll} 
                        styles={{
                            banner: {
                                position: 'fixed',
                                bottom: '0',
                                width: '100%',
                                backgroundColor: 'rgb(51, 51, 51)',
                                textAlign: 'left'
                            },
                            message: {
                                color: 'white',
                                marginLeft: '20px'
                            },
                            button: {
                                backgroundColor: 'grey',
                                color: 'black'
                            }
                        }} />
                )
            }
        }

        if (localStorage.getItem('DarkMode') === null) {
            return (
                <CookieBanner
                    message={this.CookieBannerMessage()}
                    cookie="user-accept-cookies"
                    buttonMessage={this.CookieBannerButton()}
                    dismissOnScroll={this.state.dismissOnScroll} 
                    styles={{
                        banner: {
                            position: 'fixed',
                            bottom: '8px',
                            width: '50%',
                            marginLeft: '25%',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(218, 218, 218)'
                        },
                        message: {
                            color: 'black'
                        },
                        button: {
                            backgroundColor: 'grey',
                            color: 'white'
                        }
                    }} />
            )
        }

        if (localStorage.getItem('DarkMode') === "true") {
            return (
                <CookieBanner
                    message={this.CookieBannerMessage()}
                    cookie="user-accept-cookies"
                    buttonMessage={this.CookieBannerButton()}
                    dismissOnScroll={this.state.dismissOnScroll} 
                    styles={{
                        banner: {
                            position: 'fixed',
                            bottom: '8px',
                            width: '50%',
                            marginLeft: '25%',
                            borderRadius: '5px',
                            backgroundColor: 'rgb(51, 51, 51)'
                        },
                        message: {
                            color: 'white'
                        },
                        button: {
                            backgroundColor: 'grey',
                            color: 'black'
                        }
                    }} />
            )
        }
    }
}

export default CookieAlert
