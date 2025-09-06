'use client';

import SignInForm from '@/components/auth/SignInForm';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

export default function SignInPage() {
  const router = useRouter();

  const handleForgotPassword = () => {
    router.push('/auth/forgot-password');
  };

  const handleShowRegister = () => {
    router.push('/auth/register');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5F5DC]">
      <Suspense fallback={<div>Chargement...</div>}>
        <SignInForm 
          onForgotPassword={handleForgotPassword}
          onShowRegister={handleShowRegister}
        />
      </Suspense>
    </div>
  );
}