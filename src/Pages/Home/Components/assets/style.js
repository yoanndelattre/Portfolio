import {darkModeSelecting} from '../../../../ColorMode/ColorMode';

export const backgroundMeCard = () => {
  if (darkModeSelecting() === true) {
    return ('rgb(107, 107, 107)');
  }
  if (darkModeSelecting() === false) {
    return ('rgb(218, 218, 218)');
  }
};

export const colorText = () => {
  if (darkModeSelecting() === true) {
    return ('white');
  }
  if (darkModeSelecting() === false) {
    return ('black');
  }
};

export const backgroundCard = () => {
  if (darkModeSelecting() === true) {
    return ('rgb(63, 63, 63)');
  }
  if (darkModeSelecting() === false) {
    return ('rgb(165, 165, 165)');
  }
};
