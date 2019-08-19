import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_kube from '../logo/kube-logo.png'
import img_raspberrypi from '../img/raspberry-pi-3-bplus.jpg'

// css 
import './ProjectsCards.css'

export default class ProjectCard2 extends Component {

	TutorialProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Tutoriel RaspberryPi cluster')
        }
        else {
            return('Tutorial RaspberryPi cluster')
        }
	}
	
	DescriptionProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Cluster de deux Raspberry Pi 3 avec Kubernetes.')
        }
        else {
            return('Cluster of two Raspberry Pi 3 with Kubernetes.')
        }
    }

	render () {
		return (
			<FlippingCard className="ProjectCard2" >
				<FlippingCardFront>
					<UserCard 
						avatar={logo_kube} 
						header={img_raspberrypi}
						name={<h1 className="titleUserCard">Cluster Raspberry Pi</h1>} 
						positionName={<p className="PositionName">{this.DescriptionProjectName()}</p>} 
						cardClass={this.props.classUserCard} 
					/>
				</FlippingCardFront>
				<FlippingCardBack>
					<div className="BackCard FrontCard BackProjectCard2">
					<LinkWebsiteProject TitleWebsite={<p className="LinkWebsiteProject_BackProjectCard2">{this.TutorialProjectName()}</p>} LinkWebsite={"https://medium.com/nycdev/k8s-on-pi-9cc14843d43"}/>
						<div style={{ backgroundColor: this.props.backgroundFlippingCardBack }} className="details">
							<h3 style={{ color: this.props.textFlippingCard }} className="title-details">
								{this.props.DetailsName}
							</h3>
							<p style={{ color: this.props.textFlippingCard }} className="text-details">
								Cluster composé de deux Raspberry Pi ( Raspberry Pi 3 B et Raspberry Pi 3 B+ ) qui fonctionnent avec Kubernetes. Après la demande d'approbation de l'administrateur, de nouveaux conteneurs sont automatiquement démarrés pour mettre à jour l'application.
							</p>
						</div>
					</div>
				</FlippingCardBack>
			</FlippingCard>
		)
	}
}