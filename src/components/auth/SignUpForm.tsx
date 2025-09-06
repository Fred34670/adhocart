'use client';

import { useState, FormEvent } from 'react';

interface SignUpFormProps {
  onSuccess?: () => void;
  onShowLogin?: () => void;
  onClose?: () => void;
}

export default function SignUpForm({ onSuccess, onShowLogin, onClose }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Nouvel état pour la visibilité du mot de passe

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/auth/register', { // <-- Modifier ici : remplacer '/api/auth/signup' par '/api/auth/register'
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, nom: name }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || 'Erreur lors de l\'inscription');
      } else {
        setSuccess(true);
        if (onSuccess) {
          setTimeout(onSuccess, 1500); // Switch to signin view after a delay
        }
      }
    } catch (err) {
      setError('Erreur serveur, veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        </div>
      )}
      {success && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="text-sm text-green-700">Inscription réussie ! Redirection...</div>
          </div>
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
          Nom
        </label>
        <div className="mt-1">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Adresse email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <div className="mt-1 relative"> {/* Ajouter relative positioning ici */}
          <input
            id="password"
            name="password"
            // Changer le type en fonction de l'état showPassword
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pr-10 text-gray-900" // Ajouter pr-10 pour l'espace de l'icône
          />
          {/* Ajouter l'icône de l'œil */}
          <button
            type="button" // Important: utiliser type="button" pour ne pas soumettre le formulaire
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i> {/* Basculer l'icône */}
          </button>
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Inscription en cours...' : 'Créer un compte'}
        </button>
      </div>
      {onShowLogin && (
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={onShowLogin}
            className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
          >
            Déjà un compte ? Se connecter
          </button>
        </div>
      )}
    </form>
  );
}