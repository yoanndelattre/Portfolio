import React, {Component} from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront, UserCard} from 'react-ui-cards';
import LinkWebsiteProject from '../../Link-Website-Project/Link-Website-Project';
import {textFlippingCard, backgroundFlippingCardBack} from './assets/style';
import {tutorialProjectName, descriptionProjectName, detailsName, summaryProjectName} from './assets/language';

// img
import LogoKube from '../../logo/kube-logo.png';
import ImgRaspberrypi from './img/raspberry-pi-3-bplus.jpg';

// css
import '../ProjectsCards.css';

export default class ProjectCard3 extends Component {
  render() {
    return (
      <FlippingCard className="ProjectCard3" >
        <FlippingCardFront>
          <UserCard
            avatar={LogoKube}
            header={ImgRaspberrypi}
            name={<h1 className="titleUserCard">Cluster Raspberry Pi</h1>}
            positionName={<p className="PositionName">{descriptionProjectName()}</p>}
            cardClass={this.props.classUserCard}
          />
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="BackCard FrontCard BackProjectCard3">
            <LinkWebsiteProject TitleWebsite={tutorialProjectName()} LinkWebsite={'https://medium.com/nycdev/k8s-on-pi-9cc14843d43'}/>
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
