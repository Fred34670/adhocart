import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Erreur d'authentification | AdhoCart",
  description: "Une erreur est survenue lors de l'authentification",
};

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Erreur d'authentification
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Une erreur est survenue lors de votre tentative de connexion.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <p className="text-center text-gray-700">
              Veuillez réessayer ou contacter l'administrateur si le problème persiste.
            </p>
            <div>
              <Link
                href="/auth/signin"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Retour à la page de connexion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}