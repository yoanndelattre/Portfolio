import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_portfolio from '../img/capture-portfolio.png'

// css 
import './ProjectsCards.css'

export const ProjectCard1 = (
    <FlippingCard className="ProjectCard1" >
			<FlippingCardFront>
				<UserCard 
					avatar={logo_website} 
					header={capture_portfolio} 
					name="Portfolio (ce site)" 
					positionName={<p className="PositionName">Site web public qui expose mes projets et permet de me contacter.</p>} 
					cardClass="FrontCard FrontProjectCard1" 
				/>
			</FlippingCardFront>
			<FlippingCardBack>
				<div className="BackCard BackProjectCard1">
					<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Portfolio"} />
					<div className="details">
						<h3 className="title-details">Détails:</h3>
						<p className="text-details">Ce site est hébergé sur un NAS Synology Ds216j avec le package Web Station à l'aide d'Apache comme serveur HTTP. Après la demande d’approbation de l’administrateur, les modifications du dépôt GitHub sont automatiquement déployées sur le NAS.</p>
					</div>
				</div>
			</FlippingCardBack>
  	</FlippingCard>
)