import { ProductType } from 'types/Product';

export const fakeData: ProductType[] = [
  {
    imageUrl:
      'https://raw.githubusercontent.com/leandrotk/tk/master/2020/04/react-hooks-context-api-and-pokemons/assets/ash.gif',
    name: 'Pokemon',
    description: 'Some description here',
    price: 100,
    discount: 10,
    isShippingFree: true,
  },
  {
    imageUrl:
      'https://raw.githubusercontent.com/leandrotk/tk/master/2020/04/typescript-learnings-002-type-system/assets/cover.jpg',
    name: 'Rino',
    description: 'Some description here',
    price: 70,
    discount: 50,
    isShippingFree: true,
  },
];
