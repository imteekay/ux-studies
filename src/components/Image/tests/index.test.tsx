import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Image, ImagePropsType } from '../index';

type ImageType = Pick<ImagePropsType, 'imageUrl' | 'imageAlt' | 'isLoading'>;

describe('Product', () => {
  const imageProps: ImageType = {
    imageUrl: 'url.com.br',
    imageAlt: 'the image alt',
    isLoading: false,
  };

  describe('when the product has no discount', () => {
    it('shows the product skeleton', () => {
      const { queryByTestId } = render(<Image {...imageProps} isLoading />);

      expect(queryByTestId('image-skeleton-loader')).toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Image {...imageProps} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
