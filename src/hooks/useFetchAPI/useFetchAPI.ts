import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { Data, FetchAPIResponse, FetchActionType } from './types';
import { fetchReducer } from './reducer';

export const useFetchAPI = async (
  url: string,
  initialData: Data
): Promise<FetchAPIResponse> => {
  const initialState: FetchAPIResponse = {
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
