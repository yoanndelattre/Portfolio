import React, {Component, Fragment} from 'react';
import ReactLoading from 'react-loading';
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Components
import Navbar from '../../Navbar/Navbar';
import ProjectCard1 from './Components/ProjectsCards/ProjectCard1';
import ProjectCard2 from './Components/ProjectsCards/ProjectCard2';
import ProjectCard3 from './Components/ProjectsCards/ProjectCard3';
import ProjectCard4 from './Components/ProjectsCards/ProjectCard4';
import ProjectCard5 from './Components/ProjectsCards/ProjectCard5';
import ProjectCard6 from './Components/ProjectsCards/ProjectCard6';
import {ReportProblem} from '../../Report-Problem/Report-Problem';
import ShareButton from '../../Share-Button/ShareButton';
import CookieAlert from '../../Cookie-Alert/Cookie-Alert';

// css
import './Projects.css';

// background
import Projectsbackground from './img/Projectsbackground.jpg';

class Projects extends Component {
    state = {
      backgroundImage: `url(${ Projectsbackground })`,
      backgroundContainer: '',
      classprojectsContainer: '',

      // load
      displayApp: 'none',
      displayLoading: 'flex',

      // DarkMode
      textFlippingCard: '',
      backgroundFlippingCardBack: '',
      textTitle: '',

      // DisplayShareButton
      displayShareButton: 'flex',
    }

    componentDidMount() {
      if (window.innerWidth <= 768) {
        this.setState({
          backgroundImage: 'none',
          classprojectsContainer: 'projectsContainerSmart',
        });

        if (localStorage.getItem('DarkMode') === 'true') {
          this.setState({
            backgroundContainer: 'rgb(88, 88, 88)',
          });
        }

        if (localStorage.getItem('DarkMode') === null) {
          this.setState({
            backgroundContainer: 'rgb(165, 165, 165)',
          });
        }

        this.setState({displayShareButton: 'none'});
      } else {
        this.setState({
          classprojectsContainer: 'projectsContainer',
        });
      }

      this.updateComponent();
    }

    Loading = () => {
      this.setState({displayApp: 'block', displayLoading: 'none'});
    }

    updateComponent = () => {
      if (localStorage.getItem('DarkMode') === 'true') {
        this.setState({
          textFlippingCard: 'white',
          backgroundFlippingCardBack: 'rgb(51, 51, 51)',
          classUserCard: 'classUserCardDark',
          textTitle: 'black',
        });
      }

      if (localStorage.getItem('DarkMode') === null) {
        this.setState({
          textFlippingCard: 'black',
          backgroundFlippingCardBack: 'rgb(218, 218, 218)',
          classUserCard: 'classUserCardWhite',
          textTitle: 'white',
        });
      }

      if (window.innerWidth <= 768) {
        if (localStorage.getItem('DarkMode') === 'true') {
          this.setState({
            backgroundContainer: 'rgb(88, 88, 88)',
          });
        }

        if (localStorage.getItem('DarkMode') === null) {
          this.setState({
            backgroundContainer: 'rgb(165, 165, 165)',
          });
        }
      }
    }

    languageHtmlTag() {
      if (localStorage.getItem('language') === 'FR') {
        return ('fr');
      } else {
        return ('en');
      }
    }

    projectsHtmlName() {
      if (localStorage.getItem('language') === 'FR') {
        return ('Projets');
      } else {
        return ('Projects');
      }
    }

    myProjectsName() {
      if (localStorage.getItem('language') === 'FR') {
        return ('Mes Projets');
      } else {
        return ('My Projects');
      }
    }

    detailsName() {
      if (localStorage.getItem('language') === 'FR') {
        return ('Détails:');
      } else {
        return ('Details:');
      }
    }

    render() {
      return (
        <Fragment>
          <HelmetProvider>
            <Helmet>
              <title>
                {this.projectsHtmlName()} • Yoann Delattre | Portfolio
              </title>
            </Helmet>
            <Helmet htmlAttributes={{lang: this.languageHtmlTag()}}/>
          </HelmetProvider>
          <CookieAlert/>
          <div
            className="loadingpage"
            style={{display: this.state.displayLoading}}>
            <ReactLoading
              type="bars"
              color="#fff"
              width={'10%'}
            />
          </div>
          <div>
            <div
              onLoad={this.Loading}
              className={this.state.classprojectsContainer}
              style={{display: this.state.displayApp,
                backgroundImage: this.state.backgroundImage,
                backgroundColor: this.state.backgroundContainer,
              }}>
              <Navbar updateComponent={this.updateComponent} />
              <h1 style={{color: this.state.textTitle}} className="title">
                {this.myProjectsName()}
              </h1>
              <div className="cards">
                <ProjectCard1
                  DetailsName={this.detailsName()}
                  textFlippingCard={this.state.textFlippingCard}
                  backgroundFlippingCardBack={
                    this.state.backgroundFlippingCardBack
                  } />
                <ProjectCard2
                  DetailsName={this.detailsName()}
                  textFlippingCard={this.state.textFlippingCard}
                  backgroundFlippingCardBack={
                    this.state.backgroundFlippingCardBack
                  } />
                <ProjectCard3
                  DetailsName={this.detailsName()}
                  textFlippingCard={this.state.textFlippingCard}
                  backgroundFlippingCardBack={
                    this.state.backgroundFlippingCardBack
                  } />
                <ProjectCard4
                  DetailsName={this.detailsName()}
                  textFlippingCard={this.state.textFlippingCard}
                  backgroundFlippingCardBack={
                    this.state.backgroundFlippingCardBack
                  } />
                <ProjectCard5
                  DetailsName={this.detailsName()}
                  textFlippingCard={this.state.textFlippingCard}
                  backgroundFlippingCardBack={
                    this.state.backgroundFlippingCardBack
                  } />
                <ProjectCard6
                  DetailsName={this.detailsName()}
                  textFlippingCard={this.state.textFlippingCard}
                  backgroundFlippingCardBack={
                    this.state.backgroundFlippingCardBack
                  } />
              </div>
              <ShareButton display={this.state.displayShareButton}/>
              {ReportProblem}
            </div>
          </div>
        </Fragment>
      );
    }
}

export default Projects;
