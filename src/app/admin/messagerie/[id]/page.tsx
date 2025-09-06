import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import ConversationReply from '@/components/messaging/ConversationReply';
import ConversationView from '@/components/admin/messagerie/ConversationView';

async function getConversation(id: number) {
  // Marquer comme lu
  await prisma.conversation.update({
    where: { id },
    data: { isReadByAdmin: true },
  }).catch(err => console.error("Failed to mark as read, conversation might not exist:", err)); // Ignore error if not found

  const conversation = await prisma.conversation.findUnique({
    where: { id },
    include: {
      article: { select: { id: true, titre: true } },
      user: { select: { nom: true, prenom: true, email: true } },
      messages: { orderBy: { createdAt: 'asc' } },
    },
  });

  if (!conversation) {
    notFound();
  }
  return conversation;
}

export default async function AdminConversationPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/auth/signin');
  }

  const conversationId = parseInt(params.id, 10);
  if (isNaN(conversationId)) {
    notFound();
  }

  const conversation = await getConversation(conversationId);

  return (
    <ConversationView conversation={conversation} />
  );
}