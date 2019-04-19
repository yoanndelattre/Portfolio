import React, { Component } from 'react';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon } from 'react-share';

//css
import './ShareButton.css'

class ShareButton extends Component {

    state = {
        sizeButton: '35'
    }

    componentDidMount () {
        if (window.innerWidth <= 768) {
            this.setState ({ sizeButton: '31' })
        }
    }    

    render () {

        const shareUrl = 'https://yoanndelattre.com'
        const title = 'Yoann Delattre | Portfolio'

        return (
            <div className='buttons' style={{display: this.props.display}}>
                <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="button facebook-share-button"
                    hashtag='#Portfolio'>
                    <FacebookIcon
                        size={this.state.sizeButton}
                        round 
                    />
                </FacebookShareButton>
                <LinkedinShareButton
                    url={shareUrl}
                    title={title}
                    className="button linkedin-share-button">
                    <LinkedinIcon
                        size={this.state.sizeButton}
                        round 
                    />
                </LinkedinShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title={title + ' →'}
                    via='yoanndelattre_'
                    className="button twitter-share-button">
                    <TwitterIcon
                        size={this.state.sizeButton}
                        round 
                    />
                </TwitterShareButton>
                <EmailShareButton
                    subject={title}
                    body={title + ' → ' + shareUrl}
                    className="button email-share-button">
                    <EmailIcon
                        size={this.state.sizeButton}
                        round 
                    />
                </EmailShareButton>
            </div>
        )
    }
}

export default ShareButton