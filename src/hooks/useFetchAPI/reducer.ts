import { State, FetchActionType, FetchAction } from './types';

export const fetchReducer = (state: State, action: FetchAction): State => {
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
