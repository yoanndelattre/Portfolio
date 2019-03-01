import React, { Component, Fragment } from 'react'

// img
import Photo_Profil from '../img/Photo-Profil.jpg'

// logo
import twitter_btn from './logo/twitter.png'
import linkedin_btn from './logo/linkedin.png'
import github_btn from './logo/github.png'

// css
import './Me.css'

class Me extends Component {
    render () {
        return (
            <Fragment>
                <div className="me_card">
                    <div className="about-me_card">
                        <img src={Photo_Profil} alt="profil"/>
                        <div>
                            <p>Yoann Delattre</p>
                            <p>16 ans</p>
                            <p>1er STI2D</p>
                        </div>
                    </div>
                    <div className="social-me_card">
                        <h3>Réseaux Sociaux</h3>
                        <a className="twitter-btn" target="blank" href="https://twitter.com/yoanndelattre_">
                            <img width="64px" src={twitter_btn} alt="twitter button" />
                        </a>
                        <a className="linkedin-btn" target="blank" href="https://www.linkedin.com/in/yoann-delattre">
                            <img width="64px" src={linkedin_btn} alt="linkedin button" />
                        </a>
                        <a className="github-btn" target="blank" href="https://github.com/yoanndelattre">
                            <img width="64px" src={github_btn} alt="github button" />
                        </a>
                    </div>
                    <div className="devtools-me_card">
                        <h2>Mes outils de travail</h2>
                        <h3>Logiciels :</h3>
                        <p>Visual Code Studio</p>
                        <p>Photoshop CC 2019</p>
                        <p>Git</p>
                        <p>Chocolatey</p>
                        <p>Docker Toolbox</p>
                        <p>Kitematic</p>
                        <p>Logmein Hamachi</p>
                        <p>NodeJs</p>
                        <p>VirtualBox</p>
                        <p>VmWare</p>
                        <p>ungit</p>
                        <p>create-react-app</p>
                        <h3>Site Web :</h3>
                        <p>Todoist</p>
                        <p>Trello</p>
                        <p>Zapier</p>
                        <p>Heroku</p>
                        <p>Netlify</p>
                        <p>Codeanywhere</p>
                        <p>Google Domains</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Me