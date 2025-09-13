
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./providers"; // Assurez-vous que ce chemin est correct
import { Navbar } from '@/components/layout/Navbar';
import HomeFooter from '@/components/home/Footer';
import GlobalModals from '@/components/layout/GlobalModals';
// import { Breadcrumb } from '@/components/ui/breadcrumb'; // Supprimer cette ligne
import { getCategoriesWithPrisma } from '@/lib/data';


const inter = localFont({
  src: "../fonts/inter.ttf",
  variable: '--font-inter',
  fallback: ['sans-serif'],
});

const playfair = localFont({
  src: "../fonts/playfair-display.ttf",
  variable: '--font-playfair',
  fallback: ['serif'],
});

const roboto = localFont({
  src: "../fonts/roboto.ttf",
  variable: '--font-roboto',
  weight: '400 700',
  fallback: ['sans-serif'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const categories = await getCategoriesWithPrisma();

  return (
    <html lang="fr">
      <head>
        {/* Ajoutez cette ligne pour inclure Font Awesome via CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${roboto.variable}`}>
        <AuthProvider>
          <Navbar categories={categories} />
          <div className="min-h-screen">
            {children}
          </div>
          <HomeFooter />
          <GlobalModals />
          
        </AuthProvider>
      </body>
    </html>
  );
}


