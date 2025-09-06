'use client';

import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();
  
  // Ne pas afficher sur la page d'accueil de l'admin
  if (pathname === '/admin') return null;

  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbItems = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    
    let label = '';

    // Gérer les traductions et les cas spéciaux
    if (/^\d+$/.test(segment) && segments[index - 1] === 'articles') {
        label = `Article ${segment}`;
    } else {
        switch (segment) {
            case 'admin':
                label = 'Administration';
                break;
            case 'articles':
                label = 'Articles';
                break;
            case 'edit':
                label = 'Modification';
                break;
            case 'new':
                label = 'Nouveau';
                break;
            case 'stats':
                label = 'Statistiques';
                break;
            case 'users':
                label = 'Utilisateurs';
                break;
            case 'messagerie':
                label = 'Messagerie';
                break;
            default:
                label = segment.charAt(0).toUpperCase() + segment.slice(1);
        }
    }

    return {
      label,
      path,
      isCurrent: index === segments.length - 1,
    };
  });


  return (
    <nav aria-label="Fil d'Ariane" className="py-3 px-4 rounded-md mb-4">
      <ol className="flex flex-wrap items-center space-x-1 text-sm">
        <li>
          <Link href="/" className="text-gray-500 hover:text-blue-600 flex items-center">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
        </li>
        
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
            {item.isCurrent ? (
              <span className="text-blue-600 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.path} className="text-gray-500 hover:text-blue-600">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}