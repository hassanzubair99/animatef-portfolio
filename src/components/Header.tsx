"use client";

import React from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-400">
            Midnight Canvas
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors duration-300">
              Projects
            </a>
            <a href="#about" className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors duration-300">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
