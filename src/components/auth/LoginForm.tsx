// src/components/auth/LoginForm.tsx (à modifier)
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LoginFormProps {
  onForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onForgotPassword }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Logique de connexion
    console.log('Tentative de connexion');
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email-login" className="text-right">
          Email
        </Label>
        <Input id="email-login" type="email" className="col-span-3" required />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="password-login" className="text-right">
          Mot de passe
        </Label>
        <Input id="password-login" type="password" className="col-span-3" required />
      </div>
      <Button type="submit">Se connecter</Button>
      <Button type="button" variant="link" onClick={onForgotPassword}>
        Mot de passe oublié ?
      </Button>
    </form>
  );
};

export default LoginForm;
