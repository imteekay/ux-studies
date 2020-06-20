import { useState, CSSProperties } from 'react';

export type ImageOnLoadType = {
  handleImageOnLoad: () => void;
  imageVisibility: CSSProperties;
  imageOpactity: CSSProperties;
};

export const useImageOnLoad = (): ImageOnLoadType => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageOnLoad = () => setIsLoaded(true);

  const imageVisibility: CSSProperties = {
    visibility: isLoaded ? 'hidden' : 'visible',
    filter: 'blur(10px)',
    transition: 'visibility 0ms ease-out 500ms',
  };

  const imageOpactity: CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 500ms ease-in 0ms',
  };

  return { handleImageOnLoad, imageVisibility, imageOpactity };
};
