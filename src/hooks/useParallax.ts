import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
