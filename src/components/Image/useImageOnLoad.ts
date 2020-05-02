import { useState, CSSProperties } from 'react';

export type ImageOnLoadType = {
  handleImageOnLoad: () => void;
  imageVisibility: CSSProperties;
  imageOpactity: CSSProperties;
};

export const useImageOnLoad = (
  defaultIsLoaded: boolean = false
): ImageOnLoadType => {
  const [isLoaded, setIsLoaded] = useState(defaultIsLoaded);
  const handleImageOnLoad = () => setIsLoaded(true);

  const imageVisibility: CSSProperties = {
    visibility: isLoaded ? 'hidden' : 'visible',
    filter: 'blur(20px)',
    transform: 'scale(1.1)',
    transition: 'visibility 0ms ease 400ms',
  };

  const imageOpactity: CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 400ms ease 0ms',
  };

  return { handleImageOnLoad, imageVisibility, imageOpactity };
};
