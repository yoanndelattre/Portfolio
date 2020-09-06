import React, {Component} from 'react';

// img
import PhotoProfil from '../img/Photo-Profil.jpg';

// logo
import TwitterBtn from './logo/twitter.png';
import LinkedinBtn from './logo/linkedin.png';
import GithubBtn from './logo/github.png';
import VscodeLogo from './logo/devtools/VSCode.png';
import PhotoshopLogo from './logo/devtools/photoshop.png';
import GitLogo from './logo/devtools/git.png';
import ChocolateyLogo from './logo/devtools/chocolatey.png';
import DockerToolboxLogo from './logo/devtools/docker_toolbox.png';
import KitematicLogo from './logo/devtools/kitematic.svg';
import HamachiLogo from './logo/devtools/hamachi.png';
import NodejsLogo from './logo/devtools/nodejs.png';
import VirtualboxLogo from './logo/devtools/virtualbox.png';
import VmwareLogo from './logo/devtools/vmware.png';
import ReactLogo from './logo/devtools/react.png';
import TodoistLogo from './logo/devtools/todoist.png';
import TrelloLogo from './logo/devtools/trello.png';
import ZapierLogo from './logo/devtools/zapier.png';
import HerokuLogo from './logo/devtools/heroku.png';
import NetlifyLogo from './logo/devtools/netlify.png';
import CodeanywhereLogo from './logo/devtools/codeanywhere.png';
import GoogleDomainsLogo from './logo/devtools/google_domains.png';
import GcpLogo from './logo/devtools/gcp.png';
import K8sLogo from './logo/devtools/k8s.png';
import MinikubeLogo from './logo/devtools/minikube.png';
import DockerDesktopLogo from './logo/devtools/docker_desktop.png';
import GithubLogo from './logo/devtools/github.png';
import GitlabLogo from './logo/devtools/gitlab.png';
import HypervLogo from './logo/devtools/hyperv.png';
import NordvpnLogo from './logo/devtools/nordvpn.png';
import MediumLogo from './logo/devtools/medium.png';

// css
import './Me.css';

class Me extends Component {
  personalAge() {
    if (localStorage.getItem('language') === 'FR') {
      return (<h1>18 ans</h1>);
    } else {
      return (<h1>18 years</h1>);
    }
  }

  personalClass() {
    if (localStorage.getItem('language') === 'FR') {
      return (<h1>CESI prépa d&apos;ingénieur</h1>);
    } else {
      return (<h1>CESI Engineer school</h1>);
    }
  }

  socialNetworksName() {
    if (localStorage.getItem('language') === 'FR') {
      return (<h2>Réseaux Sociaux</h2>);
    } else {
      return (<h2>Social Networks</h2>);
    }
  }

  workToolsName() {
    if (localStorage.getItem('language') === 'FR') {
      return (<h2>Mes outils de travail</h2>);
    } else {
      return (<h2>My work tools</h2>);
    }
  }

  softwareName() {
    if (localStorage.getItem('language') === 'FR') {
      return (<h3>Logiciels :</h3>);
    } else {
      return (<h3>Software :</h3>);
    }
  }

  websiteName() {
    if (localStorage.getItem('language') === 'FR') {
      return (<h3>Site Web :</h3>);
    } else {
      return (<h3>Website :</h3>);
    }
  }

  render() {
    return (
      <div className="me_card" style={{background: this.props.backgroundMeCard, color: this.props.ColorText}} >
        <div style={{background: this.props.backgroundCard}} className="about-me_card">
          <img src={PhotoProfil} alt="profil"/>
          <div className="info-me">
            <h1>Yoann Delattre</h1>
            {this.personalAge()}
            {this.personalClass()}
          </div>
        </div>
        <div style={{background: this.props.backgroundCard}} className="social-me_card">
          {this.socialNetworksName()}
          <div>
            <a className="twitter-btn" target="blank" href="https://twitter.com/yoanndelattre_">
              <img src={TwitterBtn} alt="twitter logo" />
            </a>
            <a className="linkedin-btn" target="blank" href="https://www.linkedin.com/in/yoann-delattre">
              <img src={LinkedinBtn} alt="linkedin logo" />
            </a>
            <a className="github-btn" target="blank" href="https://github.com/yoanndelattre">
              <img src={GithubBtn} alt="github logo" />
            </a>
          </div>
        </div>
        <div style={{background: this.props.backgroundCard}} className="devtools-me_card">
          {this.workToolsName()}
          {this.softwareName()}
          <p><a style={{color: this.props.ColorText}} href="https://code.visualstudio.com" target="blank">Visual Code Studio</a><img className="logo" src={VscodeLogo} alt="vscode logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://www.adobe.com/products/photoshop.html" target="blank">Photoshop CC 2019</a><img className="logo" src={PhotoshopLogo} alt="photoshop logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://git-scm.com" target="blank">Git</a><img className="logo" src={GitLogo} alt="git logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://chocolatey.org" target="blank">Chocolatey</a><img className="logo" src={ChocolateyLogo} alt="chocolatey logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://github.com/docker/toolbox/releases" target="blank">Docker Toolbox</a><img className="logo" src={DockerToolboxLogo} alt="docker toolbox logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://kitematic.com" target="blank">Kitematic</a><img className="logo" src={KitematicLogo} alt="kitematic logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://www.vpn.net" target="blank">Logmein Hamachi</a><img className="logo" src={HamachiLogo} alt="hamachi logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://nodejs.org" target="blank">NodeJs</a><img className="logo" src={NodejsLogo} alt="nodejs logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://www.virtualbox.org" target="blank">VirtualBox</a><img className="logo" src={VirtualboxLogo} alt="virtualbox logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://www.vmware.com" target="blank">VmWare</a><img className="logo" src={VmwareLogo} alt="vmware logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://create-react-app.dev" target="blank">Create React App</a><img className="logo" src={ReactLogo} alt="react logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://github.com/kubernetes/minikube/releases" target="blank">Minikube</a><img className="logo" src={MinikubeLogo} alt="minikube logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://www.docker.com/products/docker-desktop" target="blank">Docker Desktop</a><img className="logo" src={DockerDesktopLogo} alt="docker desktop logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://docs.microsoft.com/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v" target="blank">Hyper V</a><img className="logo" src={HypervLogo} alt="hyperv logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://nordvpn.com/features" target="blank">NordVPN</a><img className="logo" src={NordvpnLogo} alt="nordvpn logo"/></p>
          <hr/>
          {this.websiteName()}
          <p><a style={{color: this.props.ColorText}} href="https://todoist.com" target="blank">Todoist</a><img className="logo" src={TodoistLogo} alt="todoist logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://trello.com" target="blank">Trello</a><img className="logo" src={TrelloLogo} alt="trello logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://zapier.com" target="blank">Zapier</a><img className="logo" src={ZapierLogo} alt="zapier logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://heroku.com" target="blank">Heroku</a><img className="logo" src={HerokuLogo} alt="heroku logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://netlify.com" target="blank">Netlify</a><img className="logo" src={NetlifyLogo} alt="netlify logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://codeanywhere.com" target="blank">Codeanywhere</a><img className="logo" src={CodeanywhereLogo} alt="codeanywhere logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://domains.google.com" target="blank">Google Domains</a><img className="logo" src={GoogleDomainsLogo} alt="google domains logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://cloud.google.com" target="blank">Google Cloud Platform</a><img className="logo" src={GcpLogo} alt="google cloud platform logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://kubernetes.io" target="blank">Kubernetes</a><img className="logo" src={K8sLogo} alt="kubernetes logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://github.com" target="blank">GitHub</a><img className="logo" src={GithubLogo} alt="github logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://gitlab.com" target="blank">GitLab</a><img className="logo" src={GitlabLogo} alt="gitlab logo"/></p>
          <p><a style={{color: this.props.ColorText}} href="https://medium.com" target="blank">Medium</a><img className="logo" src={MediumLogo} alt="medium logo"/></p>
        </div>
      </div>
    );
  }
}

export default Me;
