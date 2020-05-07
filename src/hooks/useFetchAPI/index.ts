import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { State, Data, FetchActionType } from './types';
import { fetchReducer } from './reducer';

export const useFetchAPI = (url: string, initialData: Data = []): State => {
  const initialState: State = {
    isLoading: false,
    hasError: false,
    data: initialData,
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchAPI = async () => {
      dispatch({ type: FetchActionType.FETCH_INIT });

      try {
        const response = await axios.get(url);

        dispatch({
          type: FetchActionType.FETCH_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({ type: FetchActionType.FETCH_ERROR });
      }
    };

    fetchAPI();
  }, [url]);

  return state;
};
