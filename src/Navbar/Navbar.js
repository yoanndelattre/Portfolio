import React, {Component} from 'react';
import ColorMode from '../ColorMode/ColorMode';
import FlagsSelector from '../Language/flags-selector';
import {backgroundNavBar, colorText, backgroundNavBarSmart, colorTextFocus, backgroundTextFocus} from './assets/style';
import {projectsCategoryName} from './assets/language';

// css
import './Navbar.css';

class Navbar extends Component {
    state = {
      backgroundTextHoverHome: '',
      backgroundTextHoverProjects: '',
      backgroundTextHoverContact: '',
      updateflagsSelecting: '',
      updateColorMode: '',
    }

    updateflagsSelecting = () => {
      this.setState({
        updateflagsSelecting: localStorage.getItem('language'),
      });
      this.props.updateflagsSelecting();
    }

    updateColorMode = () => {
      this.setState({
        updateColorMode: localStorage.getItem('DarkMode'),
      });
      this.props.updateColorMode();
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
      // Home
      if (window.location.pathname === '/') {
        return (
          <header>
            <div style={{backgroundColor: backgroundNavBar()}} className="link">

              <h1>
                <a style={{color: colorText()}} href="/">Yoann Delattre | Portfolio</a>
              </h1>

              <div className="switch-color">
                <ColorMode updateColorMode={this.updateColorMode}/>
              </div>

              <FlagsSelector updateflagsSelecting={this.updateflagsSelecting}/>

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
                <ColorMode updateColorMode={this.updateColorMode}/>
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
                <ColorMode updateColorMode={this.updateColorMode}/>
              </div>

              <FlagsSelector updateflagsSelecting={this.updateflagsSelecting}/>

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
                <ColorMode updateColorMode={this.updateColorMode}/>
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
                <ColorMode updateColorMode={this.updateColorMode}/>
              </div>

              <FlagsSelector updateflagsSelecting={this.updateflagsSelecting}/>

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
                <ColorMode updateColorMode={this.updateColorMode}/>
              </div>

            </div>
          </header>
        );
      }
    }
}

export default Navbar;
