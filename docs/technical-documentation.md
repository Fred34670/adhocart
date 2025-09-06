# Documentation Technique - Adhocart

## Architecture de l'application

### Structure globale

L'application suit l'architecture standard de Next.js avec App Router :

```
src/
├── app/                 # Pages et API routes
│   ├── api/            # API routes
│   ├── admin/          # Interface d'administration
│   └── ...             # Pages publiques
├── components/         # Composants React
├── lib/                # Utilitaires et logique métier
├── types/              # Définitions de types TypeScript
└── ...
```

### Technologies principales

- **Next.js 14** avec App Router
- **TypeScript** pour le typage statique
- **Prisma** comme ORM pour PostgreSQL
- **NextAuth.js** pour l'authentification
- **Tailwind CSS** pour le styling
- **Supabase** pour le stockage des images

## Base de données

### Schéma Prisma

Le schéma de la base de données est défini dans `prisma/schema.prisma`. Les principales entités sont :

- `article` : Représente un article de la collection
- `categorie` : Catégorie d'articles (Livres, Arts graphiques, etc.)
- `theme` : Thème associé aux articles et catégories
- `utilisateur` : Utilisateurs de l'application
- `favoris` : Articles mis en favoris par les utilisateurs
- `photos` : Photos des articles
- `Conversation` et `Message` : Système de messagerie

### Relations

- Un article appartient à une catégorie et à un archivage
- Un article peut avoir plusieurs thèmes (via la table de jointure `article_theme`)
- Un utilisateur peut avoir plusieurs articles en favoris
- Un article peut avoir plusieurs photos
- Les conversations et messages relient les utilisateurs aux articles

## Authentification

L'authentification est gérée par NextAuth.js avec un adaptateur Prisma. Les utilisateurs peuvent s'inscrire et se connecter avec leur email/mot de passe ou via des fournisseurs OAuth.

### Rôles

- **USER** : Utilisateur standard
- **ADMIN** : Administrateur avec accès à l'interface d'administration

## API

### Routes publiques

- `/api/articles` : Récupération des articles avec filtres
- `/api/articles/[id]` : Récupération d'un article spécifique
- `/api/auth/*` : Routes d'authentification
- `/api/favoris/*` : Gestion des favoris
- `/api/messaging/*` : Système de messagerie

### Routes administratives

- `/api/admin/articles/*` : Gestion des articles
- `/api/admin/categories/*` : Gestion des catégories
- `/api/admin/themes/*` : Gestion des thèmes
- `/api/admin/users/*` : Gestion des utilisateurs
- `/api/admin/stats/*` : Statistiques

## Composants

### Structure des composants

Les composants sont organisés par fonctionnalité dans `src/components/` :

```
src/components/
├── admin/       # Composants de l'interface d'administration
├── articles/    # Composants liés aux articles
├── auth/        # Composants d'authentification
├── categories/  # Composants liés aux catégories
├── favoris/     # Composants liés aux favoris
├── home/        # Composants de la page d'accueil
├── layout/      # Composants de layout (header, footer, etc.)
├── messaging/   # Composants de messagerie
└── ui/          # Composants UI réutilisables
```

### Composants UI

Les composants UI réutilisables sont basés sur Radix UI et stylés avec Tailwind CSS.

## Gestion des erreurs

Les erreurs sont gérées de manière centralisée avec des messages d'erreur descriptifs. Les erreurs côté serveur sont journalisées et renvoyées aux clients avec des codes HTTP appropriés.

## Déploiement

L'application est conçue pour être déployée sur Vercel, mais peut fonctionner sur tout environnement compatible avec Next.js. Le déploiement nécessite :

- Une base de données PostgreSQL
- Des variables d'environnement configurées
- Un compte Supabase pour le stockage des images

## Performances

- Utilisation de l'image optimisée de Next.js
- Mise en cache des requêtes Prisma lorsque c'est approprié
- Pagination des listes pour éviter le chargement excessif de données