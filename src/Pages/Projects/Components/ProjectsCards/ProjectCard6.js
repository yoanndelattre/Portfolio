import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'

// img
import logo_request from '../logo/logo-request.png'
import capture_request from '../img/capture-request.png'

// css 
import './ProjectsCards.css'

export default class ProjectCard6 extends Component {

	DescriptionProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('Request Middleware est une application qui envoie des requêtes GET aux services.')
        }
        else {
            return('Request Middleware is an application that sends GET requests to services.')
        }
	}
	
	SummaryProjectName () {
        if(localStorage.getItem('language') === 'FR') {
            return('L’application reçoit une requête POST avec des variables comme l’url cible. Et une requête GET est envoyée à l’url cible.')
        }
        else {
            return('The application receives a POST request with variables like the target url. And a GET request is sent to the target url.')
        }
    }

	render () {
		return (
			<FlippingCard className="ProjectCard6" >
				<FlippingCardFront>
					<UserCard 
						avatar={logo_request} 
						header={capture_request}
						name={<h1 className="titleUserCard">Request Middleware</h1>} 
						positionName={<p className="PositionName">{this.DescriptionProjectName()}</p>} 
						cardClass={this.props.classUserCard}  
					/>
				</FlippingCardFront>
      	<FlippingCardBack>
					<div className="BackCard FrontCard BackProjectCard6">
						<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Request-Middleware"} />
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