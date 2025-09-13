import { prisma } from '@/lib/prisma';
import ConversationList from '@/components/admin/messagerie/ConversationList';

type ConversationWithDetails = {
  id: number;
  updatedAt: Date;
  isReadByAdmin: boolean;
  article: {
    titre: string | null;
  };
  user: {
    nom: string | null;
    prenom: string | null;
    email: string;
  } | null;
  guestName: string | null;
  messages: {
    content: string;
  }[];
};

async function getConversations(): Promise<ConversationWithDetails[]> {
  const conversations = await prisma.conversation.findMany({
    select: {
      id: true,
      updatedAt: true,
      isReadByAdmin: true,
      article: {
        select: {
          titre: true,
        },
      },
      user: {
        select: {
          nom: true,
          prenom: true,
          email: true,
        },
      },
      guestName: true,
      messages: {
        orderBy: {
          createdAt: 'desc',
        },
        take: 1,
        select: {
          content: true,
        }
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });
  return conversations;
}

export default async function MessageriePage() {
  const conversations = await getConversations();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-8 text-gray-800">Messagerie</h1>
      <ConversationList serverConversations={conversations} />
    </div>
  );
}