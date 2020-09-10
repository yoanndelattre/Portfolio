import React, {Component} from 'react';
import {sourceCodeName} from './assets/language';

// css
import './Link-Github-Project.css';

// logo
import GithubLogo from './logo/github.svg';

class LinkGithubProject extends Component {
  render() {
    return (
      <div className="repo-github-link">
        <a rel="noopener noreferrer" target="_blank" href={this.props.LinkGithub} >
          <button type="button" className="repo-github-link-button">
            <img className="repo-github-link-button_ico" src={GithubLogo} alt="github logo" />
            <span className="repo-github-link-button_text">
              {sourceCodeName()}
            </span>
          </button>
        </a>
      </div>
    );
  }
}

export default LinkGithubProject;
