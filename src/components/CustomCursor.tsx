import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices to avoid lingering dots
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      if (dotRef.current) dotRef.current.style.display = 'none';
      if (ringRef.current) ringRef.current.style.display = 'none';
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let requestRef: number;
    let isPointer = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      let currentTarget = e.target as HTMLElement | null;
      let clickable = false;
      while (currentTarget && currentTarget !== document.body) {
        const style = window.getComputedStyle(currentTarget);
        if (
          style.cursor === 'pointer' ||
          currentTarget.tagName.toLowerCase() === 'a' ||
          currentTarget.tagName.toLowerCase() === 'button' ||
          currentTarget.onclick != null
        ) {
          clickable = true;
          break;
        }
        currentTarget = currentTarget.parentElement;
      }
      isPointer = clickable;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isPointer ? 2.5 : 1})`;
        if (isPointer) {
           dotRef.current.style.backgroundColor = 'rgba(124, 58, 237, 0.2)';
           dotRef.current.style.border = '1px solid #7C3AED';
        } else {
           dotRef.current.style.backgroundColor = '#7C3AED';
           dotRef.current.style.border = 'none';
        }
      }
    };

    const render = () => {
      // Smooth lerp for the ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${isPointer ? 0.3 : 1})`;
        ringRef.current.style.opacity = isPointer ? '0' : '1';
      }

      requestRef = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef = requestAnimationFrame(render);
    
    // Hide default cursor on most elements, but keep text cursor for inputs
    const style = document.createElement('style');
    style.innerHTML = `
      body, a, button, select, .cursor-pointer { cursor: none !important; }
      input, textarea { cursor: text !important; }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#7C3AED] rounded-full pointer-events-none z-[10000] will-change-[transform] transition-all duration-150 ease-out"
      />
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-[#7C3AED] rounded-full pointer-events-none z-[9999] will-change-[transform,opacity] transition-opacity duration-300"
      />
    </>
  );
}
