import {flagsSelecting} from '../../../Language/flags-selector';

export const languageHtmlTag = () => {
  if (flagsSelecting() === 'fr') {
    return ('fr');
  } else {
    return ('en');
  }
};
