import React, { Fragment } from 'react';

import { ProductType } from 'types/Product';

export const Price = ({ price, discount }: Partial<ProductType>) => {
  return (
    <Fragment>
      <p>{price}</p>
      <p>{discount}</p>
    </Fragment>
  );
};

export default Price;
