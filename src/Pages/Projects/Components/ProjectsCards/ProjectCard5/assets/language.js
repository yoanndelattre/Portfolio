import {flagsSelecting} from '../../../../../../Language/flags-selector';

export const descriptionProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Site web permettant à différents utilisateurs de communiquer.');
  } else {
    return ('Website allowing different users to communicate.');
  }
};

export const summaryProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Site web permettant à différents utilisateurs de communiquer sous un pseudo qu’ils auront préalablement indiqué sur la page de connexion. Hébergé par le service Cloud Run sur Google Cloud Platform.');
  } else {
    return ('Website allowing different users to communicate under a username they have previously indicated on the login page. Hosted by the Cloud Run service on Google Cloud Platform.');
  }
};
