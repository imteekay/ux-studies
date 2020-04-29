import React from 'react';

import { ProductType } from 'types/Product';

type ImageUrlType = Pick<ProductType, 'imageUrl'>;
type ImageAltType = { imageAlt: string };
type ImagePropsType = ImageUrlType & ImageAltType;

export const Image = ({ imageUrl, imageAlt }: ImagePropsType) => {
  return <img src={imageUrl} alt={imageAlt} />;
};

export default Image;
