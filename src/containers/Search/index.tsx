import React from 'react';
import { useFetchAPI, FetchAPIResponse } from '../../hooks/useFetchAPI';
import { fakeData } from './fakeData';
import { ProductList } from './ProductList';

export const Search = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto/';
  const { isLoading, hasError, data }: FetchAPIResponse = useFetchAPI(url);

  console.log(data);

  if (hasError) {
    return <h1>Error</h1>;
  }

  return <ProductList products={fakeData} isLoading={isLoading} />;
};
