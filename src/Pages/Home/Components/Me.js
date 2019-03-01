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
                        <div>
                            <a className="twitter-btn" target="blank" href="https://twitter.com/yoanndelattre_">
                                <img width="30px" src={twitter_btn} alt="twitter button" />
                            </a>
                            <a className="linkedin-btn" target="blank" href="https://www.linkedin.com/in/yoann-delattre">
                                <img width="30px" src={linkedin_btn} alt="linkedin button" />
                            </a>
                            <a className="github-btn" target="blank" href="https://github.com/yoanndelattre">
                                <img width="30px" src={github_btn} alt="github button" />
                            </a>
                        </div>
                    </div>
                    <div className="devtools-me_card">
                        <h2>Mes outils de travail</h2>
                        <h3>Logiciels :</h3>
                        <p><a href="https://code.visualstudio.com" target="blank">Visual Code Studio</a></p>
                        <p><a href="https://www.adobe.com/fr/products/photoshop.html" target="blank">Photoshop CC 2019</a></p>
                        <p><a href="https://git-scm.com" target="blank">Git</a></p>
                        <p><a href="https://chocolatey.org" target="blank">Chocolatey</a></p>
                        <p><a href="https://github.com/docker/toolbox/releases" target="blank">Docker Toolbox</a></p>
                        <p><a href="https://kitematic.com" target="blank">Kitematic</a></p>
                        <p><a href="https://www.vpn.net" target="blank">Logmein Hamachi</a></p>
                        <p><a href="https://nodejs.org" target="blank">NodeJs</a></p>
                        <p><a href="https://www.virtualbox.org" target="blank">VirtualBox</a></p>
                        <p><a href="https://www.vmware.com" target="blank">VmWare</a></p>
                        <p><a href="https://github.com/FredrikNoren/ungit" target="blank">ungit</a></p>
                        <p><a href="https://facebook.github.io/create-react-app" target="blank">create-react-app</a></p>
                        <h3>Site Web :</h3>
                        <p><a href="https://todoist.com" target="blank">Todoist</a></p>
                        <p><a href="https://trello.com" target="blank">Trello</a></p>
                        <p><a href="https://zapier.com" target="blank">Zapier</a></p>
                        <p><a href="https://heroku.com" target="blank">Heroku</a></p>
                        <p><a href="https://netlify.com" target="blank">Netlify</a></p>
                        <p><a href="https://codeanywhere.com" target="blank">Codeanywhere</a></p>
                        <p><a href="https://domains.google.com" target="blank">Google Domains</a></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Me