import { useState, useEffect } from 'react';
import axios from 'axios';

type Product = {
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
