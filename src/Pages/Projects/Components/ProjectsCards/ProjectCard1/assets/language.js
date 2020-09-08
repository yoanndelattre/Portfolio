import {flagsSelecting} from '../../../../../../Language/flags-selector';

export const titleProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Portfolio (ce site)');
  } else {
    return ('Portfolio (this website)');
  }
};

export const descriptionProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Site web public qui expose mes projets et permet de me contacter.');
  } else {
    return ('Public website that exposes my projects and allow to contact me.');
  }
};

export const summaryProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Site Web public qui expose les logiciels et les sites web que j’utilise. Qui présente mes projects et qui permet de me contacter. Hébergé par le service Cloud Run sur Google Cloud Platform.');
  } else {
    return ('Public website that exposes the software and websites I use. Who presents my projects and who allows me to contact me. Hosted by the Cloud Run service on Google Cloud Platform.');
  }
};
