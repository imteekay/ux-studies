import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { ProductType } from 'types/Product';

type ImageUrlType = Pick<ProductType, 'imageUrl'>;
type ImageAttrType = { imageAlt: string; width?: string };
type ImageStateType = { isLoading: boolean };
type ImagePropsType = ImageUrlType & ImageAttrType & ImageStateType;

export const Image = ({
  imageUrl,
  imageAlt,
  width,
  isLoading,
}: ImagePropsType) => {
  if (isLoading) {
    return <Skeleton variant="rect" width={width} height={167} />;
  }

  return <img src={imageUrl} alt={imageAlt} width={width} height={167} />;
};

Image.defaultProps = {
  width: '100%',
};

export default Image;
