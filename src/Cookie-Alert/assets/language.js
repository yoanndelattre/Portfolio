import {flagsSelecting} from '../../Language/flags-selector';

export const cookieBannerMessage = () => {
  if (flagsSelecting() === 'fr') {
    return ('Ce site utilise des cookies.');
  } else {
    return ('This website uses cookies.');
  }
};

export const cookieBannerButton = () => {
  if (flagsSelecting() === 'fr') {
    return ('Accepter');
  } else {
    return ('Accept');
  }
};
