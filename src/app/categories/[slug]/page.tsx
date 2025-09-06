import React from 'react';
import CategoryClientPage from '@/components/categories/CategoryClientPage';

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryClientPage slug={params.slug} />;
}