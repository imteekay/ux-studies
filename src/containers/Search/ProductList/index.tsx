import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ProductType } from 'types/Product';
import Product from '../../../components/Product';

type ProductListPropsType = {
  products: ProductType[];
  isLoading: boolean;
};

export const ProductList = ({ products, isLoading }: ProductListPropsType) => {
  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid item xs={6} sm={3}>
          <Product
            key={`${product.name}-${product.description}-${product.price}`}
            imageUrl={product.imageUrl}
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
