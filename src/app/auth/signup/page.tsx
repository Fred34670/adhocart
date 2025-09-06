import { Metadata } from "next";
import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscription | AdhoCart",
  description: "Créez un compte sur AdhoCart",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Créez votre compte
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <SignUpForm />
          <div className="mt-6 text-center">
            <Link href="/auth/signin" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Déjà inscrit ? Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}