import React, {
  memo,
  useCallback,
  useState,
  CSSProperties,
  Fragment,
} from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import { ProductType } from 'types/Product';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { imageWrapperStyle, imageStyle, skeletonStyle } from './styles';
import { useImageOnLoad, ImageOnLoadType } from './useImageOnLoad';

type ImageUrlType = Pick<ProductType, 'imageUrl'>;
type ImageAttrType = { imageAlt: string; width: string };
type ImageStateType = { isLoading: boolean };
type ImageStyleType = {
  imageWrapperStyle: CSSProperties;
  imageStyle: CSSProperties;
};

export type ImagePropsType = ImageUrlType &
  ImageAttrType &
  ImageStateType &
  ImageStyleType;

export const Image = ({
  imageUrl,
  imageAlt,
  width,
  isLoading,
  imageWrapperStyle,
  imageStyle,
}: ImagePropsType) => {
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement>(null);
  const wrapperCallback = useCallback(node => {
    setWrapperRef(node);
  }, []);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const showImageSkeleton: boolean = isLoading || !isIntersecting;

  const onIntersection = (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    setIsIntersecting(entry.isIntersecting);

    if (wrapperRef != null && entry.isIntersecting) {
      observer.unobserve(wrapperRef);
    }
  };

  useIntersectionObserver(wrapperRef, onIntersection);

  const {
    handleImageOnLoad,
    imageVisibility,
    imageOpactity,
  }: ImageOnLoadType = useImageOnLoad();

  return (
    <div ref={wrapperCallback} style={imageWrapperStyle}>
      {showImageSkeleton ? (
        <Skeleton
          variant="rect"
          width={width}
          height={imageWrapperStyle.height}
          style={skeletonStyle}
          data-testid="image-skeleton-loader"
        />
      ) : (
        <Fragment>
          <img
            src={imageUrl}
            alt={imageAlt}
            width={width}
            style={{ ...imageStyle, ...imageVisibility }}
          />
          <img
            onLoad={handleImageOnLoad}
            src={imageUrl}
            alt={imageAlt}
            width={width}
            style={{ ...imageStyle, ...imageOpactity }}
          />
        </Fragment>
      )}
    </div>
  );
};

Image.defaultProps = {
  width: '100%',
  imageWrapperStyle,
  imageStyle,
};

export default memo(Image);
