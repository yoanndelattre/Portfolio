import {darkModeSelecting} from '../../../../../../ColorMode/ColorMode';

export const textFlippingCard = () => {
  if (darkModeSelecting() === true) {
    return ('white');
  }
  if (darkModeSelecting() === false) {
    return ('black');
  }
};

export const backgroundFlippingCardBack = () => {
  if (darkModeSelecting() === true) {
    return ('rgb(51, 51, 51)');
  }
  if (darkModeSelecting() === false) {
    return ('rgb(218, 218, 218)');
  }
};

export const detailsName = () => {
  if (darkModeSelecting() === true) {
    return ('Détails:');
  }
  if (darkModeSelecting() === false) {
    return ('Details:');
  }
};
