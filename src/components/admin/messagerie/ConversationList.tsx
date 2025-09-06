'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import clsx from 'clsx';

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

export default function ConversationList({ serverConversations }: { serverConversations: ConversationWithDetails[] }) {
  const [conversations, setConversations] = useState(serverConversations);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel('realtime-conversations')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'Conversation' },
        (payload: any) => {
          // For simplicity, we'll just refetch all conversations on any change.
          // A more advanced implementation would handle inserts, updates, and deletes specifically.
          async function fetchConversations() {
            const response = await fetch('/api/admin/messagerie'); // Assuming you have an API route to fetch conversations
            if (response.ok) {
              const newConversations = await response.json();
              setConversations(newConversations);
            }
          }
          fetchConversations();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const handleSelectOne = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(selectedId => selectedId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(conversations.map(c => c.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.length === 0 || !confirm(`Êtes-vous sûr de vouloir supprimer ${selectedIds.length} conversation(s) ?`)) {
      return;
    }

    try {
      const response = await fetch('/api/admin/messagerie', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds }),
      });

      if (response.ok) {
        setConversations(prev => prev.filter(c => !selectedIds.includes(c.id)));
        setSelectedIds([]);
      } else {
        const error = await response.json();
        alert(`Erreur lors de la suppression: ${error.message}`);
      }
    } catch (error) {
      console.error('Failed to delete conversations:', error);
      alert('Une erreur est survenue.');
    }
  };

  const isAllSelected = conversations.length > 0 && selectedIds.length === conversations.length;

  return (
    <>
      <div className="mb-4 flex justify-start">
        <Button
          onClick={handleDeleteSelected}
          disabled={selectedIds.length === 0}
          className={clsx(
            "shadow-md text-white",
            {
              "bg-red-600 hover:bg-red-700": selectedIds.length > 0,
              "bg-gray-400 cursor-not-allowed": selectedIds.length === 0,
            }
          )}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Supprimer ({selectedIds.length})
        </Button>
      </div>
      <div className="bg-white shadow-md rounded-lg">
        <table className="w-full divide-y divide-gray-200 table-fixed">
          <colgroup>
            <col className="w-12" />
            <col className="w-[25%]" />
            <col className="w-[20%]" />
            <col className="w-[35%]" />
            <col className="w-[15%]" />
            <col className="w-[5%]" />
          </colgroup>
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Article
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Utilisateur
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Dernier Message
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                Date d'envoi
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Voir</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {conversations.map((convo) => (
              <tr key={convo.id} className={!convo.isReadByAdmin ? 'font-bold bg-indigo-50' : ''}>
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    checked={selectedIds.includes(convo.id)}
                    onChange={() => handleSelectOne(convo.id)}
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 truncate" title={convo.article.titre || ''}>
                  {convo.article.titre}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 truncate" title={(convo.user ? `${convo.user.prenom || ''} ${convo.user.nom || ''}`.trim() || convo.user.email : convo.guestName) || ''}>
                  {convo.user ? `${convo.user.prenom || ''} ${convo.user.nom || ''}`.trim() || convo.user.email : convo.guestName || 'Invité'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 truncate" title={convo.messages[0]?.content}>
                  {convo.messages[0]?.content}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {new Date(convo.updatedAt).toLocaleString('fr-FR')}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <Link href={`/admin/messagerie/${convo.id}`} className="text-indigo-600 hover:text-indigo-900">
                    Voir
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}