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

    CookieBannerbackgroundColor () {
        if (localStorage.getItem('DarkMode') === null) {
            return('rgb(218, 218, 218)')
        }
        if (localStorage.getItem('DarkMode') === "true") {
            return('rgb(51, 51, 51)')
        }
    }

    CookieMessageColor () {
        if (localStorage.getItem('DarkMode') === null) {
            return('black')
        }
        if (localStorage.getItem('DarkMode') === "true") {
            return('white')
        }
    }

    CookieButtonColor () {
        if (localStorage.getItem('DarkMode') === null) {
            return('white')
        }
        if (localStorage.getItem('DarkMode') === "true") {
            return('black')
        }
    }

    render () {

        // Mobile
        if (window.innerWidth <= 768) {
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
                            backgroundColor: this.CookieBannerbackgroundColor(),
                            textAlign: 'left'
                        },
                        message: {
                            color: this.CookieMessageColor(),
                            marginLeft: '20px'
                        },
                        button: {
                            backgroundColor: 'grey',
                            color: this.CookieButtonColor()
                        }
                    }} 
                />
            )
        }
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
                        backgroundColor: this.CookieBannerbackgroundColor()
                    },
                    message: {
                        color: this.CookieMessageColor()
                    },
                    button: {
                        backgroundColor: 'grey',
                        color: this.CookieButtonColor()
                    }
                }} 
            />
        )
    }
}

export default CookieAlert