"use client";

import React from 'react';

type IntroAnimationProps = {
  onAnimationComplete: () => void;
};

export function IntroAnimation({ onAnimationComplete }: IntroAnimationProps) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 2500); // Animation duration + delay
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="text-center animate-welcome" style={{ animationFillMode: 'forwards' }}>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-welcome-glow">
          Welcome to Portfolio
        </h1>
      </div>
    </div>
  );
}
