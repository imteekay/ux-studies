import { Product } from 'domain/types';

export type Data = Product[];
export type FetchAPIResponse = {
  isLoading: boolean;
  hasError: boolean;
  data?: Data;
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
  payload?: Data;
};
