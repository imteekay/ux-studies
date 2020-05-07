import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Image, ImagePropsType } from '../index';

type ImageType = Pick<ImagePropsType, 'imageUrl' | 'imageAlt' | 'isLoading'>;

describe('Image', () => {
  const imageProps: ImageType = {
    imageUrl: 'url.com.br',
    imageAlt: 'the image alt',
    isLoading: false,
  };

  describe('when the image is loading', () => {
    it('shows the image skeleton', () => {
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
