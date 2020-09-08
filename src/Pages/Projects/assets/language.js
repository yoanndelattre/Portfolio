import {flagsSelecting} from '../../../Language/flags-selector';

export const languageHtmlTag = () => {
  if (flagsSelecting() === 'fr') {
    return ('fr');
  } else {
    return ('en');
  }
};

export const projectsHtmlName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Projets');
  } else {
    return ('My Projects');
  }
};

export const myProjectsName = () => {
    if (flagsSelecting() === 'fr') {
      return ('Mes Projets');
    } else {
      return ('My Projects');
    }
  };
