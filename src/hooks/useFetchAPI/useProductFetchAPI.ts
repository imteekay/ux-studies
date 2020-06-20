import { useEffect, useReducer } from 'react';

import { State, FetchActionType } from './types';
import { fetchReducer } from './reducer';
import { fakeData } from './fakeData';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fetchProducts = async () => {
  await sleep(500);
  return fakeData;
};

export const useProductFetchAPI = (): State => {
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
        const payload = await fetchProducts();

        dispatch({
          type: FetchActionType.FETCH_SUCCESS,
          payload,
        });
      } catch (error) {
        dispatch({ type: FetchActionType.FETCH_ERROR });
      }
    };

    fetchAPI();
  }, []);

  return state;
};

export { State };
