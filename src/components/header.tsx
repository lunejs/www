'use client';

import { Logo } from './logo';

export const Header = () => {
  return (
    <div className="px-6">
      <header className="max-w-5xl mx-auto flex items-center justify py-6 bg-background/80 backdrop-blur-lg transition-colors">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-normal text-lg">Vendyx</span>
        </div>
      </header>
    </div>
  );
};
