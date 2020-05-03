import { ProductType } from 'types/Product';
import { fetchReducer } from '../reducer';
import { Data, FetchAPIResponse, FetchAction, FetchActionType } from '../types';

describe('fetchReducer', () => {
  const initialData: Data = [];
  const initialState: FetchAPIResponse = {
    isLoading: false,
    hasError: false,
    data: initialData,
  };

  describe('when dispatch FETCH_INIT action', () => {
    it('returns the isLoading as true without any error', () => {
      const action: FetchAction = {
        type: FetchActionType.FETCH_INIT,
        payload: [],
      };

      expect(fetchReducer(initialState, action)).toEqual({
        isLoading: true,
        hasError: false,
        data: initialData,
      });
    });
  });

  describe('when dispatch FETCH_SUCCESS action', () => {
    it('returns the the API data', () => {
      const product: ProductType = {
        name: 'iPhone',
        price: 3500,
        imageUrl: 'image-url.png',
        description: 'Apple mobile phone',
        isShippingFree: true,
        discount: 0,
      };

      const action: FetchAction = {
        type: FetchActionType.FETCH_SUCCESS,
        payload: [product],
      };

      expect(fetchReducer(initialState, action)).toEqual({
        isLoading: false,
        hasError: false,
        data: [product],
      });
    });
  });

  describe('when dispatch FETCH_ERROR action', () => {
    it('returns the isLoading as true without any error', () => {
      const action: FetchAction = {
        type: FetchActionType.FETCH_ERROR,
        payload: [],
      };

      expect(fetchReducer(initialState, action)).toEqual({
        isLoading: false,
        hasError: true,
        data: [],
      });
    });
  });
});
