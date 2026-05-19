import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
           <img 
            src="https://cdn.dealerspace.ai/barigui/seminovos/logos/barigui%20logo.png" 
            alt="Grupo Barigui" 
            className="h-10 w-auto opacity-70 grayscale hover:grayscale-0 transition-all"
            referrerPolicy="no-referrer"
          />
        </div>
        <p className="text-sm text-gray-500 mb-4">
          © {new Date().getFullYear()} Grupo Barigui. Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-6 text-xs text-gray-400">
          <a href="#" className="hover:text-blue-900">Privacidade</a>
          <a href="#" className="hover:text-blue-900">Termos de Uso</a>
          <a href="#" className="hover:text-blue-900">Sobre o Grupo</a>
        </div>
      </div>
    </footer>
  );
}
