import React, {Component} from 'react';
import CookieBanner from 'react-cookie-banner';
import {cookieBannerMessage, cookieBannerButton} from './assets/language';
import {cookieBannerbackgroundColor, cookieMessageColor, cookieButtonColor} from './assets/style';

class CookieAlert extends Component {
  render() {
    // Mobile
    if (window.innerWidth <= 768) {
      return (
        <CookieBanner
          message={cookieBannerMessage()}
          cookie="user-accept-cookies"
          buttonMessage={cookieBannerButton()}
          dismissOnScroll={false}
          styles={{
            banner: {
              position: 'fixed',
              bottom: '0',
              width: '100%',
              backgroundColor: cookieBannerbackgroundColor(),
              textAlign: 'left',
            },
            message: {
              color: cookieMessageColor(),
              marginLeft: '20px',
            },
            button: {
              backgroundColor: 'grey',
              color: cookieButtonColor(),
            },
          }}
        />
      );
    }
    return (
      <CookieBanner
        message={cookieBannerMessage()}
        cookie="user-accept-cookies"
        buttonMessage={cookieBannerButton()}
        dismissOnScroll={false}
        styles={{
          banner: {
            position: 'fixed',
            bottom: '8px',
            width: '50%',
            marginLeft: '25%',
            borderRadius: '5px',
            backgroundColor: cookieBannerbackgroundColor(),
          },
          message: {
            color: cookieMessageColor(),
          },
          button: {
            backgroundColor: 'grey',
            color: cookieButtonColor(),
          },
        }}
      />
    );
  }
}

export default CookieAlert;
