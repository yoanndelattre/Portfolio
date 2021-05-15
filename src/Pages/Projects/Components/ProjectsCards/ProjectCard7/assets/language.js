import {flagsSelecting} from '../../../../../../Language/flags-selector';

export const descriptionProjectName = () => {
  if (flagsSelecting() === 'fr') {
    return ('L’application Windows-Deployer vous permet de manager une machine virtuelle.');
  } else {
    return ('The Windows-Deployer application allows you to manage a virtual machine.');
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
    return ('L’application Windows-Deployer vous permet de créer et de gérer une machine virtuelle Windows 10 avec KVM sur une instance Scaleway.');
  } else {
    return ('The Windows-Deployer application allows you to create and manage a Windows 10 virtual machine with KVM on a Scaleway instance.');
  }
};
