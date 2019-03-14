import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_portfolio from '../img/capture-portfolio.png'

// css 
import './ProjectsCards.css'

export default class ProjectCard1 extends Component {
	render () {
		return (
		<FlippingCard className="ProjectCard1" >
			<FlippingCardFront>
				<UserCard 
					avatar={logo_website} 
					header={capture_portfolio} 
					name={<h2 className="titleUserCard" style={{ color: this.props.textFlippingCard }} >Portfolio (ce site)</h2>}
					positionName={<p style={{ color: this.props.textFlippingCard }} className="PositionName">Site web public qui expose mes projets et permet de me contacter.</p>} 
					cardClass={this.props.classUserCard} 
				/>
			</FlippingCardFront>
			<FlippingCardBack>
				<div className="BackCard BackProjectCard1">
					<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Portfolio"} />
					<div style={{ backgroundColor: this.props.backgroundFlippingCardBack }} className="details">
						<h3 style={{ color: this.props.textFlippingCard }} className="title-details">
							Détails:
						</h3>
						<p style={{ color: this.props.textFlippingCard }} className="text-details">
							Ce site est hébergé sur un NAS Synology Ds216j avec le package Web Station à l'aide d'Apache comme serveur HTTP. Après la demande d’approbation de l’administrateur, les modifications du dépôt GitHub sont automatiquement déployées sur le NAS.
						</p>
					</div>
				</div>
			</FlippingCardBack>
  		</FlippingCard>
		)
	}
}