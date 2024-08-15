// src/utils/responsiveStyles.js

export const getFontSize = (baseSize, baseWidth = 320) => {
  const screenWidth = window.innerWidth;
  return `${(baseSize * screenWidth) / baseWidth}px`;
};

export const getImageSize = (baseWidth, baseScreenWidth = 320) => {
  const screenWidth = window.innerWidth;
  return `${(baseWidth * screenWidth) / baseScreenWidth}px`;
};

  