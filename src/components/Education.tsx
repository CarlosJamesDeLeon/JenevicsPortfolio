import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Education() {
  const ref = useIntersectionObserver();

  return (
    <section id="education" className="py-24 px-6 md:px-0">
      <div className="max-w-6xl mx-auto md:pl-[10%]">
        <div ref={ref} className="fade-up">
          <h2 className="font-display text-4xl md:text-[44px] font-semibold text-brand-primary mb-4">
            Education
          </h2>
          <div className="gold-rule mb-12"></div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-brand-accent/10 pb-8 stagger-1">
              <div>
                <h3 className="font-body text-[22px] font-medium text-brand-primary">
                  Bachelor of Science in Accountancy
                </h3>
              </div>
              <div className="font-body text-[16px] text-brand-secondary mt-2 md:mt-0 md:text-right">
                Cebu Institute of Technology – University
                <span className="font-mono text-sm text-brand-accent ml-3">May 2025</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-brand-accent/10 pb-8 stagger-2">
              <div>
                <h3 className="font-body text-[22px] font-medium text-brand-primary">
                  Bachelor of Science in Management Accounting
                </h3>
                <div className="font-body text-[15px] italic text-brand-accent mt-2">
                  Dean's Lister, 2019 & 2020
                </div>
              </div>
              <div className="font-body text-[16px] text-brand-secondary mt-2 md:mt-0 md:text-right">
                University of San Jose – Recoletos
                <span className="font-mono text-sm text-brand-accent ml-3">May 2023</span>
              </div>
            </div>
            
            <div className="pt-6 stagger-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="font-body text-sm text-brand-secondary flex flex-wrap items-center">
                  <span className="mr-2">Senior High School</span> 
                  <span className="opacity-50 mx-2">—</span> 
                  <span className="font-medium mr-2">Sibonga National High School</span>
                  <span className="font-mono text-xs text-brand-accent mx-2">2019</span>
                  <span className="italic text-brand-accent/80">With Honors</span>
                </div>
                <div className="font-body text-sm text-brand-secondary flex flex-wrap items-center">
                  <span className="mr-2">Junior High School</span> 
                  <span className="opacity-50 mx-2">—</span> 
                  <span className="font-medium mr-2">Colawin National High School</span>
                  <span className="font-mono text-xs text-brand-accent mx-2">2017</span>
                  <span className="italic text-brand-accent/80">With Honors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
