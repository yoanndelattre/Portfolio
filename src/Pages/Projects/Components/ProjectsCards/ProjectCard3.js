import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkGithubProject from '../Link-Github-Project'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_website from '../logo/logo-website.png'
import capture_markdown_editor from '../img/capture-markdown-editor.png'

// css 
import './ProjectsCards.css'

export const ProjectCard3 = (
    <FlippingCard className="ProjectCard3" >
			<FlippingCardFront>
				<UserCard 
					avatar={logo_website} 
					header={capture_markdown_editor}
					name="Traducteur Markdown" 
					positionName={<p className="PositionName">Site web traducteur instantané de markdown.</p>} 
					cardClass="FrontCard FrontProjectCard3" 
				/>
  	  </FlippingCardFront>
      <FlippingCardBack>
				<div className="BackCard FrontCard BackProjectCard3">
					<LinkGithubProject LinkGithub={"https://github.com/yoanndelattre/Markdown-Editor"} />
					<LinkWebsiteProject TitleWebsite={"Markdown Editor"} LinkWebsite={"https://markdown.yoanndelattre.com"}/>
					<div className="details">
						<h3 className="title-details">Détails:</h3>
						<p className="text-details">Site web traducteur instantané de markdown, le texte tapé est automatiquement sauvegardé dans le navigateur à l'aide de la fonction "Local Storage".</p>
					</div>
				</div>
  	  </FlippingCardBack>
    </FlippingCard>
)