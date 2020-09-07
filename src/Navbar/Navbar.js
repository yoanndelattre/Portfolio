import React, {Component, Fragment} from 'react';
import FlagsSelector from '../Language/flags-selector';
import {backgroundNavBar, colorText, backgroundNavBarSmart, colorTextFocus, backgroundTextFocus} from './assets/style';
import {projectsCategoryName} from './assets/language';

// css
import './Navbar.css';
import './SliderColorMode.css';

// ico
import SunIco from './ico/sun.png';
import MoonIco from './ico/moon.png';

const darkModeSelecting = () => {
  if (localStorage.getItem('DarkMode') === 'true') {
    return true;
  }

  if (localStorage.getItem('DarkMode') === null) {
    return false;
  }
};

class Navbar extends Component {
    state = {
      backgroundTextHoverHome: '',
      backgroundTextHoverProjects: '',
      backgroundTextHoverContact: '',

    }

    componentDidMount() {
      darkModeSelecting();
    }

    handleChange = (event) => {
      if (event.target.checked === true) {
        localStorage.setItem('DarkMode', true);
      }
      if (event.target.checked === false) {
        localStorage.removeItem('DarkMode');
      }
      darkModeSelecting();

      // Update Component
      this.props.updateComponent();
    }

    OnMouseEnterHome = () => {
      if (localStorage.getItem('DarkMode') === 'true') {
        this.setState({backgroundTextHoverHome: 'rgb(165, 165, 165)'});
      }

      if (localStorage.getItem('DarkMode') === null) {
        this.setState({backgroundTextHoverHome: 'rgb(107, 107, 107)'});
      }
    }

    OnMouseEnterProjects = () => {
      if (localStorage.getItem('DarkMode') === 'true') {
        this.setState({backgroundTextHoverProjects: 'rgb(165, 165, 165)'});
      }

      if (localStorage.getItem('DarkMode') === null) {
        this.setState({backgroundTextHoverProjects: 'rgb(107, 107, 107)'});
      }
    }

    OnMouseEnterContact = () => {
      if (localStorage.getItem('DarkMode') === 'true') {
        this.setState({backgroundTextHoverContact: 'rgb(165, 165, 165)'});
      }

      if (localStorage.getItem('DarkMode') === null) {
        this.setState({backgroundTextHoverContact: 'rgb(107, 107, 107)'});
      }
    }

    render() {
      const SliderColorMode = (
        <Fragment>
          <img
            className="ico-sun"
            src={SunIco}
            alt="sun mode"
          />
          <label className="switch">
            <input
              defaultChecked={localStorage.getItem('DarkMode')}
              onChange={this.handleChange}
              type="checkbox"
            />
            <span className="slider"></span>
          </label>
          <img
            className="ico-moon"
            src={MoonIco}
            alt="sun mode"
          />
        </Fragment>
      );

      // Home
      if (window.location.pathname === '/') {
        return (
          <header>
            <div style={{backgroundColor: backgroundNavBar()}} className="link">

              <h1>
                <a style={{color: colorText()}} href="/">Yoann Delattre | Portfolio</a>
              </h1>

              <div className="switch-color">
                {SliderColorMode}
              </div>

              <FlagsSelector/>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverContact,
                }}
                onMouseEnter={this.OnMouseEnterContact}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverContact: ''});
                }}
                href="/Contact" >
                Contact
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverProjects,
                }}
                onMouseEnter={this.OnMouseEnterProjects}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverProjects: ''});
                }}
                href="/Projects" >
                {projectsCategoryName()}
              </a>

              <a
                style={{
                  color: colorTextFocus(),
                  background: backgroundTextFocus(),
                }}
                href="/" >
                Home
              </a>

              <a style={{
                color: colorTextFocus(),
                background: backgroundTextFocus(),
              }}
              className='smart-screen'
              href="/" >
              Home
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverProjects,
                }}
                onMouseEnter={this.OnMouseEnterProjects}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverProjects: ''});
                }}
                className='smart-screen'
                href="/Projects" >
                {projectsCategoryName()}
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverContact,
                }}
                onMouseEnter={this.OnMouseEnterContact}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverContact: ''});
                }}
                className='smart-screen'
                href="/Contact" >
                Contact
              </a>

              <div
                style={{
                  background: backgroundNavBarSmart(),
                }}
                className="switch-color-smart">
                {SliderColorMode}
              </div>

            </div>
          </header>
        );
      }

      // Projects
      if (window.location.pathname === '/Projects') {
        return (
          <header>
            <div style={{backgroundColor: backgroundNavBar()}} className="link">

              <h1>
                <a style={{color: colorText()}} href="/">Yoann Delattre | Portfolio</a>
              </h1>

              <div className="switch-color">
                {SliderColorMode}
              </div>

              <FlagsSelector/>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverContact,
                }}
                onMouseEnter={this.OnMouseEnterContact}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverContact: ''});
                }}
                href="/Contact" >
                Contact
              </a>

              <a
                style={{
                  color: colorTextFocus(),
                  background: backgroundTextFocus(),
                }}
                href="/Projects" >
                {projectsCategoryName()}
              </a>

              <a
                style={{color: colorText(),
                  background: this.state.backgroundTextHoverHome,
                }}
                onMouseEnter={this.OnMouseEnterHome}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverHome: ''});
                }}
                href="/" >
                Home
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverHome,
                }}
                onMouseEnter={this.OnMouseEnterHome}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverHome: ''});
                }}
                className='smart-screen'
                href="/" >
                Home
              </a>

              <a
                style={{
                  color: colorTextFocus(),
                  background: backgroundTextFocus(),
                }}
                className='smart-screen'
                href="/Projects" >
                {projectsCategoryName()}
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverContact,
                }}
                onMouseEnter={this.OnMouseEnterContact}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverContact: ''});
                }}
                className='smart-screen'
                href="/Contact" >
                Contact
              </a>

              <div
                style={{
                  background: backgroundNavBarSmart(),
                }}
                className="switch-color-smart">
                {SliderColorMode}
              </div>

            </div>
          </header>
        );
      }


      // Contact
      if (window.location.pathname === '/Contact') {
        return (
          <header>
            <div style={{backgroundColor: backgroundNavBar()}} className="link">

              <h1>
                <a style={{color: colorText()}} href="/">Yoann Delattre | Portfolio</a>
              </h1>

              <div className="switch-color">
                {SliderColorMode}
              </div>

              <FlagsSelector/>

              <a
                style={{
                  color: colorTextFocus(),
                  background: backgroundTextFocus(),
                }}
                href="/Contact" >
                Contact
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverProjects,
                }}
                onMouseEnter={this.OnMouseEnterProjects}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverProjects: ''});
                }}
                href="/Projects" >
                {projectsCategoryName()}
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverHome,
                }}
                onMouseEnter={this.OnMouseEnterHome}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverHome: ''});
                }}
                href="/" >
                Home
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverHome,
                }}
                onMouseEnter={this.OnMouseEnterHome}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverHome: ''});
                }}
                className='smart-screen'
                href="/" >
                Home
              </a>

              <a
                style={{
                  color: colorText(),
                  background: this.state.backgroundTextHoverProjects,
                }}
                onMouseEnter={this.OnMouseEnterProjects}
                onMouseLeave={() => {
                  this.setState({backgroundTextHoverProjects: ''});
                }}
                className='smart-screen'
                href="/Projects" >
                {projectsCategoryName()}
              </a>

              <a
                style={{
                  color: colorTextFocus(),
                  background: backgroundTextFocus(),
                }}
                className='smart-screen'
                href="/Contact" >
                Contact
              </a>

              <div
                style={{
                  background: backgroundNavBarSmart(),
                }}
                className="switch-color-smart">
                {SliderColorMode}
              </div>

            </div>
          </header>
        );
      }
    }
}

export default Navbar;
export {darkModeSelecting};
