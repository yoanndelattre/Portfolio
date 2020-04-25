import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_markdown_editor from '../img/capture-markdown-editor.png'

// css 
import './ProjectsCards.css'

export default class ProjectCard4 extends Component {

	TitleProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Traducteur Markdown')
        }
        else {
            return('Markdown Translator')
        }
	}
	
	DescriptionProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Site web traducteur instantané de markdown.')
        }
        else {
            return('Instant markdown translator website.')
        }
	}
	
	SummaryProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Site web traducteur instantané de markdown, le texte saisi est automatiquement sauvegardé dans le navigateur à l’aide de la fonction "Local Storage". Hébergé par le service Cloud Run sur Google Cloud Platform.')
        }
        else {
            return('Website instant markdown translator, the entered text is automatically saved in the browser using the "Local Storage" function. Hosted by the Cloud Run service on Google Cloud Platform.')
        }
    }

	render () {
		return (
			<FlippingCard className="ProjectCard4" >
				<FlippingCardFront>
					<UserCard 
						avatar={logo_website} 
						header={capture_markdown_editor}
						name={<h1 className="titleUserCard">{this.TitleProjectName()}</h1>} 
						positionName={<p className="PositionName">{this.DescriptionProjectName()}</p>} 
						cardClass={this.props.classUserCard}  
					/>
				</FlippingCardFront>
				<FlippingCardBack>
					<div className="BackCard FrontCard BackProjectCard4">
						<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Markdown-Editor"} />
						<LinkWebsiteProject TitleWebsite={"Markdown Editor"} LinkWebsite={"https://markdown.yoanndelattre.com"}/>
						<div style={{ backgroundColor: this.props.backgroundFlippingCardBack }} className="details">
							<h3 style={{ color: this.props.textFlippingCard }} className="title-details">
								{this.props.DetailsName}
							</h3>
							<p style={{ color: this.props.textFlippingCard }} className="text-details">
								{this.SummaryProjectName()}
							</p>
						</div>
					</div>
				</FlippingCardBack>
    		</FlippingCard>
		)
	}
}