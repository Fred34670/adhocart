// src/lib/errorHandler.ts
// Service dédié à la gestion des erreurs

// Types d'erreurs personnalisés
export class ApplicationError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'ApplicationError';
  }
}

export class ValidationError extends ApplicationError {
  constructor(message: string, details?: Record<string, any>) {
    super(message, 400, details);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends ApplicationError {
  constructor(message: string = 'Authentification requise') {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends ApplicationError {
  constructor(message: string = 'Accès non autorisé') {
    super(message, 403);
    this.name = 'AuthorizationError';
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message: string = 'Ressource non trouvée') {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

// Fonction pour gérer les erreurs dans les API routes
export function handleApiError(error: unknown): Response {
  console.error('Erreur API:', error);

  // Si c'est une erreur personnalisée
  if (error instanceof ApplicationError) {
    return new Response(
      JSON.stringify({
        message: error.message,
        ...(error.details && { details: error.details })
      }),
      {
        status: error.statusCode,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // Erreur inattendue
  return new Response(
    JSON.stringify({
      message: 'Erreur interne du serveur'
    }),
    {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Fonction pour logger les erreurs
export function logError(error: Error, context?: string): void {
  const timestamp = new Date().toISOString();
  const errorInfo = {
    timestamp,
    message: error.message,
    stack: error.stack,
    context
  };

  // Dans un environnement de production, on pourrait envoyer les erreurs à un service de monitoring
  if (process.env.NODE_ENV === 'development') {
    console.error('Erreur:', errorInfo);
  } else {
    // En production, on pourrait utiliser un service comme Sentry
    console.error(`[${timestamp}] Erreur ${context}: ${error.message}`);
  }
}

// Fonction pour créer une réponse d'erreur formatée
export function createErrorResponse(
  message: string,
  statusCode: number = 500,
  details?: Record<string, any>
): Response {
  return new Response(
    JSON.stringify({
      message,
      ...(details && { details })
    }),
    {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}