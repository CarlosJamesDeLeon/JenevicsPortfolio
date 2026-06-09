import React from 'react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center px-6 md:px-0 pt-20 overflow-hidden">
      {/* Ambient center glows (aurora effect) */}
      <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none parallax-reverse z-0 mix-blend-multiply animate-pulse"></div>
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none parallax-slow z-0 mix-blend-multiply"></div>
      <div className="absolute bottom-[0%] left-[30%] w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }}></div>

      {/* Decorative text watermark */}
      <div className="absolute right-[-10%] md:right-[0%] top-[30%] pointer-events-none z-0">
        <div className="parallax-medium">
          <div className="font-display font-semibold text-[180px] md:text-[400px] text-transparent bg-clip-text bg-gradient-to-br from-brand-secondary/10 to-transparent select-none animate-float leading-none">
            CPA
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full md:pl-[10%] relative z-10">
        <div className="fade-up stagger-1 is-visible">
          <span className="font-mono text-xs tracking-widest text-brand-secondary uppercase">
            CERTIFIED PUBLIC ACCOUNTANT · CEBU, PHILIPPINES
          </span>
        </div>
        
        <div className="fade-up stagger-2 is-visible mt-6">
          <h1 className="font-display text-[48px] leading-[1.05] sm:text-[64px] md:text-[96px] font-semibold text-gradient-dark tracking-[-0.02em]">
            Jenevic D. Mariscal
          </h1>
        </div>
        
        <div className="fade-up stagger-3 is-visible mt-3">
          <div className="font-mono text-[13px] sm:text-[15px] text-brand-accent tracking-[0.1em] sm:tracking-[0.15em] font-medium leading-relaxed">
            CPA · CTT · MICB · RCA · CAT
          </div>
        </div>

        <div className="fade-up stagger-4 is-visible mt-6 md:mt-8 max-w-[480px]">
          <p className="font-body text-[18px] sm:text-[20px] leading-[1.75] text-brand-secondary">
            Two degrees, five certifications, and the kind of precision that makes auditors sleep easy at night.
          </p>
        </div>

        <div className="fade-up stagger-5 is-visible mt-12 md:mt-14 flex flex-col sm:flex-row flex-wrap gap-4 w-full">
          <button 
            onClick={() => scrollTo('credentials')}
            className="w-full sm:w-auto relative overflow-hidden px-8 md:px-10 py-5 border border-brand-accent text-brand-primary font-body text-sm uppercase tracking-[0.2em] group transition-colors duration-500 hover:text-brand-bg rounded-sm flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-3 font-medium text-center">
              View my credentials 
              <span className="group-hover:translate-y-[2px] transition-transform duration-300">↓</span>
            </span>
            <div className="absolute inset-0 bg-brand-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-0"></div>
          </button>
          
          <a
            href="https://www.linkedin.com/in/jenevicmariscal/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative overflow-hidden px-8 md:px-10 py-5 border border-[#0A66C2]/30 text-brand-primary font-body text-sm uppercase tracking-[0.2em] group transition-colors duration-500 hover:text-white rounded-sm flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-3 font-medium">
              LinkedIn
              <span className="group-hover:translate-x-[2px] transition-transform duration-300">↗</span>
            </span>
            <div className="absolute inset-0 bg-[#0A66C2] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-0"></div>
          </a>

          <a
            href="/Jenevic_Mariscal_Resume.pdf"
            download="Jenevic_Mariscal_Resume.pdf"
            className="w-full sm:w-auto relative overflow-hidden px-8 md:px-10 py-5 border border-brand-secondary/30 text-brand-primary font-body text-sm uppercase tracking-[0.2em] group transition-colors duration-500 hover:text-brand-surface rounded-sm flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center gap-3 font-medium">
              Resume
              <span className="group-hover:translate-y-[2px] transition-transform duration-300">↓</span>
            </span>
            <div className="absolute inset-0 bg-brand-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-0"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
