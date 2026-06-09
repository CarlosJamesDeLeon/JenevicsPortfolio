import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const credentialsList = [
  {
    acronym: "CPA",
    name: "Certified Public Accountant",
    body: "Board of Accountancy – Philippines",
    date: "May 2026"
  },
  {
    acronym: "CTT",
    name: "Certified Tax Technician",
    body: "PACTT – Philippine Association of Certified Tax Technicians",
    date: "April 2023"
  },
  {
    acronym: "MICB",
    name: "Member of the Institute of Certified Bookkeepers (CAT Level 1)",
    body: "National Institute of Accounting Technicians (NIAT)",
    date: "December 2023"
  },
  {
    acronym: "RCA",
    name: "Registered Cost Accountant (CAT Level 2)",
    body: "National Institute of Accounting Technicians (NIAT)",
    date: "June 2024"
  },
  {
    acronym: "CAT",
    name: "Certified Accounting Technician (CAT Level 3)",
    body: "National Institute of Accounting Technicians (NIAT)",
    date: "September 2024"
  },
  {
    acronym: "CSE Passer",
    name: "Professional — Civil Service Exam",
    body: "Civil Service Commission (CSC)",
    date: "August 2024"
  }
];

export default function Credentials() {
  const ref = useIntersectionObserver();

  return (
    <section id="credentials" className="py-24 px-6 md:px-0 bg-brand-surface/40">
      <div className="max-w-6xl mx-auto md:pl-[10%]">
        <div ref={ref} className="fade-up">
          <h2 className="font-display text-4xl md:text-[44px] font-semibold text-brand-primary mb-4">
            Credentials
          </h2>
          <div className="gold-rule mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {credentialsList.map((cred, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-sm glass-card credential-card stagger-${index + 1}`}
              >
                <div className="font-display text-[40px] font-semibold text-brand-accent leading-none mb-3">
                  {cred.acronym}
                </div>
                <div className="font-body text-[18px] text-brand-primary font-medium mb-6 line-clamp-2 min-h-[50px]">
                  {cred.name}
                </div>
                <div className="font-mono text-[12px] text-brand-secondary mt-auto">
                  {cred.body} <span className="mx-2 opacity-50">|</span> {cred.date}
                </div>
              </div>
            ))}
          </div>
          
          <div className={`mt-10 font-body text-[14px] italic text-brand-secondary/80 stagger-7`}>
            All certifications are active and issued by Philippine regulatory bodies.
          </div>
        </div>
      </div>
    </section>
  );
}
