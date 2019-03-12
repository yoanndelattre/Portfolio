import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_chatbox from '../img/capture-chatbox.png'

// css 
import './ProjectsCards.css'

export default class ProjectCard4 extends Component {
	render () {
		return (
			<FlippingCard className="ProjectCard4" >
				<FlippingCardFront>
					<UserCard 
						avatar={logo_website} 
						header={capture_chatbox}
						name={<h2 style={{ color: this.props.textFlippingCard }} className="titleUserCard">Chatbox</h2>} 
						positionName={<p style={{ color: this.props.textFlippingCard }} className="PositionName">Site web permettant à différents utilisateurs de communiquer.</p>} 
						cardClass={this.props.classUserCard}  
					/>
				</FlippingCardFront>
      	<FlippingCardBack>
					<div className="BackCard FrontCard BackProjectCard4">
						<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Web-Chatbox"} />
						<LinkWebsiteProject TitleWebsite={"Chatbox"} LinkWebsite={"https://chatbox.yoanndelattre.com"}/>
						<div style={{ backgroundColor: this.props.backgroundFlippingCardBack }} className="details">
							<h3 style={{ color: this.props.textFlippingCard }} className="title-details">Détails:</h3>
							<p style={{ color: this.props.textFlippingCard }} className="text-details">Site web permettant à différents utilisateurs de communiquer sous un pseudo qu'ils auront au préalablement indiqués sur la page de connexion.</p>
						</div>
					</div>
  	  	</FlippingCardBack>
    	</FlippingCard>
		)
	}
}