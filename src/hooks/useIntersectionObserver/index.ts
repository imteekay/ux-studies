import { useEffect } from 'react';

type TargetType = Element | HTMLDivElement | null;

const defaultOptions: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.1,
};

export const useIntersectionObserver = (
  target: TargetType,
  onIntersect: IntersectionObserverCallback,
  options: IntersectionObserverInit = defaultOptions
) => {
  useEffect(() => {
    if (target == null) {
      return;
    }

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      options
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target]);
};

export default useIntersectionObserver;
