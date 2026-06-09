import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const ref = useIntersectionObserver();

  return (
    <section id="contact" className="py-24 px-6 md:px-0 bg-[#F1F5F9] text-brand-primary relative overflow-hidden">
      {/* Dark watermark effect for footer */}
      <div className="absolute left-[-10%] bottom-0 pointer-events-none z-0">
        <div className="parallax-reverse">
          <div className="font-display font-semibold text-[320px] text-transparent bg-clip-text bg-gradient-to-br from-brand-secondary/10 to-transparent select-none animate-float leading-none">
            JDM
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto md:pl-[10%] relative z-10">
        <div ref={ref} className="fade-up">
          <h2 className="font-display text-4xl md:text-[44px] font-semibold text-brand-primary mb-4">
            Let's Connect
          </h2>
          <div className="gold-rule mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-24">
            <div className="stagger-1">
              <p className="font-body text-[18px] leading-[1.75] text-brand-secondary max-w-[420px]">
                Whether you need a meticulous accountant, a tax compliance specialist, or someone who just gets things done right — I'd love to hear from you.
              </p>
            </div>
            
            <div className="flex flex-col space-y-6 stagger-2 md:pl-12">
              <a href="mailto:jenevic.mariscal@gmail.com" className="font-body text-[18px] text-brand-primary inline-flex w-fit link-underline">
                jenevic.mariscal@gmail.com
              </a>
              <a href="tel:+639206671904" className="font-mono text-[16px] text-brand-primary inline-flex w-fit link-underline">
                +63 920 667 1904
              </a>
              <a href="https://www.linkedin.com/in/jenevicmariscal/" target="_blank" rel="noopener noreferrer" className="font-body text-[18px] text-brand-primary inline-flex w-fit link-underline">
                LinkedIn
              </a>
              <div className="font-body text-[16px] text-brand-secondary pt-2">
                Argao, Cebu, Philippines
              </div>
            </div>
          </div>
          
          <div className="border-t border-brand-accent/10 pt-8 flex justify-between items-center stagger-3">
            <div className="font-mono text-[11px] text-brand-secondary/60 uppercase tracking-[0.2em]">
              © 2026 Jenevic D. Mariscal · Built with care
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
