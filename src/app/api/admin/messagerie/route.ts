import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const conversations = await prisma.conversation.findMany({
    include: {
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
  return NextResponse.json(conversations);
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { ids } = await request.json();

    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ message: 'No conversation IDs provided' }, { status: 400 });
    }

    const numericIds = ids.map(id => parseInt(String(id), 10)).filter(id => !isNaN(id));

    if (numericIds.length === 0) {
      return NextResponse.json({ message: 'Invalid conversation IDs provided' }, { status: 400 });
    }

    // Use a transaction to ensure both messages and conversations are deleted
    await prisma.$transaction([
      prisma.message.deleteMany({
        where: {
          conversationId: {
            in: numericIds,
          },
        },
      }),
      prisma.conversation.deleteMany({
        where: {
          id: {
            in: numericIds,
          },
        },
      }),
    ]);

    return NextResponse.json({ message: 'Conversations deleted successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error deleting conversations:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}