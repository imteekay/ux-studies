import React, { FunctionComponent, MouseEvent } from 'react';
import Button from '@material-ui/core/Button';

type CategoriesProps = {
  categories: string[];
  handleClick: (category: string) => (event: MouseEvent) => void;
};

export const Categories: FunctionComponent<CategoriesProps> = ({
  categories,
  handleClick,
}) => (
  <div>
    {categories.map(category => (
      <Button onClick={handleClick(category)}>{category}</Button>
    ))}
  </div>
);
