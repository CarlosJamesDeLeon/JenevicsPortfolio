import { useEffect, useRef } from 'react';

export function useIntersectionObserver() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // Also trigger any gold rules inside this section
          const rules = entry.target.querySelectorAll('.gold-rule');
          rules.forEach(rule => rule.classList.add('is-visible'));
          
          // Optional: stop observing once visible
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
}
