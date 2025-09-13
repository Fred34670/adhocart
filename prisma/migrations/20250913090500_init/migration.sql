-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Choix" AS ENUM ('Oui', 'Non');

-- CreateTable
CREATE TABLE "archivage" (
    "id" SMALLSERIAL NOT NULL,
    "nom_archivage" TEXT,

    CONSTRAINT "pk_archivage" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "archivage_id" SMALLINT,
    "categorie_id" SMALLINT,
    "nom_auteur" TEXT,
    "prenom_auteur" TEXT,
    "titre" TEXT,
    "illustrations" TEXT,
    "editeur" TEXT,
    "date_impression" TEXT,
    "nombre_pages" TEXT,
    "description" TEXT,
    "prix_achat" DECIMAL,
    "valeur_marche_min" DECIMAL,
    "prix_vente_internet" DECIMAL,
    "quantite_volume" SMALLINT,
    "poids_net_kg" TEXT,
    "frais_postaux" DECIMAL,
    "date_creation" DATE,
    "date_vente" DATE,
    "nom_complet" TEXT,
    "pseudo_titre" TEXT,
    "collection" TEXT,
    "justification" TEXT,
    "date_EO" TEXT,
    "estimation" TEXT,
    "prix_reserve" DECIMAL,
    "disponible" "Choix",
    "envoi_possible" "Choix",
    "edition_papier_id" SMALLINT,
    "id_utilisateur" SMALLINT,

    CONSTRAINT "pk_article" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_theme" (
    "article_id" INTEGER NOT NULL,
    "theme_id" SMALLINT NOT NULL,

    CONSTRAINT "pk_article_theme" PRIMARY KEY ("article_id","theme_id")
);

-- CreateTable
CREATE TABLE "categorie" (
    "id" SMALLSERIAL NOT NULL,
    "nom_categorie" TEXT NOT NULL,
    "image_url" TEXT,
    "image_entete_url" TEXT,
    "description" TEXT,

    CONSTRAINT "pk_categorie" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorie_theme" (
    "categorie_id" SMALLINT NOT NULL,
    "theme_id" SMALLINT NOT NULL,

    CONSTRAINT "pk_categorie_theme" PRIMARY KEY ("categorie_id","theme_id")
);

-- CreateTable
CREATE TABLE "edition_papier" (
    "id" SMALLSERIAL NOT NULL,
    "libelle_edition_papier" TEXT,

    CONSTRAINT "edition_papier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favoris" (
    "utilisateur_id" SMALLINT NOT NULL,
    "article_id" INTEGER NOT NULL,

    CONSTRAINT "pk_favoris" PRIMARY KEY ("utilisateur_id","article_id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" SERIAL NOT NULL,
    "article_id" INTEGER NOT NULL,
    "libelle_photo" TEXT NOT NULL,
    "url_photo" TEXT,
    "a_la_une" "Choix" DEFAULT 'Non',

    CONSTRAINT "pk_photos" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "theme" (
    "id" SMALLSERIAL NOT NULL,
    "libelle_theme" TEXT,

    CONSTRAINT "pk_theme" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_utilisateur" (
    "id" SMALLSERIAL NOT NULL,
    "nom_type_utilisateur" TEXT NOT NULL,

    CONSTRAINT "pk_typeutilisateur" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "utilisateur" (
    "id" SMALLSERIAL NOT NULL,
    "type_utilisateur_id" SMALLINT NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT,
    "prenom" TEXT,
    "password" TEXT,
    "adresse" TEXT,
    "code_postal" TEXT,
    "ville" TEXT,
    "telephone" TEXT,
    "role" "Role" DEFAULT 'USER',
    "passwordResetToken" TEXT,
    "passwordResetExpires" TIMESTAMPTZ(6),

    CONSTRAINT "pk_utilisateur" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conversation" (
    "id" SERIAL NOT NULL,
    "articleId" INTEGER NOT NULL,
    "userId" SMALLINT,
    "guestName" TEXT,
    "guestEmail" TEXT,
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "conversationId" INTEGER NOT NULL,
    "senderIsAdmin" BOOLEAN NOT NULL,
    "content" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "archivage_id_archivage_key" ON "archivage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ak_cle_1_utilisat" ON "utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "utilisateur_passwordResetToken_key" ON "utilisateur"("passwordResetToken");

-- AddForeignKey
ALTER TABLE "article" ADD CONSTRAINT "article_archivage_id_fkey" FOREIGN KEY ("archivage_id") REFERENCES "archivage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "article" ADD CONSTRAINT "article_categorie_id_fkey" FOREIGN KEY ("categorie_id") REFERENCES "categorie"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "article" ADD CONSTRAINT "article_edition_papier_id_fkey" FOREIGN KEY ("edition_papier_id") REFERENCES "edition_papier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "article" ADD CONSTRAINT "article_id_utilisateur_fkey" FOREIGN KEY ("id_utilisateur") REFERENCES "utilisateur"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "article_theme" ADD CONSTRAINT "article_theme_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "article"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "article_theme" ADD CONSTRAINT "article_theme_theme_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "theme"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "categorie_theme" ADD CONSTRAINT "categorie_theme_categorie_id_fkey" FOREIGN KEY ("categorie_id") REFERENCES "categorie"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "categorie_theme" ADD CONSTRAINT "categorie_theme_theme_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "theme"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "favoris" ADD CONSTRAINT "favoris_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "article"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "favoris" ADD CONSTRAINT "favoris_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "utilisateur"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "article"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "utilisateur" ADD CONSTRAINT "fk_utilisat_est_de_ty_typeutil" FOREIGN KEY ("type_utilisateur_id") REFERENCES "type_utilisateur"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "utilisateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;