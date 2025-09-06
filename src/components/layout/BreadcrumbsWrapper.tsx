'use client';

import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/admin/Breadcrumbs';

export default function BreadcrumbsWrapper() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
        </div>
      )}
    </>
  );
}