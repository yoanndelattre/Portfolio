import React, {Component} from 'react';
import ReactLoading from 'react-loading';
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
    state = {
      // load
      displayApp: 'none',
      displayLoading: 'flex',
    }

    Loading = () => {
      this.setState({displayApp: 'block', displayLoading: 'none'});
    }

    render() {
      return (
        <div>
          <HelmetProvider>
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
          <div onLoad={this.Loading} className="mainContainer" style={{display: this.state.displayApp, backgroundImage: backgroundImage(), backgroundColor: backgroundContainer()}}>
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
