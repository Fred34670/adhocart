'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface UserConversationReplyProps {
  conversationId: number;
}

export default function UserConversationReply({ conversationId }: UserConversationReplyProps) {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/messaging/conversations/${conversationId}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, fromUser: true }), // Ajout d'un flag pour identifier l'origine
      });

      if (response.ok) {
        setMessage('');
        router.refresh();
      } else {
        // Gérer l'erreur
        console.error('Failed to send reply');
      }
    } catch (error) {
      console.error('Error sending reply:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <Textarea
        className="w-full p-2"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Écrivez votre réponse..."
        disabled={isSubmitting}
      />
      <Button
        type="submit"
        className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la réponse'}
      </Button>
    </form>
  );
}