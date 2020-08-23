import React, { MouseEvent, FunctionComponent, useState } from 'react';

import { State } from '../../hooks/useFetchAPI/types';
import { useProductFetchAPI } from '../../hooks/useFetchAPI/useProductFetchAPI';
import { ProductList } from './ProductList';
import { Categories } from './Categories';

export const Search: FunctionComponent = () => {
  const [category, setCategory] = useState('all');
  const { isLoading, hasError, data }: State = useProductFetchAPI(category);

  if (hasError) {
    return <h2>Error</h2>;
  }

  const categories = ['all', 'JavaScript', 'TypeScript'];
  const updateCategory = (category: string) => (_: MouseEvent) => {
    setCategory(category);
  };

  return (
    <>
      <Categories categories={categories} handleClick={updateCategory} />
      <ProductList products={data} isLoading={isLoading} />
    </>
  );
};
