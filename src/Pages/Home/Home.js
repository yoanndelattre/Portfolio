import React, {Component} from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Components
import Navbar from '../../Navbar/Navbar';
import Me from './Components/Me';
import {ReportProblem} from '../../Report-Problem/Report-Problem';
import ShareButton from '../../Share-Button/ShareButton';
import CookieAlert from '../../Cookie-Alert/Cookie-Alert';
import {backgroundContainer, backgroundImage} from './assets/style';
import {languageHtmlTag} from './assets/language';

// css
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <HelmetProvider>
          <Helmet htmlAttributes={{lang: languageHtmlTag()}}/>
        </HelmetProvider>
        <CookieAlert/>
        <div className="mainContainer" style={{backgroundImage: backgroundImage(), backgroundColor: backgroundContainer()}}>
          <Navbar/>
          <div className="home_card">
            <Me/>
          </div>
          <ShareButton display='flex'/>
          {ReportProblem}
        </div>
      </div>
    );
  }
}

export default Home;
