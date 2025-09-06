import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ArticleList from "@/components/admin/articles/ArticleList";
import ImportAccordion from "@/components/admin/articles/ImportAccordion";
export const metadata: Metadata = {
  title: "Gestion des Articles | Administration",
  description: "Gérer les articles du site AdhoCart",
};

export default async function AdminArticlesPage() {
  const session = await getServerSession(authOptions);

  // Vérifier si l'utilisateur est connecté ET a le rôle ADMIN
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/auth/signin'); // Rediriger si non autorisé
  }

  // Cette page va charger les articles côté client via le composant ArticleList
  // ou nous pourrions les charger ici côté serveur et les passer au composant.
  // Pour l'instant, nous allons simplement afficher la structure.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Gestion des Articles</h1>
      <ImportAccordion />
      <hr className="my-8" />
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Liste des articles existants</h2>
      <ArticleList />
    </div>
  );
}