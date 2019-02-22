import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'

// css 
import './ProjectsCards.css'

export const ProjectCard5 = (
    <FlippingCard className="ProjectCard5" >
			<FlippingCardFront>
				<UserCard 
					name="Projet5"  
					cardClass="FrontCard FrontProjectCard5" 
				/>
  	  </FlippingCardFront>
      <FlippingCardBack>
				<div className="BackCard FrontCard BackProjectCard5">
					Back
				</div>
  	  </FlippingCardBack>
    </FlippingCard>
)