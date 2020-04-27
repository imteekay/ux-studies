import React from 'react';
import { useQuery } from '../../hooks/useQuery';

export const Search = () => {
  const query = useQuery();
  console.log(query.get('q'));
  console.log(query.get('categoryId'));

  return <h1>Hello Search</h1>;
};
