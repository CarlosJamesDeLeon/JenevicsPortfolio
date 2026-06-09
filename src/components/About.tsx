import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const ref = useIntersectionObserver();

  return (
    <section id="about" className="py-24 px-6 md:px-0">
      <div className="max-w-6xl mx-auto md:pl-[10%]">
        <div ref={ref} className="fade-up">
          <h2 className="font-display text-4xl md:text-[44px] font-semibold text-brand-primary mb-4">
            About
          </h2>
          <div className="gold-rule mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-7">
              <p className="font-body text-[17px] leading-[1.75] text-brand-secondary stagger-1">
                I hold dual degrees in Accountancy and Management Accounting, and I passed the Philippine CPA Board Examination in May 2026. My work lives at the intersection of compliance and clarity — whether I'm managing tax filings for a remote team, reconciling multi-client ledgers, or navigating regulatory coordination under deadline pressure. I thrive in structured, detail-oriented environments and bring the same standard of accuracy to every engagement I take on.
              </p>
            </div>
            
            <div className="md:col-span-5 flex flex-col space-y-10 md:pl-12 border-t md:border-t-0 pt-8 md:pt-0 md:border-l border-brand-accent/20 stagger-2 relative">
              <div>
                <div className="font-display text-5xl md:text-[72px] font-semibold text-gradient-gold leading-none mb-3 drop-shadow flex items-center gap-1">22<span className="text-4xl">+</span></div>
                <div className="font-body text-xs text-brand-secondary uppercase tracking-[0.15em] font-medium">Clients managed as an intern</div>
              </div>
              
              <div>
                <div className="font-display text-5xl md:text-[72px] font-semibold text-gradient-gold leading-none mb-3 drop-shadow">5</div>
                <div className="font-body text-xs text-brand-secondary uppercase tracking-[0.15em] font-medium">Professional certifications</div>
              </div>
              
              <div>
                <div className="font-display text-5xl md:text-[72px] font-semibold text-gradient-gold leading-none mb-3 drop-shadow">2</div>
                <div className="font-body text-xs text-brand-secondary uppercase tracking-[0.15em] font-medium">Degrees earned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
