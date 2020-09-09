import React, {Component, Fragment} from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Components
import Navbar from '../../Navbar/Navbar';
import ProjectCard1 from './Components/ProjectsCards/ProjectCard1/ProjectCard1';
import ProjectCard2 from './Components/ProjectsCards/ProjectCard2/ProjectCard2';
import ProjectCard3 from './Components/ProjectsCards/ProjectCard3/ProjectCard3';
import ProjectCard4 from './Components/ProjectsCards/ProjectCard4/ProjectCard4';
import ProjectCard5 from './Components/ProjectsCards/ProjectCard5/ProjectCard5';
import ProjectCard6 from './Components/ProjectsCards/ProjectCard6/ProjectCard6';
import {ReportProblem} from '../../Report-Problem/Report-Problem';
import ShareButton from '../../Share-Button/ShareButton';
import CookieAlert from '../../Cookie-Alert/Cookie-Alert';
import {textTitle, backgroundContainer, backgroundImage, classprojectsContainer, displayShareButton} from './assets/style';
import {languageHtmlTag, projectsHtmlName, myProjectsName} from './assets/language';

// css
import './Projects.css';

class Projects extends Component {
  state = {
    updateColorMode: '',
  }

  updateColorMode = () => {
    this.setState({
      updateColorMode: localStorage.getItem('DarkMode'),
    });
  }

  render() {
    return (
      <Fragment>
        <HelmetProvider>
          <Helmet>
            <title>
              {projectsHtmlName()} • Yoann Delattre | Portfolio
            </title>
          </Helmet>
          <Helmet htmlAttributes={{lang: languageHtmlTag()}}/>
        </HelmetProvider>
        <CookieAlert/>
        <div>
          <div
            className={classprojectsContainer()}
            style={{
              backgroundImage: backgroundImage(),
              backgroundColor: backgroundContainer(),
            }}>
            <Navbar updateColorMode={this.updateColorMode} />
            <h1 style={{color: textTitle()}} className="title">
              {myProjectsName()}
            </h1>
            <div className="cards">
              <ProjectCard1/>
              <ProjectCard2/>
              <ProjectCard3/>
              <ProjectCard4/>
              <ProjectCard5/>
              <ProjectCard6/>
            </div>
            <ShareButton display={displayShareButton()}/>
            {ReportProblem}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Projects;
