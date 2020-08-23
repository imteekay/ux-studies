import React, { FunctionComponent, useState } from 'react';
import Button from '@material-ui/core/Button';

import { State } from '../../hooks/useFetchAPI/types';
import { useProductFetchAPI } from '../../hooks/useFetchAPI/useProductFetchAPI';
import { ProductList } from './ProductList';

export const Search: FunctionComponent = () => {
  const [category, setCategory] = useState('all');
  const { isLoading, hasError, data }: State = useProductFetchAPI(category);

  if (hasError) {
    return <h2>Error</h2>;
  }

  return (
    <>
      <div>
        <Button onClick={() => setCategory('all')}>All</Button>
        <Button onClick={() => setCategory('JavaScript')}>JavaScript</Button>
        <Button onClick={() => setCategory('TypeScript')}>TypeScript</Button>
      </div>

      <ProductList products={data} isLoading={isLoading} />
    </>
  );
};
