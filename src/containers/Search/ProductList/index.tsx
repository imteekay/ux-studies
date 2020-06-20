import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ProductType } from 'types/Product';
import Product from '../../../components/Product';
import ProductSkeleton from '../../../components/Product/Skeleton';

type ProductListPropsType = {
  products: ProductType[];
  isLoading: boolean;
};

const productsSkeleton = [0, 0, 0, 0, 0, 0, 0, 0];

export const ProductList = ({ products, isLoading }: ProductListPropsType) => {
  if (isLoading) {
    return (
      <Grid container spacing={3}>
        {productsSkeleton.map(_ => (
          <Grid item xs={6} md={3}>
            <ProductSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid
          item
          xs={6}
          md={3}
          key={`grid-${product.name}-${product.description}-${product.price}`}
        >
          <Product
            key={`product-${product.name}-${product.description}-${product.price}`}
            imageUrl={product.imageUrl}
            thumbUrl={product.thumbUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            discount={product.discount}
            isShippingFree={product.isShippingFree}
            isLoading={isLoading}
          />
        </Grid>
      ))}
    </Grid>
  );
};
