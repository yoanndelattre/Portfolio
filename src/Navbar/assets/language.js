import {flagsSelecting} from '../../Language/flags-selector';

export const projectsCategoryName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Projets');
  } else {
    return ('Projects');
  }
};
