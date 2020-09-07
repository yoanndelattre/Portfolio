export const selectedSize = () => {
  if (window.innerWidth <= 768) {
    return 25;
  } else {
    return 30;
  }
};

export const alignOptions = () => {
  if (window.innerWidth <= 768) {
    return 'left';
  }
};
