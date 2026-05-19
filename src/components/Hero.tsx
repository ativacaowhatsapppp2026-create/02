import React from 'react';
import { motion } from 'motion/react';
import { Car, Bell, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white pt-6 pb-2">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl shadow-lg aspect-[16/9] md:aspect-[3/1]"
        >
          <img 
            src="https://cdn.dealerspace.ai/barigui/acessorios-renault/Grupo%20Barigui%20-%20Banner%20site%20-%20Modelo%201%20-%20Web.webp" 
            alt="Promoção Barigui" 
            className="h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="mt-8 text-center px-4">
          <h1 className="text-2xl font-black text-[#00458b] uppercase tracking-tight leading-tight">
            Grupo Barigui <br /> Ofertas Exclusivas
          </h1>
          <p className="mt-2 text-gray-600 font-medium">
            Cadastre-se para receber promoções de seminovos e alertas de ofertas direto no app.
          </p>
          
          <motion.div className="mt-8 mb-4" whileTap={{ scale: 0.95 }}>
            <a 
              href="#cadastro" 
              className="inline-block w-full max-w-sm rounded-full bg-[#00458b] py-4 text-center text-lg font-bold text-white shadow-xl hover:bg-blue-800 transition-all uppercase"
            >
              Receber Ofertas
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
