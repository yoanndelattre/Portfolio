import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from './Link-Github-Project'

// img
import logo_website from './logo/logo-website.png'
import capture_portfolio from './img/capture-portfolio.png'

// css 
import './ProjectCard.css'

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
				<div className="BackCard">
					<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Portfolio"} />
					<div className="details">
						<h3 className="title-details">Détails:</h3>
						<p className="text-details">Ce site est hébergé sur un NAS Synology Ds216j avec le package Web Station à l'aide d'Apache comme serveur HTTP. Après la demande d’approbation de l’administrateur, les modifications du dépôt GitHub sont automatiquement déployées sur le NAS.</p>
					</div>
				</div>
  	  </FlippingCardBack>
    </FlippingCard>
)

export const ProjectCard2 = (
    <FlippingCard className="ProjectCard2" >
		<FlippingCardFront>
  		    <UserCard name="Project2" cardClass="FrontCard FrontProjectCard2">
				ProjectCard2
			  </UserCard>
  	    </FlippingCardFront>
        <FlippingCardBack>
			<div className="BackCard BackProjectCard2">Back</div>
  	    </FlippingCardBack>
    </FlippingCard>
)

export const ProjectCard3 = (
    <FlippingCard className="ProjectCard3" >
		<FlippingCardFront>
  		    <UserCard name="Project3" cardClass="FrontCard FrontProjectCard3">
				ProjectCard3
			  </UserCard>
  	    </FlippingCardFront>
        <FlippingCardBack>
			<div className="BackCard BackProjectCard3">Back</div>
  	    </FlippingCardBack>
    </FlippingCard>
)

export const ProjectCard4 = (
    <FlippingCard className="ProjectCard4" >
		<FlippingCardFront>
  		    <UserCard name="Project4" cardClass="FrontCard FrontProjectCard4">
				ProjectCard4
			  </UserCard>
  	    </FlippingCardFront>
        <FlippingCardBack>
			<div className="BackCard BackProjectCard4">Back</div>
  	    </FlippingCardBack>
    </FlippingCard>
)

export const ProjectCard5 = (
    <FlippingCard className="ProjectCard5" >
		<FlippingCardFront>
  		    <UserCard name="Project5" cardClass="FrontCard FrontProjectCard5">
				ProjectCard5
			  </UserCard>
  	    </FlippingCardFront>
        <FlippingCardBack>
			<div className="BackCard BackProjectCard5">Back</div>
  	    </FlippingCardBack>
    </FlippingCard>
)