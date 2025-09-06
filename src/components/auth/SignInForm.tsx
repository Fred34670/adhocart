'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { dispatchShowMergeFavoritesModal } from '@/lib/events';

interface SignInFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
  onClose?: () => void;
  onShowRegister?: () => void; // Ajoutez cette prop
  onForgotPassword?: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSuccess, onError, onClose, onShowRegister, onForgotPassword }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      // Recharger la session pour obtenir les informations complètes de l'utilisateur, y compris le rôle
      const newSessionResponse = await fetch('/api/auth/session');
      const newSession = await newSessionResponse.json();

      const localFavoritesRaw = localStorage.getItem('guestFavorites');
      const currentLocalFavorites = localFavoritesRaw ? JSON.parse(localFavoritesRaw) : [];

      // Ne proposer la fusion que si l'utilisateur n'est pas un ADMIN
      if (newSession?.user?.role !== 'ADMIN' && currentLocalFavorites.length > 0) {
        const response = await fetch('/api/favoris');
        let existingUserFavorites: { articleId: number }[] = [];
        if (response.ok) {
          const data = await response.json();
          existingUserFavorites = data.favorites || [];
        }

        dispatchShowMergeFavoritesModal({
          localFavorites: currentLocalFavorites.map((id: string) => ({ articleId: parseInt(id, 10) })),
          existingUserFavorites,
        });
      } else if (currentLocalFavorites.length > 0) {
        // Si c'est un admin, on ne fusionne pas. On met de côté les favoris locaux.
        sessionStorage.setItem('stashedGuestFavorites', JSON.stringify(currentLocalFavorites));
        localStorage.removeItem('guestFavorites');
      }

      // La redirection et la fermeture de la modale se font maintenant quoi qu'il arrive
      if (onClose) onClose();
      
      // Redirection en fonction du rôle
      // Rediriger vers la callbackUrl si elle existe, sinon rediriger en fonction du rôle
      if (callbackUrl) {
        router.push(callbackUrl);
      } else if (newSession?.user?.role === 'ADMIN') {
        router.push('/admin');
      } else {
        router.push('/');
      }
      router.refresh();

    } else if (result?.error) {
      const errorMessage = result.error === 'CredentialsSignin'
        ? 'Email ou mot de passe incorrect.'
        : 'Une erreur est survenue lors de la connexion.';
      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    }
  };

  if (status === 'loading') {
    return <div className="text-center">Chargement...</div>;
  }



  return (
    <>
      <div className="p-6 bg-[#F5F5DC] rounded-xl w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center font-sans text-black">Connexion</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center font-sans">
            <Label htmlFor="email" className="w-1/3 text-right pr-4 text-black font-sans">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="votre@email.com"
              className="w-2/3 placeholder:text-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center font-sans">
            <Label htmlFor="password" className="w-1/3 text-right pr-4 text-black font-sans">Mot de passe</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-2/3"
            />
          </div>
          <div className="text-right">
            <Button variant="link" type="button" onClick={onForgotPassword} className="p-0 h-auto text-xs text-black font-sans">
              Mot de passe oublié ?
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="font-sans">Annuler</Button>
            <Button type="submit" className="bg-[#8B0000] text-white font-sans">
              Se connecter
            </Button>
          </div>

          <div className="text-center pt-2">
            <Button variant="link" type="button" onClick={onShowRegister} className="text-black font-sans">
              Pas encore de compte ? S'inscrire
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;