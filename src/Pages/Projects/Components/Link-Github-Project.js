import React, {Component} from 'react';

// css
import './Link-Github-Project.css';

// logo
import GithubLogo from './logo/github.svg';

class LinkGithubProject extends Component {
  sourceCodeName() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Code Source');
    } else {
      return ('Source Code');
    }
  }

  render() {
    return (
      <div className="repo-github-link">
        <a rel="noopener noreferrer" target="_blank" href={this.props.LinkGithub} >
          <button type="button" className="repo-github-link-button">
            <img className="repo-github-link-button_ico" src={GithubLogo} alt="github logo" />
            <span className="repo-github-link-button_text">
              {this.sourceCodeName()}
            </span>
          </button>
        </a>
      </div>
    );
  }
}

export default LinkGithubProject;
