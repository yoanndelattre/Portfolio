import {darkModeSelecting} from '../../../ColorMode/ColorMode';
import Projectsbackground from '../img/Projectsbackground.jpg';

export const textTitle = () => {
  if (darkModeSelecting() === true) {
    return ('black');
  }
  if (darkModeSelecting() === false) {
    return ('white');
  }
};

export const backgroundContainer = () => {
  if (window.innerWidth <= 768) {
    if (darkModeSelecting() === true) {
      return ('rgb(88, 88, 88)');
    }
    if (darkModeSelecting() === false) {
      return ('rgb(165, 165, 165)');
    }
  }
};

export const backgroundImage = () => {
  if (window.innerWidth <= 768) {
    return ('none');
  } else {
    return (`url(${ Projectsbackground })`);
  }
};

export const classprojectsContainer = () => {
  if (window.innerWidth <= 768) {
    return ('projectsContainerSmart');
  } else {
    return ('projectsContainer');
  }
};

export const displayShareButton = () => {
  if (window.innerWidth <= 768) {
    return ('none');
  } else {
    return ('flex');
  }
};
