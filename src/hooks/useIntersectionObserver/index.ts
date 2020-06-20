import { useEffect, useState } from 'react';

export type TargetType = Element | HTMLDivElement | undefined;
export type IntersectionStatus = {
  isIntersecting: boolean;
};

const defaultOptions: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.1,
};

export const useIntersectionObserver = (
  target: TargetType,
  options: IntersectionObserverInit = defaultOptions
): IntersectionStatus => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!target) {
      return;
    }

    const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
      setIsIntersecting(entry.isIntersecting);
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      options
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target]);

  return { isIntersecting };
};

export default useIntersectionObserver;
