// src/lib/json.ts
import { Decimal } from '@prisma/client/runtime/library';

// Fonction pour rendre un objet sérialisable en JSON en convertissant les types non standards.
function makeSerializable(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Gérer les instances de Decimal
  if (obj instanceof Decimal) {
    return obj.toString();
  }
  
  // Gérer les BigInt
  if (typeof obj === 'bigint') {
    return obj.toString();
  }

  // Gérer les dates
  if (obj instanceof Date) {
    return obj.toISOString();
  }

  // Gérer les tableaux en itérant sur leurs éléments
  if (Array.isArray(obj)) {
    return obj.map(makeSerializable);
  }

  // Gérer les objets en itérant sur leurs propriétés
  const newObj: { [key: string]: any } = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = makeSerializable(obj[key]);
    }
  }

  return newObj;
}


// Remplacer la méthode toJSON globale de BigInt pour la sérialisation automatique
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export { makeSerializable };