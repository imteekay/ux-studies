import React, { Fragment } from 'react';

import { ProductType } from 'types/Product';

export const TitleDescription = ({
  name,
  description,
}: Partial<ProductType>) => {
  return (
    <Fragment>
      <p>{name}</p>
      <p>{description}</p>
    </Fragment>
  );
};

export default TitleDescription;
