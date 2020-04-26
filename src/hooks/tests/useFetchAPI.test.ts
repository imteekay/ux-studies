import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  useFetchAPI,
  Data,
  FetchAPIResponse,
  fetchReducer,
  FetchAction,
  FetchActionType,
  Product,
} from '../useFetchAPI';

describe('useFetchAPI', () => {
  const mock: MockAdapter = new MockAdapter(axios);
  const url: string = '/search';
  const initialData: Data = [];

  it('gets and updates data from the api request', async () => {
    const product: Product = {
      name: 'iPhone',
      price: 3500,
      description: 'Apple mobile phone',
      isShippingFree: true,
      discount: 0,
    };

    const mockedResponseData: Data = [product];

    mock.onGet(url).reply(200, mockedResponseData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAPI(url, initialData)
    );

    await waitForNextUpdate();

    const {
      isLoading,
      hasError,
      data,
    }: FetchAPIResponse = await result.current;

    expect(isLoading).toEqual(false);
    expect(hasError).toEqual(false);
    expect(data).toEqual([product]);
  });

  it('handles error on timed-out api request', async () => {
    mock.onGet(url).timeout();

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAPI(url, initialData)
    );

    await waitForNextUpdate();

    const {
      isLoading,
      hasError,
      data,
    }: FetchAPIResponse = await result.current;

    expect(isLoading).toEqual(false);
    expect(hasError).toEqual(true);
    expect(data).toEqual(initialData);
  });

  it('handles error on failed network api request', async () => {
    mock.onGet(url).networkError();

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchAPI(url, initialData)
    );

    await waitForNextUpdate();

    const {
      isLoading,
      hasError,
      data,
    }: FetchAPIResponse = await result.current;

    expect(isLoading).toEqual(false);
    expect(hasError).toEqual(true);
    expect(data).toEqual(initialData);
  });
});

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
      const product: Product = {
        name: 'iPhone',
        price: 3500,
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
