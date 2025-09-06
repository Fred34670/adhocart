# Étape 1: Installation des dépendances
FROM node:18-buster AS deps
RUN sed -i 's/deb.debian.org/archive.debian.org/g' /etc/apt/sources.list && apt-get update -y && apt-get install -y openssl
WORKDIR /app
COPY package*.json ./
RUN npm install

# Étape 2: Build de l'application
FROM node:18-buster AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN DATABASE_URL="postgresql://dummy:dummy@dummy:5432/dummy" npm run build

# Étape 3: Image finale de production
FROM node:18-buster AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "server.js"]