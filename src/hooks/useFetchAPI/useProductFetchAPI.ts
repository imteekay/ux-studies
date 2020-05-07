import { useEffect, useReducer } from 'react';
import axios from 'axios';

import { State, FetchActionType } from './types';
import { fetchReducer } from './reducer';
import { fakeData } from './fakeData';

const fetchProducts = async () => {
  await axios.get('google.com');
  return fakeData;
};

export const useProductFetchAPI = (): State => {
  const initialState: State = {
    isLoading: false,
    hasError: false,
    data: fakeData,
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
