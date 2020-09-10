import {flagsSelecting} from '../../../../../../Language/flags-selector';

export const descriptionProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Request Middleware est une application qui envoie des requêtes GET aux services.');
  } else {
    return ('Request Middleware is an application that sends GET requests to services.');
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
    return ('L’application reçoit une requête POST avec des variables comme l’url cible. Et une requête GET est envoyée à l’url cible.');
  } else {
    return ('The application receives a POST request with variables like the target url. And a GET request is sent to the target url.');
  }
};
