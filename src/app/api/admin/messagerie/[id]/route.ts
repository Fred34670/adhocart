import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
    const session = await getServerSession(authOptions);

    if (session?.user?.role !== 'ADMIN') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const conversationId = parseInt(params.id, 10);

    const conversation = await prisma.conversation.findUnique({
        where: { id: conversationId },
        include: {
          article: { select: { id: true, titre: true } },
          user: { select: { nom: true, prenom: true, email: true } },
          messages: { orderBy: { createdAt: 'asc' } },
        },
      });

    if (!conversation) {
        return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }

    return NextResponse.json(conversation);
}

export async function POST(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const session = await getServerSession(authOptions);
  
    if (session?.user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  
    const conversationId = parseInt(params.id, 10);
  
    try {
      await prisma.conversation.update({
        where: { id: conversationId },
        data: { isReadByAdmin: true },
      });
      return NextResponse.json({ message: 'Marked as read' });
    } catch (error) {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const conversationId = parseInt(params.id, 10);

  try {
    // Il faut d'abord supprimer les messages à cause de la contrainte de clé étrangère
    await prisma.message.deleteMany({
      where: { conversationId: conversationId },
    });

    await prisma.conversation.delete({
      where: { id: conversationId },
    });

    return NextResponse.json({ message: 'Conversation deleted successfully' });
  } catch (error) {
    console.error('Error deleting conversation:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}