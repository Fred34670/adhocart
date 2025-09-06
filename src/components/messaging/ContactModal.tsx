'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PrismaArticle } from '@/interfaces';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: PrismaArticle;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, article }) => {
  const { data: session } = useSession();
  const [message, setMessage] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (session?.user?.name) {
      setGuestName(session.user.name);
    }
    if (session?.user?.email) {
      setGuestEmail(session.user.email);
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!message) {
      setError('Le message ne peut pas être vide.');
      setIsSubmitting(false);
      return;
    }

    if (!session && (!guestName || !guestEmail)) {
      setError('Le nom et l\'email sont requis pour les invités.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/messaging/conversations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleId: article.id,
          message,
          guestName,
          guestEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setMessage('');
      }, 2000);

    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black">Poser une question sur : {article.titre}</DialogTitle>
          <DialogDescription className="text-black">
            Votre message sera envoyé à l'administrateur du site. Vous recevrez une réponse par email.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="text-center py-8">
            <p className="text-green-600 font-semibold">Message envoyé avec succès !</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              {!session && (
                <>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right text-black">Nom</Label>
                    <Input id="name" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="col-span-3 text-black" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right text-black">Email</Label>
                    <Input id="email" type="email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} className="col-span-3 text-black" />
                  </div>
                </>
              )}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="message" className="text-right text-black">Message</Label>
                <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="col-span-3 text-black" />
              </div>
              {error && <p className="text-red-500 text-sm col-span-4 text-center">{error}</p>}
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>Annuler</Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;