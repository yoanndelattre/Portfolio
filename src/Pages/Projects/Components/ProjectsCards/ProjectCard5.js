import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_chatbox from '../img/capture-chatbox.png'

// css 
import './ProjectsCards.css'

export default class ProjectCard5 extends Component {

	DescriptionProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Site web permettant à différents utilisateurs de communiquer.')
        }
        else {
            return('Website allowing different users to communicate.')
        }
	}
	
	SummaryProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Site web permettant à différents utilisateurs de communiquer sous un pseudo qu’ils auront préalablement indiqué sur la page de connexion. Hébergé par le service Cloud Run sur Google Cloud Platform.')
        }
        else {
            return('Website allowing different users to communicate under a username they have previously indicated on the login page. Hosted by the Cloud Run service on Google Cloud Platform.')
        }
    }

	render () {
		return (
			<FlippingCard className="ProjectCard5" >
				<FlippingCardFront>
					<UserCard 
						avatar={logo_website} 
						header={capture_chatbox}
						name={<h1 className="titleUserCard">Chatbox</h1>} 
						positionName={<p className="PositionName">{this.DescriptionProjectName()}</p>} 
						cardClass={this.props.classUserCard}  
					/>
				</FlippingCardFront>
      	<FlippingCardBack>
					<div className="BackCard FrontCard BackProjectCard5">
						<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Web-Chatbox"} />
						<LinkWebsiteProject TitleWebsite={"Chatbox"} LinkWebsite={"https://chatbox.yoanndelattre.com"}/>
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