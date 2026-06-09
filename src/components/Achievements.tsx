import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const profAcademic = [
  "Participant, Deloitte Tax Challenge — National Level (2024)",
  "5th Place (Team), PICPA Written Exam Challenge — Auditing Standards (2024)",
  "Top 3, Auditing and Assurance Principles (2024)",
  "Dean's Lister, University of San Jose – Recoletos (2019, 2020)",
  "With Honors, Senior High School Graduation (2019)",
  "With Honors, Junior High School Moving Up (2017)"
];

const competitions = [
  "Champion, Math Expo Quiz Bowl — District Level, Written & Team Orals (Grade 8)",
  "3rd Place, Math Expo Quiz Bowl — District Level, Written (Grade 9)",
  "4th Place, Math Expo Quiz Bowl — District Level, Written (Grade 10)",
  "5th Place, Math Expo Quiz Bowl — Area Level, Written (Grade 7)",
  "2nd Place, Math Expo Quiz Bowl — District Level, Team Orals (Grade 7)",
  "5th Place, MTAP Math Challenge — Area Level (Grade 7)",
  "Champion, Science Month Quiz Bowl — District Level, Team Orals (Grade 7)"
];

export default function Achievements() {
  const ref = useIntersectionObserver();

  return (
    <section id="achievements" className="py-24 px-6 md:px-0 bg-brand-surface/40">
      <div className="max-w-6xl mx-auto md:pl-[10%]">
        <div ref={ref} className="fade-up">
          <h2 className="font-display text-4xl md:text-[44px] font-semibold text-brand-primary mb-4">
            Achievements
          </h2>
          <div className="gold-rule mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="stagger-1">
              <h3 className="font-body text-[13px] uppercase tracking-[0.15em] text-brand-accent mb-8 font-medium">
                Professional & Academic
              </h3>
              <ul className="space-y-4">
                {profAcademic.map((item, index) => (
                  <li key={index} className="achievement-item font-body text-[16px] text-brand-primary flex items-start cursor-default">
                    <span className="achievement-bullet text-brand-accent mr-4 mt-0.5 text-lg leading-none transition-transform duration-300 origin-center">·</span>
                    <span className="leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="stagger-2">
              <h3 className="font-body text-[13px] uppercase tracking-[0.15em] text-brand-accent mb-8 font-medium">
                Competition Highlights (Mathematics & Science)
              </h3>
              <ul className="space-y-4">
                {competitions.map((item, index) => (
                  <li key={index} className="achievement-item font-body text-[16px] text-brand-primary flex items-start cursor-default">
                    <span className="achievement-bullet text-brand-accent mr-4 mt-0.5 text-lg leading-none transition-transform duration-300 origin-center">·</span>
                    <span className="leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
