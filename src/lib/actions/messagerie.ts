'use server';

import { prisma } from '@/lib/prisma';

export async function markConversationAsReadByAdmin(conversationId: number) {
  try {
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
      select: { isReadByAdmin: true },
    });

    if (conversation && !conversation.isReadByAdmin) {
      await prisma.conversation.update({
        where: { id: conversationId },
        data: { isReadByAdmin: true },
      });
    }
  } catch (error) {
    console.error(`Failed to mark conversation ${conversationId} as read:`, error);
    // Ne pas propager l'erreur pour ne pas casser la page
  }
}