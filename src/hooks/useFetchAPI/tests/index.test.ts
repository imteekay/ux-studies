import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { ProductType } from 'types/Product';
import { useFetchAPI } from '../index';
import { Data, State } from '../types';

describe('useFetchAPI', () => {
  const mock: MockAdapter = new MockAdapter(axios);
  const url: string = '/search';
  const initialData: Data = [];

  it('gets and updates data from the api request', async () => {
    const product: ProductType = {
      name: 'iPhone',
      price: 3500,
      imageUrl: 'image-url.png',
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

    const { isLoading, hasError, data }: State = result.current;

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

    const { isLoading, hasError, data }: State = result.current;

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

    const { isLoading, hasError, data }: State = result.current;

    expect(isLoading).toEqual(false);
    expect(hasError).toEqual(true);
    expect(data).toEqual(initialData);
  });
});
