import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const skillsData = [
  {
    category: "Accounting & Finance",
    items: [
      "Financial Accounting", "Auditing", "Tax Compliance", "Payroll Processing",
      "Cost Accounting", "Financial Reporting", "Account Reconciliation",
      "Capital Expenditure Analysis", "SEC Filing", "BIR Compliance"
    ]
  },
  {
    category: "Software & Systems",
    items: [
      "SAP", "QuickBooks", "Microsoft Excel", "Microsoft Office Suite"
    ]
  },
  {
    category: "Professional Skills",
    items: [
      "Cross-functional Communication", "Multicultural Collaboration",
      "Time Management", "Multitasking Under Pressure", "Attention to Detail",
      "Technical Writing", "Research & Documentation", "Project Management",
      "Audit Trail Maintenance", "Regulatory Coordination"
    ]
  }
];

export default function Skills() {
  const ref = useIntersectionObserver();

  return (
    <section id="skills" className="py-24 px-6 md:px-0 bg-brand-surface/40">
      <div className="max-w-6xl mx-auto md:pl-[10%]">
        <div ref={ref} className="fade-up">
          <h2 className="font-display text-4xl md:text-[44px] font-semibold text-brand-primary mb-4">
            Skills & Tools
          </h2>
          <div className="gold-rule mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillsData.map((group, index) => (
              <div key={index} className={`stagger-${index + 1}`}>
                <h3 className="font-body text-xs uppercase tracking-widest text-brand-accent mb-6 font-medium">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="credential-tag font-mono text-xs uppercase py-2 px-3 border border-brand-accent/20 rounded bg-brand-surface text-brand-secondary cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
