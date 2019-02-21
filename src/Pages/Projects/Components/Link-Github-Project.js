import React, {Component} from 'react'

// css
import './Link-Github-Project.css'

// logo
import github_logo from './logo/github.svg'

class LinkGithubProject extends Component {
    render () {
        return (
            <div className="repo-github-link">
			    <a href={this.props.LinkGithub} >
					<button type="button" class="repo-github-link-button">
						<img className="repo-github-link-button_ico" src={github_logo} alt="github logo" />
						<span class="repo-github-link-button_text">Dépôt GitHub du Projet</span>
					</button>
				</a>
			</div>
        )    
    }
}

export default LinkGithubProject