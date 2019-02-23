import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_recipe_box from '../img/capture-recipe-box.png'

// css 
import './ProjectsCards.css'

export const ProjectCard5 = (
    <FlippingCard className="ProjectCard5" >
		<FlippingCardFront>
			<UserCard 
				avatar={logo_website} 
				header={capture_recipe_box}
				name="Boîte à Recette" 
				positionName={<p className="PositionName PositionNameProjectCard5">Site web permettant à différents utilisateurs d’héberger leurs recettes.</p>} 
				cardClass="FrontCard FrontProjectCard5" 
			/>
  	  	</FlippingCardFront>
      	<FlippingCardBack>
			<div className="BackCard FrontCard BackProjectCard5">
				<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Recipe-Box"} />
				<LinkWebsiteProject TitleWebsite={"Boîte à Recettes"} LinkWebsite={"https://recette.yoanndelattre.com"}/>
				<div className="details">
					<h3 className="title-details">Détails:</h3>
					<p className="text-details">Site web permettant à différents utilisateurs d’héberger leurs recettes et de les modifier grâce à un système d’authentification via un compte Google, Facebook ou Twitter.</p>
				</div>
			</div>
  	  	</FlippingCardBack>
    </FlippingCard>
)