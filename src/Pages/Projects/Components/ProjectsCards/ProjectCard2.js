import React from 'react'
import { FlippingCard, FlippingCardBack, FlippingCardFront, UserCard } from 'react-ui-cards'
import LinkWebsiteProject from '../Link-Website-Project'

// img
import logo_docker_swarm from '../logo/logo-docker-swarm.png'
import img_raspberrypi from '../img/raspberry-pi-3-bplus.jpg'

// css 
import './ProjectsCards.css'

export const ProjectCard2 = (
  <FlippingCard className="ProjectCard2" >
		<FlippingCardFront>
			<UserCard 
				avatar={logo_docker_swarm} 
				header={img_raspberrypi}
				name="Cluster Raspberry Pi" 
				positionName={<p className="PositionName">Cluster de deux Raspberry Pi 3 avec Docker Swarm.</p>} 
				cardClass="FrontCard FrontProjectCard1" 
			/>
  	</FlippingCardFront>
    <FlippingCardBack>
			<div className="BackCard FrontCard BackProjectCard2">
				<LinkWebsiteProject TitleWebsite={"Cluster Live Viewer"} LinkWebsite={"https://visualizer-docker.yoanndelattre.com"} />
				<div className="details">
					<h3 className="title-details">Détails:</h3>
					<p className="text-details">Cluster composé de deux Raspberry Pi ( Raspberry Pi 3 B et Raspberry Pi 3 B+ ) fonctionnent avec Docker Swarm. Après la demande d'approbation de l'administrateur, de nouveaux conteneurs sont automatiquement démarrés pour mettre à jour l'application.</p>
				</div>
			</div>
  	</FlippingCardBack>
</FlippingCard>
)