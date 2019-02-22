import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'

// css 
import './ProjectsCards.css'

export const ProjectCard4 = (
    <FlippingCard className="ProjectCard4" >
			<FlippingCardFront>
				<UserCard 
					name="Projet4"  
					cardClass="FrontCard FrontProjectCard4" 
				/>
  	  </FlippingCardFront>
      <FlippingCardBack>
				<div className="BackCard FrontCard BackProjectCard4">
					Back
				</div>
  	  </FlippingCardBack>
    </FlippingCard>
)