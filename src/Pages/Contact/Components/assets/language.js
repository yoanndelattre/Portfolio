import {flagsSelecting} from '../../../../Language/flags-selector';

export const contactMe = () => {
  if (flagsSelecting() === 'fr') {
    return ('Contactez-Moi');
  } else {
    return ('Contact Me');
  }
};

export const nameUser = () => {
  if (flagsSelecting() === 'fr') {
    return ('Nom et Prénom :');
  } else {
    return ('Name :');
  }
};

export const messageUser = () => {
  if (flagsSelecting() === 'fr') {
    return ('Votre Message :');
  } else {
    return ('Your Message :');
  }
};

export const widthborderBottom = () => {
  if (flagsSelecting() === 'fr') {
    return ('180px');
  } else {
    return ('140px');
  }
};
