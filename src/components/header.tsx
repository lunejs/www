'use client';

import { useEffect, useState } from 'react';
import { Logo } from './logo';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`z-50 sticky top-0 mx-auto flex items-center justify-center py-6 bg-background/80 backdrop-blur-lg transition-colors ${
        isScrolled ? 'border-b' : 'border-b border-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <Logo />
        <span className="font-normal text-lg">Vendyx</span>
      </div>
    </header>
  );
};
