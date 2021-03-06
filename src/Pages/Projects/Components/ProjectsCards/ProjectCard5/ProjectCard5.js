import React, {Component} from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront, UserCard} from 'react-ui-cards';
import LinkGithubProject from '../../Link-Github-Project/Link-Github-Project';
import LinkWebsiteProject from '../../Link-Website-Project/Link-Website-Project';
import {textFlippingCard, backgroundFlippingCardBack} from './assets/style';
import {descriptionProjectName, summaryProjectName, detailsName} from './assets/language';

// img
import LogoWebsite from '../../logo/logo-website.png';
import CaptureChatbox from './img/capture-chatbox.png';

// css
import '../ProjectsCards.css';

export default class ProjectCard5 extends Component {
  render() {
    return (
      <FlippingCard className="ProjectCard5" >
        <FlippingCardFront>
          <UserCard
            avatar={LogoWebsite}
            header={CaptureChatbox}
            name={<h1 className="titleUserCard">Chatbox</h1>}
            positionName={<p className="PositionName">{descriptionProjectName()}</p>}
            cardClass={this.props.classUserCard}
          />
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="BackCard FrontCard BackProjectCard5">
            <LinkGithubProject LinkGithub={'https://github.com/yoanndelattre/Web-Chatbox'} />
            <LinkWebsiteProject TitleWebsite={'Chatbox'} LinkWebsite={'https://chatbox.yoanndelattre.com'}/>
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
