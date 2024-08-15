// src/hooks/useResponsiveStyles.js

import { useEffect, useState } from 'react';
import { getFontSize, getImageSize } from '../utils/responsiveStyles';

const useResponsiveStyles = () => {
  const [styles, setStyles] = useState({
    fontSize: (size) => getFontSize(size),
    imageSize: (size) => getImageSize(size),
  });

  useEffect(() => {
    const handleResize = () => {
      setStyles({
        fontSize: (size) => getFontSize(size),
        imageSize: (size) => getImageSize(size),
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return styles;
};

export default useResponsiveStyles;

