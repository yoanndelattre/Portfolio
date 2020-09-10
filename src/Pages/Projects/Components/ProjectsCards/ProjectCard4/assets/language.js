import {flagsSelecting} from '../../../../../../Language/flags-selector';

export const titleProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Traducteur Markdown');
  } else {
    return ('Markdown Translator');
  }
};

export const descriptionProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Site web traducteur instantané de markdown.');
  } else {
    return ('Instant markdown translator website.');
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
    return ('Site web traducteur instantané de markdown, le texte saisi est automatiquement sauvegardé dans le navigateur à l’aide de la fonction "Local Storage". Hébergé par le service Cloud Run sur Google Cloud Platform.');
  } else {
    return ('Website instant markdown translator, the entered text is automatically saved in the browser using the "Local Storage" function. Hosted by the Cloud Run service on Google Cloud Platform.');
  }
};
