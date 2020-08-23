import { Backend } from './backend';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async (category: string) => {
  await sleep(500);
  return Backend.products(category);
};
