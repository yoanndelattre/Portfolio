import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'

// css 
import './ProjectsCards.css'

export const ProjectCard3 = (
    <FlippingCard className="ProjectCard3" >
			<FlippingCardFront>
				<UserCard 
					name="Projet3"  
					cardClass="FrontCard FrontProjectCard3" 
				/>
  	  </FlippingCardFront>
      <FlippingCardBack>
				<div className="BackCard FrontCard BackProjectCard3">
					Back
				</div>
  	  </FlippingCardBack>
    </FlippingCard>
)