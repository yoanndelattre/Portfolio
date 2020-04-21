import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'

// img
import logo_mail from '../logo/logo-mail.png'
import capture_contact_page from '../img/capture-contact-page.png'

// css 
import './ProjectsCards.css'

export default class ProjectCard2 extends Component {
	
	DescriptionProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Service backend pour l’envoi de courrier lié au site Portfolio.')
        }
        else {
            return('Backend service for sending mail related to the Portfolio website.')
        }
	}
	
	SummaryProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Application qui reçoit le message à envoyer par mail via une requête POST du site web Portfolio. Hébergé par le service Cloud Run sur Google Cloud Platform.')
        }
        else {
            return('Application that receives the message to send by email via a POST request from the Portfolio website. Hosted by the Cloud Run service on Google Cloud Platform.')
        }
    }

	render () {
		return (
			<FlippingCard className="ProjectCard2" >
				<FlippingCardFront>
					<UserCard 
						avatar={logo_mail} 
						header={capture_contact_page}
						name={<h1 className="titleUserCard">Mail Send</h1>} 
						positionName={<p className="PositionName">{this.DescriptionProjectName()}</p>} 
						cardClass={this.props.classUserCard}  
					/>
				</FlippingCardFront>
				<FlippingCardBack>
					<div className="BackCard FrontCard BackProjectCard2">
						<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/MailSend-Portfolio"} />
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