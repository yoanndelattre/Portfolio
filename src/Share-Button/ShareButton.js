import React, {Component} from 'react';
import {FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon} from 'react-share';
import {sizeButton} from './assets/style';

// css
import './ShareButton.css';

class ShareButton extends Component {
  render() {
    const shareUrl = 'https://yoanndelattre.com';
    const title = 'Yoann Delattre | Portfolio';

    return (
      <div className='buttons' style={{display: this.props.display}}>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="button facebook-share-button"
          hashtag='#Portfolio'>
          <FacebookIcon
            size={sizeButton()}
            round
          />
        </FacebookShareButton>
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          className="button linkedin-share-button">
          <LinkedinIcon
            size={sizeButton()}
            round
          />
        </LinkedinShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title + ' →'}
          via='yoanndelattre_'
          className="button twitter-share-button">
          <TwitterIcon
            size={sizeButton()}
            round
          />
        </TwitterShareButton>
        <EmailShareButton
          subject={title}
          body={title + ' → ' + shareUrl}
          className="button email-share-button">
          <EmailIcon
            size={sizeButton()}
            round
          />
        </EmailShareButton>
      </div>
    );
  }
}

export default ShareButton;
