import { RefObject, useEffect } from 'react';
import { FetchNextPageOptions } from 'react-query';

export interface IntersectionObserverParams {
  root?: any; //TODO: verify types this arg
  target: RefObject<HTMLDivElement>;
  onIntersect?: any; //TODO: verify types this arg
  threshold?: number;
  rootMargin: string;
  enabled: boolean;
}

export default function useIntersectionObserver({
  root = null,
  target,
  onIntersect,
  threshold = 0.5,
  rootMargin = '0px',
  enabled = true,
}: IntersectionObserverParams) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root?.current,
        rootMargin,
        threshold,
      }
    );

    const element = target?.current;

    if (!element) {
      return;
    }

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.current, enabled]);
}
