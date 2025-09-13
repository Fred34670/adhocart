'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import BreadcrumbsWrapper from '@/components/layout/BreadcrumbsWrapper';
import { User, Heart, Mail } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import AuthModal from '@/components/auth/AuthModal';
import LogoutModal from '@/components/ui/LogoutModal';
import { useFavoritesStore } from '@/lib/store';
import { FAVORITES_UPDATE_EVENT } from '@/lib/events';

interface NavbarProps {
  categories: { id: number; name: string; slug: string }[];
}

export const Navbar: React.FC<NavbarProps> = ({ categories }) => {
  const { data: session, status } = useSession();
  const isAuthenticated = !!session?.user;
  const { favoriteIds, fetchFavorites } = useFavoritesStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // État pour la modale
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);

  useEffect(() => {
    const fetchUnreadCount = async () => {
      const isAdmin = session?.user?.role === 'ADMIN';
      const endpoint = isAdmin ? '/api/admin/messagerie/unread-count' : '/api/messaging/unread-count';
      
      if (session?.user) {
        try {
          const response = await fetch(endpoint);
          if (response.ok) {
            const data = await response.json();
            setUnreadMessagesCount(data.count);
          }
        } catch (error) {
          console.error(`Failed to fetch ${isAdmin ? 'admin' : 'user'} unread messages count`, error);
        }
      }
    };

    fetchUnreadCount();

    // Optionnel: mettre en place un re-fetch périodique ou via websockets
    const interval = setInterval(fetchUnreadCount, 60000); // Toutes les minutes

    return () => clearInterval(interval);
  }, [session]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchFavorites(session.user.id);
    } else if (status === 'unauthenticated') {
      fetchFavorites(''); // Pour charger les favoris des invités
    }
  }, [status, session, fetchFavorites]);

  useEffect(() => {
    const handleFavoritesUpdate = () => {
      if (status === 'authenticated') {
        fetchFavorites(session.user.id);
      } else if (status === 'unauthenticated') {
        fetchFavorites('');
      }
    };

    window.addEventListener(FAVORITES_UPDATE_EVENT, handleFavoritesUpdate);

    return () => {
      window.removeEventListener(FAVORITES_UPDATE_EVENT, handleFavoritesUpdate);
    };
  }, [status, session, fetchFavorites]);

  const favoriteCount = favoriteIds.size;

  const pathname = usePathname();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogoutClick = () => {
    setIsMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    const stashedFavoritesRaw = sessionStorage.getItem('stashedGuestFavorites');

    if (stashedFavoritesRaw) {
      // Si des favoris ont été mis de côté (cas de l'admin), on les restaure.
      localStorage.setItem('guestFavorites', stashedFavoritesRaw);
      sessionStorage.removeItem('stashedGuestFavorites');
    } else {
      // Sinon, on sauvegarde les favoris de l'utilisateur normal.
      const currentFavorites = Array.from(favoriteIds).map(String);
      localStorage.setItem('guestFavorites', JSON.stringify(currentFavorites));
    }
    
    signOut({ callbackUrl: '/' });
    setIsLogoutModalOpen(false);
  };

  return (
    <>
      <BreadcrumbsWrapper />
      <nav className="navbar">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex h-16 items-center justify-between gap-x-6">
            {/* Left Section: Logo & Categories */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {pathname === '/' ? (
                  <span className="text-3xl font-bold text-white">Adhocart</span>
                ) : (
                  <Link href="/" className="text-2xl font-bold text-white">
                    Adhocart
                  </Link>
                )}
              </div>
              <div className="hidden lg:flex ml-10 space-x-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base font-medium text-white hover:border-gray-300"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Center Section: Search */}
            <div className="flex-1 flex justify-center px-6">
              <form onSubmit={handleSearchSubmit} className="relative text-gray-800 w-full max-w-lg">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Rechercher un titre, un auteur..."
                    className="pl-8 pr-2 py-1 rounded-md text-sm w-full bg-white text-black placeholder:text-gray-500"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </form>
            </div>

            {/* Right Section: Icons */}
            <div className="flex items-center justify-end space-x-4" style={{ minWidth: '150px' }}>
              {session?.user && (
                <Link href={session.user.role === 'ADMIN' ? "/admin/messagerie" : "/profile/messagerie"} className="text-white flex items-center relative p-2" title="Messagerie">
                  <Mail className="h-7 w-7" />
                  {unreadMessagesCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      {unreadMessagesCount}
                    </span>
                  )}
                </Link>
              )}
              {session?.user?.role !== 'ADMIN' && (
                <Link href="/favoris" className="text-white flex items-center" title="Favoris">
                  <Heart className="h-6 w-6" />
                  {favoriteCount > 0 && (
                    <span className="ml-1 text-xs font-bold">{favoriteCount}</span>
                  )}
                </Link>
              )}
              {isLoading ? (
                <User className="h-6 w-6 text-white animate-pulse" />
              ) : isAuthenticated ? (
                <div className="relative">
                  <div>
                    <button
                      type="button"
                      className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <span className="sr-only">Ouvrir le menu utilisateur</span>
                      {session?.user?.image ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={session.user.image}
                          alt={`Avatar de ${session.user.name || 'l\'utilisateur'}`}
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-800 font-medium">
                            {session?.user?.name?.charAt(0) || session?.user?.email?.charAt(0) || 'U'}
                          </span>
                        </div>
                      )}
                    </button>
                  </div>
                  {isMenuOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-4 py-2 text-xs text-gray-500">
                        Connecté en tant que <span className="font-medium">{session?.user?.name || session?.user?.email}</span>
                      </div>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Profil
                      </Link>
                      {session?.user?.role === 'ADMIN' && (
                        <>
                          <Link
                            href="/admin"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Gestion du site
                          </Link>
                        </>
                      )}
                      <button
                        onClick={handleLogoutClick}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <AuthModal />
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex h-16 items-center justify-between sm:hidden">
            <Link href="/" className="text-2xl font-bold text-white">
              Adhocart
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Search Bar */}
              <div className="px-2 py-2">
                <form onSubmit={handleSearchSubmit} className="relative text-gray-800 w-full">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Rechercher..."
                      className="pl-8 pr-2 py-1 rounded-md text-sm w-full bg-white text-black placeholder:text-gray-500"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                </form>
              </div>

              {/* Categories */}
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="block rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}

              {/* User Section */}
              <div className="border-t border-gray-700 pt-4 mt-4">
                {isAuthenticated ? (
                  <div className="pb-3">
                    <div className="flex items-center px-2">
                      {session?.user?.image ? (
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={session.user.image}
                            alt={`Avatar de ${session.user.name || 'l\'utilisateur'}`}
                          />
                        </div>
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-800 font-medium">
                            {session?.user?.name?.charAt(0) || session?.user?.email?.charAt(0) || 'U'}
                          </span>
                        </div>
                      )}
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">{session?.user?.name}</div>
                        <div className="text-sm font-medium text-gray-400">{session?.user?.email}</div>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      <Link
                        href="/profile"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Profil
                      </Link>
                      {session?.user?.role === 'ADMIN' && (
                        <>
                          <Link
                            href="/admin"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Gestion du site
                          </Link>
                        </>
                      )}
                      <button
                        onClick={handleLogoutClick}
                        className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        Déconnexion
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 px-2">
                     <Link href="/favoris" className="text-white flex items-center gap-x-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700" title="Favoris">
                        <Heart className="h-6 w-6" />
                        <span>Favoris</span>
                        {favoriteCount > 0 && (
                          <span className="ml-auto text-xs font-bold">{favoriteCount}</span>
                        )}
                      </Link>
                      <AuthModal>
                        <div className="flex items-center gap-x-2 rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                          <User className="h-6 w-6" />
                          <span>Se connecter</span>
                        </div>
                      </AuthModal>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={confirmLogout}
      />
    </>
  );
};