import React from 'react';
import { cn } from '@/src/lib/utils';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-center px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.dealerspace.ai/barigui/seminovos/logos/barigui%20logo.png" 
            alt="Grupo Barigui" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
