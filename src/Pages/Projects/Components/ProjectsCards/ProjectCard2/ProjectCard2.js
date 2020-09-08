import React, {Component} from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront, UserCard} from 'react-ui-cards';
import LinkGithubProject from '../../Link-Github-Project/Link-Github-Project';
import {textFlippingCard, backgroundFlippingCardBack, detailsName} from './assets/style';
import {descriptionProjectName, summaryProjectName} from './assets/language';

// img
import LogoMail from '../../logo/logo-mail.png';
import CaptureContactPage from './img/capture-contact-page.png';

// css
import '../ProjectsCards.css';

export default class ProjectCard2 extends Component {
  render() {
    return (
      <FlippingCard className="ProjectCard2" >
        <FlippingCardFront>
          <UserCard
            avatar={LogoMail}
            header={CaptureContactPage}
            name={<h1 className="titleUserCard">Mail Send</h1>}
            positionName={<p className="PositionName">{descriptionProjectName()}</p>}
            cardClass={this.props.classUserCard}
          />
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="BackCard FrontCard BackProjectCard2">
            <LinkGithubProject LinkGithub={'https://github.com/yoanndelattre/MailSend-Portfolio'} />
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
