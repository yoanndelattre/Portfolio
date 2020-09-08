import React, {Component} from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront, UserCard} from 'react-ui-cards';
import LinkGithubProject from '../../Link-Github-Project/Link-Github-Project';
import {textFlippingCard, backgroundFlippingCardBack, detailsName} from './assets/style';
import {titleProjectName, descriptionProjectName, summaryProjectName} from './assets/language';

// img
import LogoWebsite from '../../logo/logo-website.png';
import CapturePortfolio from './img/capture-portfolio.JPG';

// css
import '../ProjectsCards.css';

export default class ProjectCard1 extends Component {
  render() {
    return (
      <FlippingCard className="ProjectCard1" >
        <FlippingCardFront>
          <UserCard
            avatar={LogoWebsite}
            header={CapturePortfolio}
            name={<h1 className="titleUserCard">{titleProjectName()}</h1>}
            positionName={<p className="PositionName">{descriptionProjectName()}</p>}
            cardClass={this.props.classUserCard}
          />
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="BackCard BackProjectCard1">
            <LinkGithubProject LinkGithub={'https://github.com/yoanndelattre/Portfolio'} />
            <div style={{backgroundColor: backgroundFlippingCardBack()}} className="details">
              <h3 style={{color: textFlippingCard()}} className="title-details">
                {detailsName()}
              </h3>
              <p style={{fontSize: '14px', color: textFlippingCard()}} className="text-details">
                {summaryProjectName()}
              </p>
            </div>
          </div>
        </FlippingCardBack>
      </FlippingCard>
    );
  }
}
