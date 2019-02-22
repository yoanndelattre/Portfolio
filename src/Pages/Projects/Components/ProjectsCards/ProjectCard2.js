import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'

// css 
import './ProjectsCards.css'

export const ProjectCard2 = (
    <FlippingCard className="ProjectCard2" >
			<FlippingCardFront>
				<UserCard 
					name="Projet2"  
					cardClass="FrontCard FrontProjectCard2" 
				/>
  	  </FlippingCardFront>
      <FlippingCardBack>
				<div className="BackCard FrontCard BackProjectCard2">
					Back
				</div>
  	  </FlippingCardBack>
    </FlippingCard>
)