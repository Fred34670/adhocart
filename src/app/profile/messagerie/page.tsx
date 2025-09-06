import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function getUserConversations(userId: number) {
  const conversations = await prisma.conversation.findMany({
    where: { userId },
    include: {
      article: { select: { titre: true } },
      messages: { orderBy: { createdAt: 'desc' }, take: 1 },
    },
    orderBy: { updatedAt: 'desc' },
  });
  return conversations;
}

export default async function UserMessageriePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect('/auth/signin');
  }

  const userId = parseInt(session.user.id, 10);
  const conversations = await getUserConversations(userId);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mes Messages</h1>
      <div className="bg-white shadow-md rounded-lg">
        <table className="w-full divide-y divide-gray-200 table-fixed">
          <colgroup>
            <col className="w-[35%]" />
            <col className="w-[40%]" />
            <col className="w-[15%]" />
            <col className="w-[10%]" />
          </colgroup>
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Article</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernier Message</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Voir</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {conversations.map((convo) => (
              <tr key={convo.id} className={!convo.isReadByUser ? 'font-bold bg-blue-50' : ''}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 truncate" title={convo.article.titre || ''}>{convo.article.titre}</td>
                <td className="px-6 py-4 text-sm text-gray-500 truncate" title={convo.messages[0]?.content}>{convo.messages[0]?.content}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{new Date(convo.updatedAt).toLocaleString('fr-FR')}</td>
                <td className="px-2 py-4 text-right text-sm font-medium">
                  <Link href={`/profile/messagerie/${convo.id}`} className="inline-block px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                    Voir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}