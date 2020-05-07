import { ProductType } from 'types/Product';

export type Data = ProductType[];

export type State = {
  isLoading: boolean;
  hasError: boolean;
  data: Data;
};

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

type FetchInitAction = {
  type: FetchActionType.FETCH_INIT;
};

type FetchSuccessAction = {
  type: FetchActionType.FETCH_SUCCESS;
  payload: Data;
};

type FetchErrorAction = {
  type: FetchActionType.FETCH_ERROR;
};

export type FetchAction =
  | FetchInitAction
  | FetchSuccessAction
  | FetchErrorAction;
