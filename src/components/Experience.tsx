import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    title: "Human Resource Representative & Bookkeeper (Remote)",
    company: "GET VA 365, OPC",
    date: "May 2023 – February 2025",
    bullets: [
      "Owned monthly, quarterly, and annual tax compliance and SEC filings — zero missed deadlines across the engagement.",
      "Ran full payroll cycles end-to-end, including benefit computation and mandatory government contribution reconciliation.",
      "Kept financial ledgers current and accurate to support reliable reporting across periods.",
      "Managed the complete recruitment pipeline from sourcing through onboarding."
    ]
  },
  {
    title: "Accounting Intern",
    company: "Charles P. Catipay Public Accounting (CPCPA) Services",
    date: "January 2023 – April 2023",
    bullets: [
      "Handled full-cycle accounting for 22 clients — recording, reconciliation, and financial statement preparation.",
      "Independently prepared, reviewed, and filed Annual Income Tax Returns (AITR) and other statutory filings, including all external fieldwork and regulatory coordination."
    ]
  }
];

export default function Experience() {
  const ref = useIntersectionObserver();

  return (
    <section id="experience" className="py-24 px-6 md:px-0">
      <div className="max-w-6xl mx-auto md:pl-[10%]">
        <div ref={ref} className="fade-up">
          <h2 className="font-display text-4xl md:text-[44px] font-semibold text-brand-primary mb-4">
            Experience
          </h2>
          <div className="gold-rule mb-12"></div>
          
          <div className="relative border-l border-brand-accent/20 md:ml-4 space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative pl-8 md:pl-12 group stagger-${index + 1}`}>
                {/* Node dot */}
                <div className="absolute w-3 h-3 bg-brand-bg border-[1.5px] border-brand-secondary/40 rounded-full -left-[6.5px] top-[30px] transition-all duration-500 ease-out group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:shadow-[0_0_12px_rgba(139,105,20,0.5)] group-hover:scale-125 z-10"></div>
                
                <div className="glass-card experience-card p-6 md:p-8 rounded-sm">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="font-display text-[26px] font-semibold text-brand-primary lead-tight">
                        {exp.title}
                      </h3>
                      <div className="font-body text-[16px] text-brand-secondary font-medium mt-1">
                        {exp.company}
                      </div>
                    </div>
                    <div className="font-mono text-[13px] text-brand-accent mt-3 md:mt-1 whitespace-nowrap bg-brand-accent/5 px-3 py-1 rounded border border-brand-accent/10">
                      {exp.date}
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="font-body text-[16px] leading-[1.75] text-brand-secondary flex items-start">
                        <span className="text-brand-accent mr-4 mt-2 opacity-80 text-[8px] transform rotate-45 transition-transform duration-300 group-hover:scale-150 group-hover:text-brand-accent">■</span>
                        <span className="group-hover:text-brand-primary transition-colors duration-300">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
