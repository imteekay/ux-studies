import { CSSProperties } from 'react';

export const imageWrapperStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  height: 170,
  borderRadius: '8px',
  marginBottom: '8px',
};

export const imageStyle: CSSProperties = {
  position: 'absolute',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
};

export const skeletonStyle: CSSProperties = {
  borderRadius: '8px',
  marginBottom: '8px',
};
