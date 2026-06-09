import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-blur py-4' : 'py-6 px-4 md:px-8 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <div className="font-display text-[28px] font-semibold text-gradient-gold drop-shadow-sm cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => window.scrollTo(0, 0)}>
            JDM
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-brand-primary">
            <button onClick={() => scrollTo('about')} className="nav-link">About</button>
            <button onClick={() => scrollTo('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollTo('credentials')} className="nav-link">Credentials</button>
            <button onClick={() => scrollTo('achievements')} className="nav-link">Achievements</button>
            <button onClick={() => scrollTo('contact')} className="nav-link">Contact</button>
          </div>

          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 text-brand-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`bg-current h-[2px] w-6 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`}></span>
            <span className={`bg-current h-[2px] w-6 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-current h-[2px] w-6 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-surface/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col space-y-8 text-center">
          <button onClick={() => scrollTo('about')} className="font-display text-4xl text-brand-primary hover:text-brand-accent transition-colors">About</button>
          <button onClick={() => scrollTo('experience')} className="font-display text-4xl text-brand-primary hover:text-brand-accent transition-colors">Experience</button>
          <button onClick={() => scrollTo('credentials')} className="font-display text-4xl text-brand-primary hover:text-brand-accent transition-colors">Credentials</button>
          <button onClick={() => scrollTo('achievements')} className="font-display text-4xl text-brand-primary hover:text-brand-accent transition-colors">Achievements</button>
          <button onClick={() => scrollTo('contact')} className="font-display text-4xl text-brand-primary hover:text-brand-accent transition-colors">Contact</button>
        </div>
      </div>
    </>
  );
}
