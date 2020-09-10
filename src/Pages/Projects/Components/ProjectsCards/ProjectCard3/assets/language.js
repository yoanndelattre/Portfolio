import {flagsSelecting} from '../../../../../../Language/flags-selector';

export const tutorialProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Tutoriel Lien');
  } else {
    return ('Tutorial Link');
  }
};

export const descriptionProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Cluster de deux Raspberry Pi 3 avec Kubernetes.');
  } else {
    return ('Cluster of two Raspberry Pi 3 with Kubernetes.');
  }
};

export const detailsName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Détails:');
  } else {
    return ('Details:');
  }
};

export const summaryProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('Cluster composé de deux Raspberry Pi ( Raspberry Pi 3 B et Raspberry Pi 3 B+ ) qui fonctionnent avec Kubernetes.');
  } else {
    return ('Cluster with two Raspberry Pi (Raspberry Pi 3 B and Raspberry Pi 3 B +) that work with Kubernetes.');
  }
};
