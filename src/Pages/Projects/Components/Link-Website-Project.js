import React, {Component} from 'react'

// css
import './Link-Website-Project.css'

// logo
import web_logo from './logo/logo-web.png'

class LinkWebsiteProject extends Component {
    render () {
        return (
            <div className="website-link">
			    <a rel="noopener noreferrer" target="_blank" href={this.props.LinkWebsite} >
					<button type="button" className="website-link-button">
						<img className="website-link-button_ico" src={web_logo} alt="website logo" />
						<span className="website-link-button_text">Visualizer Docker Swarm</span>
					</button>
				</a>
			</div>
        )    
    }
}

export default LinkWebsiteProject