'use client';

import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: `url('/images/library_background.jpg')`
    }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-playfair mb-6">Découvrez Notre Collection Unique</h1>
          <p className="text-xl mb-8">Plongez dans un monde de livres rares, d'arts graphiques et de documents historiques soigneusement sélectionnés.</p>
          <Link href="/collection" passHref>
            <Button className="bg-[#800020] hover:bg-[#600018] text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer">
              Explorer la Collection
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}