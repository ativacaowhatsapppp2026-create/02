import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fbff] flex flex-col">
      <Header />
      <main className="flex-grow pb-12">
        <Hero />
        <div className="max-w-md mx-auto w-full px-2">
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
