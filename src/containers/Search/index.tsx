import React, { FunctionComponent } from 'react';
import { State } from '../../hooks/useFetchAPI/types';
import { useProductFetchAPI } from '../../hooks/useFetchAPI/useProductFetchAPI';
import { ProductList } from './ProductList';

export const Search: FunctionComponent = () => {
  const { isLoading, hasError, data }: State = useProductFetchAPI();

  if (hasError) {
    return <h2>Error</h2>;
  }

  return <ProductList products={data} isLoading={isLoading} />;
};
