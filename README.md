# Adhocart

Adhocart est une application de gestion de collection d'articles culturels, incluant des livres, des arts graphiques et des documents historiques. L'application permet aux utilisateurs de parcourir la collection, de gérer leurs favoris et de contacter les vendeurs. L'interface d'administration permet de gérer les articles, les catégories, les thèmes, les utilisateurs et les messages.

## Fonctionnalités principales

- Parcours de la collection d'articles
- Recherche et filtrage des articles
- Gestion des favoris
- Messagerie entre acheteurs et vendeurs
- Interface d'administration complète
- Gestion des catégories, thèmes et éditions papier
- Statistiques de ventes et d'acheteurs

## Prérequis

- Node.js >= 18.x
- npm, yarn ou pnpm
- PostgreSQL
- Compte Supabase (pour le stockage des images)

## Installation

1. Cloner le dépôt :
   ```bash
   git clone <url_du_dépôt>
   cd adhocart
   ```

2. Installer les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Copier le fichier d'environnement :
   ```bash
   cp .env.example .env
   ```

4. Configurer les variables d'environnement dans le fichier `.env` :
   - `DATABASE_URL` : URL de connexion à la base de données PostgreSQL
   - `NEXTAUTH_SECRET` : Clé secrète pour NextAuth
   - `NEXTAUTH_URL` : URL de l'application
   - `SUPABASE_URL` : URL du projet Supabase
   - `SUPABASE_SERVICE_ROLE_KEY` : Clé de service Supabase

5. Générer le client Prisma :
   ```bash
   npx prisma generate
   ```

6. Appliquer les migrations de la base de données :
   ```bash
   npx prisma migrate dev
   ```

## Développement

Pour lancer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Structure du projet

- `src/app/` : Pages et API routes de l'application
- `src/components/` : Composants React
- `src/lib/` : Utilitaires et logique métier
- `prisma/` : Schéma de base de données Prisma
- `public/` : Fichiers statiques

## Commandes disponibles

- `npm run dev` : Lancer le serveur de développement
- `npm run build` : Construire l'application pour la production
- `npm start` : Démarrer le serveur de production
- `npm run lint` : Lancer l'analyseur de code

## Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Prisma](https://www.prisma.io/) - ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentification
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Supabase](https://supabase.io/) - Backend et stockage
- [PostgreSQL](https://www.postgresql.org/) - Base de données

## Déploiement

L'application peut être déployée sur Vercel, Netlify ou tout autre service compatible avec Next.js.

## Contribution

1. Forker le dépôt
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalité`)
3. Commiter vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
4. Pusher la branche (`git push origin feature/ma-fonctionnalité`)
5. Créer une nouvelle Pull Request

## Licence

Ce projet est sous licence MIT.
