
import ArticleDetailsServer from '@/components/articles/ArticleDetailsServer';

interface ArticleDetailPageProps {
  params: { id: string };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
const resolvedParams = await (params as any);
const articleId = resolvedParams.id;

  return (
    <ArticleDetailsServer articleId={articleId} />
  );
}