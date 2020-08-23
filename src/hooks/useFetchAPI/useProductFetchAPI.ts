import { useEffect, useReducer } from 'react';

import { State, FetchActionType } from './types';
import { fetchReducer } from './reducer';
import { fetchProducts } from '../../api';

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
