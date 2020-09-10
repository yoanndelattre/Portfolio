import {darkModeSelecting} from '../../ColorMode/ColorMode';

export const cookieBannerbackgroundColor = () => {
  if (darkModeSelecting() === true) {
    return ('rgb(51, 51, 51)');
  }
  if (darkModeSelecting() === false) {
    return ('rgb(218, 218, 218)');
  }
};

export const cookieMessageColor = () => {
  if (darkModeSelecting() === true) {
    return ('white');
  }
  if (darkModeSelecting() === false) {
    return ('black');
  }
};

export const cookieButtonColor = () => {
  if (darkModeSelecting() === true) {
    return ('black');
  }
  if (darkModeSelecting() === false) {
    return ('white');
  }
};
