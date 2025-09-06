'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

interface RemoveFavoriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const RemoveFavoriteModal: React.FC<RemoveFavoriteModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [dontAskAgain, setDontAskAgain] = useState(false);

  const handleConfirm = () => {
    if (dontAskAgain) {
      localStorage.setItem('dontAskAgainRemoveFavorite', 'true');
    }
    onConfirm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-gray-800">Confirmer la suppression</DialogTitle>
          <DialogDescription className="text-gray-600">
            Êtes-vous sûr de vouloir supprimer cet article de vos favoris ?
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 my-4">
          <input
            type="checkbox"
            id="dont-ask-again-checkbox"
            checked={dontAskAgain}
            onChange={(e) => setDontAskAgain(e.target.checked)}
          />
          <label htmlFor="dont-ask-again-checkbox" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">
            Ne plus me demander
          </label>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Annuler
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Supprimer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveFavoriteModal;