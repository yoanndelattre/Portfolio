import React, {Component} from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront, UserCard} from 'react-ui-cards';
import LinkWebsiteProject from '../Link-Website-Project';

// img
import LogoKube from '../logo/kube-logo.png';
import ImgRaspberrypi from '../img/raspberry-pi-3-bplus.jpg';

// css
import './ProjectsCards.css';

export default class ProjectCard3 extends Component {
  tutorialProjectName() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Tutoriel Lien');
    } else {
      return ('Tutorial Link');
    }
  }

  descriptionProjectName() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Cluster de deux Raspberry Pi 3 avec Kubernetes.');
    } else {
      return ('Cluster of two Raspberry Pi 3 with Kubernetes.');
    }
  }

  summaryProjectName() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Cluster composé de deux Raspberry Pi ( Raspberry Pi 3 B et Raspberry Pi 3 B+ ) qui fonctionnent avec Kubernetes.');
    } else {
      return ('Cluster with two Raspberry Pi (Raspberry Pi 3 B and Raspberry Pi 3 B +) that work with Kubernetes.');
    }
  }

  render() {
    return (
      <FlippingCard className="ProjectCard3" >
        <FlippingCardFront>
          <UserCard
            avatar={LogoKube}
            header={ImgRaspberrypi}
            name={<h1 className="titleUserCard">Cluster Raspberry Pi</h1>}
            positionName={<p className="PositionName">{this.descriptionProjectName()}</p>}
            cardClass={this.props.classUserCard}
          />
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="BackCard FrontCard BackProjectCard3">
            <LinkWebsiteProject TitleWebsite={this.tutorialProjectName()} LinkWebsite={'https://medium.com/nycdev/k8s-on-pi-9cc14843d43'}/>
            <div style={{backgroundColor: this.props.backgroundFlippingCardBack}} className="details">
              <h3 style={{color: this.props.textFlippingCard}} className="title-details">
                {this.props.DetailsName}
              </h3>
              <p style={{color: this.props.textFlippingCard}} className="text-details">
                {this.summaryProjectName()}
              </p>
            </div>
          </div>
        </FlippingCardBack>
      </FlippingCard>
    );
  }
}
