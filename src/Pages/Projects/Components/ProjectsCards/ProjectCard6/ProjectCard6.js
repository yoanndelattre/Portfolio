import React, {Component} from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront, UserCard} from 'react-ui-cards';
import LinkGithubProject from '../../Link-Github-Project/Link-Github-Project';
import {textFlippingCard, backgroundFlippingCardBack} from './assets/style';
import {descriptionProjectName, detailsName, summaryProjectName} from './assets/language';

// img
import LogoRequest from '../../logo/logo-request.png';
import CaptureRequest from './img/capture-request.png';

// css
import '../ProjectsCards.css';

export default class ProjectCard6 extends Component {
  render() {
    return (
      <FlippingCard className="ProjectCard6" >
        <FlippingCardFront>
          <UserCard
            avatar={LogoRequest}
            header={CaptureRequest}
            name={<h1 className="titleUserCard">Request Middleware</h1>}
            positionName={<p className="PositionName">{descriptionProjectName()}</p>}
            cardClass={this.props.classUserCard}
          />
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="BackCard FrontCard BackProjectCard6">
            <LinkGithubProject LinkGithub={'https://github.com/yoanndelattre/Request-Middleware'} />
            <div style={{backgroundColor: backgroundFlippingCardBack()}} className="details">
              <h3 style={{color: textFlippingCard()}} className="title-details">
                {detailsName()}
              </h3>
              <p style={{color: textFlippingCard()}} className="text-details">
                {summaryProjectName()}
              </p>
            </div>
          </div>
        </FlippingCardBack>
      </FlippingCard>
    );
  }
}
