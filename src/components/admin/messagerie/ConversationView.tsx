'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ConversationReply from '@/components/messaging/ConversationReply';
import DeleteConversationModal from '@/components/admin/messagerie/DeleteConversationModal';

export default function ConversationView({ conversation }: { conversation: any }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    const response = await fetch(`/api/admin/messagerie/${conversation.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      router.push('/admin/messagerie');
      router.refresh();
    } else {
      console.error('Failed to delete conversation');
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Link href="/admin/messagerie" className="text-indigo-600 hover:text-indigo-900 inline-block">&larr; Retour à la messagerie</Link>
        <button onClick={() => setIsDeleteModalOpen(true)} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50" disabled={isDeleting}>
          Supprimer la conversation
        </button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-2">Conversation</h1>
        <div className="mb-4 text-sm text-gray-600">
          <p><strong>Article:</strong> <Link href={`/articles/${conversation.article.id}`} className="text-indigo-600">{conversation.article.titre}</Link></p>
          <p><strong>Utilisateur:</strong> {conversation.user ? `${conversation.user.prenom || ''} ${conversation.user.nom || ''}`.trim() || conversation.user.email : `${conversation.guestName} (${conversation.guestEmail})`}</p>
        </div>

        <div className="space-y-4 border-t pt-4 mt-4">
          {conversation.messages.map((message: any) => (
            <div key={message.id} className={`flex ${message.senderIsAdmin ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-lg max-w-lg ${message.senderIsAdmin ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                <p>{message.content}</p>
                <p className="text-xs opacity-75 mt-1 text-right">{new Date(message.createdAt).toLocaleString('fr-FR')}</p>
              </div>
            </div>
          ))}
        </div>

        <ConversationReply conversationId={conversation.id} />
      </div>
      <DeleteConversationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
      />
    </div>
  );
}