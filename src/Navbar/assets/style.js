import {darkModeSelecting} from '../Navbar';

export const backgroundNavBar = () => {
  if (darkModeSelecting() === true) {
    return '#333';
  }
  if (darkModeSelecting() === false) {
    return 'rgb(218, 218, 218)';
  }
};

export const colorText = () => {
  if (darkModeSelecting() === true) {
    return 'white';
  }
  if (darkModeSelecting() === false) {
    return 'black';
  }
};

export const backgroundNavBarSmart = () => {
  if (darkModeSelecting() === true) {
    return 'rgb(165, 165, 165)';
  }
  if (darkModeSelecting() === false) {
    return 'rgb(218, 218, 218)';
  }
};

export const colorTextFocus = () => {
  if (darkModeSelecting() === true) {
    return 'black';
  }
  if (darkModeSelecting() === false) {
    return 'white';
  }
};

export const backgroundTextFocus = () => {
  if (darkModeSelecting() === true) {
    return 'rgb(218, 218, 218)';
  }
  if (darkModeSelecting() === false) {
    return 'rgb(51, 51, 51)';
  }
};
