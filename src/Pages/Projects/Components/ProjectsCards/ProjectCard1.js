import React, {Component} from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront, UserCard} from 'react-ui-cards';
import LinkGithubProject from '../Link-Github-Project';

// img
import LogoWebsite from '../logo/logo-website.png';
import CapturePortfolio from '../img/capture-portfolio.JPG';

// css
import './ProjectsCards.css';

export default class ProjectCard1 extends Component {
  titleProjectName() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Portfolio (ce site)');
    } else {
      return ('Portfolio (this website)');
    }
  }

  descriptionProjectName() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Site web public qui expose mes projets et permet de me contacter.');
    } else {
      return ('Public website that exposes my projects and allow to contact me.');
    }
  }

  summaryProjectName() {
    if (localStorage.getItem('language') === 'FR') {
      return ('Site Web public qui expose les logiciels et les sites web que j’utilise. Qui présente mes projects et qui permet de me contacter. Hébergé par le service Cloud Run sur Google Cloud Platform.');
    } else {
      return ('Public website that exposes the software and websites I use. Who presents my projects and who allows me to contact me. Hosted by the Cloud Run service on Google Cloud Platform.');
    }
  }

  render() {
    return (
      <FlippingCard className="ProjectCard1" >
        <FlippingCardFront>
          <UserCard
            avatar={LogoWebsite}
            header={CapturePortfolio}
            name={<h1 className="titleUserCard">{this.titleProjectName()}</h1>}
            positionName={<p className="PositionName">{this.descriptionProjectName()}</p>}
            cardClass={this.props.classUserCard}
          />
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="BackCard BackProjectCard1">
            <LinkGithubProject LinkGithub={'https://github.com/yoanndelattre/Portfolio'} />
            <div style={{backgroundColor: this.props.backgroundFlippingCardBack}} className="details">
              <h3 style={{color: this.props.textFlippingCard}} className="title-details">
                {this.props.DetailsName}
              </h3>
              <p style={{fontSize: '14px', color: this.props.textFlippingCard}} className="text-details">
                {this.summaryProjectName()}
              </p>
            </div>
          </div>
        </FlippingCardBack>
      </FlippingCard>
    );
  }
}
