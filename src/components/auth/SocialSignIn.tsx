'use client';

import { signIn } from 'next-auth/react';

export default function SocialSignIn() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
      {/* Ici, vous pouvez ajouter d'autres boutons de connexion sociale si besoin, mais Google a été retiré */}
    </div>
  );
}