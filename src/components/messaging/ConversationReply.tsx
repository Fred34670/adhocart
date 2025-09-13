'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ConversationReplyProps {
  conversationId: number;
}

export default function ConversationReply({ conversationId }: ConversationReplyProps) {
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
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reply.');
      }

      setMessage('');
      router.refresh(); // Rafraîchit la page pour afficher le nouveau message
    } catch (error) {
      console.error(error);
      // Gérer l'erreur, par exemple en affichant une notification
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-6 border-t pt-4">
      <h2 className="text-lg font-semibold mb-2 text-gray-900">Répondre</h2>
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Écrivez votre réponse ici..."
          className="w-full"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isSubmitting}
        />
        <Button type="submit" className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-md" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer la réponse'}
        </Button>
      </form>
    </div>
  );
}