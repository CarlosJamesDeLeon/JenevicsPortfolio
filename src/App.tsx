/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { useParallax } from './hooks/useParallax';

export default function App() {
  useParallax();
  
  return (
    <div className="min-h-screen text-brand-primary bg-brand-bg relative selection:bg-brand-accent/20 selection:text-brand-primary">
      <CustomCursor />
      <div className="bg-noise"></div>
      <div className="absolute top-0 left-0 w-full h-[120vh] bg-[radial-gradient(ellipse_at_top_left,_rgba(124,58,237,0.08),_transparent_60%)] pointer-events-none parallax-slow"></div>
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Credentials />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}
