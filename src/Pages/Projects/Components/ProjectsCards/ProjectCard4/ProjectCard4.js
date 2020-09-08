import React, {Component} from 'react';
import {FlippingCard, FlippingCardBack, FlippingCardFront, UserCard} from 'react-ui-cards';
import LinkGithubProject from '../../Link-Github-Project/Link-Github-Project';
import LinkWebsiteProject from '../../Link-Website-Project/Link-Website-Project';
import {textFlippingCard, backgroundFlippingCardBack, detailsName} from './assets/style';
import {titleProjectName, descriptionProjectName, summaryProjectName} from './assets/language';

// img
import LogoWebsite from '../../logo/logo-website.png';
import CaptureMarkdownEditor from './img/capture-markdown-editor.png';

// css
import '../ProjectsCards.css';

export default class ProjectCard4 extends Component {
  render() {
    return (
      <FlippingCard className="ProjectCard4" >
        <FlippingCardFront>
          <UserCard
            avatar={LogoWebsite}
            header={CaptureMarkdownEditor}
            name={<h1 className="titleUserCard">{titleProjectName()}</h1>}
            positionName={<p className="PositionName">{descriptionProjectName()}</p>}
            cardClass={this.props.classUserCard}
          />
        </FlippingCardFront>
        <FlippingCardBack>
          <div className="BackCard FrontCard BackProjectCard4">
            <LinkGithubProject LinkGithub={'https://github.com/yoanndelattre/Markdown-Editor'} />
            <LinkWebsiteProject TitleWebsite={'Markdown Editor'} LinkWebsite={'https://markdown.yoanndelattre.com'}/>
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
