import React, { Component, Fragment } from 'react'

// img
import Photo_Profil from '../img/Photo-Profil.jpg'

// logo
import twitter_btn from './logo/twitter.png'
import linkedin_btn from './logo/linkedin.png'
import github_btn from './logo/github.png'

import vscode_logo from './logo/devtools/VSCode.png'
import photoshop_logo from './logo/devtools/photoshop.png'
import git_logo from './logo/devtools/git.png'
import chocolatey_logo from './logo/devtools/chocolatey.png'
import docker_toolbox_logo from './logo/devtools/docker_toolbox.png'
import kitematic_logo from './logo/devtools/kitematic.svg'
import hamachi_logo from './logo/devtools/hamachi.png'
import nodejs_logo from './logo/devtools/nodejs.png'
import virtualbox_logo from './logo/devtools/virtualbox.png'
import vmware_logo from './logo/devtools/vmware.png'
import ungit_logo from './logo/devtools/ungit.png'
import react_logo from './logo/devtools/react.png'
import todoist_logo from './logo/devtools/todoist.png'
import trello_logo from './logo/devtools/trello.png'
import zapier_logo from './logo/devtools/zapier.png'
import heroku_logo from './logo/devtools/heroku.png'
import netlify_logo from './logo/devtools/netlify.png'
import codeanywhere_logo from './logo/devtools/codeanywhere.png'
import google_domains_logo from './logo/devtools/google_domains.png'
import gcp_logo from './logo/devtools/gcp.png'
import k8s_logo from './logo/devtools/k8s.png'
import minikube_logo from './logo/devtools/minikube.png'
import docker_desktop_logo from './logo/devtools/docker_desktop.png'
import github_logo from './logo/devtools/github.png'
import gitlab_logo from './logo/devtools/gitlab.png'

// css
import './Me.css'

class Me extends Component {
    render () {
        return (
            <Fragment>
                <div className="me_card" style={{ background: this.props.backgroundMeCard, color: this.props.ColorText }} >
                    <div style={{ background: this.props.backgroundCard }} className="about-me_card">
                        <img src={Photo_Profil} alt="profil"/>
                        <div className="info-me">
                            <h1>Yoann Delattre</h1>
                            <h1>16 ans</h1>
                            <h1>1er STI2D</h1>
                        </div>
                    </div>
                    <div style={{ background: this.props.backgroundCard }} className="social-me_card">
                        <h2>Réseaux Sociaux</h2>
                        <div>
                            <a className="twitter-btn" target="blank" href="https://twitter.com/yoanndelattre_">
                                <img src={twitter_btn} alt="twitter logo" />
                            </a>
                            <a className="linkedin-btn" target="blank" href="https://www.linkedin.com/in/yoann-delattre">
                                <img src={linkedin_btn} alt="linkedin logo" />
                            </a>
                            <a className="github-btn" target="blank" href="https://github.com/yoanndelattre">
                                <img src={github_btn} alt="github logo" />
                            </a>
                        </div>
                    </div>
                    <div style={{ background: this.props.backgroundCard }} className="devtools-me_card">
                        <h2>Mes outils de travail</h2>
                        <h3>Logiciels :</h3>
                        <p><a style={{ color: this.props.ColorText }} href="https://code.visualstudio.com" target="blank">Visual Code Studio</a><img className="logo" src={vscode_logo} alt="vscode logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://www.adobe.com/fr/products/photoshop.html" target="blank">Photoshop CC 2019</a><img className="logo" src={photoshop_logo} alt="photoshop logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://git-scm.com" target="blank">Git</a><img className="logo" src={git_logo} alt="git logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://chocolatey.org" target="blank">Chocolatey</a><img className="logo" src={chocolatey_logo} alt="chocolatey logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://github.com/docker/toolbox/releases" target="blank">Docker Toolbox</a><img className="logo" src={docker_toolbox_logo} alt="docker toolbox logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://kitematic.com" target="blank">Kitematic</a><img className="logo" src={kitematic_logo} alt="kitematic logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://www.vpn.net" target="blank">Logmein Hamachi</a><img className="logo" src={hamachi_logo} alt="hamachi logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://nodejs.org" target="blank">NodeJs</a><img className="logo" src={nodejs_logo} alt="nodejs logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://www.virtualbox.org" target="blank">VirtualBox</a><img className="logo" src={virtualbox_logo} alt="virtualbox logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://www.vmware.com" target="blank">VmWare</a><img className="logo" src={vmware_logo} alt="vmware logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://github.com/FredrikNoren/ungit" target="blank">Ungit</a><img className="logo" src={ungit_logo} alt="ungit logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://facebook.github.io/create-react-app" target="blank">Create React App</a><img className="logo" src={react_logo} alt="react logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://github.com/kubernetes/minikube/releases" target="blank">Minikube</a><img className="logo" src={minikube_logo} alt="minikube logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://hub.docker.com/editions/community/docker-ce-desktop-windows" target="blank">Docker Desktop</a><img className="logo" src={docker_desktop_logo} alt="docker desktop logo"/></p>
                        <hr/>
                        <h3>Site Web :</h3>
                        <p><a style={{ color: this.props.ColorText }} href="https://todoist.com" target="blank">Todoist</a><img className="logo" src={todoist_logo} alt="todoist logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://trello.com" target="blank">Trello</a><img className="logo" src={trello_logo} alt="trello logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://zapier.com" target="blank">Zapier</a><img className="logo" src={zapier_logo} alt="zapier logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://heroku.com" target="blank">Heroku</a><img className="logo" src={heroku_logo} alt="heroku logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://netlify.com" target="blank">Netlify</a><img className="logo" src={netlify_logo} alt="netlify logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://codeanywhere.com" target="blank">Codeanywhere</a><img className="logo" src={codeanywhere_logo} alt="codeanywhere logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://domains.google.com" target="blank">Google Domains</a><img className="logo" src={google_domains_logo} alt="google domains logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://cloud.google.com" target="blank">Google Cloud Platform</a><img className="logo" src={gcp_logo} alt="google cloud platform logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://kubernetes.io/docs" target="blank">Kubernetes</a><img className="logo" src={k8s_logo} alt="kubernetes logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://github.com" target="blank">GitHub</a><img className="logo" src={github_logo} alt="github logo"/></p>
                        <p><a style={{ color: this.props.ColorText }} href="https://gitlab.com" target="blank">GitLab</a><img className="logo" src={gitlab_logo} alt="gitlab logo"/></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Me