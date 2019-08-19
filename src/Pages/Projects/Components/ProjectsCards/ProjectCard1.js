import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_portfolio from '../img/capture-portfolio.JPG'

// css 
import './ProjectsCards.css'

export default class ProjectCard1 extends Component {

	TitleProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Portfolio (ce site)')
        }
        else {
            return('Portfolio (this website)')
        }
	}
	
	DescriptionProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Site web public qui expose mes projets et permet de me contacter.')
        }
        else {
            return('Public website that exposes my projects and allow to contact me.')
        }
	}
	
	SummaryProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Ce site est hébergé sur Google Cloud Platform avec le service App Engine. Après la demande d’approbation de l’administrateur, les modifications du dépôt GitHub sont automatiquement déployé sur App Engine grâce à Cloud Build.')
        }
        else {
            return('This site is hosted on Google Cloud Platform with the App Engine service. After the administrator’s request for approval, changes to the GitHub repository are automatically deployed to App Engine through Cloud Build.')
        }
    }

	render () {
		return (
		<FlippingCard className="ProjectCard1" >
			<FlippingCardFront>
				<UserCard 
					avatar={logo_website} 
					header={capture_portfolio} 
					name={<h1 className="titleUserCard">{this.TitleProjectName()}</h1>}
					positionName={<p className="PositionName">{this.DescriptionProjectName()}</p>} 
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
							{this.SummaryProjectName()}
						</p>
					</div>
				</div>
			</FlippingCardBack>
  		</FlippingCard>
		)
	}
}