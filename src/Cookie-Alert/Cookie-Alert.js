import React, {Component} from 'react';
import CookieBanner from 'react-cookie-banner';

class CookieAlert extends Component {
    state = {
      dismissOnScroll: false,
    }

    cookieBannerMessage() {
      if (localStorage.getItem('language') === 'FR') {
        return ('Ce site utilise des cookies.');
      } else {
        return ('This website uses cookies.');
      }
    }

    cookieBannerButton() {
      if (localStorage.getItem('language') === 'FR') {
        return ('Accepter');
      } else {
        return ('Accept');
      }
    }

    cookieBannerbackgroundColor() {
      if (localStorage.getItem('DarkMode') === null) {
        return ('rgb(218, 218, 218)');
      }
      if (localStorage.getItem('DarkMode') === 'true') {
        return ('rgb(51, 51, 51)');
      }
    }

    cookieMessageColor() {
      if (localStorage.getItem('DarkMode') === null) {
        return ('black');
      }
      if (localStorage.getItem('DarkMode') === 'true') {
        return ('white');
      }
    }

    cookieButtonColor() {
      if (localStorage.getItem('DarkMode') === null) {
        return ('white');
      }
      if (localStorage.getItem('DarkMode') === 'true') {
        return ('black');
      }
    }

    render() {
      // Mobile
      if (window.innerWidth <= 768) {
        return (
          <CookieBanner
            message={this.cookieBannerMessage()}
            cookie="user-accept-cookies"
            buttonMessage={this.cookieBannerButton()}
            dismissOnScroll={this.state.dismissOnScroll}
            styles={{
              banner: {
                position: 'fixed',
                bottom: '0',
                width: '100%',
                backgroundColor: this.cookieBannerbackgroundColor(),
                textAlign: 'left',
              },
              message: {
                color: this.cookieMessageColor(),
                marginLeft: '20px',
              },
              button: {
                backgroundColor: 'grey',
                color: this.cookieButtonColor(),
              },
            }}
          />
        );
      }
      return (
        <CookieBanner
          message={this.cookieBannerMessage()}
          cookie="user-accept-cookies"
          buttonMessage={this.cookieBannerButton()}
          dismissOnScroll={this.state.dismissOnScroll}
          styles={{
            banner: {
              position: 'fixed',
              bottom: '8px',
              width: '50%',
              marginLeft: '25%',
              borderRadius: '5px',
              backgroundColor: this.cookieBannerbackgroundColor(),
            },
            message: {
              color: this.cookieMessageColor(),
            },
            button: {
              backgroundColor: 'grey',
              color: this.cookieButtonColor(),
            },
          }}
        />
      );
    }
}

export default CookieAlert;
