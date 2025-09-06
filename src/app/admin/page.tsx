import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tableau de bord | Administration',
  description: 'Tableau de bord d\'administration du site AdhoCart',
};

export default function AdminDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Gestion des Articles</h2>
        <p className="text-gray-700 mb-4">Ajouter, modifier ou supprimer des articles du catalogue.</p>
        <Link 
          href="/admin/articles" 
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Gérer les articles
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Gestion des autres rubriques</h2>
        <p className="text-gray-700 mb-4">Gérer les catégories, thèmes, archivages et éditions papier.</p>
        <Link
          href="/admin/autres-rubriques"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Gérer les autres rubriques
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Gestion des Utilisateurs</h2>
        <p className="text-gray-700 mb-4">Administrer les comptes utilisateurs et leurs permissions.</p>
        <Link
          href="/admin/users"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Gérer les utilisateurs
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Statistiques</h2>
        <p className="text-gray-700 mb-4">Consulter les statistiques de vente et de visite du site.</p>
        <Link
          href="/admin/stats"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Consulter les statistiques
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Messagerie</h2>
        <p className="text-gray-700 mb-4">Consulter et répondre aux messages des utilisateurs.</p>
        <Link
          href="/admin/messagerie"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Accéder à la messagerie
        </Link>
      </div>
    </div>
  );
}