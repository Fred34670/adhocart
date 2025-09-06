'use client';

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: `url('https://public.readdy.ai/ai/img_res/f7b2a947dbc07a6c7296e69f12c6a221.jpg')`
    }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-playfair mb-6">Nos Catégories</h1>
          <p className="text-xl mb-8">Explorez notre collection par thèmes et découvrez des trésors uniques.</p>
        </div>
      </div>
    </div>
  );
}