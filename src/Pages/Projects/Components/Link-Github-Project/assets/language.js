import {flagsSelecting} from '../../../../../Language/flags-selector';

export const sourceCodeName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Code Source');
  } else {
    return ('Source Code');
  }
};
