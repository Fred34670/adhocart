import { Metadata } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/admin/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Administration | AdhoCart',
  description: 'Panneau d\'administration du site AdhoCart',
};

export default async function AdminLayout({
  children,
}: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  // Vérifier si l'utilisateur est connecté ET a le rôle ADMIN
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/auth/signin'); // Rediriger si non autorisé
  }

  return (
    <div className="admin-layout">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Administration</h1>
        
        <Breadcrumbs />
        <main>{children}</main>
      </div>
    </div>
  );
}