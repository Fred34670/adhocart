'use client';

import React, { useState } from 'react';
import { User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

type View = 'signin' | 'signup' | 'forgot-password';

interface AuthModalProps {
  children?: React.ReactNode;
}

const AuthModal: React.FC<AuthModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>('signin');

  const handleClose = () => setIsOpen(false);

  const getTitle = () => {
    switch (view) {
      case 'signin':
        return 'Connexion';
      case 'signup':
        return "S'inscrire";
      case 'forgot-password':
        return 'Mot de passe oublié';
      default:
        return 'Authentification';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children ? (
          <div onClick={() => setView('signin')}>{children}</div>
        ) : (
          <span
            className="text-blank flex items-center cursor-pointer"
            title="Connexion / Inscription"
            onClick={() => {
              setView('signin');
              setIsOpen(true);
            }}
          >
            <User className="h-6 w-6" />
          </span>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
        </DialogHeader>
        {view === 'signin' && (
          <SignInForm 
            onShowRegister={() => setView('signup')} 
            onForgotPassword={() => setView('forgot-password')}
            onClose={handleClose} 
          />
        )}
        {view === 'signup' && <SignUpForm onShowLogin={() => setView('signin')} onClose={handleClose} />}
        {view === 'forgot-password' && <ForgotPasswordForm onBackToLogin={() => setView('signin')} />}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;

