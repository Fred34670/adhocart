'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-16 bg-[#800020] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-playfair mb-6">Restez Informé</h2>
        <p className="mb-8 text-lg">Inscrivez-vous à notre newsletter pour recevoir nos dernières nouveautés</p>
        <div className="max-w-md mx-auto flex gap-4">
          <Input 
            type="email" 
            placeholder="Votre adresse email"
            className="flex-1 bg-white/90 border-none text-gray-900"
          />
          <Button className="bg-white text-[#800020] hover:bg-gray-100 !rounded-button whitespace-nowrap">
            S'inscrire
          </Button>
        </div>
      </div>
    </section>
  );
}