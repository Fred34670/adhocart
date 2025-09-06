'use client';

import Link from 'next/link';
import Image from 'next/image';

// Fonction pour déterminer le chemin de l'image en fonction du nom de la catégorie
export const getImagePath = (categoryName: string): string => {
  // Ajouter une vérification pour s'assurer que categoryName est une chaîne valide
  if (typeof categoryName !== 'string' || !categoryName.trim()) {
    return '/images/library_background.jpg'; // Retourner une image par défaut
  }

  // Mapping des noms de catégories vers les fichiers d'images disponibles
  // Les clés doivent correspondre aux noms de catégories tels que reçus (ex: "Vieux papiers", "Arts graphiques")
  const imageMapping: Record<string, string> = {
    'Vieux papiers': '/images/Vieux_papiers.png',
    'Livres': '/images/Livres.png',
    'Arts graphiques': '/images/Arts_graphiques.png', // Corrigé pour correspondre à "Arts graphiques"
    'Cartes Postales': '/images/library_background.jpg', // Image par défaut ou à spécifier
    'Affiches': '/images/library_background.jpg',         // Image par défaut ou à spécifier
    'Gravures': '/images/library_background.jpg',        // Image par défaut ou à spécifier
    'Photos': '/images/library_background.jpg'          // Image par défaut ou à spécifier
  };
  
  // Vérifier si nous avons une correspondance directe dans notre mapping
  if (imageMapping[categoryName]) {
    return imageMapping[categoryName];
  }
  
  // Essayer de construire le chemin basé sur le nom de la catégorie
  const formattedName = categoryName.replace(/\s+/g, '_');
  const potentialPath = `/images/${formattedName}.png`;
  
  // Utiliser une image par défaut si aucune correspondance n'est trouvée
  return '/images/library_background.jpg';
};

type Category = {
  name: string;
  icon: string;
  slug?: string;
  id?: number;
  description?: string;
};

type CategoriesProps = {
  categories: Category[];
};

export default function Categories({ categories }: CategoriesProps) {
  return (
    <section className="py-16 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nos Catégories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            // Générer le slug à partir du nom de la catégorie si non fourni
            const slug = category.slug || (category.name ? category.name.toLowerCase().replace(/\s+/g, '-') : 'default-slug');
            
            return (
              // hover:scale-105 retiré, mais 'group' et 'transition-transform' conservés
              <div key={index} className="relative h-80 rounded-lg overflow-hidden cursor-pointer transition-transform group">
                <Image
                  src={getImagePath(category.name)}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform group-hover:scale-110" // group-hover:scale-110 réintroduit
                  priority
                />
                <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-20 transition-all"></div>
                <Link 
                  href={`/categories/${slug}`} 
                  key={category.id || index}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8"
                >
                  {/* group-hover:scale-110 réintroduit 
                  <i className={`fas ${category.icon} text-5xl text-white mb-6 transition-transform group-hover:scale-110 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]`}></i>
                  */}
                  <h3 className="text-3xl font-bold text-white font-playfair drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] tracking-wide">{category.name}</h3>
                  {category.description && (
                    <p className="text-white mt-4 text-center font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {category.description}
                    </p>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}