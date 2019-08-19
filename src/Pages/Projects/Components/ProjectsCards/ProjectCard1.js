import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_portfolio from '../img/capture-portfolio.JPG'

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
					name={<h1 className="titleUserCard">Portfolio (ce site)</h1>}
					positionName={<p className="PositionName">Site web public qui expose mes projets et permet de me contacter.</p>} 
					cardClass={this.props.classUserCard} 
				/>
			</FlippingCardFront>
			<FlippingCardBack>
				<div className="BackCard BackProjectCard1">
					<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Portfolio"} />
					<div style={{ backgroundColor: this.props.backgroundFlippingCardBack }} className="details">
						<h3 style={{ color: this.props.textFlippingCard }} className="title-details">
							{this.props.DetailsName}
						</h3>
						<p style={{ fontSize: '14px', color: this.props.textFlippingCard }} className="text-details">
							Ce site est hébergé sur Google Cloud Platform avec le service App Engine. Après la demande d’approbation de l’administrateur, les modifications du dépôt GitHub sont automatiquement déployé sur App Engine grâce à Cloud Build.
						</p>
					</div>
				</div>
			</FlippingCardBack>
  		</FlippingCard>
		)
	}
}