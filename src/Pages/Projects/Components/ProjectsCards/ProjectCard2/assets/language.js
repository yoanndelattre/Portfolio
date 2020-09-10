import {flagsSelecting} from '../../../../../../Language/flags-selector';

export const descriptionProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Service backend pour l’envoi de courrier lié au site Portfolio.');
  } else {
    return ('Backend service for sending mail related to the Portfolio website.');
  }
};

export const detailsName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Détails:');
  } else {
    return ('Details:');
  }
};

export const summaryProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Application qui reçoit le message à envoyer par mail via une requête POST du site web Portfolio. Hébergé par le service Cloud Run sur Google Cloud Platform.');
  } else {
    return ('Application that receives the message to send by email via a POST request from the Portfolio website. Hosted by the Cloud Run service on Google Cloud Platform.');
  }
};
