import React, { Component } from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_recipe_box from '../img/capture-recipe-box.png'

// css 
import './ProjectsCards.css'

export default class ProjectCard5 extends Component {
	render () {
		return (
			<FlippingCard className="ProjectCard5" >
				<FlippingCardFront>
					<UserCard 
						avatar={logo_website} 
						header={capture_recipe_box}
						name={<h1 className="titleUserCard">Boîte à Recette</h1>} 
						positionName={<p className="PositionName PositionNameProjectCard5">Site web permettant à différents utilisateurs d’héberger leurs recettes.</p>} 
						cardClass={this.props.classUserCard}  
					/>
				</FlippingCardFront>
      	<FlippingCardBack>
					<div className="BackCard FrontCard BackProjectCard5">
						<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Recipe-Box"} />
						<LinkWebsiteProject TitleWebsite={"Boîte à Recettes"} LinkWebsite={"https://recette.yoanndelattre.com"}/>
						<div style={{ backgroundColor: this.props.backgroundFlippingCardBack }} className="details">
							<h3 style={{ color: this.props.textFlippingCard }} className="title-details">
								{this.props.DetailsName}
							</h3>
							<p style={{ color: this.props.textFlippingCard }} className="text-details">
								Site web permettant à différents utilisateurs d’héberger leurs recettes et de les modifier grâce à un système d’authentification via un compte Google ou Facebook.
							</p>
						</div>
					</div>
  	  	</FlippingCardBack>
    	</FlippingCard>
		)
	}
}