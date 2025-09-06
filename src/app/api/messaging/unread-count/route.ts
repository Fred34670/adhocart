import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = parseInt(session.user.id, 10);

  try {
    const unreadCount = await prisma.conversation.count({
      where: {
        userId: userId,
        isReadByUser: false,
      },
    });
    return NextResponse.json({ count: unreadCount });
  } catch (error) {
    console.error('Error fetching user unread count:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}