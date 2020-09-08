import {darkModeSelecting} from '../../../Navbar/Navbar';
import Mainbackground from '../img/Mainbackground.jpg';

export const backgroundContainer = () => {
  if (darkModeSelecting() === true) {
    return ('rgb(88, 88, 88)');
  }
  if (darkModeSelecting() === false) {
    return ('rgb(165, 165, 165)');
  }
};

export const backgroundImage = () => {
  if (window.innerWidth <= 768) {
    return ('none');
  } else {
    return (`url(${ Mainbackground })`);
  }
};
