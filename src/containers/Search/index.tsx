import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { useFetchAPI } from '../../hooks/useFetchAPI';

export const Search = () => {
  const query = useQuery();
  const { isLoading, hasError, data } = useFetchAPI(
    'https://pokeapi.co/api/v2/pokemon/ditto/',
    []
  );

  if (hasError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <h1>Hello Search</h1>;
};
