import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Session } from 'next-auth'; // Importer le type Session si nécessaire

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  session: Session | null; // Passer la session en prop
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, session }) => {
  // Afficher un message si la session n'est pas disponible (ne devrait pas arriver si la modale est ouverte uniquement quand status === 'authenticated')
  if (!session || !session.user) {
    return null; // Ou afficher un message de chargement/erreur
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profil Utilisateur</DialogTitle>
          <DialogDescription>
            Informations de votre compte.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          {session.user.image && (
            <div className="flex justify-center">
              <img
                className="h-24 w-24 rounded-full"
                src={session.user.image}
                alt={`Avatar de ${session.user.name || 'l\'utilisateur'}`}
              />
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-500">Nom :</p>
            <p className="text-base font-medium text-gray-800">{session.user.name || 'Non spécifié'}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Email :</p>
            <p className="text-base font-medium text-gray-800">{session.user.email || 'Non spécifié'}</p>
          </div>
          {/* Ajoutez d'autres informations du profil si disponibles dans session.user */}
        </div>
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-end sm:space-x-2 space-y-2 sm:space-y-0"> {/* Utiliser flexbox pour aligner les boutons */}
           {/* Bouton pour changer le mot de passe */}
           <Button variant="outline" onClick={() => {
             // TODO: Implémenter la logique de changement de mot de passe (ouvrir une autre modale, rediriger, etc.)
             console.log("Changer le mot de passe clicked");
             // onClose(); // Optionnel: fermer cette modale si une autre s'ouvre
           }}>
             Changer le mot de passe
           </Button>
          <Button onClick={onClose}>Fermer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;