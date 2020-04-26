import { useState, useEffect } from 'react';
import axios from 'axios';

export type Product = {
  name: string;
  price: number;
  description: string;
  isShippingFree: boolean;
  discount: number;
};

export type Data = Product[];
export type FetchAPIResponse = {
  isLoading: boolean;
  hasError: boolean;
  data: Data;
};

export enum FetchActionType {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}

export type FetchAction = {
  type:
    | FetchActionType.FETCH_INIT
    | FetchActionType.FETCH_SUCCESS
    | FetchActionType.FETCH_ERROR;
  payload: Data;
};

export const fetchReducer = (
  state: FetchAPIResponse,
  action: FetchAction
): FetchAPIResponse => {
  switch (action.type) {
    case FetchActionType.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case FetchActionType.FETCH_SUCCESS:
      return {
        ...state,
        hasError: false,
        isLoading: false,
        data: action.payload,
      };
    case FetchActionType.FETCH_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const useFetchAPI = async (
  url: string,
  initialData: Data
): Promise<FetchAPIResponse> => {
  const [data, setData] = useState<Data>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchAPI();
  }, [url]);

  return { isLoading, hasError, data };
};
