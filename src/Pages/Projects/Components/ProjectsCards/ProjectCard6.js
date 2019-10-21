import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'

// img
import logo_shell from '../logo/logo-shell.png'
import capture_dvm from '../img/capture-dvm.png'

// css 
import './ProjectsCards.css'

export default class ProjectCard6 extends Component {
	
	DescriptionProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Application permettant d’automatiser la création de machines virtuelles pour le développement.')
        }
        else {
            return('Application to automate virtual machine creation for development.')
        }
	}
	
	SummaryProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Dvm est un petit outil en ligne de commande écrit en javascript avec nodejs. Cette application créer une machine virtuelle temporaire sur Google Cloud Platform avec Compute Engine avec un réseau et un pare-feu déjà configuré. Vous pouvez ensuite vous connecter en ssh à cette machine virtuelle.')
        }
        else {
            return('Dvm is a small command line tool written in javascript with nodejs. This application create a temporary virtual machine on Google Cloud Platform with Compute Engine with a network and a firewall already configured. You can then connect in ssh to this virtual machine.')
        }
	}

	render () {
		return (
		<FlippingCard className="ProjectCard6" >
			<FlippingCardFront>
				<UserCard 
					avatar={logo_shell} 
					header={capture_dvm} 
					name={<h1 className="titleUserCard">dvm</h1>}
					positionName={<p className="PositionName PositionNameProjectCard6">{this.DescriptionProjectName()}</p>} 
					cardClass={this.props.classUserCard} 
				/>
			</FlippingCardFront>
			<FlippingCardBack>
				<div className="BackCard BackProjectCard6">
					<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/dvm"} />
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