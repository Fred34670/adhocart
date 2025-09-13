import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import UserConversationReply from '@/components/messaging/UserConversationReply';

export const dynamic = 'force-dynamic';

async function getConversationForUser(id: number, userId: number) {
  const conversation = await prisma.conversation.findFirst({
    where: { id, userId },
    include: {
      article: { select: { id: true, titre: true } },
      messages: { orderBy: { createdAt: 'asc' } },
    },
  });

  if (!conversation) {
    notFound();
  }

  // Mark conversation as read by user
  if (!conversation.isReadByUser) {
    await prisma.conversation.update({
      where: { id },
      data: { isReadByUser: true },
    });
  }

  return conversation;
}

export default async function UserConversationPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect('/auth/signin');
  }
  
  const userId = parseInt(session.user.id, 10);
  const conversation = await getConversationForUser(parseInt(params.id, 10), userId);

  // Pour la réponse, il faudra une nouvelle logique ou un nouveau composant
  // car ConversationReply est probablement conçu pour l'admin.
  // Pour l'instant, on affiche juste la conversation.

  return (
    <div className="container mx-auto p-4">
      <Link href="/profile/messagerie" className="text-indigo-600 hover:text-indigo-900 mb-4 inline-block">&larr; Retour à mes messages</Link>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2 text-gray-900">Conversation sur : {conversation.article.titre}</h1>
        
        <div className="space-y-4 border-t pt-4 mt-4">
          {conversation.messages.map(message => (
            <div key={message.id} className={`flex ${message.senderIsAdmin ? 'justify-start' : 'justify-end'}`}>
              <div className={`p-3 rounded-lg max-w-lg ${message.senderIsAdmin ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'}`}>
                <p>{message.content}</p>
                <p className="text-xs opacity-75 mt-1 text-right">{new Date(message.createdAt).toLocaleString('fr-FR')}</p>
              </div>
            </div>
          ))}
        </div>

        <UserConversationReply conversationId={conversation.id} />
      </div>
    </div>
  );
}