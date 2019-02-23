import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_chatbox from '../img/capture-chatbox.png'

// css 
import './ProjectsCards.css'

export const ProjectCard4 = (
    <FlippingCard className="ProjectCard4" >
		<FlippingCardFront>
			<UserCard 
				avatar={logo_website} 
				header={capture_chatbox}
				name="Chatbox" 
				positionName={<p className="PositionName">Site web permettant à différents utilisateurs de communiquer.</p>} 
				cardClass="FrontCard FrontProjectCard3" 
			/>
  	  	</FlippingCardFront>
      	<FlippingCardBack>
			<div className="BackCard FrontCard BackProjectCard4">
				<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Web-Chatbox"} />
				<LinkWebsiteProject TitleWebsite={"Chatbox"} LinkWebsite={"https://chatbox.yoanndelattre.com"}/>
				<div className="details">
					<h3 className="title-details">Détails:</h3>
					<p className="text-details">Site web permettant à différents utilisateurs de communiquer sous un pseudo qu'ils auront au préalablement indiqués sur la page de connexion.</p>
				</div>
			</div>
  	  	</FlippingCardBack>
    </FlippingCard>
)