'use client';

export default function HomeFooter() {
  return (
    <footer className="bg-[#2C1810] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Adhocart</h3>
            <p className="text-gray-300">Votre destination pour les livres rares et les arts graphiques depuis 1925.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Accueil</a></li>
              <li><a href="#" className="hover:text-white">Catalogue</a></li>
              <li><a href="#" className="hover:text-white">À Propos</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li><i className="fas fa-map-marker-alt mr-2"></i>15 Rue de la Bibliothèque, Paris</li>
              <li><i className="fas fa-phone mr-2"></i>+33 1 23 45 67 89</li>
              <li><i className="fas fa-envelope mr-2"></i>contact@labibliotheque.fr</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Adhocart. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}