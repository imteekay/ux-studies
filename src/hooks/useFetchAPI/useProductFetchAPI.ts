import { useEffect, useReducer } from 'react';

import { State, FetchActionType } from './types';
import { fetchReducer } from './reducer';
import { fakeData } from './fakeData';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fetchProducts = async (category: string) => {
  await sleep(500);

  console.log('category', category);

  switch (category) {
    case 'all':
      return fakeData;
    case 'JavaScript':
      return [fakeData[0]];
    case 'TypeScript':
      return [fakeData[1]];
    default:
      return fakeData;
  }
};

export const useProductFetchAPI = (category: string): State => {
  const initialState: State = {
    isLoading: false,
    hasError: false,
    data: [],
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchAPI = async () => {
      dispatch({ type: FetchActionType.FETCH_INIT });

      try {
        const payload = await fetchProducts(category);

        dispatch({
          type: FetchActionType.FETCH_SUCCESS,
          payload,
        });
      } catch (error) {
        dispatch({ type: FetchActionType.FETCH_ERROR });
      }
    };

    fetchAPI();
  }, [category]);

  return state;
};

export { State };
