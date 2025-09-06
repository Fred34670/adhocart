'use client';

import { useState } from 'react'; // Importer useState
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SignInForm from "@/components/auth/SignInForm";
import SignUpForm from "@/components/auth/SignUpForm";
import SocialSignIn from "@/components/auth/SocialSignIn";
import Link from "next/link"; // Importer Link

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthDialog({ isOpen, onClose }: AuthDialogProps) {
  // Ajouter un état pour gérer le formulaire affiché ('signin' ou 'signup')
  const [showSignUp, setShowSignUp] = useState(false);

  // Réinitialiser l'état quand la boîte de dialogue se ferme
  const handleClose = () => {
    setShowSignUp(false); // Revenir au formulaire de connexion par défaut
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}> {/* Utiliser handleClose ici */}
      <DialogContent className="sm:max-w-[425px]">
        <div className="mt-6">
          {showSignUp ? (
            // Afficher le formulaire d'inscription si showSignUp est true
            <SignUpForm />
          ) : (
            // Afficher le formulaire de connexion par défaut
            <SignInForm />
          )}

          <div className="mt-6">
            <SocialSignIn />
          </div>

          {/* Ajouter un lien pour basculer entre connexion et inscription */}
          <div className="text-black text-center text-sm mt-4"> {/* Ajouter mt-4 pour l'espacement */}
            {showSignUp ? (
              // Lien pour revenir à la connexion
              <>
                Déjà un compte ?{' '}
                <button
                  onClick={() => setShowSignUp(false)} // Changer l'état pour afficher la connexion
                  className="underline text-[#432dd7] hover:text-[#a00030] cursor-pointer" // Utiliser un bouton stylisé comme un lien
                >
                  Se connecter
                </button>
              </>
            ) : (
              // Lien pour aller à l'inscription
              <>
                Pas encore de compte ?{' '}
                <button
                  onClick={() => setShowSignUp(true)} // Changer l'état pour afficher l'inscription
                  className="underline text-[#432dd7] hover:text-[#a00030] cursor-pointer" // Utiliser un bouton stylisé comme un lien
                >
                  S'inscrire
                </button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}