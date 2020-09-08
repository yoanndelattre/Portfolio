import {darkModeSelecting} from '../../../ColorMode/ColorMode';

export const backgroundContainer = () => {
  if (darkModeSelecting() === true) {
    return ('rgb(88, 88, 88)');
  }
  if (darkModeSelecting() === false) {
    return ('rgb(165, 165, 165)');
  }
};

export const displayShareButton = () => {
  if (window.innerWidth <= 768) {
    return ('none');
  } else {
    return ('flex');
  }
};
