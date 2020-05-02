import React, { CSSProperties } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { ProductType } from 'types/Product';
import { imageWrapperStyle, imageStyle, skeletonStyle } from './styles';
import { useImageOnLoad, ImageOnLoadType } from './useImageOnLoad';

type ImageUrlType = Pick<ProductType, 'imageUrl'>;
type ImageAttrType = { imageAlt: string; width?: string };
type ImageStateType = { isLoading: boolean };
type ImageStyleType = {
  imageWrapperStyle: CSSProperties;
  imageStyle: CSSProperties;
};

type ImagePropsType = ImageUrlType &
  ImageAttrType &
  ImageStateType &
  ImageStyleType;

export const Image = ({
  imageUrl,
  imageAlt,
  width,
  isLoading,
  imageWrapperStyle,
  imageStyle,
}: ImagePropsType) => {
  const {
    handleImageOnLoad,
    imageVisibility,
    imageOpactity,
  }: ImageOnLoadType = useImageOnLoad();

  if (isLoading) {
    return (
      <Skeleton
        variant="rect"
        width={width}
        height={imageWrapperStyle.height}
        style={skeletonStyle}
      />
    );
  }

  return (
    <div style={imageWrapperStyle}>
      <img
        src={imageUrl}
        alt={imageAlt}
        width={width}
        style={{ ...imageStyle, ...imageVisibility }}
      />
      <img
        onLoad={handleImageOnLoad}
        src={imageUrl}
        alt={imageAlt}
        width={width}
        style={{ ...imageStyle, ...imageOpactity }}
      />
    </div>
  );
};

Image.defaultProps = {
  width: '100%',
  imageWrapperStyle,
  imageStyle,
};

export default Image;
