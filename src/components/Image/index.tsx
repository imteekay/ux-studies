import React from 'react';

import { ProductType } from 'types/Product';

type ImageUrlType = Pick<ProductType, 'imageUrl'>;
type ImageAttrType = { imageAlt: string; width?: string };
type ImagePropsType = ImageUrlType & ImageAttrType;

export const Image = ({ imageUrl, imageAlt, width }: ImagePropsType) => {
  return <img src={imageUrl} alt={imageAlt} width={width} />;
};

Image.defaultProps = {
  width: '100%',
};

export default Image;
