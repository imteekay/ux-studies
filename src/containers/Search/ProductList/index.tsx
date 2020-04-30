import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ProductType } from 'types/Product';
import Product from '../../../components/Product';

export const ProductList = ({ products }: { products: ProductType[] }) => {
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
          />
        </Grid>
      ))}
    </Grid>
  );
};
