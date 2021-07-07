import {flagsSelecting} from '../../../../Language/flags-selector';

export const personalAgeUnit = () => {
  if (flagsSelecting() === 'fr') {
    return ('ans');
  } else {
    return ('years');
  }
};

export const personalClass = () => {
  if (flagsSelecting() === 'fr') {
    return ('CESI prépa d\'ingénieur');
  } else {
    return ('CESI Engineer school');
  }
};

export const socialNetworksName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Réseaux Sociaux');
  } else {
    return ('Social Networks');
  }
};

export const workToolsName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Mes outils de travail');
  } else {
    return ('My work tools');
  }
};

export const softwareName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Logiciels :');
  } else {
    return ('Software :');
  }
};

export const websiteName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Site Web :');
  } else {
    return ('Website :');
  }
};
