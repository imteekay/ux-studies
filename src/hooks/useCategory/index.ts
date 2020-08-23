import { MouseEvent, useState } from 'react';

export function useCategory() {
  const defaultCategory = 'all';
  const [category, setCategory] = useState(defaultCategory);
  const categories = [defaultCategory, 'JavaScript', 'TypeScript'];
  const updateCategory = (category: string) => (_: MouseEvent) => {
    setCategory(category);
  };

  return { category, updateCategory, categories };
}
