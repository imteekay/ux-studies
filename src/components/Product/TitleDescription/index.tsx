import React, { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';

import { ProductType } from 'types/Product';
import { descriptionStyle, descriptionSkeletonStyle } from './styles';

type TitleDescriptionType = Pick<ProductType, 'name' | 'description'>;
type TitleDescriptionPropsType = TitleDescriptionType & {
  isLoading: boolean;
};

export const TitleDescription = ({
  name,
  description,
  isLoading,
}: TitleDescriptionPropsType) => {
  if (isLoading) {
    return (
      <Fragment>
        <Skeleton
          width="60%"
          height="24px"
          data-testid="name-skeleton-loader"
        />
        <Skeleton
          style={descriptionSkeletonStyle}
          height="20px"
          data-testid="description-skeleton-loader"
        />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Typography data-testid="product-name">{name}</Typography>
      <Typography
        data-testid="product-description"
        color="textSecondary"
        variant="body2"
        style={descriptionStyle}
      >
        {description}
      </Typography>
    </Fragment>
  );
};

export default TitleDescription;
