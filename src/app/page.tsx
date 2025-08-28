"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { IntroAnimation } from '@/components/IntroAnimation';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Code, Bot, Palette, Briefcase, DraftingCompass, Globe, User } from 'lucide-react';

const roles = [
  { text: "Crafting Digital Universes", icon: <Globe className="inline-block mb-2" size={64} /> },
  { text: "Hi, I am Hassan", icon: <User className="inline-block mb-2" size={64} /> },
  { text: "I am a Web Developer", icon: <Code className="inline-block mb-2" size={64} /> },
  { text: "Odoo Developer", icon: <Briefcase className="inline-block mb-2" size={64} /> },
  { text: "Web Designer", icon: <Palette className="inline-block mb-2" size={64} /> },
  { text: "AI Web Builder", icon: <Bot className="inline-block mb-2" size={64} /> },
  { text: "UI/UX Builder", icon: <DraftingCompass className="inline-block mb-2" size={64} /> },
];

function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(t => t.slice(0, -1));
        }, 100);
      } else {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    } else {
      if (text.length < currentRole.text.length) {
        timeout = setTimeout(() => {
          setText(t => currentRole.text.slice(0, t.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Wait 3 seconds before deleting
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);
  
  const currentIcon = roles[roleIndex].icon;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 h-16 w-16 text-accent animate-fade-in-up">
        {currentIcon}
      </div>
      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl text-shadow-strong">
        {text}
        <span className="animate-blink">|</span>
      </h1>
    </div>
  );
}


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('introShown')) {
      setLoading(false);
      setShowContent(true);
      return;
    }
  }, []);

  const handleAnimationComplete = () => {
    setShowContent(true);
    setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('introShown', 'true');
    }, 500); 
  };

  return (
    <>
      {loading && <IntroAnimation onAnimationComplete={handleAnimationComplete} />}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <div className="relative isolate pt-14 h-screen flex items-center justify-center bg-grid-pattern">
             <div 
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
              aria-hidden="true"
            >
               <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }}
              />
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
                <TypingAnimation />
                <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                    A passionate developer creating modern, responsive, and user-friendly web applications. Explore my work and let's build something amazing together.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#projects" className="rounded-md bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-transform duration-300 hover:scale-105">
                        Explore My Work
                    </a>
                    <a href="#contact" className="text-base font-semibold leading-6 transition-colors hover:text-accent group">
                        Get in Touch <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
          </div>
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </>
  );
}
