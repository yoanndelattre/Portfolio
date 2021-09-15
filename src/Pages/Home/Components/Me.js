import React, {Component} from 'react';
import {backgroundMeCard, colorText, backgroundCard} from './assets/style';
import {personalAgeUnit, personalClass, socialNetworksName, workToolsName, softwareName, websiteName} from './assets/language';

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
import BinanceLogo from './logo/devtools/binance.png';
import CoinbaseLogo from './logo/devtools/coinbase.png';
import FTXLogo from './logo/devtools/ftx.png';
import YieldAppLogo from './logo/devtools/yieldapp.png';
import MaiarLogo from './logo/devtools/maiar.png';
import MetamaskLogo from './logo/devtools/metamask.png';
import PhantomLogo from './logo/devtools/phantom.png';
import XDEFILogo from './logo/devtools/xdefi.png';
import CoinMarketCapLogo from './logo/devtools/coinmarketcap.png';

// css
import './Me.css';

class Me extends Component {
  componentDidMount() {
    this.getPersonalAge();
  }

  getPersonalAge = () => {
    const birthdayDate = new Date('July 7, 2002 00:00:00');
    const date = new Date();
    let PersonalAge = Math.abs(date-birthdayDate);
    PersonalAge = Math.floor(PersonalAge / 31536000000);
    return PersonalAge;
  }

  render() {
    return (
      <div className="me_card" style={{background: backgroundMeCard(), color: colorText()}} >
        <div style={{background: backgroundCard()}} className="about-me_card">
          <img src={PhotoProfil} alt="profil"/>
          <div className="info-me">
            <h1>Yoann Delattre</h1>
            <h1>{this.getPersonalAge()} {personalAgeUnit()}</h1>
            <h1>{personalClass()}</h1>
          </div>
        </div>
        <div style={{background: backgroundCard()}} className="social-me_card">
          <h2>{socialNetworksName()}</h2>
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
        <div style={{background: backgroundCard()}} className="devtools-me_card">
          <h2>{workToolsName()}</h2>
          <h3>{softwareName()}</h3>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">Visual Code Studio</a><img className="logo" src={VscodeLogo} alt="vscode logo"/></p>
          <p><a style={{color: colorText()}} href="https://www.adobe.com/products/photoshop.html" target="blank">Photoshop CC 2019</a><img className="logo" src={PhotoshopLogo} alt="photoshop logo"/></p>
          <p><a style={{color: colorText()}} href="https://git-scm.com" target="blank">Git</a><img className="logo" src={GitLogo} alt="git logo"/></p>
          <p><a style={{color: colorText()}} href="https://chocolatey.org" target="blank">Chocolatey</a><img className="logo" src={ChocolateyLogo} alt="chocolatey logo"/></p>
          <p><a style={{color: colorText()}} href="https://github.com/docker/toolbox/releases" target="blank">Docker Toolbox</a><img className="logo" src={DockerToolboxLogo} alt="docker toolbox logo"/></p>
          <p><a style={{color: colorText()}} href="https://kitematic.com" target="blank">Kitematic</a><img className="logo" src={KitematicLogo} alt="kitematic logo"/></p>
          <p><a style={{color: colorText()}} href="https://www.vpn.net" target="blank">Logmein Hamachi</a><img className="logo" src={HamachiLogo} alt="hamachi logo"/></p>
          <p><a style={{color: colorText()}} href="https://nodejs.org" target="blank">NodeJs</a><img className="logo" src={NodejsLogo} alt="nodejs logo"/></p>
          <p><a style={{color: colorText()}} href="https://www.virtualbox.org" target="blank">VirtualBox</a><img className="logo" src={VirtualboxLogo} alt="virtualbox logo"/></p>
          <p><a style={{color: colorText()}} href="https://www.vmware.com" target="blank">VmWare</a><img className="logo" src={VmwareLogo} alt="vmware logo"/></p>
          <p><a style={{color: colorText()}} href="https://create-react-app.dev" target="blank">Create React App</a><img className="logo" src={ReactLogo} alt="react logo"/></p>
          <p><a style={{color: colorText()}} href="https://github.com/kubernetes/minikube/releases" target="blank">Minikube</a><img className="logo" src={MinikubeLogo} alt="minikube logo"/></p>
          <p><a style={{color: colorText()}} href="https://www.docker.com/products/docker-desktop" target="blank">Docker Desktop</a><img className="logo" src={DockerDesktopLogo} alt="docker desktop logo"/></p>
          <p><a style={{color: colorText()}} href="https://docs.microsoft.com/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v" target="blank">Hyper V</a><img className="logo" src={HypervLogo} alt="hyperv logo"/></p>
          <p><a style={{color: colorText()}} href="https://nordvpn.com/features" target="blank">NordVPN</a><img className="logo" src={NordvpnLogo} alt="nordvpn logo"/></p>
          <hr/>
          <h3>Crypto :</h3>
          <p><a style={{color: colorText()}} href="https://www.binance.com/fr/register?ref=UV80NG5X" target="blank">Binance</a><img className="logo" src={BinanceLogo} alt="binance logo"/></p>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">Coinbase</a><img className="logo" src={CoinbaseLogo} alt="coinbase logo"/></p>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">FTX</a><img className="logo" src={FTXLogo} alt="ftx logo"/></p>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">Yield App</a><img className="logo" src={YieldAppLogo} alt="yield app logo"/></p>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">Maiar</a><img className="logo" src={MaiarLogo} alt="maiar logo"/></p>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">Metamask</a><img className="logo" src={MetamaskLogo} alt="metamask logo"/></p>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">Phantom</a><img className="logo" src={PhantomLogo} alt="phantom logo"/></p>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">XDEFI</a><img className="logo" src={XDEFILogo} alt="xdefi logo"/></p>
          <p><a style={{color: colorText()}} href="https://code.visualstudio.com" target="blank">CoinMarketCap</a><img className="logo" src={CoinMarketCapLogo} alt="coinmarketcap logo"/></p>
          <hr/>
          <h3>{websiteName()}</h3>
          <p><a style={{color: colorText()}} href="https://todoist.com" target="blank">Todoist</a><img className="logo" src={TodoistLogo} alt="todoist logo"/></p>
          <p><a style={{color: colorText()}} href="https://trello.com" target="blank">Trello</a><img className="logo" src={TrelloLogo} alt="trello logo"/></p>
          <p><a style={{color: colorText()}} href="https://zapier.com" target="blank">Zapier</a><img className="logo" src={ZapierLogo} alt="zapier logo"/></p>
          <p><a style={{color: colorText()}} href="https://heroku.com" target="blank">Heroku</a><img className="logo" src={HerokuLogo} alt="heroku logo"/></p>
          <p><a style={{color: colorText()}} href="https://netlify.com" target="blank">Netlify</a><img className="logo" src={NetlifyLogo} alt="netlify logo"/></p>
          <p><a style={{color: colorText()}} href="https://codeanywhere.com" target="blank">Codeanywhere</a><img className="logo" src={CodeanywhereLogo} alt="codeanywhere logo"/></p>
          <p><a style={{color: colorText()}} href="https://domains.google.com" target="blank">Google Domains</a><img className="logo" src={GoogleDomainsLogo} alt="google domains logo"/></p>
          <p><a style={{color: colorText()}} href="https://cloud.google.com" target="blank">Google Cloud Platform</a><img className="logo" src={GcpLogo} alt="google cloud platform logo"/></p>
          <p><a style={{color: colorText()}} href="https://kubernetes.io" target="blank">Kubernetes</a><img className="logo" src={K8sLogo} alt="kubernetes logo"/></p>
          <p><a style={{color: colorText()}} href="https://github.com" target="blank">GitHub</a><img className="logo" src={GithubLogo} alt="github logo"/></p>
          <p><a style={{color: colorText()}} href="https://gitlab.com" target="blank">GitLab</a><img className="logo" src={GitlabLogo} alt="gitlab logo"/></p>
          <p><a style={{color: colorText()}} href="https://medium.com" target="blank">Medium</a><img className="logo" src={MediumLogo} alt="medium logo"/></p>
        </div>
      </div>
    );
  }
}

export default Me;
