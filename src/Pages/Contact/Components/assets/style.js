import {darkModeSelecting} from '../../../../ColorMode/ColorMode';

export const colorText = () => {
  if (darkModeSelecting() === true) {
    return ('#e6e6e6');
  }
  if (darkModeSelecting() === false) {
    return ('rgb(77, 92, 102)');
  }
};

export const borderH2 = () => {
  if (darkModeSelecting() === true) {
    return ('3px solid #e6e6e6');
  }
  if (darkModeSelecting() === false) {
    return ('3px solid rgb(77, 92, 102)');
  }
};

export const backgroundInput = () => {
  if (darkModeSelecting() === true) {
    return ('#6C6C6C');
  }
  if (darkModeSelecting() === false) {
    return ('#e6e6e6');
  }
};

export const classPlaceholderForm = () => {
  if (darkModeSelecting() === true) {
    return ('classPlaceholderFormDark');
  }
  if (darkModeSelecting() === false) {
    return ('classPlaceholderFormLight');
  }
};
