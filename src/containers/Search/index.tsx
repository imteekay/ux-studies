import React, { FunctionComponent } from 'react';

import { State } from '../../hooks/useFetchAPI/types';
import { useProductFetchAPI } from '../../hooks/useFetchAPI/useProductFetchAPI';
import { useCategory } from '../../hooks/useCategory';
import { ProductList } from './ProductList';
import { Categories } from './Categories';

export const Search: FunctionComponent = () => {
  const { category, updateCategory, categories } = useCategory();
  const { isLoading, hasError, data }: State = useProductFetchAPI(category);

  if (hasError) {
    return <h2>Error</h2>;
  }

  return (
    <>
      <Categories categories={categories} handleClick={updateCategory} />
      <ProductList products={data} isLoading={isLoading} />
    </>
  );
};
