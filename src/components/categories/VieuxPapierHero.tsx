'use client';

import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function VieuxPapierHero() {
  return (
    <div className="relative h-[400px] bg-cover bg-center" style={{
      backgroundImage: `url('https://public.readdy.ai/ai/img_res/f7b2a947dbc07a6c7296e69f12c6a221.jpg')`
    }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
        <Breadcrumb className="text-white mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/categories">Catégories</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Papiers Anciens</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl font-playfair mb-6 font-black text-white">Papiers Anciens</h1>
          <p className="text-xl mb-8 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Découvrez notre collection exceptionnelle de documents historiques, manuscrits, cartes et estampes d'époque.</p>
        </div>
      </div>
    </div>
  );
}