import { fakeData } from './fakeData';

export class Backend {
  static products(category: string) {
    switch (category) {
      case 'all':
        return fakeData;
      case 'JavaScript':
        return [fakeData[0]];
      case 'TypeScript':
        return [fakeData[1]];
      default:
        return fakeData;
    }
  }
}
