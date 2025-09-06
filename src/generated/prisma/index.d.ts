
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model archivage
 * 
 */
export type archivage = $Result.DefaultSelection<Prisma.$archivagePayload>
/**
 * Model article
 * 
 */
export type article = $Result.DefaultSelection<Prisma.$articlePayload>
/**
 * Model article_theme
 * 
 */
export type article_theme = $Result.DefaultSelection<Prisma.$article_themePayload>
/**
 * Model categorie
 * 
 */
export type categorie = $Result.DefaultSelection<Prisma.$categoriePayload>
/**
 * Model categorie_theme
 * 
 */
export type categorie_theme = $Result.DefaultSelection<Prisma.$categorie_themePayload>
/**
 * Model edition_papier
 * 
 */
export type edition_papier = $Result.DefaultSelection<Prisma.$edition_papierPayload>
/**
 * Model favoris
 * 
 */
export type favoris = $Result.DefaultSelection<Prisma.$favorisPayload>
/**
 * Model photos
 * 
 */
export type photos = $Result.DefaultSelection<Prisma.$photosPayload>
/**
 * Model theme
 * 
 */
export type theme = $Result.DefaultSelection<Prisma.$themePayload>
/**
 * Model type_utilisateur
 * 
 */
export type type_utilisateur = $Result.DefaultSelection<Prisma.$type_utilisateurPayload>
/**
 * Model utilisateur
 * 
 */
export type utilisateur = $Result.DefaultSelection<Prisma.$utilisateurPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Choix: {
  Oui: 'Oui',
  Non: 'Non'
};

export type Choix = (typeof Choix)[keyof typeof Choix]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Choix = $Enums.Choix

export const Choix: typeof $Enums.Choix

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Archivages
 * const archivages = await prisma.archivage.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Archivages
   * const archivages = await prisma.archivage.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.archivage`: Exposes CRUD operations for the **archivage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archivages
    * const archivages = await prisma.archivage.findMany()
    * ```
    */
  get archivage(): Prisma.archivageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.articleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article_theme`: Exposes CRUD operations for the **article_theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Article_themes
    * const article_themes = await prisma.article_theme.findMany()
    * ```
    */
  get article_theme(): Prisma.article_themeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.categorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie_theme`: Exposes CRUD operations for the **categorie_theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorie_themes
    * const categorie_themes = await prisma.categorie_theme.findMany()
    * ```
    */
  get categorie_theme(): Prisma.categorie_themeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.edition_papier`: Exposes CRUD operations for the **edition_papier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Edition_papiers
    * const edition_papiers = await prisma.edition_papier.findMany()
    * ```
    */
  get edition_papier(): Prisma.edition_papierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favoris`: Exposes CRUD operations for the **favoris** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorises
    * const favorises = await prisma.favoris.findMany()
    * ```
    */
  get favoris(): Prisma.favorisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photos`: Exposes CRUD operations for the **photos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photos.findMany()
    * ```
    */
  get photos(): Prisma.photosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.theme`: Exposes CRUD operations for the **theme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Themes
    * const themes = await prisma.theme.findMany()
    * ```
    */
  get theme(): Prisma.themeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type_utilisateur`: Exposes CRUD operations for the **type_utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Type_utilisateurs
    * const type_utilisateurs = await prisma.type_utilisateur.findMany()
    * ```
    */
  get type_utilisateur(): Prisma.type_utilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.utilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    archivage: 'archivage',
    article: 'article',
    article_theme: 'article_theme',
    categorie: 'categorie',
    categorie_theme: 'categorie_theme',
    edition_papier: 'edition_papier',
    favoris: 'favoris',
    photos: 'photos',
    theme: 'theme',
    type_utilisateur: 'type_utilisateur',
    utilisateur: 'utilisateur',
    Conversation: 'Conversation',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "archivage" | "article" | "article_theme" | "categorie" | "categorie_theme" | "edition_papier" | "favoris" | "photos" | "theme" | "type_utilisateur" | "utilisateur" | "conversation" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      archivage: {
        payload: Prisma.$archivagePayload<ExtArgs>
        fields: Prisma.archivageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.archivageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.archivageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>
          }
          findFirst: {
            args: Prisma.archivageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.archivageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>
          }
          findMany: {
            args: Prisma.archivageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>[]
          }
          create: {
            args: Prisma.archivageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>
          }
          createMany: {
            args: Prisma.archivageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.archivageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>[]
          }
          delete: {
            args: Prisma.archivageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>
          }
          update: {
            args: Prisma.archivageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>
          }
          deleteMany: {
            args: Prisma.archivageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.archivageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.archivageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>[]
          }
          upsert: {
            args: Prisma.archivageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archivagePayload>
          }
          aggregate: {
            args: Prisma.ArchivageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchivage>
          }
          groupBy: {
            args: Prisma.archivageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArchivageGroupByOutputType>[]
          }
          count: {
            args: Prisma.archivageCountArgs<ExtArgs>
            result: $Utils.Optional<ArchivageCountAggregateOutputType> | number
          }
        }
      }
      article: {
        payload: Prisma.$articlePayload<ExtArgs>
        fields: Prisma.articleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          findFirst: {
            args: Prisma.articleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          findMany: {
            args: Prisma.articleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>[]
          }
          create: {
            args: Prisma.articleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          createMany: {
            args: Prisma.articleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.articleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>[]
          }
          delete: {
            args: Prisma.articleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          update: {
            args: Prisma.articleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          deleteMany: {
            args: Prisma.articleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.articleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>[]
          }
          upsert: {
            args: Prisma.articleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.articleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.articleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      article_theme: {
        payload: Prisma.$article_themePayload<ExtArgs>
        fields: Prisma.article_themeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.article_themeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.article_themeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>
          }
          findFirst: {
            args: Prisma.article_themeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.article_themeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>
          }
          findMany: {
            args: Prisma.article_themeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>[]
          }
          create: {
            args: Prisma.article_themeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>
          }
          createMany: {
            args: Prisma.article_themeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.article_themeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>[]
          }
          delete: {
            args: Prisma.article_themeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>
          }
          update: {
            args: Prisma.article_themeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>
          }
          deleteMany: {
            args: Prisma.article_themeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.article_themeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.article_themeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>[]
          }
          upsert: {
            args: Prisma.article_themeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$article_themePayload>
          }
          aggregate: {
            args: Prisma.Article_themeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle_theme>
          }
          groupBy: {
            args: Prisma.article_themeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Article_themeGroupByOutputType>[]
          }
          count: {
            args: Prisma.article_themeCountArgs<ExtArgs>
            result: $Utils.Optional<Article_themeCountAggregateOutputType> | number
          }
        }
      }
      categorie: {
        payload: Prisma.$categoriePayload<ExtArgs>
        fields: Prisma.categorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          findFirst: {
            args: Prisma.categorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          findMany: {
            args: Prisma.categorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>[]
          }
          create: {
            args: Prisma.categorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          createMany: {
            args: Prisma.categorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>[]
          }
          delete: {
            args: Prisma.categorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          update: {
            args: Prisma.categorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          deleteMany: {
            args: Prisma.categorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>[]
          }
          upsert: {
            args: Prisma.categorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.categorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.categorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      categorie_theme: {
        payload: Prisma.$categorie_themePayload<ExtArgs>
        fields: Prisma.categorie_themeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categorie_themeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categorie_themeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>
          }
          findFirst: {
            args: Prisma.categorie_themeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categorie_themeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>
          }
          findMany: {
            args: Prisma.categorie_themeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>[]
          }
          create: {
            args: Prisma.categorie_themeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>
          }
          createMany: {
            args: Prisma.categorie_themeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categorie_themeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>[]
          }
          delete: {
            args: Prisma.categorie_themeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>
          }
          update: {
            args: Prisma.categorie_themeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>
          }
          deleteMany: {
            args: Prisma.categorie_themeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categorie_themeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categorie_themeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>[]
          }
          upsert: {
            args: Prisma.categorie_themeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categorie_themePayload>
          }
          aggregate: {
            args: Prisma.Categorie_themeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie_theme>
          }
          groupBy: {
            args: Prisma.categorie_themeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Categorie_themeGroupByOutputType>[]
          }
          count: {
            args: Prisma.categorie_themeCountArgs<ExtArgs>
            result: $Utils.Optional<Categorie_themeCountAggregateOutputType> | number
          }
        }
      }
      edition_papier: {
        payload: Prisma.$edition_papierPayload<ExtArgs>
        fields: Prisma.edition_papierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.edition_papierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.edition_papierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>
          }
          findFirst: {
            args: Prisma.edition_papierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.edition_papierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>
          }
          findMany: {
            args: Prisma.edition_papierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>[]
          }
          create: {
            args: Prisma.edition_papierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>
          }
          createMany: {
            args: Prisma.edition_papierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.edition_papierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>[]
          }
          delete: {
            args: Prisma.edition_papierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>
          }
          update: {
            args: Prisma.edition_papierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>
          }
          deleteMany: {
            args: Prisma.edition_papierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.edition_papierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.edition_papierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>[]
          }
          upsert: {
            args: Prisma.edition_papierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$edition_papierPayload>
          }
          aggregate: {
            args: Prisma.Edition_papierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEdition_papier>
          }
          groupBy: {
            args: Prisma.edition_papierGroupByArgs<ExtArgs>
            result: $Utils.Optional<Edition_papierGroupByOutputType>[]
          }
          count: {
            args: Prisma.edition_papierCountArgs<ExtArgs>
            result: $Utils.Optional<Edition_papierCountAggregateOutputType> | number
          }
        }
      }
      favoris: {
        payload: Prisma.$favorisPayload<ExtArgs>
        fields: Prisma.favorisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favorisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favorisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>
          }
          findFirst: {
            args: Prisma.favorisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favorisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>
          }
          findMany: {
            args: Prisma.favorisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>[]
          }
          create: {
            args: Prisma.favorisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>
          }
          createMany: {
            args: Prisma.favorisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.favorisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>[]
          }
          delete: {
            args: Prisma.favorisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>
          }
          update: {
            args: Prisma.favorisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>
          }
          deleteMany: {
            args: Prisma.favorisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.favorisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.favorisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>[]
          }
          upsert: {
            args: Prisma.favorisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$favorisPayload>
          }
          aggregate: {
            args: Prisma.FavorisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavoris>
          }
          groupBy: {
            args: Prisma.favorisGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavorisGroupByOutputType>[]
          }
          count: {
            args: Prisma.favorisCountArgs<ExtArgs>
            result: $Utils.Optional<FavorisCountAggregateOutputType> | number
          }
        }
      }
      photos: {
        payload: Prisma.$photosPayload<ExtArgs>
        fields: Prisma.photosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.photosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.photosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          findFirst: {
            args: Prisma.photosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.photosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          findMany: {
            args: Prisma.photosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>[]
          }
          create: {
            args: Prisma.photosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          createMany: {
            args: Prisma.photosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.photosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>[]
          }
          delete: {
            args: Prisma.photosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          update: {
            args: Prisma.photosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          deleteMany: {
            args: Prisma.photosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.photosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.photosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>[]
          }
          upsert: {
            args: Prisma.photosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$photosPayload>
          }
          aggregate: {
            args: Prisma.PhotosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotos>
          }
          groupBy: {
            args: Prisma.photosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotosGroupByOutputType>[]
          }
          count: {
            args: Prisma.photosCountArgs<ExtArgs>
            result: $Utils.Optional<PhotosCountAggregateOutputType> | number
          }
        }
      }
      theme: {
        payload: Prisma.$themePayload<ExtArgs>
        fields: Prisma.themeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.themeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.themeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          findFirst: {
            args: Prisma.themeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.themeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          findMany: {
            args: Prisma.themeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>[]
          }
          create: {
            args: Prisma.themeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          createMany: {
            args: Prisma.themeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.themeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>[]
          }
          delete: {
            args: Prisma.themeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          update: {
            args: Prisma.themeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          deleteMany: {
            args: Prisma.themeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.themeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.themeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>[]
          }
          upsert: {
            args: Prisma.themeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$themePayload>
          }
          aggregate: {
            args: Prisma.ThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTheme>
          }
          groupBy: {
            args: Prisma.themeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.themeCountArgs<ExtArgs>
            result: $Utils.Optional<ThemeCountAggregateOutputType> | number
          }
        }
      }
      type_utilisateur: {
        payload: Prisma.$type_utilisateurPayload<ExtArgs>
        fields: Prisma.type_utilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.type_utilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.type_utilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>
          }
          findFirst: {
            args: Prisma.type_utilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.type_utilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>
          }
          findMany: {
            args: Prisma.type_utilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>[]
          }
          create: {
            args: Prisma.type_utilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>
          }
          createMany: {
            args: Prisma.type_utilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.type_utilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>[]
          }
          delete: {
            args: Prisma.type_utilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>
          }
          update: {
            args: Prisma.type_utilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>
          }
          deleteMany: {
            args: Prisma.type_utilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.type_utilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.type_utilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>[]
          }
          upsert: {
            args: Prisma.type_utilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_utilisateurPayload>
          }
          aggregate: {
            args: Prisma.Type_utilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType_utilisateur>
          }
          groupBy: {
            args: Prisma.type_utilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<Type_utilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.type_utilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<Type_utilisateurCountAggregateOutputType> | number
          }
        }
      }
      utilisateur: {
        payload: Prisma.$utilisateurPayload<ExtArgs>
        fields: Prisma.utilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.utilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.utilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          findFirst: {
            args: Prisma.utilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.utilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          findMany: {
            args: Prisma.utilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>[]
          }
          create: {
            args: Prisma.utilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          createMany: {
            args: Prisma.utilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.utilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>[]
          }
          delete: {
            args: Prisma.utilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          update: {
            args: Prisma.utilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          deleteMany: {
            args: Prisma.utilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.utilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.utilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>[]
          }
          upsert: {
            args: Prisma.utilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$utilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.utilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.utilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    archivage?: archivageOmit
    article?: articleOmit
    article_theme?: article_themeOmit
    categorie?: categorieOmit
    categorie_theme?: categorie_themeOmit
    edition_papier?: edition_papierOmit
    favoris?: favorisOmit
    photos?: photosOmit
    theme?: themeOmit
    type_utilisateur?: type_utilisateurOmit
    utilisateur?: utilisateurOmit
    conversation?: ConversationOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArchivageCountOutputType
   */

  export type ArchivageCountOutputType = {
    article: number
  }

  export type ArchivageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArchivageCountOutputTypeCountArticleArgs
  }

  // Custom InputTypes
  /**
   * ArchivageCountOutputType without action
   */
  export type ArchivageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArchivageCountOutputType
     */
    select?: ArchivageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArchivageCountOutputType without action
   */
  export type ArchivageCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
  }


  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    article_theme: number
    favoris: number
    photos: number
    conversations: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_theme?: boolean | ArticleCountOutputTypeCountArticle_themeArgs
    favoris?: boolean | ArticleCountOutputTypeCountFavorisArgs
    photos?: boolean | ArticleCountOutputTypeCountPhotosArgs
    conversations?: boolean | ArticleCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountArticle_themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_themeWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountFavorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favorisWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: photosWhereInput
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    article: number
    categorie_theme: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | CategorieCountOutputTypeCountArticleArgs
    categorie_theme?: boolean | CategorieCountOutputTypeCountCategorie_themeArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountCategorie_themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categorie_themeWhereInput
  }


  /**
   * Count Type Edition_papierCountOutputType
   */

  export type Edition_papierCountOutputType = {
    article: number
  }

  export type Edition_papierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | Edition_papierCountOutputTypeCountArticleArgs
  }

  // Custom InputTypes
  /**
   * Edition_papierCountOutputType without action
   */
  export type Edition_papierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edition_papierCountOutputType
     */
    select?: Edition_papierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Edition_papierCountOutputType without action
   */
  export type Edition_papierCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
  }


  /**
   * Count Type ThemeCountOutputType
   */

  export type ThemeCountOutputType = {
    article_theme: number
    categorie_theme: number
  }

  export type ThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_theme?: boolean | ThemeCountOutputTypeCountArticle_themeArgs
    categorie_theme?: boolean | ThemeCountOutputTypeCountCategorie_themeArgs
  }

  // Custom InputTypes
  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThemeCountOutputType
     */
    select?: ThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountArticle_themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_themeWhereInput
  }

  /**
   * ThemeCountOutputType without action
   */
  export type ThemeCountOutputTypeCountCategorie_themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categorie_themeWhereInput
  }


  /**
   * Count Type Type_utilisateurCountOutputType
   */

  export type Type_utilisateurCountOutputType = {
    utilisateur: number
  }

  export type Type_utilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | Type_utilisateurCountOutputTypeCountUtilisateurArgs
  }

  // Custom InputTypes
  /**
   * Type_utilisateurCountOutputType without action
   */
  export type Type_utilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type_utilisateurCountOutputType
     */
    select?: Type_utilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Type_utilisateurCountOutputType without action
   */
  export type Type_utilisateurCountOutputTypeCountUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateurWhereInput
  }


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    article: number
    favoris: number
    conversations: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | UtilisateurCountOutputTypeCountArticleArgs
    favoris?: boolean | UtilisateurCountOutputTypeCountFavorisArgs
    conversations?: boolean | UtilisateurCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountArticleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountFavorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favorisWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model archivage
   */

  export type AggregateArchivage = {
    _count: ArchivageCountAggregateOutputType | null
    _avg: ArchivageAvgAggregateOutputType | null
    _sum: ArchivageSumAggregateOutputType | null
    _min: ArchivageMinAggregateOutputType | null
    _max: ArchivageMaxAggregateOutputType | null
  }

  export type ArchivageAvgAggregateOutputType = {
    id: number | null
  }

  export type ArchivageSumAggregateOutputType = {
    id: number | null
  }

  export type ArchivageMinAggregateOutputType = {
    id: number | null
    nom_archivage: string | null
  }

  export type ArchivageMaxAggregateOutputType = {
    id: number | null
    nom_archivage: string | null
  }

  export type ArchivageCountAggregateOutputType = {
    id: number
    nom_archivage: number
    _all: number
  }


  export type ArchivageAvgAggregateInputType = {
    id?: true
  }

  export type ArchivageSumAggregateInputType = {
    id?: true
  }

  export type ArchivageMinAggregateInputType = {
    id?: true
    nom_archivage?: true
  }

  export type ArchivageMaxAggregateInputType = {
    id?: true
    nom_archivage?: true
  }

  export type ArchivageCountAggregateInputType = {
    id?: true
    nom_archivage?: true
    _all?: true
  }

  export type ArchivageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archivage to aggregate.
     */
    where?: archivageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivages to fetch.
     */
    orderBy?: archivageOrderByWithRelationInput | archivageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: archivageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned archivages
    **/
    _count?: true | ArchivageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchivageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchivageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivageMaxAggregateInputType
  }

  export type GetArchivageAggregateType<T extends ArchivageAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivage[P]>
      : GetScalarType<T[P], AggregateArchivage[P]>
  }




  export type archivageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archivageWhereInput
    orderBy?: archivageOrderByWithAggregationInput | archivageOrderByWithAggregationInput[]
    by: ArchivageScalarFieldEnum[] | ArchivageScalarFieldEnum
    having?: archivageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivageCountAggregateInputType | true
    _avg?: ArchivageAvgAggregateInputType
    _sum?: ArchivageSumAggregateInputType
    _min?: ArchivageMinAggregateInputType
    _max?: ArchivageMaxAggregateInputType
  }

  export type ArchivageGroupByOutputType = {
    id: number
    nom_archivage: string | null
    _count: ArchivageCountAggregateOutputType | null
    _avg: ArchivageAvgAggregateOutputType | null
    _sum: ArchivageSumAggregateOutputType | null
    _min: ArchivageMinAggregateOutputType | null
    _max: ArchivageMaxAggregateOutputType | null
  }

  type GetArchivageGroupByPayload<T extends archivageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivageGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivageGroupByOutputType[P]>
        }
      >
    >


  export type archivageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_archivage?: boolean
    article?: boolean | archivage$articleArgs<ExtArgs>
    _count?: boolean | ArchivageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archivage"]>

  export type archivageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_archivage?: boolean
  }, ExtArgs["result"]["archivage"]>

  export type archivageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_archivage?: boolean
  }, ExtArgs["result"]["archivage"]>

  export type archivageSelectScalar = {
    id?: boolean
    nom_archivage?: boolean
  }

  export type archivageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom_archivage", ExtArgs["result"]["archivage"]>
  export type archivageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | archivage$articleArgs<ExtArgs>
    _count?: boolean | ArchivageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type archivageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type archivageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $archivagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "archivage"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom_archivage: string | null
    }, ExtArgs["result"]["archivage"]>
    composites: {}
  }

  type archivageGetPayload<S extends boolean | null | undefined | archivageDefaultArgs> = $Result.GetResult<Prisma.$archivagePayload, S>

  type archivageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<archivageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArchivageCountAggregateInputType | true
    }

  export interface archivageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['archivage'], meta: { name: 'archivage' } }
    /**
     * Find zero or one Archivage that matches the filter.
     * @param {archivageFindUniqueArgs} args - Arguments to find a Archivage
     * @example
     * // Get one Archivage
     * const archivage = await prisma.archivage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends archivageFindUniqueArgs>(args: SelectSubset<T, archivageFindUniqueArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archivage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {archivageFindUniqueOrThrowArgs} args - Arguments to find a Archivage
     * @example
     * // Get one Archivage
     * const archivage = await prisma.archivage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends archivageFindUniqueOrThrowArgs>(args: SelectSubset<T, archivageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivageFindFirstArgs} args - Arguments to find a Archivage
     * @example
     * // Get one Archivage
     * const archivage = await prisma.archivage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends archivageFindFirstArgs>(args?: SelectSubset<T, archivageFindFirstArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archivage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivageFindFirstOrThrowArgs} args - Arguments to find a Archivage
     * @example
     * // Get one Archivage
     * const archivage = await prisma.archivage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends archivageFindFirstOrThrowArgs>(args?: SelectSubset<T, archivageFindFirstOrThrowArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archivages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archivages
     * const archivages = await prisma.archivage.findMany()
     * 
     * // Get first 10 Archivages
     * const archivages = await prisma.archivage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archivageWithIdOnly = await prisma.archivage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends archivageFindManyArgs>(args?: SelectSubset<T, archivageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archivage.
     * @param {archivageCreateArgs} args - Arguments to create a Archivage.
     * @example
     * // Create one Archivage
     * const Archivage = await prisma.archivage.create({
     *   data: {
     *     // ... data to create a Archivage
     *   }
     * })
     * 
     */
    create<T extends archivageCreateArgs>(args: SelectSubset<T, archivageCreateArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archivages.
     * @param {archivageCreateManyArgs} args - Arguments to create many Archivages.
     * @example
     * // Create many Archivages
     * const archivage = await prisma.archivage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends archivageCreateManyArgs>(args?: SelectSubset<T, archivageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Archivages and returns the data saved in the database.
     * @param {archivageCreateManyAndReturnArgs} args - Arguments to create many Archivages.
     * @example
     * // Create many Archivages
     * const archivage = await prisma.archivage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Archivages and only return the `id`
     * const archivageWithIdOnly = await prisma.archivage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends archivageCreateManyAndReturnArgs>(args?: SelectSubset<T, archivageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Archivage.
     * @param {archivageDeleteArgs} args - Arguments to delete one Archivage.
     * @example
     * // Delete one Archivage
     * const Archivage = await prisma.archivage.delete({
     *   where: {
     *     // ... filter to delete one Archivage
     *   }
     * })
     * 
     */
    delete<T extends archivageDeleteArgs>(args: SelectSubset<T, archivageDeleteArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archivage.
     * @param {archivageUpdateArgs} args - Arguments to update one Archivage.
     * @example
     * // Update one Archivage
     * const archivage = await prisma.archivage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends archivageUpdateArgs>(args: SelectSubset<T, archivageUpdateArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archivages.
     * @param {archivageDeleteManyArgs} args - Arguments to filter Archivages to delete.
     * @example
     * // Delete a few Archivages
     * const { count } = await prisma.archivage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends archivageDeleteManyArgs>(args?: SelectSubset<T, archivageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archivages
     * const archivage = await prisma.archivage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends archivageUpdateManyArgs>(args: SelectSubset<T, archivageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivages and returns the data updated in the database.
     * @param {archivageUpdateManyAndReturnArgs} args - Arguments to update many Archivages.
     * @example
     * // Update many Archivages
     * const archivage = await prisma.archivage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Archivages and only return the `id`
     * const archivageWithIdOnly = await prisma.archivage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends archivageUpdateManyAndReturnArgs>(args: SelectSubset<T, archivageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Archivage.
     * @param {archivageUpsertArgs} args - Arguments to update or create a Archivage.
     * @example
     * // Update or create a Archivage
     * const archivage = await prisma.archivage.upsert({
     *   create: {
     *     // ... data to create a Archivage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archivage we want to update
     *   }
     * })
     */
    upsert<T extends archivageUpsertArgs>(args: SelectSubset<T, archivageUpsertArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archivages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivageCountArgs} args - Arguments to filter Archivages to count.
     * @example
     * // Count the number of Archivages
     * const count = await prisma.archivage.count({
     *   where: {
     *     // ... the filter for the Archivages we want to count
     *   }
     * })
    **/
    count<T extends archivageCountArgs>(
      args?: Subset<T, archivageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archivage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArchivageAggregateArgs>(args: Subset<T, ArchivageAggregateArgs>): Prisma.PrismaPromise<GetArchivageAggregateType<T>>

    /**
     * Group by Archivage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archivageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends archivageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: archivageGroupByArgs['orderBy'] }
        : { orderBy?: archivageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, archivageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the archivage model
   */
  readonly fields: archivageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for archivage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__archivageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends archivage$articleArgs<ExtArgs> = {}>(args?: Subset<T, archivage$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the archivage model
   */
  interface archivageFieldRefs {
    readonly id: FieldRef<"archivage", 'Int'>
    readonly nom_archivage: FieldRef<"archivage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * archivage findUnique
   */
  export type archivageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * Filter, which archivage to fetch.
     */
    where: archivageWhereUniqueInput
  }

  /**
   * archivage findUniqueOrThrow
   */
  export type archivageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * Filter, which archivage to fetch.
     */
    where: archivageWhereUniqueInput
  }

  /**
   * archivage findFirst
   */
  export type archivageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * Filter, which archivage to fetch.
     */
    where?: archivageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivages to fetch.
     */
    orderBy?: archivageOrderByWithRelationInput | archivageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archivages.
     */
    cursor?: archivageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archivages.
     */
    distinct?: ArchivageScalarFieldEnum | ArchivageScalarFieldEnum[]
  }

  /**
   * archivage findFirstOrThrow
   */
  export type archivageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * Filter, which archivage to fetch.
     */
    where?: archivageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivages to fetch.
     */
    orderBy?: archivageOrderByWithRelationInput | archivageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archivages.
     */
    cursor?: archivageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archivages.
     */
    distinct?: ArchivageScalarFieldEnum | ArchivageScalarFieldEnum[]
  }

  /**
   * archivage findMany
   */
  export type archivageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * Filter, which archivages to fetch.
     */
    where?: archivageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archivages to fetch.
     */
    orderBy?: archivageOrderByWithRelationInput | archivageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing archivages.
     */
    cursor?: archivageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archivages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archivages.
     */
    skip?: number
    distinct?: ArchivageScalarFieldEnum | ArchivageScalarFieldEnum[]
  }

  /**
   * archivage create
   */
  export type archivageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * The data needed to create a archivage.
     */
    data?: XOR<archivageCreateInput, archivageUncheckedCreateInput>
  }

  /**
   * archivage createMany
   */
  export type archivageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many archivages.
     */
    data: archivageCreateManyInput | archivageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archivage createManyAndReturn
   */
  export type archivageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * The data used to create many archivages.
     */
    data: archivageCreateManyInput | archivageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archivage update
   */
  export type archivageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * The data needed to update a archivage.
     */
    data: XOR<archivageUpdateInput, archivageUncheckedUpdateInput>
    /**
     * Choose, which archivage to update.
     */
    where: archivageWhereUniqueInput
  }

  /**
   * archivage updateMany
   */
  export type archivageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update archivages.
     */
    data: XOR<archivageUpdateManyMutationInput, archivageUncheckedUpdateManyInput>
    /**
     * Filter which archivages to update
     */
    where?: archivageWhereInput
    /**
     * Limit how many archivages to update.
     */
    limit?: number
  }

  /**
   * archivage updateManyAndReturn
   */
  export type archivageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * The data used to update archivages.
     */
    data: XOR<archivageUpdateManyMutationInput, archivageUncheckedUpdateManyInput>
    /**
     * Filter which archivages to update
     */
    where?: archivageWhereInput
    /**
     * Limit how many archivages to update.
     */
    limit?: number
  }

  /**
   * archivage upsert
   */
  export type archivageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * The filter to search for the archivage to update in case it exists.
     */
    where: archivageWhereUniqueInput
    /**
     * In case the archivage found by the `where` argument doesn't exist, create a new archivage with this data.
     */
    create: XOR<archivageCreateInput, archivageUncheckedCreateInput>
    /**
     * In case the archivage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<archivageUpdateInput, archivageUncheckedUpdateInput>
  }

  /**
   * archivage delete
   */
  export type archivageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    /**
     * Filter which archivage to delete.
     */
    where: archivageWhereUniqueInput
  }

  /**
   * archivage deleteMany
   */
  export type archivageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archivages to delete
     */
    where?: archivageWhereInput
    /**
     * Limit how many archivages to delete.
     */
    limit?: number
  }

  /**
   * archivage.article
   */
  export type archivage$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    where?: articleWhereInput
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    cursor?: articleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * archivage without action
   */
  export type archivageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
  }


  /**
   * Model article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    id: number | null
    archivage_id: number | null
    categorie_id: number | null
    prix_achat: Decimal | null
    valeur_marche_min: Decimal | null
    prix_vente_internet: Decimal | null
    quantite_volume: number | null
    frais_postaux: Decimal | null
    prix_reserve: Decimal | null
    edition_papier_id: number | null
    id_utilisateur: number | null
  }

  export type ArticleSumAggregateOutputType = {
    id: number | null
    archivage_id: number | null
    categorie_id: number | null
    prix_achat: Decimal | null
    valeur_marche_min: Decimal | null
    prix_vente_internet: Decimal | null
    quantite_volume: number | null
    frais_postaux: Decimal | null
    prix_reserve: Decimal | null
    edition_papier_id: number | null
    id_utilisateur: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: number | null
    archivage_id: number | null
    categorie_id: number | null
    nom_auteur: string | null
    prenom_auteur: string | null
    titre: string | null
    illustrations: string | null
    editeur: string | null
    date_impression: string | null
    nombre_pages: string | null
    description: string | null
    prix_achat: Decimal | null
    valeur_marche_min: Decimal | null
    prix_vente_internet: Decimal | null
    quantite_volume: number | null
    poids_net_kg: string | null
    frais_postaux: Decimal | null
    date_creation: Date | null
    date_vente: Date | null
    nom_complet: string | null
    pseudo_titre: string | null
    collection: string | null
    justification: string | null
    date_EO: string | null
    estimation: string | null
    prix_reserve: Decimal | null
    disponible: $Enums.Choix | null
    envoi_possible: $Enums.Choix | null
    edition_papier_id: number | null
    id_utilisateur: number | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: number | null
    archivage_id: number | null
    categorie_id: number | null
    nom_auteur: string | null
    prenom_auteur: string | null
    titre: string | null
    illustrations: string | null
    editeur: string | null
    date_impression: string | null
    nombre_pages: string | null
    description: string | null
    prix_achat: Decimal | null
    valeur_marche_min: Decimal | null
    prix_vente_internet: Decimal | null
    quantite_volume: number | null
    poids_net_kg: string | null
    frais_postaux: Decimal | null
    date_creation: Date | null
    date_vente: Date | null
    nom_complet: string | null
    pseudo_titre: string | null
    collection: string | null
    justification: string | null
    date_EO: string | null
    estimation: string | null
    prix_reserve: Decimal | null
    disponible: $Enums.Choix | null
    envoi_possible: $Enums.Choix | null
    edition_papier_id: number | null
    id_utilisateur: number | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    archivage_id: number
    categorie_id: number
    nom_auteur: number
    prenom_auteur: number
    titre: number
    illustrations: number
    editeur: number
    date_impression: number
    nombre_pages: number
    description: number
    prix_achat: number
    valeur_marche_min: number
    prix_vente_internet: number
    quantite_volume: number
    poids_net_kg: number
    frais_postaux: number
    date_creation: number
    date_vente: number
    nom_complet: number
    pseudo_titre: number
    collection: number
    justification: number
    date_EO: number
    estimation: number
    prix_reserve: number
    disponible: number
    envoi_possible: number
    edition_papier_id: number
    id_utilisateur: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    id?: true
    archivage_id?: true
    categorie_id?: true
    prix_achat?: true
    valeur_marche_min?: true
    prix_vente_internet?: true
    quantite_volume?: true
    frais_postaux?: true
    prix_reserve?: true
    edition_papier_id?: true
    id_utilisateur?: true
  }

  export type ArticleSumAggregateInputType = {
    id?: true
    archivage_id?: true
    categorie_id?: true
    prix_achat?: true
    valeur_marche_min?: true
    prix_vente_internet?: true
    quantite_volume?: true
    frais_postaux?: true
    prix_reserve?: true
    edition_papier_id?: true
    id_utilisateur?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    archivage_id?: true
    categorie_id?: true
    nom_auteur?: true
    prenom_auteur?: true
    titre?: true
    illustrations?: true
    editeur?: true
    date_impression?: true
    nombre_pages?: true
    description?: true
    prix_achat?: true
    valeur_marche_min?: true
    prix_vente_internet?: true
    quantite_volume?: true
    poids_net_kg?: true
    frais_postaux?: true
    date_creation?: true
    date_vente?: true
    nom_complet?: true
    pseudo_titre?: true
    collection?: true
    justification?: true
    date_EO?: true
    estimation?: true
    prix_reserve?: true
    disponible?: true
    envoi_possible?: true
    edition_papier_id?: true
    id_utilisateur?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    archivage_id?: true
    categorie_id?: true
    nom_auteur?: true
    prenom_auteur?: true
    titre?: true
    illustrations?: true
    editeur?: true
    date_impression?: true
    nombre_pages?: true
    description?: true
    prix_achat?: true
    valeur_marche_min?: true
    prix_vente_internet?: true
    quantite_volume?: true
    poids_net_kg?: true
    frais_postaux?: true
    date_creation?: true
    date_vente?: true
    nom_complet?: true
    pseudo_titre?: true
    collection?: true
    justification?: true
    date_EO?: true
    estimation?: true
    prix_reserve?: true
    disponible?: true
    envoi_possible?: true
    edition_papier_id?: true
    id_utilisateur?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    archivage_id?: true
    categorie_id?: true
    nom_auteur?: true
    prenom_auteur?: true
    titre?: true
    illustrations?: true
    editeur?: true
    date_impression?: true
    nombre_pages?: true
    description?: true
    prix_achat?: true
    valeur_marche_min?: true
    prix_vente_internet?: true
    quantite_volume?: true
    poids_net_kg?: true
    frais_postaux?: true
    date_creation?: true
    date_vente?: true
    nom_complet?: true
    pseudo_titre?: true
    collection?: true
    justification?: true
    date_EO?: true
    estimation?: true
    prix_reserve?: true
    disponible?: true
    envoi_possible?: true
    edition_papier_id?: true
    id_utilisateur?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article to aggregate.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type articleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articleWhereInput
    orderBy?: articleOrderByWithAggregationInput | articleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: articleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: number
    archivage_id: number | null
    categorie_id: number | null
    nom_auteur: string | null
    prenom_auteur: string | null
    titre: string | null
    illustrations: string | null
    editeur: string | null
    date_impression: string | null
    nombre_pages: string | null
    description: string | null
    prix_achat: Decimal | null
    valeur_marche_min: Decimal | null
    prix_vente_internet: Decimal | null
    quantite_volume: number | null
    poids_net_kg: string | null
    frais_postaux: Decimal | null
    date_creation: Date | null
    date_vente: Date | null
    nom_complet: string | null
    pseudo_titre: string | null
    collection: string | null
    justification: string | null
    date_EO: string | null
    estimation: string | null
    prix_reserve: Decimal | null
    disponible: $Enums.Choix | null
    envoi_possible: $Enums.Choix | null
    edition_papier_id: number | null
    id_utilisateur: number | null
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends articleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type articleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    archivage_id?: boolean
    categorie_id?: boolean
    nom_auteur?: boolean
    prenom_auteur?: boolean
    titre?: boolean
    illustrations?: boolean
    editeur?: boolean
    date_impression?: boolean
    nombre_pages?: boolean
    description?: boolean
    prix_achat?: boolean
    valeur_marche_min?: boolean
    prix_vente_internet?: boolean
    quantite_volume?: boolean
    poids_net_kg?: boolean
    frais_postaux?: boolean
    date_creation?: boolean
    date_vente?: boolean
    nom_complet?: boolean
    pseudo_titre?: boolean
    collection?: boolean
    justification?: boolean
    date_EO?: boolean
    estimation?: boolean
    prix_reserve?: boolean
    disponible?: boolean
    envoi_possible?: boolean
    edition_papier_id?: boolean
    id_utilisateur?: boolean
    archivage?: boolean | article$archivageArgs<ExtArgs>
    categorie?: boolean | article$categorieArgs<ExtArgs>
    edition_papier?: boolean | article$edition_papierArgs<ExtArgs>
    utilisateur?: boolean | article$utilisateurArgs<ExtArgs>
    article_theme?: boolean | article$article_themeArgs<ExtArgs>
    favoris?: boolean | article$favorisArgs<ExtArgs>
    photos?: boolean | article$photosArgs<ExtArgs>
    conversations?: boolean | article$conversationsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type articleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    archivage_id?: boolean
    categorie_id?: boolean
    nom_auteur?: boolean
    prenom_auteur?: boolean
    titre?: boolean
    illustrations?: boolean
    editeur?: boolean
    date_impression?: boolean
    nombre_pages?: boolean
    description?: boolean
    prix_achat?: boolean
    valeur_marche_min?: boolean
    prix_vente_internet?: boolean
    quantite_volume?: boolean
    poids_net_kg?: boolean
    frais_postaux?: boolean
    date_creation?: boolean
    date_vente?: boolean
    nom_complet?: boolean
    pseudo_titre?: boolean
    collection?: boolean
    justification?: boolean
    date_EO?: boolean
    estimation?: boolean
    prix_reserve?: boolean
    disponible?: boolean
    envoi_possible?: boolean
    edition_papier_id?: boolean
    id_utilisateur?: boolean
    archivage?: boolean | article$archivageArgs<ExtArgs>
    categorie?: boolean | article$categorieArgs<ExtArgs>
    edition_papier?: boolean | article$edition_papierArgs<ExtArgs>
    utilisateur?: boolean | article$utilisateurArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type articleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    archivage_id?: boolean
    categorie_id?: boolean
    nom_auteur?: boolean
    prenom_auteur?: boolean
    titre?: boolean
    illustrations?: boolean
    editeur?: boolean
    date_impression?: boolean
    nombre_pages?: boolean
    description?: boolean
    prix_achat?: boolean
    valeur_marche_min?: boolean
    prix_vente_internet?: boolean
    quantite_volume?: boolean
    poids_net_kg?: boolean
    frais_postaux?: boolean
    date_creation?: boolean
    date_vente?: boolean
    nom_complet?: boolean
    pseudo_titre?: boolean
    collection?: boolean
    justification?: boolean
    date_EO?: boolean
    estimation?: boolean
    prix_reserve?: boolean
    disponible?: boolean
    envoi_possible?: boolean
    edition_papier_id?: boolean
    id_utilisateur?: boolean
    archivage?: boolean | article$archivageArgs<ExtArgs>
    categorie?: boolean | article$categorieArgs<ExtArgs>
    edition_papier?: boolean | article$edition_papierArgs<ExtArgs>
    utilisateur?: boolean | article$utilisateurArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type articleSelectScalar = {
    id?: boolean
    archivage_id?: boolean
    categorie_id?: boolean
    nom_auteur?: boolean
    prenom_auteur?: boolean
    titre?: boolean
    illustrations?: boolean
    editeur?: boolean
    date_impression?: boolean
    nombre_pages?: boolean
    description?: boolean
    prix_achat?: boolean
    valeur_marche_min?: boolean
    prix_vente_internet?: boolean
    quantite_volume?: boolean
    poids_net_kg?: boolean
    frais_postaux?: boolean
    date_creation?: boolean
    date_vente?: boolean
    nom_complet?: boolean
    pseudo_titre?: boolean
    collection?: boolean
    justification?: boolean
    date_EO?: boolean
    estimation?: boolean
    prix_reserve?: boolean
    disponible?: boolean
    envoi_possible?: boolean
    edition_papier_id?: boolean
    id_utilisateur?: boolean
  }

  export type articleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "archivage_id" | "categorie_id" | "nom_auteur" | "prenom_auteur" | "titre" | "illustrations" | "editeur" | "date_impression" | "nombre_pages" | "description" | "prix_achat" | "valeur_marche_min" | "prix_vente_internet" | "quantite_volume" | "poids_net_kg" | "frais_postaux" | "date_creation" | "date_vente" | "nom_complet" | "pseudo_titre" | "collection" | "justification" | "date_EO" | "estimation" | "prix_reserve" | "disponible" | "envoi_possible" | "edition_papier_id" | "id_utilisateur", ExtArgs["result"]["article"]>
  export type articleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivage?: boolean | article$archivageArgs<ExtArgs>
    categorie?: boolean | article$categorieArgs<ExtArgs>
    edition_papier?: boolean | article$edition_papierArgs<ExtArgs>
    utilisateur?: boolean | article$utilisateurArgs<ExtArgs>
    article_theme?: boolean | article$article_themeArgs<ExtArgs>
    favoris?: boolean | article$favorisArgs<ExtArgs>
    photos?: boolean | article$photosArgs<ExtArgs>
    conversations?: boolean | article$conversationsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type articleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivage?: boolean | article$archivageArgs<ExtArgs>
    categorie?: boolean | article$categorieArgs<ExtArgs>
    edition_papier?: boolean | article$edition_papierArgs<ExtArgs>
    utilisateur?: boolean | article$utilisateurArgs<ExtArgs>
  }
  export type articleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archivage?: boolean | article$archivageArgs<ExtArgs>
    categorie?: boolean | article$categorieArgs<ExtArgs>
    edition_papier?: boolean | article$edition_papierArgs<ExtArgs>
    utilisateur?: boolean | article$utilisateurArgs<ExtArgs>
  }

  export type $articlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "article"
    objects: {
      archivage: Prisma.$archivagePayload<ExtArgs> | null
      categorie: Prisma.$categoriePayload<ExtArgs> | null
      edition_papier: Prisma.$edition_papierPayload<ExtArgs> | null
      utilisateur: Prisma.$utilisateurPayload<ExtArgs> | null
      article_theme: Prisma.$article_themePayload<ExtArgs>[]
      favoris: Prisma.$favorisPayload<ExtArgs>[]
      photos: Prisma.$photosPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      archivage_id: number | null
      categorie_id: number | null
      nom_auteur: string | null
      prenom_auteur: string | null
      titre: string | null
      illustrations: string | null
      editeur: string | null
      date_impression: string | null
      nombre_pages: string | null
      description: string | null
      prix_achat: Prisma.Decimal | null
      valeur_marche_min: Prisma.Decimal | null
      prix_vente_internet: Prisma.Decimal | null
      quantite_volume: number | null
      poids_net_kg: string | null
      frais_postaux: Prisma.Decimal | null
      date_creation: Date | null
      date_vente: Date | null
      nom_complet: string | null
      pseudo_titre: string | null
      collection: string | null
      justification: string | null
      date_EO: string | null
      estimation: string | null
      prix_reserve: Prisma.Decimal | null
      disponible: $Enums.Choix | null
      envoi_possible: $Enums.Choix | null
      edition_papier_id: number | null
      id_utilisateur: number | null
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type articleGetPayload<S extends boolean | null | undefined | articleDefaultArgs> = $Result.GetResult<Prisma.$articlePayload, S>

  type articleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface articleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['article'], meta: { name: 'article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {articleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articleFindUniqueArgs>(args: SelectSubset<T, articleFindUniqueArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articleFindUniqueOrThrowArgs>(args: SelectSubset<T, articleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articleFindFirstArgs>(args?: SelectSubset<T, articleFindFirstArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articleFindFirstOrThrowArgs>(args?: SelectSubset<T, articleFindFirstOrThrowArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends articleFindManyArgs>(args?: SelectSubset<T, articleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {articleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends articleCreateArgs>(args: SelectSubset<T, articleCreateArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {articleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articleCreateManyArgs>(args?: SelectSubset<T, articleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {articleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends articleCreateManyAndReturnArgs>(args?: SelectSubset<T, articleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {articleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends articleDeleteArgs>(args: SelectSubset<T, articleDeleteArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {articleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articleUpdateArgs>(args: SelectSubset<T, articleUpdateArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {articleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articleDeleteManyArgs>(args?: SelectSubset<T, articleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articleUpdateManyArgs>(args: SelectSubset<T, articleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {articleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends articleUpdateManyAndReturnArgs>(args: SelectSubset<T, articleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {articleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends articleUpsertArgs>(args: SelectSubset<T, articleUpsertArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articleCountArgs>(
      args?: Subset<T, articleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends articleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articleGroupByArgs['orderBy'] }
        : { orderBy?: articleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, articleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the article model
   */
  readonly fields: articleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    archivage<T extends article$archivageArgs<ExtArgs> = {}>(args?: Subset<T, article$archivageArgs<ExtArgs>>): Prisma__archivageClient<$Result.GetResult<Prisma.$archivagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categorie<T extends article$categorieArgs<ExtArgs> = {}>(args?: Subset<T, article$categorieArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    edition_papier<T extends article$edition_papierArgs<ExtArgs> = {}>(args?: Subset<T, article$edition_papierArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends article$utilisateurArgs<ExtArgs> = {}>(args?: Subset<T, article$utilisateurArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    article_theme<T extends article$article_themeArgs<ExtArgs> = {}>(args?: Subset<T, article$article_themeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoris<T extends article$favorisArgs<ExtArgs> = {}>(args?: Subset<T, article$favorisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends article$photosArgs<ExtArgs> = {}>(args?: Subset<T, article$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends article$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, article$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the article model
   */
  interface articleFieldRefs {
    readonly id: FieldRef<"article", 'Int'>
    readonly archivage_id: FieldRef<"article", 'Int'>
    readonly categorie_id: FieldRef<"article", 'Int'>
    readonly nom_auteur: FieldRef<"article", 'String'>
    readonly prenom_auteur: FieldRef<"article", 'String'>
    readonly titre: FieldRef<"article", 'String'>
    readonly illustrations: FieldRef<"article", 'String'>
    readonly editeur: FieldRef<"article", 'String'>
    readonly date_impression: FieldRef<"article", 'String'>
    readonly nombre_pages: FieldRef<"article", 'String'>
    readonly description: FieldRef<"article", 'String'>
    readonly prix_achat: FieldRef<"article", 'Decimal'>
    readonly valeur_marche_min: FieldRef<"article", 'Decimal'>
    readonly prix_vente_internet: FieldRef<"article", 'Decimal'>
    readonly quantite_volume: FieldRef<"article", 'Int'>
    readonly poids_net_kg: FieldRef<"article", 'String'>
    readonly frais_postaux: FieldRef<"article", 'Decimal'>
    readonly date_creation: FieldRef<"article", 'DateTime'>
    readonly date_vente: FieldRef<"article", 'DateTime'>
    readonly nom_complet: FieldRef<"article", 'String'>
    readonly pseudo_titre: FieldRef<"article", 'String'>
    readonly collection: FieldRef<"article", 'String'>
    readonly justification: FieldRef<"article", 'String'>
    readonly date_EO: FieldRef<"article", 'String'>
    readonly estimation: FieldRef<"article", 'String'>
    readonly prix_reserve: FieldRef<"article", 'Decimal'>
    readonly disponible: FieldRef<"article", 'Choix'>
    readonly envoi_possible: FieldRef<"article", 'Choix'>
    readonly edition_papier_id: FieldRef<"article", 'Int'>
    readonly id_utilisateur: FieldRef<"article", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * article findUnique
   */
  export type articleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article findUniqueOrThrow
   */
  export type articleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article findFirst
   */
  export type articleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article findFirstOrThrow
   */
  export type articleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which article to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article findMany
   */
  export type articleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * article create
   */
  export type articleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The data needed to create a article.
     */
    data?: XOR<articleCreateInput, articleUncheckedCreateInput>
  }

  /**
   * article createMany
   */
  export type articleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articles.
     */
    data: articleCreateManyInput | articleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * article createManyAndReturn
   */
  export type articleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * The data used to create many articles.
     */
    data: articleCreateManyInput | articleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * article update
   */
  export type articleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The data needed to update a article.
     */
    data: XOR<articleUpdateInput, articleUncheckedUpdateInput>
    /**
     * Choose, which article to update.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article updateMany
   */
  export type articleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articles.
     */
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articleWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
  }

  /**
   * article updateManyAndReturn
   */
  export type articleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * The data used to update articles.
     */
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articleWhereInput
    /**
     * Limit how many articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * article upsert
   */
  export type articleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * The filter to search for the article to update in case it exists.
     */
    where: articleWhereUniqueInput
    /**
     * In case the article found by the `where` argument doesn't exist, create a new article with this data.
     */
    create: XOR<articleCreateInput, articleUncheckedCreateInput>
    /**
     * In case the article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articleUpdateInput, articleUncheckedUpdateInput>
  }

  /**
   * article delete
   */
  export type articleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    /**
     * Filter which article to delete.
     */
    where: articleWhereUniqueInput
  }

  /**
   * article deleteMany
   */
  export type articleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articles to delete
     */
    where?: articleWhereInput
    /**
     * Limit how many articles to delete.
     */
    limit?: number
  }

  /**
   * article.archivage
   */
  export type article$archivageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archivage
     */
    select?: archivageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archivage
     */
    omit?: archivageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archivageInclude<ExtArgs> | null
    where?: archivageWhereInput
  }

  /**
   * article.categorie
   */
  export type article$categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    where?: categorieWhereInput
  }

  /**
   * article.edition_papier
   */
  export type article$edition_papierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    where?: edition_papierWhereInput
  }

  /**
   * article.utilisateur
   */
  export type article$utilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    where?: utilisateurWhereInput
  }

  /**
   * article.article_theme
   */
  export type article$article_themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    where?: article_themeWhereInput
    orderBy?: article_themeOrderByWithRelationInput | article_themeOrderByWithRelationInput[]
    cursor?: article_themeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Article_themeScalarFieldEnum | Article_themeScalarFieldEnum[]
  }

  /**
   * article.favoris
   */
  export type article$favorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    where?: favorisWhereInput
    orderBy?: favorisOrderByWithRelationInput | favorisOrderByWithRelationInput[]
    cursor?: favorisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavorisScalarFieldEnum | FavorisScalarFieldEnum[]
  }

  /**
   * article.photos
   */
  export type article$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    where?: photosWhereInput
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    cursor?: photosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * article.conversations
   */
  export type article$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * article without action
   */
  export type articleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
  }


  /**
   * Model article_theme
   */

  export type AggregateArticle_theme = {
    _count: Article_themeCountAggregateOutputType | null
    _avg: Article_themeAvgAggregateOutputType | null
    _sum: Article_themeSumAggregateOutputType | null
    _min: Article_themeMinAggregateOutputType | null
    _max: Article_themeMaxAggregateOutputType | null
  }

  export type Article_themeAvgAggregateOutputType = {
    article_id: number | null
    theme_id: number | null
  }

  export type Article_themeSumAggregateOutputType = {
    article_id: number | null
    theme_id: number | null
  }

  export type Article_themeMinAggregateOutputType = {
    article_id: number | null
    theme_id: number | null
  }

  export type Article_themeMaxAggregateOutputType = {
    article_id: number | null
    theme_id: number | null
  }

  export type Article_themeCountAggregateOutputType = {
    article_id: number
    theme_id: number
    _all: number
  }


  export type Article_themeAvgAggregateInputType = {
    article_id?: true
    theme_id?: true
  }

  export type Article_themeSumAggregateInputType = {
    article_id?: true
    theme_id?: true
  }

  export type Article_themeMinAggregateInputType = {
    article_id?: true
    theme_id?: true
  }

  export type Article_themeMaxAggregateInputType = {
    article_id?: true
    theme_id?: true
  }

  export type Article_themeCountAggregateInputType = {
    article_id?: true
    theme_id?: true
    _all?: true
  }

  export type Article_themeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article_theme to aggregate.
     */
    where?: article_themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_themes to fetch.
     */
    orderBy?: article_themeOrderByWithRelationInput | article_themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: article_themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned article_themes
    **/
    _count?: true | Article_themeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Article_themeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Article_themeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Article_themeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Article_themeMaxAggregateInputType
  }

  export type GetArticle_themeAggregateType<T extends Article_themeAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle_theme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle_theme[P]>
      : GetScalarType<T[P], AggregateArticle_theme[P]>
  }




  export type article_themeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: article_themeWhereInput
    orderBy?: article_themeOrderByWithAggregationInput | article_themeOrderByWithAggregationInput[]
    by: Article_themeScalarFieldEnum[] | Article_themeScalarFieldEnum
    having?: article_themeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Article_themeCountAggregateInputType | true
    _avg?: Article_themeAvgAggregateInputType
    _sum?: Article_themeSumAggregateInputType
    _min?: Article_themeMinAggregateInputType
    _max?: Article_themeMaxAggregateInputType
  }

  export type Article_themeGroupByOutputType = {
    article_id: number
    theme_id: number
    _count: Article_themeCountAggregateOutputType | null
    _avg: Article_themeAvgAggregateOutputType | null
    _sum: Article_themeSumAggregateOutputType | null
    _min: Article_themeMinAggregateOutputType | null
    _max: Article_themeMaxAggregateOutputType | null
  }

  type GetArticle_themeGroupByPayload<T extends article_themeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Article_themeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Article_themeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Article_themeGroupByOutputType[P]>
            : GetScalarType<T[P], Article_themeGroupByOutputType[P]>
        }
      >
    >


  export type article_themeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    theme_id?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_theme"]>

  export type article_themeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    theme_id?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_theme"]>

  export type article_themeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    article_id?: boolean
    theme_id?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article_theme"]>

  export type article_themeSelectScalar = {
    article_id?: boolean
    theme_id?: boolean
  }

  export type article_themeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"article_id" | "theme_id", ExtArgs["result"]["article_theme"]>
  export type article_themeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }
  export type article_themeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }
  export type article_themeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }

  export type $article_themePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "article_theme"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>
      theme: Prisma.$themePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      article_id: number
      theme_id: number
    }, ExtArgs["result"]["article_theme"]>
    composites: {}
  }

  type article_themeGetPayload<S extends boolean | null | undefined | article_themeDefaultArgs> = $Result.GetResult<Prisma.$article_themePayload, S>

  type article_themeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<article_themeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Article_themeCountAggregateInputType | true
    }

  export interface article_themeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['article_theme'], meta: { name: 'article_theme' } }
    /**
     * Find zero or one Article_theme that matches the filter.
     * @param {article_themeFindUniqueArgs} args - Arguments to find a Article_theme
     * @example
     * // Get one Article_theme
     * const article_theme = await prisma.article_theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends article_themeFindUniqueArgs>(args: SelectSubset<T, article_themeFindUniqueArgs<ExtArgs>>): Prisma__article_themeClient<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article_theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {article_themeFindUniqueOrThrowArgs} args - Arguments to find a Article_theme
     * @example
     * // Get one Article_theme
     * const article_theme = await prisma.article_theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends article_themeFindUniqueOrThrowArgs>(args: SelectSubset<T, article_themeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__article_themeClient<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article_theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_themeFindFirstArgs} args - Arguments to find a Article_theme
     * @example
     * // Get one Article_theme
     * const article_theme = await prisma.article_theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends article_themeFindFirstArgs>(args?: SelectSubset<T, article_themeFindFirstArgs<ExtArgs>>): Prisma__article_themeClient<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article_theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_themeFindFirstOrThrowArgs} args - Arguments to find a Article_theme
     * @example
     * // Get one Article_theme
     * const article_theme = await prisma.article_theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends article_themeFindFirstOrThrowArgs>(args?: SelectSubset<T, article_themeFindFirstOrThrowArgs<ExtArgs>>): Prisma__article_themeClient<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Article_themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_themeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Article_themes
     * const article_themes = await prisma.article_theme.findMany()
     * 
     * // Get first 10 Article_themes
     * const article_themes = await prisma.article_theme.findMany({ take: 10 })
     * 
     * // Only select the `article_id`
     * const article_themeWithArticle_idOnly = await prisma.article_theme.findMany({ select: { article_id: true } })
     * 
     */
    findMany<T extends article_themeFindManyArgs>(args?: SelectSubset<T, article_themeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article_theme.
     * @param {article_themeCreateArgs} args - Arguments to create a Article_theme.
     * @example
     * // Create one Article_theme
     * const Article_theme = await prisma.article_theme.create({
     *   data: {
     *     // ... data to create a Article_theme
     *   }
     * })
     * 
     */
    create<T extends article_themeCreateArgs>(args: SelectSubset<T, article_themeCreateArgs<ExtArgs>>): Prisma__article_themeClient<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Article_themes.
     * @param {article_themeCreateManyArgs} args - Arguments to create many Article_themes.
     * @example
     * // Create many Article_themes
     * const article_theme = await prisma.article_theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends article_themeCreateManyArgs>(args?: SelectSubset<T, article_themeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Article_themes and returns the data saved in the database.
     * @param {article_themeCreateManyAndReturnArgs} args - Arguments to create many Article_themes.
     * @example
     * // Create many Article_themes
     * const article_theme = await prisma.article_theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Article_themes and only return the `article_id`
     * const article_themeWithArticle_idOnly = await prisma.article_theme.createManyAndReturn({
     *   select: { article_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends article_themeCreateManyAndReturnArgs>(args?: SelectSubset<T, article_themeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article_theme.
     * @param {article_themeDeleteArgs} args - Arguments to delete one Article_theme.
     * @example
     * // Delete one Article_theme
     * const Article_theme = await prisma.article_theme.delete({
     *   where: {
     *     // ... filter to delete one Article_theme
     *   }
     * })
     * 
     */
    delete<T extends article_themeDeleteArgs>(args: SelectSubset<T, article_themeDeleteArgs<ExtArgs>>): Prisma__article_themeClient<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article_theme.
     * @param {article_themeUpdateArgs} args - Arguments to update one Article_theme.
     * @example
     * // Update one Article_theme
     * const article_theme = await prisma.article_theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends article_themeUpdateArgs>(args: SelectSubset<T, article_themeUpdateArgs<ExtArgs>>): Prisma__article_themeClient<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Article_themes.
     * @param {article_themeDeleteManyArgs} args - Arguments to filter Article_themes to delete.
     * @example
     * // Delete a few Article_themes
     * const { count } = await prisma.article_theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends article_themeDeleteManyArgs>(args?: SelectSubset<T, article_themeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Article_themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_themeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Article_themes
     * const article_theme = await prisma.article_theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends article_themeUpdateManyArgs>(args: SelectSubset<T, article_themeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Article_themes and returns the data updated in the database.
     * @param {article_themeUpdateManyAndReturnArgs} args - Arguments to update many Article_themes.
     * @example
     * // Update many Article_themes
     * const article_theme = await prisma.article_theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Article_themes and only return the `article_id`
     * const article_themeWithArticle_idOnly = await prisma.article_theme.updateManyAndReturn({
     *   select: { article_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends article_themeUpdateManyAndReturnArgs>(args: SelectSubset<T, article_themeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article_theme.
     * @param {article_themeUpsertArgs} args - Arguments to update or create a Article_theme.
     * @example
     * // Update or create a Article_theme
     * const article_theme = await prisma.article_theme.upsert({
     *   create: {
     *     // ... data to create a Article_theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article_theme we want to update
     *   }
     * })
     */
    upsert<T extends article_themeUpsertArgs>(args: SelectSubset<T, article_themeUpsertArgs<ExtArgs>>): Prisma__article_themeClient<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Article_themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_themeCountArgs} args - Arguments to filter Article_themes to count.
     * @example
     * // Count the number of Article_themes
     * const count = await prisma.article_theme.count({
     *   where: {
     *     // ... the filter for the Article_themes we want to count
     *   }
     * })
    **/
    count<T extends article_themeCountArgs>(
      args?: Subset<T, article_themeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Article_themeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article_theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Article_themeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Article_themeAggregateArgs>(args: Subset<T, Article_themeAggregateArgs>): Prisma.PrismaPromise<GetArticle_themeAggregateType<T>>

    /**
     * Group by Article_theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {article_themeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends article_themeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: article_themeGroupByArgs['orderBy'] }
        : { orderBy?: article_themeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, article_themeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticle_themeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the article_theme model
   */
  readonly fields: article_themeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for article_theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__article_themeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends articleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articleDefaultArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theme<T extends themeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, themeDefaultArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the article_theme model
   */
  interface article_themeFieldRefs {
    readonly article_id: FieldRef<"article_theme", 'Int'>
    readonly theme_id: FieldRef<"article_theme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * article_theme findUnique
   */
  export type article_themeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * Filter, which article_theme to fetch.
     */
    where: article_themeWhereUniqueInput
  }

  /**
   * article_theme findUniqueOrThrow
   */
  export type article_themeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * Filter, which article_theme to fetch.
     */
    where: article_themeWhereUniqueInput
  }

  /**
   * article_theme findFirst
   */
  export type article_themeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * Filter, which article_theme to fetch.
     */
    where?: article_themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_themes to fetch.
     */
    orderBy?: article_themeOrderByWithRelationInput | article_themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for article_themes.
     */
    cursor?: article_themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of article_themes.
     */
    distinct?: Article_themeScalarFieldEnum | Article_themeScalarFieldEnum[]
  }

  /**
   * article_theme findFirstOrThrow
   */
  export type article_themeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * Filter, which article_theme to fetch.
     */
    where?: article_themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_themes to fetch.
     */
    orderBy?: article_themeOrderByWithRelationInput | article_themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for article_themes.
     */
    cursor?: article_themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of article_themes.
     */
    distinct?: Article_themeScalarFieldEnum | Article_themeScalarFieldEnum[]
  }

  /**
   * article_theme findMany
   */
  export type article_themeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * Filter, which article_themes to fetch.
     */
    where?: article_themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of article_themes to fetch.
     */
    orderBy?: article_themeOrderByWithRelationInput | article_themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing article_themes.
     */
    cursor?: article_themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` article_themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` article_themes.
     */
    skip?: number
    distinct?: Article_themeScalarFieldEnum | Article_themeScalarFieldEnum[]
  }

  /**
   * article_theme create
   */
  export type article_themeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * The data needed to create a article_theme.
     */
    data: XOR<article_themeCreateInput, article_themeUncheckedCreateInput>
  }

  /**
   * article_theme createMany
   */
  export type article_themeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many article_themes.
     */
    data: article_themeCreateManyInput | article_themeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * article_theme createManyAndReturn
   */
  export type article_themeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * The data used to create many article_themes.
     */
    data: article_themeCreateManyInput | article_themeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * article_theme update
   */
  export type article_themeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * The data needed to update a article_theme.
     */
    data: XOR<article_themeUpdateInput, article_themeUncheckedUpdateInput>
    /**
     * Choose, which article_theme to update.
     */
    where: article_themeWhereUniqueInput
  }

  /**
   * article_theme updateMany
   */
  export type article_themeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update article_themes.
     */
    data: XOR<article_themeUpdateManyMutationInput, article_themeUncheckedUpdateManyInput>
    /**
     * Filter which article_themes to update
     */
    where?: article_themeWhereInput
    /**
     * Limit how many article_themes to update.
     */
    limit?: number
  }

  /**
   * article_theme updateManyAndReturn
   */
  export type article_themeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * The data used to update article_themes.
     */
    data: XOR<article_themeUpdateManyMutationInput, article_themeUncheckedUpdateManyInput>
    /**
     * Filter which article_themes to update
     */
    where?: article_themeWhereInput
    /**
     * Limit how many article_themes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * article_theme upsert
   */
  export type article_themeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * The filter to search for the article_theme to update in case it exists.
     */
    where: article_themeWhereUniqueInput
    /**
     * In case the article_theme found by the `where` argument doesn't exist, create a new article_theme with this data.
     */
    create: XOR<article_themeCreateInput, article_themeUncheckedCreateInput>
    /**
     * In case the article_theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<article_themeUpdateInput, article_themeUncheckedUpdateInput>
  }

  /**
   * article_theme delete
   */
  export type article_themeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    /**
     * Filter which article_theme to delete.
     */
    where: article_themeWhereUniqueInput
  }

  /**
   * article_theme deleteMany
   */
  export type article_themeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which article_themes to delete
     */
    where?: article_themeWhereInput
    /**
     * Limit how many article_themes to delete.
     */
    limit?: number
  }

  /**
   * article_theme without action
   */
  export type article_themeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
  }


  /**
   * Model categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id: number | null
    nom_categorie: string | null
    image_url: string | null
    image_entete_url: string | null
    description: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: number | null
    nom_categorie: string | null
    image_url: string | null
    image_entete_url: string | null
    description: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    nom_categorie: number
    image_url: number
    image_entete_url: number
    description: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id?: true
  }

  export type CategorieSumAggregateInputType = {
    id?: true
  }

  export type CategorieMinAggregateInputType = {
    id?: true
    nom_categorie?: true
    image_url?: true
    image_entete_url?: true
    description?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    nom_categorie?: true
    image_url?: true
    image_entete_url?: true
    description?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    nom_categorie?: true
    image_url?: true
    image_entete_url?: true
    description?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorie to aggregate.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type categorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categorieWhereInput
    orderBy?: categorieOrderByWithAggregationInput | categorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: categorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: number
    nom_categorie: string
    image_url: string | null
    image_entete_url: string | null
    description: string | null
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends categorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type categorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_categorie?: boolean
    image_url?: boolean
    image_entete_url?: boolean
    description?: boolean
    article?: boolean | categorie$articleArgs<ExtArgs>
    categorie_theme?: boolean | categorie$categorie_themeArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type categorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_categorie?: boolean
    image_url?: boolean
    image_entete_url?: boolean
    description?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type categorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_categorie?: boolean
    image_url?: boolean
    image_entete_url?: boolean
    description?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type categorieSelectScalar = {
    id?: boolean
    nom_categorie?: boolean
    image_url?: boolean
    image_entete_url?: boolean
    description?: boolean
  }

  export type categorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom_categorie" | "image_url" | "image_entete_url" | "description", ExtArgs["result"]["categorie"]>
  export type categorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | categorie$articleArgs<ExtArgs>
    categorie_theme?: boolean | categorie$categorie_themeArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorie"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>[]
      categorie_theme: Prisma.$categorie_themePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom_categorie: string
      image_url: string | null
      image_entete_url: string | null
      description: string | null
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type categorieGetPayload<S extends boolean | null | undefined | categorieDefaultArgs> = $Result.GetResult<Prisma.$categoriePayload, S>

  type categorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface categorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorie'], meta: { name: 'categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {categorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categorieFindUniqueArgs>(args: SelectSubset<T, categorieFindUniqueArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categorieFindUniqueOrThrowArgs>(args: SelectSubset<T, categorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categorieFindFirstArgs>(args?: SelectSubset<T, categorieFindFirstArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categorieFindFirstOrThrowArgs>(args?: SelectSubset<T, categorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categorieFindManyArgs>(args?: SelectSubset<T, categorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {categorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends categorieCreateArgs>(args: SelectSubset<T, categorieCreateArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categorieCreateManyArgs>(args?: SelectSubset<T, categorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categorieCreateManyAndReturnArgs>(args?: SelectSubset<T, categorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {categorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends categorieDeleteArgs>(args: SelectSubset<T, categorieDeleteArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {categorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categorieUpdateArgs>(args: SelectSubset<T, categorieUpdateArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categorieDeleteManyArgs>(args?: SelectSubset<T, categorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categorieUpdateManyArgs>(args: SelectSubset<T, categorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categorieUpdateManyAndReturnArgs>(args: SelectSubset<T, categorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {categorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends categorieUpsertArgs>(args: SelectSubset<T, categorieUpsertArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categorieCountArgs>(
      args?: Subset<T, categorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categorieGroupByArgs['orderBy'] }
        : { orderBy?: categorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorie model
   */
  readonly fields: categorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends categorie$articleArgs<ExtArgs> = {}>(args?: Subset<T, categorie$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorie_theme<T extends categorie$categorie_themeArgs<ExtArgs> = {}>(args?: Subset<T, categorie$categorie_themeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categorie model
   */
  interface categorieFieldRefs {
    readonly id: FieldRef<"categorie", 'Int'>
    readonly nom_categorie: FieldRef<"categorie", 'String'>
    readonly image_url: FieldRef<"categorie", 'String'>
    readonly image_entete_url: FieldRef<"categorie", 'String'>
    readonly description: FieldRef<"categorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorie findUnique
   */
  export type categorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie findUniqueOrThrow
   */
  export type categorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie findFirst
   */
  export type categorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie findFirstOrThrow
   */
  export type categorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie findMany
   */
  export type categorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie create
   */
  export type categorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The data needed to create a categorie.
     */
    data: XOR<categorieCreateInput, categorieUncheckedCreateInput>
  }

  /**
   * categorie createMany
   */
  export type categorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categorieCreateManyInput | categorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorie createManyAndReturn
   */
  export type categorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categorieCreateManyInput | categorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorie update
   */
  export type categorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The data needed to update a categorie.
     */
    data: XOR<categorieUpdateInput, categorieUncheckedUpdateInput>
    /**
     * Choose, which categorie to update.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie updateMany
   */
  export type categorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categorieUpdateManyMutationInput, categorieUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categorieWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categorie updateManyAndReturn
   */
  export type categorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categorieUpdateManyMutationInput, categorieUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categorieWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categorie upsert
   */
  export type categorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The filter to search for the categorie to update in case it exists.
     */
    where: categorieWhereUniqueInput
    /**
     * In case the categorie found by the `where` argument doesn't exist, create a new categorie with this data.
     */
    create: XOR<categorieCreateInput, categorieUncheckedCreateInput>
    /**
     * In case the categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categorieUpdateInput, categorieUncheckedUpdateInput>
  }

  /**
   * categorie delete
   */
  export type categorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter which categorie to delete.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie deleteMany
   */
  export type categorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categorieWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categorie.article
   */
  export type categorie$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    where?: articleWhereInput
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    cursor?: articleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * categorie.categorie_theme
   */
  export type categorie$categorie_themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    where?: categorie_themeWhereInput
    orderBy?: categorie_themeOrderByWithRelationInput | categorie_themeOrderByWithRelationInput[]
    cursor?: categorie_themeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Categorie_themeScalarFieldEnum | Categorie_themeScalarFieldEnum[]
  }

  /**
   * categorie without action
   */
  export type categorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie
     */
    omit?: categorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
  }


  /**
   * Model categorie_theme
   */

  export type AggregateCategorie_theme = {
    _count: Categorie_themeCountAggregateOutputType | null
    _avg: Categorie_themeAvgAggregateOutputType | null
    _sum: Categorie_themeSumAggregateOutputType | null
    _min: Categorie_themeMinAggregateOutputType | null
    _max: Categorie_themeMaxAggregateOutputType | null
  }

  export type Categorie_themeAvgAggregateOutputType = {
    categorie_id: number | null
    theme_id: number | null
  }

  export type Categorie_themeSumAggregateOutputType = {
    categorie_id: number | null
    theme_id: number | null
  }

  export type Categorie_themeMinAggregateOutputType = {
    categorie_id: number | null
    theme_id: number | null
  }

  export type Categorie_themeMaxAggregateOutputType = {
    categorie_id: number | null
    theme_id: number | null
  }

  export type Categorie_themeCountAggregateOutputType = {
    categorie_id: number
    theme_id: number
    _all: number
  }


  export type Categorie_themeAvgAggregateInputType = {
    categorie_id?: true
    theme_id?: true
  }

  export type Categorie_themeSumAggregateInputType = {
    categorie_id?: true
    theme_id?: true
  }

  export type Categorie_themeMinAggregateInputType = {
    categorie_id?: true
    theme_id?: true
  }

  export type Categorie_themeMaxAggregateInputType = {
    categorie_id?: true
    theme_id?: true
  }

  export type Categorie_themeCountAggregateInputType = {
    categorie_id?: true
    theme_id?: true
    _all?: true
  }

  export type Categorie_themeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorie_theme to aggregate.
     */
    where?: categorie_themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorie_themes to fetch.
     */
    orderBy?: categorie_themeOrderByWithRelationInput | categorie_themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categorie_themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorie_themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorie_themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorie_themes
    **/
    _count?: true | Categorie_themeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Categorie_themeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Categorie_themeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Categorie_themeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Categorie_themeMaxAggregateInputType
  }

  export type GetCategorie_themeAggregateType<T extends Categorie_themeAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie_theme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie_theme[P]>
      : GetScalarType<T[P], AggregateCategorie_theme[P]>
  }




  export type categorie_themeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categorie_themeWhereInput
    orderBy?: categorie_themeOrderByWithAggregationInput | categorie_themeOrderByWithAggregationInput[]
    by: Categorie_themeScalarFieldEnum[] | Categorie_themeScalarFieldEnum
    having?: categorie_themeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Categorie_themeCountAggregateInputType | true
    _avg?: Categorie_themeAvgAggregateInputType
    _sum?: Categorie_themeSumAggregateInputType
    _min?: Categorie_themeMinAggregateInputType
    _max?: Categorie_themeMaxAggregateInputType
  }

  export type Categorie_themeGroupByOutputType = {
    categorie_id: number
    theme_id: number
    _count: Categorie_themeCountAggregateOutputType | null
    _avg: Categorie_themeAvgAggregateOutputType | null
    _sum: Categorie_themeSumAggregateOutputType | null
    _min: Categorie_themeMinAggregateOutputType | null
    _max: Categorie_themeMaxAggregateOutputType | null
  }

  type GetCategorie_themeGroupByPayload<T extends categorie_themeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Categorie_themeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Categorie_themeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Categorie_themeGroupByOutputType[P]>
            : GetScalarType<T[P], Categorie_themeGroupByOutputType[P]>
        }
      >
    >


  export type categorie_themeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categorie_id?: boolean
    theme_id?: boolean
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie_theme"]>

  export type categorie_themeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categorie_id?: boolean
    theme_id?: boolean
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie_theme"]>

  export type categorie_themeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categorie_id?: boolean
    theme_id?: boolean
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie_theme"]>

  export type categorie_themeSelectScalar = {
    categorie_id?: boolean
    theme_id?: boolean
  }

  export type categorie_themeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"categorie_id" | "theme_id", ExtArgs["result"]["categorie_theme"]>
  export type categorie_themeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }
  export type categorie_themeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }
  export type categorie_themeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
    theme?: boolean | themeDefaultArgs<ExtArgs>
  }

  export type $categorie_themePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorie_theme"
    objects: {
      categorie: Prisma.$categoriePayload<ExtArgs>
      theme: Prisma.$themePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      categorie_id: number
      theme_id: number
    }, ExtArgs["result"]["categorie_theme"]>
    composites: {}
  }

  type categorie_themeGetPayload<S extends boolean | null | undefined | categorie_themeDefaultArgs> = $Result.GetResult<Prisma.$categorie_themePayload, S>

  type categorie_themeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categorie_themeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Categorie_themeCountAggregateInputType | true
    }

  export interface categorie_themeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorie_theme'], meta: { name: 'categorie_theme' } }
    /**
     * Find zero or one Categorie_theme that matches the filter.
     * @param {categorie_themeFindUniqueArgs} args - Arguments to find a Categorie_theme
     * @example
     * // Get one Categorie_theme
     * const categorie_theme = await prisma.categorie_theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categorie_themeFindUniqueArgs>(args: SelectSubset<T, categorie_themeFindUniqueArgs<ExtArgs>>): Prisma__categorie_themeClient<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie_theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categorie_themeFindUniqueOrThrowArgs} args - Arguments to find a Categorie_theme
     * @example
     * // Get one Categorie_theme
     * const categorie_theme = await prisma.categorie_theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categorie_themeFindUniqueOrThrowArgs>(args: SelectSubset<T, categorie_themeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categorie_themeClient<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie_theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorie_themeFindFirstArgs} args - Arguments to find a Categorie_theme
     * @example
     * // Get one Categorie_theme
     * const categorie_theme = await prisma.categorie_theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categorie_themeFindFirstArgs>(args?: SelectSubset<T, categorie_themeFindFirstArgs<ExtArgs>>): Prisma__categorie_themeClient<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie_theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorie_themeFindFirstOrThrowArgs} args - Arguments to find a Categorie_theme
     * @example
     * // Get one Categorie_theme
     * const categorie_theme = await prisma.categorie_theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categorie_themeFindFirstOrThrowArgs>(args?: SelectSubset<T, categorie_themeFindFirstOrThrowArgs<ExtArgs>>): Prisma__categorie_themeClient<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorie_themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorie_themeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorie_themes
     * const categorie_themes = await prisma.categorie_theme.findMany()
     * 
     * // Get first 10 Categorie_themes
     * const categorie_themes = await prisma.categorie_theme.findMany({ take: 10 })
     * 
     * // Only select the `categorie_id`
     * const categorie_themeWithCategorie_idOnly = await prisma.categorie_theme.findMany({ select: { categorie_id: true } })
     * 
     */
    findMany<T extends categorie_themeFindManyArgs>(args?: SelectSubset<T, categorie_themeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie_theme.
     * @param {categorie_themeCreateArgs} args - Arguments to create a Categorie_theme.
     * @example
     * // Create one Categorie_theme
     * const Categorie_theme = await prisma.categorie_theme.create({
     *   data: {
     *     // ... data to create a Categorie_theme
     *   }
     * })
     * 
     */
    create<T extends categorie_themeCreateArgs>(args: SelectSubset<T, categorie_themeCreateArgs<ExtArgs>>): Prisma__categorie_themeClient<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorie_themes.
     * @param {categorie_themeCreateManyArgs} args - Arguments to create many Categorie_themes.
     * @example
     * // Create many Categorie_themes
     * const categorie_theme = await prisma.categorie_theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categorie_themeCreateManyArgs>(args?: SelectSubset<T, categorie_themeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorie_themes and returns the data saved in the database.
     * @param {categorie_themeCreateManyAndReturnArgs} args - Arguments to create many Categorie_themes.
     * @example
     * // Create many Categorie_themes
     * const categorie_theme = await prisma.categorie_theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorie_themes and only return the `categorie_id`
     * const categorie_themeWithCategorie_idOnly = await prisma.categorie_theme.createManyAndReturn({
     *   select: { categorie_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categorie_themeCreateManyAndReturnArgs>(args?: SelectSubset<T, categorie_themeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie_theme.
     * @param {categorie_themeDeleteArgs} args - Arguments to delete one Categorie_theme.
     * @example
     * // Delete one Categorie_theme
     * const Categorie_theme = await prisma.categorie_theme.delete({
     *   where: {
     *     // ... filter to delete one Categorie_theme
     *   }
     * })
     * 
     */
    delete<T extends categorie_themeDeleteArgs>(args: SelectSubset<T, categorie_themeDeleteArgs<ExtArgs>>): Prisma__categorie_themeClient<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie_theme.
     * @param {categorie_themeUpdateArgs} args - Arguments to update one Categorie_theme.
     * @example
     * // Update one Categorie_theme
     * const categorie_theme = await prisma.categorie_theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categorie_themeUpdateArgs>(args: SelectSubset<T, categorie_themeUpdateArgs<ExtArgs>>): Prisma__categorie_themeClient<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorie_themes.
     * @param {categorie_themeDeleteManyArgs} args - Arguments to filter Categorie_themes to delete.
     * @example
     * // Delete a few Categorie_themes
     * const { count } = await prisma.categorie_theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categorie_themeDeleteManyArgs>(args?: SelectSubset<T, categorie_themeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorie_themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorie_themeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorie_themes
     * const categorie_theme = await prisma.categorie_theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categorie_themeUpdateManyArgs>(args: SelectSubset<T, categorie_themeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorie_themes and returns the data updated in the database.
     * @param {categorie_themeUpdateManyAndReturnArgs} args - Arguments to update many Categorie_themes.
     * @example
     * // Update many Categorie_themes
     * const categorie_theme = await prisma.categorie_theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorie_themes and only return the `categorie_id`
     * const categorie_themeWithCategorie_idOnly = await prisma.categorie_theme.updateManyAndReturn({
     *   select: { categorie_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categorie_themeUpdateManyAndReturnArgs>(args: SelectSubset<T, categorie_themeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie_theme.
     * @param {categorie_themeUpsertArgs} args - Arguments to update or create a Categorie_theme.
     * @example
     * // Update or create a Categorie_theme
     * const categorie_theme = await prisma.categorie_theme.upsert({
     *   create: {
     *     // ... data to create a Categorie_theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie_theme we want to update
     *   }
     * })
     */
    upsert<T extends categorie_themeUpsertArgs>(args: SelectSubset<T, categorie_themeUpsertArgs<ExtArgs>>): Prisma__categorie_themeClient<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorie_themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorie_themeCountArgs} args - Arguments to filter Categorie_themes to count.
     * @example
     * // Count the number of Categorie_themes
     * const count = await prisma.categorie_theme.count({
     *   where: {
     *     // ... the filter for the Categorie_themes we want to count
     *   }
     * })
    **/
    count<T extends categorie_themeCountArgs>(
      args?: Subset<T, categorie_themeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Categorie_themeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie_theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categorie_themeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Categorie_themeAggregateArgs>(args: Subset<T, Categorie_themeAggregateArgs>): Prisma.PrismaPromise<GetCategorie_themeAggregateType<T>>

    /**
     * Group by Categorie_theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorie_themeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categorie_themeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categorie_themeGroupByArgs['orderBy'] }
        : { orderBy?: categorie_themeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categorie_themeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorie_themeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorie_theme model
   */
  readonly fields: categorie_themeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorie_theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categorie_themeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorie<T extends categorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categorieDefaultArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    theme<T extends themeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, themeDefaultArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categorie_theme model
   */
  interface categorie_themeFieldRefs {
    readonly categorie_id: FieldRef<"categorie_theme", 'Int'>
    readonly theme_id: FieldRef<"categorie_theme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * categorie_theme findUnique
   */
  export type categorie_themeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * Filter, which categorie_theme to fetch.
     */
    where: categorie_themeWhereUniqueInput
  }

  /**
   * categorie_theme findUniqueOrThrow
   */
  export type categorie_themeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * Filter, which categorie_theme to fetch.
     */
    where: categorie_themeWhereUniqueInput
  }

  /**
   * categorie_theme findFirst
   */
  export type categorie_themeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * Filter, which categorie_theme to fetch.
     */
    where?: categorie_themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorie_themes to fetch.
     */
    orderBy?: categorie_themeOrderByWithRelationInput | categorie_themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorie_themes.
     */
    cursor?: categorie_themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorie_themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorie_themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorie_themes.
     */
    distinct?: Categorie_themeScalarFieldEnum | Categorie_themeScalarFieldEnum[]
  }

  /**
   * categorie_theme findFirstOrThrow
   */
  export type categorie_themeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * Filter, which categorie_theme to fetch.
     */
    where?: categorie_themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorie_themes to fetch.
     */
    orderBy?: categorie_themeOrderByWithRelationInput | categorie_themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorie_themes.
     */
    cursor?: categorie_themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorie_themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorie_themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorie_themes.
     */
    distinct?: Categorie_themeScalarFieldEnum | Categorie_themeScalarFieldEnum[]
  }

  /**
   * categorie_theme findMany
   */
  export type categorie_themeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * Filter, which categorie_themes to fetch.
     */
    where?: categorie_themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorie_themes to fetch.
     */
    orderBy?: categorie_themeOrderByWithRelationInput | categorie_themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorie_themes.
     */
    cursor?: categorie_themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorie_themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorie_themes.
     */
    skip?: number
    distinct?: Categorie_themeScalarFieldEnum | Categorie_themeScalarFieldEnum[]
  }

  /**
   * categorie_theme create
   */
  export type categorie_themeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * The data needed to create a categorie_theme.
     */
    data: XOR<categorie_themeCreateInput, categorie_themeUncheckedCreateInput>
  }

  /**
   * categorie_theme createMany
   */
  export type categorie_themeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorie_themes.
     */
    data: categorie_themeCreateManyInput | categorie_themeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorie_theme createManyAndReturn
   */
  export type categorie_themeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * The data used to create many categorie_themes.
     */
    data: categorie_themeCreateManyInput | categorie_themeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categorie_theme update
   */
  export type categorie_themeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * The data needed to update a categorie_theme.
     */
    data: XOR<categorie_themeUpdateInput, categorie_themeUncheckedUpdateInput>
    /**
     * Choose, which categorie_theme to update.
     */
    where: categorie_themeWhereUniqueInput
  }

  /**
   * categorie_theme updateMany
   */
  export type categorie_themeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorie_themes.
     */
    data: XOR<categorie_themeUpdateManyMutationInput, categorie_themeUncheckedUpdateManyInput>
    /**
     * Filter which categorie_themes to update
     */
    where?: categorie_themeWhereInput
    /**
     * Limit how many categorie_themes to update.
     */
    limit?: number
  }

  /**
   * categorie_theme updateManyAndReturn
   */
  export type categorie_themeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * The data used to update categorie_themes.
     */
    data: XOR<categorie_themeUpdateManyMutationInput, categorie_themeUncheckedUpdateManyInput>
    /**
     * Filter which categorie_themes to update
     */
    where?: categorie_themeWhereInput
    /**
     * Limit how many categorie_themes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categorie_theme upsert
   */
  export type categorie_themeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * The filter to search for the categorie_theme to update in case it exists.
     */
    where: categorie_themeWhereUniqueInput
    /**
     * In case the categorie_theme found by the `where` argument doesn't exist, create a new categorie_theme with this data.
     */
    create: XOR<categorie_themeCreateInput, categorie_themeUncheckedCreateInput>
    /**
     * In case the categorie_theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categorie_themeUpdateInput, categorie_themeUncheckedUpdateInput>
  }

  /**
   * categorie_theme delete
   */
  export type categorie_themeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    /**
     * Filter which categorie_theme to delete.
     */
    where: categorie_themeWhereUniqueInput
  }

  /**
   * categorie_theme deleteMany
   */
  export type categorie_themeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorie_themes to delete
     */
    where?: categorie_themeWhereInput
    /**
     * Limit how many categorie_themes to delete.
     */
    limit?: number
  }

  /**
   * categorie_theme without action
   */
  export type categorie_themeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
  }


  /**
   * Model edition_papier
   */

  export type AggregateEdition_papier = {
    _count: Edition_papierCountAggregateOutputType | null
    _avg: Edition_papierAvgAggregateOutputType | null
    _sum: Edition_papierSumAggregateOutputType | null
    _min: Edition_papierMinAggregateOutputType | null
    _max: Edition_papierMaxAggregateOutputType | null
  }

  export type Edition_papierAvgAggregateOutputType = {
    id: number | null
  }

  export type Edition_papierSumAggregateOutputType = {
    id: number | null
  }

  export type Edition_papierMinAggregateOutputType = {
    id: number | null
    libelle_edition_papier: string | null
  }

  export type Edition_papierMaxAggregateOutputType = {
    id: number | null
    libelle_edition_papier: string | null
  }

  export type Edition_papierCountAggregateOutputType = {
    id: number
    libelle_edition_papier: number
    _all: number
  }


  export type Edition_papierAvgAggregateInputType = {
    id?: true
  }

  export type Edition_papierSumAggregateInputType = {
    id?: true
  }

  export type Edition_papierMinAggregateInputType = {
    id?: true
    libelle_edition_papier?: true
  }

  export type Edition_papierMaxAggregateInputType = {
    id?: true
    libelle_edition_papier?: true
  }

  export type Edition_papierCountAggregateInputType = {
    id?: true
    libelle_edition_papier?: true
    _all?: true
  }

  export type Edition_papierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which edition_papier to aggregate.
     */
    where?: edition_papierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of edition_papiers to fetch.
     */
    orderBy?: edition_papierOrderByWithRelationInput | edition_papierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: edition_papierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` edition_papiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` edition_papiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned edition_papiers
    **/
    _count?: true | Edition_papierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Edition_papierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Edition_papierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Edition_papierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Edition_papierMaxAggregateInputType
  }

  export type GetEdition_papierAggregateType<T extends Edition_papierAggregateArgs> = {
        [P in keyof T & keyof AggregateEdition_papier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdition_papier[P]>
      : GetScalarType<T[P], AggregateEdition_papier[P]>
  }




  export type edition_papierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: edition_papierWhereInput
    orderBy?: edition_papierOrderByWithAggregationInput | edition_papierOrderByWithAggregationInput[]
    by: Edition_papierScalarFieldEnum[] | Edition_papierScalarFieldEnum
    having?: edition_papierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Edition_papierCountAggregateInputType | true
    _avg?: Edition_papierAvgAggregateInputType
    _sum?: Edition_papierSumAggregateInputType
    _min?: Edition_papierMinAggregateInputType
    _max?: Edition_papierMaxAggregateInputType
  }

  export type Edition_papierGroupByOutputType = {
    id: number
    libelle_edition_papier: string | null
    _count: Edition_papierCountAggregateOutputType | null
    _avg: Edition_papierAvgAggregateOutputType | null
    _sum: Edition_papierSumAggregateOutputType | null
    _min: Edition_papierMinAggregateOutputType | null
    _max: Edition_papierMaxAggregateOutputType | null
  }

  type GetEdition_papierGroupByPayload<T extends edition_papierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Edition_papierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Edition_papierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Edition_papierGroupByOutputType[P]>
            : GetScalarType<T[P], Edition_papierGroupByOutputType[P]>
        }
      >
    >


  export type edition_papierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle_edition_papier?: boolean
    article?: boolean | edition_papier$articleArgs<ExtArgs>
    _count?: boolean | Edition_papierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edition_papier"]>

  export type edition_papierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle_edition_papier?: boolean
  }, ExtArgs["result"]["edition_papier"]>

  export type edition_papierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle_edition_papier?: boolean
  }, ExtArgs["result"]["edition_papier"]>

  export type edition_papierSelectScalar = {
    id?: boolean
    libelle_edition_papier?: boolean
  }

  export type edition_papierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle_edition_papier", ExtArgs["result"]["edition_papier"]>
  export type edition_papierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | edition_papier$articleArgs<ExtArgs>
    _count?: boolean | Edition_papierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type edition_papierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type edition_papierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $edition_papierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "edition_papier"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle_edition_papier: string | null
    }, ExtArgs["result"]["edition_papier"]>
    composites: {}
  }

  type edition_papierGetPayload<S extends boolean | null | undefined | edition_papierDefaultArgs> = $Result.GetResult<Prisma.$edition_papierPayload, S>

  type edition_papierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<edition_papierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Edition_papierCountAggregateInputType | true
    }

  export interface edition_papierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['edition_papier'], meta: { name: 'edition_papier' } }
    /**
     * Find zero or one Edition_papier that matches the filter.
     * @param {edition_papierFindUniqueArgs} args - Arguments to find a Edition_papier
     * @example
     * // Get one Edition_papier
     * const edition_papier = await prisma.edition_papier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends edition_papierFindUniqueArgs>(args: SelectSubset<T, edition_papierFindUniqueArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Edition_papier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {edition_papierFindUniqueOrThrowArgs} args - Arguments to find a Edition_papier
     * @example
     * // Get one Edition_papier
     * const edition_papier = await prisma.edition_papier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends edition_papierFindUniqueOrThrowArgs>(args: SelectSubset<T, edition_papierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edition_papier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {edition_papierFindFirstArgs} args - Arguments to find a Edition_papier
     * @example
     * // Get one Edition_papier
     * const edition_papier = await prisma.edition_papier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends edition_papierFindFirstArgs>(args?: SelectSubset<T, edition_papierFindFirstArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edition_papier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {edition_papierFindFirstOrThrowArgs} args - Arguments to find a Edition_papier
     * @example
     * // Get one Edition_papier
     * const edition_papier = await prisma.edition_papier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends edition_papierFindFirstOrThrowArgs>(args?: SelectSubset<T, edition_papierFindFirstOrThrowArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Edition_papiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {edition_papierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Edition_papiers
     * const edition_papiers = await prisma.edition_papier.findMany()
     * 
     * // Get first 10 Edition_papiers
     * const edition_papiers = await prisma.edition_papier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const edition_papierWithIdOnly = await prisma.edition_papier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends edition_papierFindManyArgs>(args?: SelectSubset<T, edition_papierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Edition_papier.
     * @param {edition_papierCreateArgs} args - Arguments to create a Edition_papier.
     * @example
     * // Create one Edition_papier
     * const Edition_papier = await prisma.edition_papier.create({
     *   data: {
     *     // ... data to create a Edition_papier
     *   }
     * })
     * 
     */
    create<T extends edition_papierCreateArgs>(args: SelectSubset<T, edition_papierCreateArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Edition_papiers.
     * @param {edition_papierCreateManyArgs} args - Arguments to create many Edition_papiers.
     * @example
     * // Create many Edition_papiers
     * const edition_papier = await prisma.edition_papier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends edition_papierCreateManyArgs>(args?: SelectSubset<T, edition_papierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Edition_papiers and returns the data saved in the database.
     * @param {edition_papierCreateManyAndReturnArgs} args - Arguments to create many Edition_papiers.
     * @example
     * // Create many Edition_papiers
     * const edition_papier = await prisma.edition_papier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Edition_papiers and only return the `id`
     * const edition_papierWithIdOnly = await prisma.edition_papier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends edition_papierCreateManyAndReturnArgs>(args?: SelectSubset<T, edition_papierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Edition_papier.
     * @param {edition_papierDeleteArgs} args - Arguments to delete one Edition_papier.
     * @example
     * // Delete one Edition_papier
     * const Edition_papier = await prisma.edition_papier.delete({
     *   where: {
     *     // ... filter to delete one Edition_papier
     *   }
     * })
     * 
     */
    delete<T extends edition_papierDeleteArgs>(args: SelectSubset<T, edition_papierDeleteArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Edition_papier.
     * @param {edition_papierUpdateArgs} args - Arguments to update one Edition_papier.
     * @example
     * // Update one Edition_papier
     * const edition_papier = await prisma.edition_papier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends edition_papierUpdateArgs>(args: SelectSubset<T, edition_papierUpdateArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Edition_papiers.
     * @param {edition_papierDeleteManyArgs} args - Arguments to filter Edition_papiers to delete.
     * @example
     * // Delete a few Edition_papiers
     * const { count } = await prisma.edition_papier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends edition_papierDeleteManyArgs>(args?: SelectSubset<T, edition_papierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edition_papiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {edition_papierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Edition_papiers
     * const edition_papier = await prisma.edition_papier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends edition_papierUpdateManyArgs>(args: SelectSubset<T, edition_papierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edition_papiers and returns the data updated in the database.
     * @param {edition_papierUpdateManyAndReturnArgs} args - Arguments to update many Edition_papiers.
     * @example
     * // Update many Edition_papiers
     * const edition_papier = await prisma.edition_papier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Edition_papiers and only return the `id`
     * const edition_papierWithIdOnly = await prisma.edition_papier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends edition_papierUpdateManyAndReturnArgs>(args: SelectSubset<T, edition_papierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Edition_papier.
     * @param {edition_papierUpsertArgs} args - Arguments to update or create a Edition_papier.
     * @example
     * // Update or create a Edition_papier
     * const edition_papier = await prisma.edition_papier.upsert({
     *   create: {
     *     // ... data to create a Edition_papier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edition_papier we want to update
     *   }
     * })
     */
    upsert<T extends edition_papierUpsertArgs>(args: SelectSubset<T, edition_papierUpsertArgs<ExtArgs>>): Prisma__edition_papierClient<$Result.GetResult<Prisma.$edition_papierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Edition_papiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {edition_papierCountArgs} args - Arguments to filter Edition_papiers to count.
     * @example
     * // Count the number of Edition_papiers
     * const count = await prisma.edition_papier.count({
     *   where: {
     *     // ... the filter for the Edition_papiers we want to count
     *   }
     * })
    **/
    count<T extends edition_papierCountArgs>(
      args?: Subset<T, edition_papierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Edition_papierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edition_papier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Edition_papierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Edition_papierAggregateArgs>(args: Subset<T, Edition_papierAggregateArgs>): Prisma.PrismaPromise<GetEdition_papierAggregateType<T>>

    /**
     * Group by Edition_papier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {edition_papierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends edition_papierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: edition_papierGroupByArgs['orderBy'] }
        : { orderBy?: edition_papierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, edition_papierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEdition_papierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the edition_papier model
   */
  readonly fields: edition_papierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for edition_papier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__edition_papierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends edition_papier$articleArgs<ExtArgs> = {}>(args?: Subset<T, edition_papier$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the edition_papier model
   */
  interface edition_papierFieldRefs {
    readonly id: FieldRef<"edition_papier", 'Int'>
    readonly libelle_edition_papier: FieldRef<"edition_papier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * edition_papier findUnique
   */
  export type edition_papierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * Filter, which edition_papier to fetch.
     */
    where: edition_papierWhereUniqueInput
  }

  /**
   * edition_papier findUniqueOrThrow
   */
  export type edition_papierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * Filter, which edition_papier to fetch.
     */
    where: edition_papierWhereUniqueInput
  }

  /**
   * edition_papier findFirst
   */
  export type edition_papierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * Filter, which edition_papier to fetch.
     */
    where?: edition_papierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of edition_papiers to fetch.
     */
    orderBy?: edition_papierOrderByWithRelationInput | edition_papierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for edition_papiers.
     */
    cursor?: edition_papierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` edition_papiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` edition_papiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of edition_papiers.
     */
    distinct?: Edition_papierScalarFieldEnum | Edition_papierScalarFieldEnum[]
  }

  /**
   * edition_papier findFirstOrThrow
   */
  export type edition_papierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * Filter, which edition_papier to fetch.
     */
    where?: edition_papierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of edition_papiers to fetch.
     */
    orderBy?: edition_papierOrderByWithRelationInput | edition_papierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for edition_papiers.
     */
    cursor?: edition_papierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` edition_papiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` edition_papiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of edition_papiers.
     */
    distinct?: Edition_papierScalarFieldEnum | Edition_papierScalarFieldEnum[]
  }

  /**
   * edition_papier findMany
   */
  export type edition_papierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * Filter, which edition_papiers to fetch.
     */
    where?: edition_papierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of edition_papiers to fetch.
     */
    orderBy?: edition_papierOrderByWithRelationInput | edition_papierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing edition_papiers.
     */
    cursor?: edition_papierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` edition_papiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` edition_papiers.
     */
    skip?: number
    distinct?: Edition_papierScalarFieldEnum | Edition_papierScalarFieldEnum[]
  }

  /**
   * edition_papier create
   */
  export type edition_papierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * The data needed to create a edition_papier.
     */
    data?: XOR<edition_papierCreateInput, edition_papierUncheckedCreateInput>
  }

  /**
   * edition_papier createMany
   */
  export type edition_papierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many edition_papiers.
     */
    data: edition_papierCreateManyInput | edition_papierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * edition_papier createManyAndReturn
   */
  export type edition_papierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * The data used to create many edition_papiers.
     */
    data: edition_papierCreateManyInput | edition_papierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * edition_papier update
   */
  export type edition_papierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * The data needed to update a edition_papier.
     */
    data: XOR<edition_papierUpdateInput, edition_papierUncheckedUpdateInput>
    /**
     * Choose, which edition_papier to update.
     */
    where: edition_papierWhereUniqueInput
  }

  /**
   * edition_papier updateMany
   */
  export type edition_papierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update edition_papiers.
     */
    data: XOR<edition_papierUpdateManyMutationInput, edition_papierUncheckedUpdateManyInput>
    /**
     * Filter which edition_papiers to update
     */
    where?: edition_papierWhereInput
    /**
     * Limit how many edition_papiers to update.
     */
    limit?: number
  }

  /**
   * edition_papier updateManyAndReturn
   */
  export type edition_papierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * The data used to update edition_papiers.
     */
    data: XOR<edition_papierUpdateManyMutationInput, edition_papierUncheckedUpdateManyInput>
    /**
     * Filter which edition_papiers to update
     */
    where?: edition_papierWhereInput
    /**
     * Limit how many edition_papiers to update.
     */
    limit?: number
  }

  /**
   * edition_papier upsert
   */
  export type edition_papierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * The filter to search for the edition_papier to update in case it exists.
     */
    where: edition_papierWhereUniqueInput
    /**
     * In case the edition_papier found by the `where` argument doesn't exist, create a new edition_papier with this data.
     */
    create: XOR<edition_papierCreateInput, edition_papierUncheckedCreateInput>
    /**
     * In case the edition_papier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<edition_papierUpdateInput, edition_papierUncheckedUpdateInput>
  }

  /**
   * edition_papier delete
   */
  export type edition_papierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
    /**
     * Filter which edition_papier to delete.
     */
    where: edition_papierWhereUniqueInput
  }

  /**
   * edition_papier deleteMany
   */
  export type edition_papierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which edition_papiers to delete
     */
    where?: edition_papierWhereInput
    /**
     * Limit how many edition_papiers to delete.
     */
    limit?: number
  }

  /**
   * edition_papier.article
   */
  export type edition_papier$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    where?: articleWhereInput
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    cursor?: articleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * edition_papier without action
   */
  export type edition_papierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the edition_papier
     */
    select?: edition_papierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the edition_papier
     */
    omit?: edition_papierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: edition_papierInclude<ExtArgs> | null
  }


  /**
   * Model favoris
   */

  export type AggregateFavoris = {
    _count: FavorisCountAggregateOutputType | null
    _avg: FavorisAvgAggregateOutputType | null
    _sum: FavorisSumAggregateOutputType | null
    _min: FavorisMinAggregateOutputType | null
    _max: FavorisMaxAggregateOutputType | null
  }

  export type FavorisAvgAggregateOutputType = {
    utilisateur_id: number | null
    article_id: number | null
  }

  export type FavorisSumAggregateOutputType = {
    utilisateur_id: number | null
    article_id: number | null
  }

  export type FavorisMinAggregateOutputType = {
    utilisateur_id: number | null
    article_id: number | null
  }

  export type FavorisMaxAggregateOutputType = {
    utilisateur_id: number | null
    article_id: number | null
  }

  export type FavorisCountAggregateOutputType = {
    utilisateur_id: number
    article_id: number
    _all: number
  }


  export type FavorisAvgAggregateInputType = {
    utilisateur_id?: true
    article_id?: true
  }

  export type FavorisSumAggregateInputType = {
    utilisateur_id?: true
    article_id?: true
  }

  export type FavorisMinAggregateInputType = {
    utilisateur_id?: true
    article_id?: true
  }

  export type FavorisMaxAggregateInputType = {
    utilisateur_id?: true
    article_id?: true
  }

  export type FavorisCountAggregateInputType = {
    utilisateur_id?: true
    article_id?: true
    _all?: true
  }

  export type FavorisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favoris to aggregate.
     */
    where?: favorisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorises to fetch.
     */
    orderBy?: favorisOrderByWithRelationInput | favorisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favorisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favorises
    **/
    _count?: true | FavorisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavorisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavorisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavorisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavorisMaxAggregateInputType
  }

  export type GetFavorisAggregateType<T extends FavorisAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoris]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoris[P]>
      : GetScalarType<T[P], AggregateFavoris[P]>
  }




  export type favorisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favorisWhereInput
    orderBy?: favorisOrderByWithAggregationInput | favorisOrderByWithAggregationInput[]
    by: FavorisScalarFieldEnum[] | FavorisScalarFieldEnum
    having?: favorisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavorisCountAggregateInputType | true
    _avg?: FavorisAvgAggregateInputType
    _sum?: FavorisSumAggregateInputType
    _min?: FavorisMinAggregateInputType
    _max?: FavorisMaxAggregateInputType
  }

  export type FavorisGroupByOutputType = {
    utilisateur_id: number
    article_id: number
    _count: FavorisCountAggregateOutputType | null
    _avg: FavorisAvgAggregateOutputType | null
    _sum: FavorisSumAggregateOutputType | null
    _min: FavorisMinAggregateOutputType | null
    _max: FavorisMaxAggregateOutputType | null
  }

  type GetFavorisGroupByPayload<T extends favorisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavorisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavorisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavorisGroupByOutputType[P]>
            : GetScalarType<T[P], FavorisGroupByOutputType[P]>
        }
      >
    >


  export type favorisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateur_id?: boolean
    article_id?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    utilisateur?: boolean | utilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoris"]>

  export type favorisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateur_id?: boolean
    article_id?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    utilisateur?: boolean | utilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoris"]>

  export type favorisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateur_id?: boolean
    article_id?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    utilisateur?: boolean | utilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favoris"]>

  export type favorisSelectScalar = {
    utilisateur_id?: boolean
    article_id?: boolean
  }

  export type favorisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utilisateur_id" | "article_id", ExtArgs["result"]["favoris"]>
  export type favorisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    utilisateur?: boolean | utilisateurDefaultArgs<ExtArgs>
  }
  export type favorisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    utilisateur?: boolean | utilisateurDefaultArgs<ExtArgs>
  }
  export type favorisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    utilisateur?: boolean | utilisateurDefaultArgs<ExtArgs>
  }

  export type $favorisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favoris"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>
      utilisateur: Prisma.$utilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      utilisateur_id: number
      article_id: number
    }, ExtArgs["result"]["favoris"]>
    composites: {}
  }

  type favorisGetPayload<S extends boolean | null | undefined | favorisDefaultArgs> = $Result.GetResult<Prisma.$favorisPayload, S>

  type favorisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<favorisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavorisCountAggregateInputType | true
    }

  export interface favorisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favoris'], meta: { name: 'favoris' } }
    /**
     * Find zero or one Favoris that matches the filter.
     * @param {favorisFindUniqueArgs} args - Arguments to find a Favoris
     * @example
     * // Get one Favoris
     * const favoris = await prisma.favoris.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends favorisFindUniqueArgs>(args: SelectSubset<T, favorisFindUniqueArgs<ExtArgs>>): Prisma__favorisClient<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favoris that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {favorisFindUniqueOrThrowArgs} args - Arguments to find a Favoris
     * @example
     * // Get one Favoris
     * const favoris = await prisma.favoris.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends favorisFindUniqueOrThrowArgs>(args: SelectSubset<T, favorisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__favorisClient<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favorisFindFirstArgs} args - Arguments to find a Favoris
     * @example
     * // Get one Favoris
     * const favoris = await prisma.favoris.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends favorisFindFirstArgs>(args?: SelectSubset<T, favorisFindFirstArgs<ExtArgs>>): Prisma__favorisClient<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favoris that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favorisFindFirstOrThrowArgs} args - Arguments to find a Favoris
     * @example
     * // Get one Favoris
     * const favoris = await prisma.favoris.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends favorisFindFirstOrThrowArgs>(args?: SelectSubset<T, favorisFindFirstOrThrowArgs<ExtArgs>>): Prisma__favorisClient<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favorisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorises
     * const favorises = await prisma.favoris.findMany()
     * 
     * // Get first 10 Favorises
     * const favorises = await prisma.favoris.findMany({ take: 10 })
     * 
     * // Only select the `utilisateur_id`
     * const favorisWithUtilisateur_idOnly = await prisma.favoris.findMany({ select: { utilisateur_id: true } })
     * 
     */
    findMany<T extends favorisFindManyArgs>(args?: SelectSubset<T, favorisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favoris.
     * @param {favorisCreateArgs} args - Arguments to create a Favoris.
     * @example
     * // Create one Favoris
     * const Favoris = await prisma.favoris.create({
     *   data: {
     *     // ... data to create a Favoris
     *   }
     * })
     * 
     */
    create<T extends favorisCreateArgs>(args: SelectSubset<T, favorisCreateArgs<ExtArgs>>): Prisma__favorisClient<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorises.
     * @param {favorisCreateManyArgs} args - Arguments to create many Favorises.
     * @example
     * // Create many Favorises
     * const favoris = await prisma.favoris.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends favorisCreateManyArgs>(args?: SelectSubset<T, favorisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorises and returns the data saved in the database.
     * @param {favorisCreateManyAndReturnArgs} args - Arguments to create many Favorises.
     * @example
     * // Create many Favorises
     * const favoris = await prisma.favoris.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorises and only return the `utilisateur_id`
     * const favorisWithUtilisateur_idOnly = await prisma.favoris.createManyAndReturn({
     *   select: { utilisateur_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends favorisCreateManyAndReturnArgs>(args?: SelectSubset<T, favorisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favoris.
     * @param {favorisDeleteArgs} args - Arguments to delete one Favoris.
     * @example
     * // Delete one Favoris
     * const Favoris = await prisma.favoris.delete({
     *   where: {
     *     // ... filter to delete one Favoris
     *   }
     * })
     * 
     */
    delete<T extends favorisDeleteArgs>(args: SelectSubset<T, favorisDeleteArgs<ExtArgs>>): Prisma__favorisClient<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favoris.
     * @param {favorisUpdateArgs} args - Arguments to update one Favoris.
     * @example
     * // Update one Favoris
     * const favoris = await prisma.favoris.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends favorisUpdateArgs>(args: SelectSubset<T, favorisUpdateArgs<ExtArgs>>): Prisma__favorisClient<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorises.
     * @param {favorisDeleteManyArgs} args - Arguments to filter Favorises to delete.
     * @example
     * // Delete a few Favorises
     * const { count } = await prisma.favoris.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends favorisDeleteManyArgs>(args?: SelectSubset<T, favorisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favorisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorises
     * const favoris = await prisma.favoris.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends favorisUpdateManyArgs>(args: SelectSubset<T, favorisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorises and returns the data updated in the database.
     * @param {favorisUpdateManyAndReturnArgs} args - Arguments to update many Favorises.
     * @example
     * // Update many Favorises
     * const favoris = await prisma.favoris.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorises and only return the `utilisateur_id`
     * const favorisWithUtilisateur_idOnly = await prisma.favoris.updateManyAndReturn({
     *   select: { utilisateur_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends favorisUpdateManyAndReturnArgs>(args: SelectSubset<T, favorisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favoris.
     * @param {favorisUpsertArgs} args - Arguments to update or create a Favoris.
     * @example
     * // Update or create a Favoris
     * const favoris = await prisma.favoris.upsert({
     *   create: {
     *     // ... data to create a Favoris
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favoris we want to update
     *   }
     * })
     */
    upsert<T extends favorisUpsertArgs>(args: SelectSubset<T, favorisUpsertArgs<ExtArgs>>): Prisma__favorisClient<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favorisCountArgs} args - Arguments to filter Favorises to count.
     * @example
     * // Count the number of Favorises
     * const count = await prisma.favoris.count({
     *   where: {
     *     // ... the filter for the Favorises we want to count
     *   }
     * })
    **/
    count<T extends favorisCountArgs>(
      args?: Subset<T, favorisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavorisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavorisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavorisAggregateArgs>(args: Subset<T, FavorisAggregateArgs>): Prisma.PrismaPromise<GetFavorisAggregateType<T>>

    /**
     * Group by Favoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favorisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends favorisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favorisGroupByArgs['orderBy'] }
        : { orderBy?: favorisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, favorisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavorisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favoris model
   */
  readonly fields: favorisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favoris.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favorisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends articleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articleDefaultArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends utilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, utilisateurDefaultArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the favoris model
   */
  interface favorisFieldRefs {
    readonly utilisateur_id: FieldRef<"favoris", 'Int'>
    readonly article_id: FieldRef<"favoris", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * favoris findUnique
   */
  export type favorisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * Filter, which favoris to fetch.
     */
    where: favorisWhereUniqueInput
  }

  /**
   * favoris findUniqueOrThrow
   */
  export type favorisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * Filter, which favoris to fetch.
     */
    where: favorisWhereUniqueInput
  }

  /**
   * favoris findFirst
   */
  export type favorisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * Filter, which favoris to fetch.
     */
    where?: favorisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorises to fetch.
     */
    orderBy?: favorisOrderByWithRelationInput | favorisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorises.
     */
    cursor?: favorisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorises.
     */
    distinct?: FavorisScalarFieldEnum | FavorisScalarFieldEnum[]
  }

  /**
   * favoris findFirstOrThrow
   */
  export type favorisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * Filter, which favoris to fetch.
     */
    where?: favorisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorises to fetch.
     */
    orderBy?: favorisOrderByWithRelationInput | favorisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorises.
     */
    cursor?: favorisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorises.
     */
    distinct?: FavorisScalarFieldEnum | FavorisScalarFieldEnum[]
  }

  /**
   * favoris findMany
   */
  export type favorisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * Filter, which favorises to fetch.
     */
    where?: favorisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorises to fetch.
     */
    orderBy?: favorisOrderByWithRelationInput | favorisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favorises.
     */
    cursor?: favorisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorises.
     */
    skip?: number
    distinct?: FavorisScalarFieldEnum | FavorisScalarFieldEnum[]
  }

  /**
   * favoris create
   */
  export type favorisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * The data needed to create a favoris.
     */
    data: XOR<favorisCreateInput, favorisUncheckedCreateInput>
  }

  /**
   * favoris createMany
   */
  export type favorisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favorises.
     */
    data: favorisCreateManyInput | favorisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favoris createManyAndReturn
   */
  export type favorisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * The data used to create many favorises.
     */
    data: favorisCreateManyInput | favorisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * favoris update
   */
  export type favorisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * The data needed to update a favoris.
     */
    data: XOR<favorisUpdateInput, favorisUncheckedUpdateInput>
    /**
     * Choose, which favoris to update.
     */
    where: favorisWhereUniqueInput
  }

  /**
   * favoris updateMany
   */
  export type favorisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favorises.
     */
    data: XOR<favorisUpdateManyMutationInput, favorisUncheckedUpdateManyInput>
    /**
     * Filter which favorises to update
     */
    where?: favorisWhereInput
    /**
     * Limit how many favorises to update.
     */
    limit?: number
  }

  /**
   * favoris updateManyAndReturn
   */
  export type favorisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * The data used to update favorises.
     */
    data: XOR<favorisUpdateManyMutationInput, favorisUncheckedUpdateManyInput>
    /**
     * Filter which favorises to update
     */
    where?: favorisWhereInput
    /**
     * Limit how many favorises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * favoris upsert
   */
  export type favorisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * The filter to search for the favoris to update in case it exists.
     */
    where: favorisWhereUniqueInput
    /**
     * In case the favoris found by the `where` argument doesn't exist, create a new favoris with this data.
     */
    create: XOR<favorisCreateInput, favorisUncheckedCreateInput>
    /**
     * In case the favoris was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favorisUpdateInput, favorisUncheckedUpdateInput>
  }

  /**
   * favoris delete
   */
  export type favorisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    /**
     * Filter which favoris to delete.
     */
    where: favorisWhereUniqueInput
  }

  /**
   * favoris deleteMany
   */
  export type favorisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorises to delete
     */
    where?: favorisWhereInput
    /**
     * Limit how many favorises to delete.
     */
    limit?: number
  }

  /**
   * favoris without action
   */
  export type favorisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
  }


  /**
   * Model photos
   */

  export type AggregatePhotos = {
    _count: PhotosCountAggregateOutputType | null
    _avg: PhotosAvgAggregateOutputType | null
    _sum: PhotosSumAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  export type PhotosAvgAggregateOutputType = {
    id: number | null
    article_id: number | null
  }

  export type PhotosSumAggregateOutputType = {
    id: number | null
    article_id: number | null
  }

  export type PhotosMinAggregateOutputType = {
    id: number | null
    article_id: number | null
    libelle_photo: string | null
    url_photo: string | null
    a_la_une: $Enums.Choix | null
  }

  export type PhotosMaxAggregateOutputType = {
    id: number | null
    article_id: number | null
    libelle_photo: string | null
    url_photo: string | null
    a_la_une: $Enums.Choix | null
  }

  export type PhotosCountAggregateOutputType = {
    id: number
    article_id: number
    libelle_photo: number
    url_photo: number
    a_la_une: number
    _all: number
  }


  export type PhotosAvgAggregateInputType = {
    id?: true
    article_id?: true
  }

  export type PhotosSumAggregateInputType = {
    id?: true
    article_id?: true
  }

  export type PhotosMinAggregateInputType = {
    id?: true
    article_id?: true
    libelle_photo?: true
    url_photo?: true
    a_la_une?: true
  }

  export type PhotosMaxAggregateInputType = {
    id?: true
    article_id?: true
    libelle_photo?: true
    url_photo?: true
    a_la_une?: true
  }

  export type PhotosCountAggregateInputType = {
    id?: true
    article_id?: true
    libelle_photo?: true
    url_photo?: true
    a_la_une?: true
    _all?: true
  }

  export type PhotosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which photos to aggregate.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned photos
    **/
    _count?: true | PhotosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotosMaxAggregateInputType
  }

  export type GetPhotosAggregateType<T extends PhotosAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotos[P]>
      : GetScalarType<T[P], AggregatePhotos[P]>
  }




  export type photosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: photosWhereInput
    orderBy?: photosOrderByWithAggregationInput | photosOrderByWithAggregationInput[]
    by: PhotosScalarFieldEnum[] | PhotosScalarFieldEnum
    having?: photosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotosCountAggregateInputType | true
    _avg?: PhotosAvgAggregateInputType
    _sum?: PhotosSumAggregateInputType
    _min?: PhotosMinAggregateInputType
    _max?: PhotosMaxAggregateInputType
  }

  export type PhotosGroupByOutputType = {
    id: number
    article_id: number
    libelle_photo: string
    url_photo: string | null
    a_la_une: $Enums.Choix | null
    _count: PhotosCountAggregateOutputType | null
    _avg: PhotosAvgAggregateOutputType | null
    _sum: PhotosSumAggregateOutputType | null
    _min: PhotosMinAggregateOutputType | null
    _max: PhotosMaxAggregateOutputType | null
  }

  type GetPhotosGroupByPayload<T extends photosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotosGroupByOutputType[P]>
            : GetScalarType<T[P], PhotosGroupByOutputType[P]>
        }
      >
    >


  export type photosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_id?: boolean
    libelle_photo?: boolean
    url_photo?: boolean
    a_la_une?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>

  export type photosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_id?: boolean
    libelle_photo?: boolean
    url_photo?: boolean
    a_la_une?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>

  export type photosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_id?: boolean
    libelle_photo?: boolean
    url_photo?: boolean
    a_la_une?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photos"]>

  export type photosSelectScalar = {
    id?: boolean
    article_id?: boolean
    libelle_photo?: boolean
    url_photo?: boolean
    a_la_une?: boolean
  }

  export type photosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "article_id" | "libelle_photo" | "url_photo" | "a_la_une", ExtArgs["result"]["photos"]>
  export type photosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
  }
  export type photosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
  }
  export type photosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
  }

  export type $photosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "photos"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      article_id: number
      libelle_photo: string
      url_photo: string | null
      a_la_une: $Enums.Choix | null
    }, ExtArgs["result"]["photos"]>
    composites: {}
  }

  type photosGetPayload<S extends boolean | null | undefined | photosDefaultArgs> = $Result.GetResult<Prisma.$photosPayload, S>

  type photosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<photosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotosCountAggregateInputType | true
    }

  export interface photosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['photos'], meta: { name: 'photos' } }
    /**
     * Find zero or one Photos that matches the filter.
     * @param {photosFindUniqueArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends photosFindUniqueArgs>(args: SelectSubset<T, photosFindUniqueArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {photosFindUniqueOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends photosFindUniqueOrThrowArgs>(args: SelectSubset<T, photosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindFirstArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends photosFindFirstArgs>(args?: SelectSubset<T, photosFindFirstArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindFirstOrThrowArgs} args - Arguments to find a Photos
     * @example
     * // Get one Photos
     * const photos = await prisma.photos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends photosFindFirstOrThrowArgs>(args?: SelectSubset<T, photosFindFirstOrThrowArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photos.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photosWithIdOnly = await prisma.photos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends photosFindManyArgs>(args?: SelectSubset<T, photosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photos.
     * @param {photosCreateArgs} args - Arguments to create a Photos.
     * @example
     * // Create one Photos
     * const Photos = await prisma.photos.create({
     *   data: {
     *     // ... data to create a Photos
     *   }
     * })
     * 
     */
    create<T extends photosCreateArgs>(args: SelectSubset<T, photosCreateArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {photosCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photos = await prisma.photos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends photosCreateManyArgs>(args?: SelectSubset<T, photosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {photosCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photos = await prisma.photos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photosWithIdOnly = await prisma.photos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends photosCreateManyAndReturnArgs>(args?: SelectSubset<T, photosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photos.
     * @param {photosDeleteArgs} args - Arguments to delete one Photos.
     * @example
     * // Delete one Photos
     * const Photos = await prisma.photos.delete({
     *   where: {
     *     // ... filter to delete one Photos
     *   }
     * })
     * 
     */
    delete<T extends photosDeleteArgs>(args: SelectSubset<T, photosDeleteArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photos.
     * @param {photosUpdateArgs} args - Arguments to update one Photos.
     * @example
     * // Update one Photos
     * const photos = await prisma.photos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends photosUpdateArgs>(args: SelectSubset<T, photosUpdateArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {photosDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends photosDeleteManyArgs>(args?: SelectSubset<T, photosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photos = await prisma.photos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends photosUpdateManyArgs>(args: SelectSubset<T, photosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {photosUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photos = await prisma.photos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photosWithIdOnly = await prisma.photos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends photosUpdateManyAndReturnArgs>(args: SelectSubset<T, photosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photos.
     * @param {photosUpsertArgs} args - Arguments to update or create a Photos.
     * @example
     * // Update or create a Photos
     * const photos = await prisma.photos.upsert({
     *   create: {
     *     // ... data to create a Photos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photos we want to update
     *   }
     * })
     */
    upsert<T extends photosUpsertArgs>(args: SelectSubset<T, photosUpsertArgs<ExtArgs>>): Prisma__photosClient<$Result.GetResult<Prisma.$photosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photos.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends photosCountArgs>(
      args?: Subset<T, photosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotosAggregateArgs>(args: Subset<T, PhotosAggregateArgs>): Prisma.PrismaPromise<GetPhotosAggregateType<T>>

    /**
     * Group by Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {photosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends photosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: photosGroupByArgs['orderBy'] }
        : { orderBy?: photosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, photosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the photos model
   */
  readonly fields: photosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for photos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__photosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends articleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articleDefaultArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the photos model
   */
  interface photosFieldRefs {
    readonly id: FieldRef<"photos", 'Int'>
    readonly article_id: FieldRef<"photos", 'Int'>
    readonly libelle_photo: FieldRef<"photos", 'String'>
    readonly url_photo: FieldRef<"photos", 'String'>
    readonly a_la_une: FieldRef<"photos", 'Choix'>
  }
    

  // Custom InputTypes
  /**
   * photos findUnique
   */
  export type photosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos findUniqueOrThrow
   */
  export type photosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos findFirst
   */
  export type photosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos findFirstOrThrow
   */
  export type photosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of photos.
     */
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos findMany
   */
  export type photosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter, which photos to fetch.
     */
    where?: photosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of photos to fetch.
     */
    orderBy?: photosOrderByWithRelationInput | photosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing photos.
     */
    cursor?: photosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` photos.
     */
    skip?: number
    distinct?: PhotosScalarFieldEnum | PhotosScalarFieldEnum[]
  }

  /**
   * photos create
   */
  export type photosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The data needed to create a photos.
     */
    data: XOR<photosCreateInput, photosUncheckedCreateInput>
  }

  /**
   * photos createMany
   */
  export type photosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many photos.
     */
    data: photosCreateManyInput | photosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * photos createManyAndReturn
   */
  export type photosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * The data used to create many photos.
     */
    data: photosCreateManyInput | photosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * photos update
   */
  export type photosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The data needed to update a photos.
     */
    data: XOR<photosUpdateInput, photosUncheckedUpdateInput>
    /**
     * Choose, which photos to update.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos updateMany
   */
  export type photosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update photos.
     */
    data: XOR<photosUpdateManyMutationInput, photosUncheckedUpdateManyInput>
    /**
     * Filter which photos to update
     */
    where?: photosWhereInput
    /**
     * Limit how many photos to update.
     */
    limit?: number
  }

  /**
   * photos updateManyAndReturn
   */
  export type photosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * The data used to update photos.
     */
    data: XOR<photosUpdateManyMutationInput, photosUncheckedUpdateManyInput>
    /**
     * Filter which photos to update
     */
    where?: photosWhereInput
    /**
     * Limit how many photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * photos upsert
   */
  export type photosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * The filter to search for the photos to update in case it exists.
     */
    where: photosWhereUniqueInput
    /**
     * In case the photos found by the `where` argument doesn't exist, create a new photos with this data.
     */
    create: XOR<photosCreateInput, photosUncheckedCreateInput>
    /**
     * In case the photos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<photosUpdateInput, photosUncheckedUpdateInput>
  }

  /**
   * photos delete
   */
  export type photosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
    /**
     * Filter which photos to delete.
     */
    where: photosWhereUniqueInput
  }

  /**
   * photos deleteMany
   */
  export type photosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which photos to delete
     */
    where?: photosWhereInput
    /**
     * Limit how many photos to delete.
     */
    limit?: number
  }

  /**
   * photos without action
   */
  export type photosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the photos
     */
    select?: photosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the photos
     */
    omit?: photosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: photosInclude<ExtArgs> | null
  }


  /**
   * Model theme
   */

  export type AggregateTheme = {
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  export type ThemeAvgAggregateOutputType = {
    id: number | null
  }

  export type ThemeSumAggregateOutputType = {
    id: number | null
  }

  export type ThemeMinAggregateOutputType = {
    id: number | null
    libelle_theme: string | null
  }

  export type ThemeMaxAggregateOutputType = {
    id: number | null
    libelle_theme: string | null
  }

  export type ThemeCountAggregateOutputType = {
    id: number
    libelle_theme: number
    _all: number
  }


  export type ThemeAvgAggregateInputType = {
    id?: true
  }

  export type ThemeSumAggregateInputType = {
    id?: true
  }

  export type ThemeMinAggregateInputType = {
    id?: true
    libelle_theme?: true
  }

  export type ThemeMaxAggregateInputType = {
    id?: true
    libelle_theme?: true
  }

  export type ThemeCountAggregateInputType = {
    id?: true
    libelle_theme?: true
    _all?: true
  }

  export type ThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which theme to aggregate.
     */
    where?: themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themeOrderByWithRelationInput | themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned themes
    **/
    _count?: true | ThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThemeMaxAggregateInputType
  }

  export type GetThemeAggregateType<T extends ThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTheme[P]>
      : GetScalarType<T[P], AggregateTheme[P]>
  }




  export type themeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: themeWhereInput
    orderBy?: themeOrderByWithAggregationInput | themeOrderByWithAggregationInput[]
    by: ThemeScalarFieldEnum[] | ThemeScalarFieldEnum
    having?: themeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThemeCountAggregateInputType | true
    _avg?: ThemeAvgAggregateInputType
    _sum?: ThemeSumAggregateInputType
    _min?: ThemeMinAggregateInputType
    _max?: ThemeMaxAggregateInputType
  }

  export type ThemeGroupByOutputType = {
    id: number
    libelle_theme: string | null
    _count: ThemeCountAggregateOutputType | null
    _avg: ThemeAvgAggregateOutputType | null
    _sum: ThemeSumAggregateOutputType | null
    _min: ThemeMinAggregateOutputType | null
    _max: ThemeMaxAggregateOutputType | null
  }

  type GetThemeGroupByPayload<T extends themeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThemeGroupByOutputType[P]>
            : GetScalarType<T[P], ThemeGroupByOutputType[P]>
        }
      >
    >


  export type themeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle_theme?: boolean
    article_theme?: boolean | theme$article_themeArgs<ExtArgs>
    categorie_theme?: boolean | theme$categorie_themeArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["theme"]>

  export type themeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle_theme?: boolean
  }, ExtArgs["result"]["theme"]>

  export type themeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle_theme?: boolean
  }, ExtArgs["result"]["theme"]>

  export type themeSelectScalar = {
    id?: boolean
    libelle_theme?: boolean
  }

  export type themeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle_theme", ExtArgs["result"]["theme"]>
  export type themeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article_theme?: boolean | theme$article_themeArgs<ExtArgs>
    categorie_theme?: boolean | theme$categorie_themeArgs<ExtArgs>
    _count?: boolean | ThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type themeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type themeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $themePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "theme"
    objects: {
      article_theme: Prisma.$article_themePayload<ExtArgs>[]
      categorie_theme: Prisma.$categorie_themePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle_theme: string | null
    }, ExtArgs["result"]["theme"]>
    composites: {}
  }

  type themeGetPayload<S extends boolean | null | undefined | themeDefaultArgs> = $Result.GetResult<Prisma.$themePayload, S>

  type themeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<themeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThemeCountAggregateInputType | true
    }

  export interface themeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['theme'], meta: { name: 'theme' } }
    /**
     * Find zero or one Theme that matches the filter.
     * @param {themeFindUniqueArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends themeFindUniqueArgs>(args: SelectSubset<T, themeFindUniqueArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Theme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {themeFindUniqueOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends themeFindUniqueOrThrowArgs>(args: SelectSubset<T, themeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeFindFirstArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends themeFindFirstArgs>(args?: SelectSubset<T, themeFindFirstArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Theme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeFindFirstOrThrowArgs} args - Arguments to find a Theme
     * @example
     * // Get one Theme
     * const theme = await prisma.theme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends themeFindFirstOrThrowArgs>(args?: SelectSubset<T, themeFindFirstOrThrowArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Themes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Themes
     * const themes = await prisma.theme.findMany()
     * 
     * // Get first 10 Themes
     * const themes = await prisma.theme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const themeWithIdOnly = await prisma.theme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends themeFindManyArgs>(args?: SelectSubset<T, themeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Theme.
     * @param {themeCreateArgs} args - Arguments to create a Theme.
     * @example
     * // Create one Theme
     * const Theme = await prisma.theme.create({
     *   data: {
     *     // ... data to create a Theme
     *   }
     * })
     * 
     */
    create<T extends themeCreateArgs>(args: SelectSubset<T, themeCreateArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Themes.
     * @param {themeCreateManyArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends themeCreateManyArgs>(args?: SelectSubset<T, themeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Themes and returns the data saved in the database.
     * @param {themeCreateManyAndReturnArgs} args - Arguments to create many Themes.
     * @example
     * // Create many Themes
     * const theme = await prisma.theme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends themeCreateManyAndReturnArgs>(args?: SelectSubset<T, themeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Theme.
     * @param {themeDeleteArgs} args - Arguments to delete one Theme.
     * @example
     * // Delete one Theme
     * const Theme = await prisma.theme.delete({
     *   where: {
     *     // ... filter to delete one Theme
     *   }
     * })
     * 
     */
    delete<T extends themeDeleteArgs>(args: SelectSubset<T, themeDeleteArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Theme.
     * @param {themeUpdateArgs} args - Arguments to update one Theme.
     * @example
     * // Update one Theme
     * const theme = await prisma.theme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends themeUpdateArgs>(args: SelectSubset<T, themeUpdateArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Themes.
     * @param {themeDeleteManyArgs} args - Arguments to filter Themes to delete.
     * @example
     * // Delete a few Themes
     * const { count } = await prisma.theme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends themeDeleteManyArgs>(args?: SelectSubset<T, themeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends themeUpdateManyArgs>(args: SelectSubset<T, themeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Themes and returns the data updated in the database.
     * @param {themeUpdateManyAndReturnArgs} args - Arguments to update many Themes.
     * @example
     * // Update many Themes
     * const theme = await prisma.theme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Themes and only return the `id`
     * const themeWithIdOnly = await prisma.theme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends themeUpdateManyAndReturnArgs>(args: SelectSubset<T, themeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Theme.
     * @param {themeUpsertArgs} args - Arguments to update or create a Theme.
     * @example
     * // Update or create a Theme
     * const theme = await prisma.theme.upsert({
     *   create: {
     *     // ... data to create a Theme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Theme we want to update
     *   }
     * })
     */
    upsert<T extends themeUpsertArgs>(args: SelectSubset<T, themeUpsertArgs<ExtArgs>>): Prisma__themeClient<$Result.GetResult<Prisma.$themePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Themes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeCountArgs} args - Arguments to filter Themes to count.
     * @example
     * // Count the number of Themes
     * const count = await prisma.theme.count({
     *   where: {
     *     // ... the filter for the Themes we want to count
     *   }
     * })
    **/
    count<T extends themeCountArgs>(
      args?: Subset<T, themeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ThemeAggregateArgs>(args: Subset<T, ThemeAggregateArgs>): Prisma.PrismaPromise<GetThemeAggregateType<T>>

    /**
     * Group by Theme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {themeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends themeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: themeGroupByArgs['orderBy'] }
        : { orderBy?: themeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, themeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the theme model
   */
  readonly fields: themeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for theme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__themeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article_theme<T extends theme$article_themeArgs<ExtArgs> = {}>(args?: Subset<T, theme$article_themeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$article_themePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorie_theme<T extends theme$categorie_themeArgs<ExtArgs> = {}>(args?: Subset<T, theme$categorie_themeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categorie_themePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the theme model
   */
  interface themeFieldRefs {
    readonly id: FieldRef<"theme", 'Int'>
    readonly libelle_theme: FieldRef<"theme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * theme findUnique
   */
  export type themeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which theme to fetch.
     */
    where: themeWhereUniqueInput
  }

  /**
   * theme findUniqueOrThrow
   */
  export type themeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which theme to fetch.
     */
    where: themeWhereUniqueInput
  }

  /**
   * theme findFirst
   */
  export type themeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which theme to fetch.
     */
    where?: themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themeOrderByWithRelationInput | themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for themes.
     */
    cursor?: themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * theme findFirstOrThrow
   */
  export type themeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which theme to fetch.
     */
    where?: themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themeOrderByWithRelationInput | themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for themes.
     */
    cursor?: themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of themes.
     */
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * theme findMany
   */
  export type themeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter, which themes to fetch.
     */
    where?: themeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of themes to fetch.
     */
    orderBy?: themeOrderByWithRelationInput | themeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing themes.
     */
    cursor?: themeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` themes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` themes.
     */
    skip?: number
    distinct?: ThemeScalarFieldEnum | ThemeScalarFieldEnum[]
  }

  /**
   * theme create
   */
  export type themeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * The data needed to create a theme.
     */
    data?: XOR<themeCreateInput, themeUncheckedCreateInput>
  }

  /**
   * theme createMany
   */
  export type themeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many themes.
     */
    data: themeCreateManyInput | themeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * theme createManyAndReturn
   */
  export type themeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * The data used to create many themes.
     */
    data: themeCreateManyInput | themeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * theme update
   */
  export type themeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * The data needed to update a theme.
     */
    data: XOR<themeUpdateInput, themeUncheckedUpdateInput>
    /**
     * Choose, which theme to update.
     */
    where: themeWhereUniqueInput
  }

  /**
   * theme updateMany
   */
  export type themeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update themes.
     */
    data: XOR<themeUpdateManyMutationInput, themeUncheckedUpdateManyInput>
    /**
     * Filter which themes to update
     */
    where?: themeWhereInput
    /**
     * Limit how many themes to update.
     */
    limit?: number
  }

  /**
   * theme updateManyAndReturn
   */
  export type themeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * The data used to update themes.
     */
    data: XOR<themeUpdateManyMutationInput, themeUncheckedUpdateManyInput>
    /**
     * Filter which themes to update
     */
    where?: themeWhereInput
    /**
     * Limit how many themes to update.
     */
    limit?: number
  }

  /**
   * theme upsert
   */
  export type themeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * The filter to search for the theme to update in case it exists.
     */
    where: themeWhereUniqueInput
    /**
     * In case the theme found by the `where` argument doesn't exist, create a new theme with this data.
     */
    create: XOR<themeCreateInput, themeUncheckedCreateInput>
    /**
     * In case the theme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<themeUpdateInput, themeUncheckedUpdateInput>
  }

  /**
   * theme delete
   */
  export type themeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
    /**
     * Filter which theme to delete.
     */
    where: themeWhereUniqueInput
  }

  /**
   * theme deleteMany
   */
  export type themeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which themes to delete
     */
    where?: themeWhereInput
    /**
     * Limit how many themes to delete.
     */
    limit?: number
  }

  /**
   * theme.article_theme
   */
  export type theme$article_themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article_theme
     */
    select?: article_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article_theme
     */
    omit?: article_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: article_themeInclude<ExtArgs> | null
    where?: article_themeWhereInput
    orderBy?: article_themeOrderByWithRelationInput | article_themeOrderByWithRelationInput[]
    cursor?: article_themeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Article_themeScalarFieldEnum | Article_themeScalarFieldEnum[]
  }

  /**
   * theme.categorie_theme
   */
  export type theme$categorie_themeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie_theme
     */
    select?: categorie_themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorie_theme
     */
    omit?: categorie_themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorie_themeInclude<ExtArgs> | null
    where?: categorie_themeWhereInput
    orderBy?: categorie_themeOrderByWithRelationInput | categorie_themeOrderByWithRelationInput[]
    cursor?: categorie_themeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Categorie_themeScalarFieldEnum | Categorie_themeScalarFieldEnum[]
  }

  /**
   * theme without action
   */
  export type themeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the theme
     */
    select?: themeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the theme
     */
    omit?: themeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: themeInclude<ExtArgs> | null
  }


  /**
   * Model type_utilisateur
   */

  export type AggregateType_utilisateur = {
    _count: Type_utilisateurCountAggregateOutputType | null
    _avg: Type_utilisateurAvgAggregateOutputType | null
    _sum: Type_utilisateurSumAggregateOutputType | null
    _min: Type_utilisateurMinAggregateOutputType | null
    _max: Type_utilisateurMaxAggregateOutputType | null
  }

  export type Type_utilisateurAvgAggregateOutputType = {
    id: number | null
  }

  export type Type_utilisateurSumAggregateOutputType = {
    id: number | null
  }

  export type Type_utilisateurMinAggregateOutputType = {
    id: number | null
    nom_type_utilisateur: string | null
  }

  export type Type_utilisateurMaxAggregateOutputType = {
    id: number | null
    nom_type_utilisateur: string | null
  }

  export type Type_utilisateurCountAggregateOutputType = {
    id: number
    nom_type_utilisateur: number
    _all: number
  }


  export type Type_utilisateurAvgAggregateInputType = {
    id?: true
  }

  export type Type_utilisateurSumAggregateInputType = {
    id?: true
  }

  export type Type_utilisateurMinAggregateInputType = {
    id?: true
    nom_type_utilisateur?: true
  }

  export type Type_utilisateurMaxAggregateInputType = {
    id?: true
    nom_type_utilisateur?: true
  }

  export type Type_utilisateurCountAggregateInputType = {
    id?: true
    nom_type_utilisateur?: true
    _all?: true
  }

  export type Type_utilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_utilisateur to aggregate.
     */
    where?: type_utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_utilisateurs to fetch.
     */
    orderBy?: type_utilisateurOrderByWithRelationInput | type_utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: type_utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned type_utilisateurs
    **/
    _count?: true | Type_utilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Type_utilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Type_utilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Type_utilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Type_utilisateurMaxAggregateInputType
  }

  export type GetType_utilisateurAggregateType<T extends Type_utilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateType_utilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType_utilisateur[P]>
      : GetScalarType<T[P], AggregateType_utilisateur[P]>
  }




  export type type_utilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: type_utilisateurWhereInput
    orderBy?: type_utilisateurOrderByWithAggregationInput | type_utilisateurOrderByWithAggregationInput[]
    by: Type_utilisateurScalarFieldEnum[] | Type_utilisateurScalarFieldEnum
    having?: type_utilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Type_utilisateurCountAggregateInputType | true
    _avg?: Type_utilisateurAvgAggregateInputType
    _sum?: Type_utilisateurSumAggregateInputType
    _min?: Type_utilisateurMinAggregateInputType
    _max?: Type_utilisateurMaxAggregateInputType
  }

  export type Type_utilisateurGroupByOutputType = {
    id: number
    nom_type_utilisateur: string
    _count: Type_utilisateurCountAggregateOutputType | null
    _avg: Type_utilisateurAvgAggregateOutputType | null
    _sum: Type_utilisateurSumAggregateOutputType | null
    _min: Type_utilisateurMinAggregateOutputType | null
    _max: Type_utilisateurMaxAggregateOutputType | null
  }

  type GetType_utilisateurGroupByPayload<T extends type_utilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Type_utilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Type_utilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Type_utilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], Type_utilisateurGroupByOutputType[P]>
        }
      >
    >


  export type type_utilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_type_utilisateur?: boolean
    utilisateur?: boolean | type_utilisateur$utilisateurArgs<ExtArgs>
    _count?: boolean | Type_utilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type_utilisateur"]>

  export type type_utilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_type_utilisateur?: boolean
  }, ExtArgs["result"]["type_utilisateur"]>

  export type type_utilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_type_utilisateur?: boolean
  }, ExtArgs["result"]["type_utilisateur"]>

  export type type_utilisateurSelectScalar = {
    id?: boolean
    nom_type_utilisateur?: boolean
  }

  export type type_utilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom_type_utilisateur", ExtArgs["result"]["type_utilisateur"]>
  export type type_utilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | type_utilisateur$utilisateurArgs<ExtArgs>
    _count?: boolean | Type_utilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type type_utilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type type_utilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $type_utilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "type_utilisateur"
    objects: {
      utilisateur: Prisma.$utilisateurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom_type_utilisateur: string
    }, ExtArgs["result"]["type_utilisateur"]>
    composites: {}
  }

  type type_utilisateurGetPayload<S extends boolean | null | undefined | type_utilisateurDefaultArgs> = $Result.GetResult<Prisma.$type_utilisateurPayload, S>

  type type_utilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<type_utilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Type_utilisateurCountAggregateInputType | true
    }

  export interface type_utilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['type_utilisateur'], meta: { name: 'type_utilisateur' } }
    /**
     * Find zero or one Type_utilisateur that matches the filter.
     * @param {type_utilisateurFindUniqueArgs} args - Arguments to find a Type_utilisateur
     * @example
     * // Get one Type_utilisateur
     * const type_utilisateur = await prisma.type_utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends type_utilisateurFindUniqueArgs>(args: SelectSubset<T, type_utilisateurFindUniqueArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type_utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {type_utilisateurFindUniqueOrThrowArgs} args - Arguments to find a Type_utilisateur
     * @example
     * // Get one Type_utilisateur
     * const type_utilisateur = await prisma.type_utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends type_utilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, type_utilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_utilisateurFindFirstArgs} args - Arguments to find a Type_utilisateur
     * @example
     * // Get one Type_utilisateur
     * const type_utilisateur = await prisma.type_utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends type_utilisateurFindFirstArgs>(args?: SelectSubset<T, type_utilisateurFindFirstArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_utilisateurFindFirstOrThrowArgs} args - Arguments to find a Type_utilisateur
     * @example
     * // Get one Type_utilisateur
     * const type_utilisateur = await prisma.type_utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends type_utilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, type_utilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Type_utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_utilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Type_utilisateurs
     * const type_utilisateurs = await prisma.type_utilisateur.findMany()
     * 
     * // Get first 10 Type_utilisateurs
     * const type_utilisateurs = await prisma.type_utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const type_utilisateurWithIdOnly = await prisma.type_utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends type_utilisateurFindManyArgs>(args?: SelectSubset<T, type_utilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type_utilisateur.
     * @param {type_utilisateurCreateArgs} args - Arguments to create a Type_utilisateur.
     * @example
     * // Create one Type_utilisateur
     * const Type_utilisateur = await prisma.type_utilisateur.create({
     *   data: {
     *     // ... data to create a Type_utilisateur
     *   }
     * })
     * 
     */
    create<T extends type_utilisateurCreateArgs>(args: SelectSubset<T, type_utilisateurCreateArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Type_utilisateurs.
     * @param {type_utilisateurCreateManyArgs} args - Arguments to create many Type_utilisateurs.
     * @example
     * // Create many Type_utilisateurs
     * const type_utilisateur = await prisma.type_utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends type_utilisateurCreateManyArgs>(args?: SelectSubset<T, type_utilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Type_utilisateurs and returns the data saved in the database.
     * @param {type_utilisateurCreateManyAndReturnArgs} args - Arguments to create many Type_utilisateurs.
     * @example
     * // Create many Type_utilisateurs
     * const type_utilisateur = await prisma.type_utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Type_utilisateurs and only return the `id`
     * const type_utilisateurWithIdOnly = await prisma.type_utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends type_utilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, type_utilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type_utilisateur.
     * @param {type_utilisateurDeleteArgs} args - Arguments to delete one Type_utilisateur.
     * @example
     * // Delete one Type_utilisateur
     * const Type_utilisateur = await prisma.type_utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Type_utilisateur
     *   }
     * })
     * 
     */
    delete<T extends type_utilisateurDeleteArgs>(args: SelectSubset<T, type_utilisateurDeleteArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type_utilisateur.
     * @param {type_utilisateurUpdateArgs} args - Arguments to update one Type_utilisateur.
     * @example
     * // Update one Type_utilisateur
     * const type_utilisateur = await prisma.type_utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends type_utilisateurUpdateArgs>(args: SelectSubset<T, type_utilisateurUpdateArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Type_utilisateurs.
     * @param {type_utilisateurDeleteManyArgs} args - Arguments to filter Type_utilisateurs to delete.
     * @example
     * // Delete a few Type_utilisateurs
     * const { count } = await prisma.type_utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends type_utilisateurDeleteManyArgs>(args?: SelectSubset<T, type_utilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_utilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Type_utilisateurs
     * const type_utilisateur = await prisma.type_utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends type_utilisateurUpdateManyArgs>(args: SelectSubset<T, type_utilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_utilisateurs and returns the data updated in the database.
     * @param {type_utilisateurUpdateManyAndReturnArgs} args - Arguments to update many Type_utilisateurs.
     * @example
     * // Update many Type_utilisateurs
     * const type_utilisateur = await prisma.type_utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Type_utilisateurs and only return the `id`
     * const type_utilisateurWithIdOnly = await prisma.type_utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends type_utilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, type_utilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type_utilisateur.
     * @param {type_utilisateurUpsertArgs} args - Arguments to update or create a Type_utilisateur.
     * @example
     * // Update or create a Type_utilisateur
     * const type_utilisateur = await prisma.type_utilisateur.upsert({
     *   create: {
     *     // ... data to create a Type_utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type_utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends type_utilisateurUpsertArgs>(args: SelectSubset<T, type_utilisateurUpsertArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Type_utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_utilisateurCountArgs} args - Arguments to filter Type_utilisateurs to count.
     * @example
     * // Count the number of Type_utilisateurs
     * const count = await prisma.type_utilisateur.count({
     *   where: {
     *     // ... the filter for the Type_utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends type_utilisateurCountArgs>(
      args?: Subset<T, type_utilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Type_utilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type_utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_utilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Type_utilisateurAggregateArgs>(args: Subset<T, Type_utilisateurAggregateArgs>): Prisma.PrismaPromise<GetType_utilisateurAggregateType<T>>

    /**
     * Group by Type_utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_utilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends type_utilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: type_utilisateurGroupByArgs['orderBy'] }
        : { orderBy?: type_utilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, type_utilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetType_utilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the type_utilisateur model
   */
  readonly fields: type_utilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for type_utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__type_utilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends type_utilisateur$utilisateurArgs<ExtArgs> = {}>(args?: Subset<T, type_utilisateur$utilisateurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the type_utilisateur model
   */
  interface type_utilisateurFieldRefs {
    readonly id: FieldRef<"type_utilisateur", 'Int'>
    readonly nom_type_utilisateur: FieldRef<"type_utilisateur", 'String'>
  }
    

  // Custom InputTypes
  /**
   * type_utilisateur findUnique
   */
  export type type_utilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which type_utilisateur to fetch.
     */
    where: type_utilisateurWhereUniqueInput
  }

  /**
   * type_utilisateur findUniqueOrThrow
   */
  export type type_utilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which type_utilisateur to fetch.
     */
    where: type_utilisateurWhereUniqueInput
  }

  /**
   * type_utilisateur findFirst
   */
  export type type_utilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which type_utilisateur to fetch.
     */
    where?: type_utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_utilisateurs to fetch.
     */
    orderBy?: type_utilisateurOrderByWithRelationInput | type_utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_utilisateurs.
     */
    cursor?: type_utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_utilisateurs.
     */
    distinct?: Type_utilisateurScalarFieldEnum | Type_utilisateurScalarFieldEnum[]
  }

  /**
   * type_utilisateur findFirstOrThrow
   */
  export type type_utilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which type_utilisateur to fetch.
     */
    where?: type_utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_utilisateurs to fetch.
     */
    orderBy?: type_utilisateurOrderByWithRelationInput | type_utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_utilisateurs.
     */
    cursor?: type_utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_utilisateurs.
     */
    distinct?: Type_utilisateurScalarFieldEnum | Type_utilisateurScalarFieldEnum[]
  }

  /**
   * type_utilisateur findMany
   */
  export type type_utilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which type_utilisateurs to fetch.
     */
    where?: type_utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_utilisateurs to fetch.
     */
    orderBy?: type_utilisateurOrderByWithRelationInput | type_utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing type_utilisateurs.
     */
    cursor?: type_utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_utilisateurs.
     */
    skip?: number
    distinct?: Type_utilisateurScalarFieldEnum | Type_utilisateurScalarFieldEnum[]
  }

  /**
   * type_utilisateur create
   */
  export type type_utilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a type_utilisateur.
     */
    data: XOR<type_utilisateurCreateInput, type_utilisateurUncheckedCreateInput>
  }

  /**
   * type_utilisateur createMany
   */
  export type type_utilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many type_utilisateurs.
     */
    data: type_utilisateurCreateManyInput | type_utilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_utilisateur createManyAndReturn
   */
  export type type_utilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many type_utilisateurs.
     */
    data: type_utilisateurCreateManyInput | type_utilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_utilisateur update
   */
  export type type_utilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a type_utilisateur.
     */
    data: XOR<type_utilisateurUpdateInput, type_utilisateurUncheckedUpdateInput>
    /**
     * Choose, which type_utilisateur to update.
     */
    where: type_utilisateurWhereUniqueInput
  }

  /**
   * type_utilisateur updateMany
   */
  export type type_utilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update type_utilisateurs.
     */
    data: XOR<type_utilisateurUpdateManyMutationInput, type_utilisateurUncheckedUpdateManyInput>
    /**
     * Filter which type_utilisateurs to update
     */
    where?: type_utilisateurWhereInput
    /**
     * Limit how many type_utilisateurs to update.
     */
    limit?: number
  }

  /**
   * type_utilisateur updateManyAndReturn
   */
  export type type_utilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * The data used to update type_utilisateurs.
     */
    data: XOR<type_utilisateurUpdateManyMutationInput, type_utilisateurUncheckedUpdateManyInput>
    /**
     * Filter which type_utilisateurs to update
     */
    where?: type_utilisateurWhereInput
    /**
     * Limit how many type_utilisateurs to update.
     */
    limit?: number
  }

  /**
   * type_utilisateur upsert
   */
  export type type_utilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the type_utilisateur to update in case it exists.
     */
    where: type_utilisateurWhereUniqueInput
    /**
     * In case the type_utilisateur found by the `where` argument doesn't exist, create a new type_utilisateur with this data.
     */
    create: XOR<type_utilisateurCreateInput, type_utilisateurUncheckedCreateInput>
    /**
     * In case the type_utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<type_utilisateurUpdateInput, type_utilisateurUncheckedUpdateInput>
  }

  /**
   * type_utilisateur delete
   */
  export type type_utilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
    /**
     * Filter which type_utilisateur to delete.
     */
    where: type_utilisateurWhereUniqueInput
  }

  /**
   * type_utilisateur deleteMany
   */
  export type type_utilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_utilisateurs to delete
     */
    where?: type_utilisateurWhereInput
    /**
     * Limit how many type_utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * type_utilisateur.utilisateur
   */
  export type type_utilisateur$utilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    where?: utilisateurWhereInput
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    cursor?: utilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * type_utilisateur without action
   */
  export type type_utilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_utilisateur
     */
    select?: type_utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_utilisateur
     */
    omit?: type_utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: type_utilisateurInclude<ExtArgs> | null
  }


  /**
   * Model utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
    type_utilisateur_id: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
    type_utilisateur_id: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    type_utilisateur_id: number | null
    email: string | null
    nom: string | null
    prenom: string | null
    password: string | null
    adresse: string | null
    code_postal: string | null
    ville: string | null
    telephone: string | null
    role: $Enums.Role | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    type_utilisateur_id: number | null
    email: string | null
    nom: string | null
    prenom: string | null
    password: string | null
    adresse: string | null
    code_postal: string | null
    ville: string | null
    telephone: string | null
    role: $Enums.Role | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    type_utilisateur_id: number
    email: number
    nom: number
    prenom: number
    password: number
    adresse: number
    code_postal: number
    ville: number
    telephone: number
    role: number
    passwordResetToken: number
    passwordResetExpires: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
    type_utilisateur_id?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
    type_utilisateur_id?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    type_utilisateur_id?: true
    email?: true
    nom?: true
    prenom?: true
    password?: true
    adresse?: true
    code_postal?: true
    ville?: true
    telephone?: true
    role?: true
    passwordResetToken?: true
    passwordResetExpires?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    type_utilisateur_id?: true
    email?: true
    nom?: true
    prenom?: true
    password?: true
    adresse?: true
    code_postal?: true
    ville?: true
    telephone?: true
    role?: true
    passwordResetToken?: true
    passwordResetExpires?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    type_utilisateur_id?: true
    email?: true
    nom?: true
    prenom?: true
    password?: true
    adresse?: true
    code_postal?: true
    ville?: true
    telephone?: true
    role?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateur to aggregate.
     */
    where?: utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type utilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: utilisateurWhereInput
    orderBy?: utilisateurOrderByWithAggregationInput | utilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: utilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    type_utilisateur_id: number
    email: string
    nom: string | null
    prenom: string | null
    password: string | null
    adresse: string | null
    code_postal: string | null
    ville: string | null
    telephone: string | null
    role: $Enums.Role | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends utilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type utilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_utilisateur_id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    password?: boolean
    adresse?: boolean
    code_postal?: boolean
    ville?: boolean
    telephone?: boolean
    role?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    article?: boolean | utilisateur$articleArgs<ExtArgs>
    favoris?: boolean | utilisateur$favorisArgs<ExtArgs>
    type_utilisateur?: boolean | type_utilisateurDefaultArgs<ExtArgs>
    conversations?: boolean | utilisateur$conversationsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type utilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_utilisateur_id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    password?: boolean
    adresse?: boolean
    code_postal?: boolean
    ville?: boolean
    telephone?: boolean
    role?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    type_utilisateur?: boolean | type_utilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type utilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type_utilisateur_id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    password?: boolean
    adresse?: boolean
    code_postal?: boolean
    ville?: boolean
    telephone?: boolean
    role?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    type_utilisateur?: boolean | type_utilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type utilisateurSelectScalar = {
    id?: boolean
    type_utilisateur_id?: boolean
    email?: boolean
    nom?: boolean
    prenom?: boolean
    password?: boolean
    adresse?: boolean
    code_postal?: boolean
    ville?: boolean
    telephone?: boolean
    role?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
  }

  export type utilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type_utilisateur_id" | "email" | "nom" | "prenom" | "password" | "adresse" | "code_postal" | "ville" | "telephone" | "role" | "passwordResetToken" | "passwordResetExpires", ExtArgs["result"]["utilisateur"]>
  export type utilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | utilisateur$articleArgs<ExtArgs>
    favoris?: boolean | utilisateur$favorisArgs<ExtArgs>
    type_utilisateur?: boolean | type_utilisateurDefaultArgs<ExtArgs>
    conversations?: boolean | utilisateur$conversationsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type utilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type_utilisateur?: boolean | type_utilisateurDefaultArgs<ExtArgs>
  }
  export type utilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type_utilisateur?: boolean | type_utilisateurDefaultArgs<ExtArgs>
  }

  export type $utilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "utilisateur"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>[]
      favoris: Prisma.$favorisPayload<ExtArgs>[]
      type_utilisateur: Prisma.$type_utilisateurPayload<ExtArgs>
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type_utilisateur_id: number
      email: string
      nom: string | null
      prenom: string | null
      password: string | null
      adresse: string | null
      code_postal: string | null
      ville: string | null
      telephone: string | null
      role: $Enums.Role | null
      passwordResetToken: string | null
      passwordResetExpires: Date | null
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type utilisateurGetPayload<S extends boolean | null | undefined | utilisateurDefaultArgs> = $Result.GetResult<Prisma.$utilisateurPayload, S>

  type utilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<utilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface utilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['utilisateur'], meta: { name: 'utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {utilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends utilisateurFindUniqueArgs>(args: SelectSubset<T, utilisateurFindUniqueArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {utilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends utilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, utilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends utilisateurFindFirstArgs>(args?: SelectSubset<T, utilisateurFindFirstArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends utilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, utilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends utilisateurFindManyArgs>(args?: SelectSubset<T, utilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {utilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends utilisateurCreateArgs>(args: SelectSubset<T, utilisateurCreateArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {utilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends utilisateurCreateManyArgs>(args?: SelectSubset<T, utilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {utilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends utilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, utilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {utilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends utilisateurDeleteArgs>(args: SelectSubset<T, utilisateurDeleteArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {utilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends utilisateurUpdateArgs>(args: SelectSubset<T, utilisateurUpdateArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {utilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends utilisateurDeleteManyArgs>(args?: SelectSubset<T, utilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends utilisateurUpdateManyArgs>(args: SelectSubset<T, utilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {utilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends utilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, utilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {utilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends utilisateurUpsertArgs>(args: SelectSubset<T, utilisateurUpsertArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends utilisateurCountArgs>(
      args?: Subset<T, utilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {utilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends utilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: utilisateurGroupByArgs['orderBy'] }
        : { orderBy?: utilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, utilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the utilisateur model
   */
  readonly fields: utilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__utilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends utilisateur$articleArgs<ExtArgs> = {}>(args?: Subset<T, utilisateur$articleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoris<T extends utilisateur$favorisArgs<ExtArgs> = {}>(args?: Subset<T, utilisateur$favorisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favorisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    type_utilisateur<T extends type_utilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, type_utilisateurDefaultArgs<ExtArgs>>): Prisma__type_utilisateurClient<$Result.GetResult<Prisma.$type_utilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conversations<T extends utilisateur$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, utilisateur$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the utilisateur model
   */
  interface utilisateurFieldRefs {
    readonly id: FieldRef<"utilisateur", 'Int'>
    readonly type_utilisateur_id: FieldRef<"utilisateur", 'Int'>
    readonly email: FieldRef<"utilisateur", 'String'>
    readonly nom: FieldRef<"utilisateur", 'String'>
    readonly prenom: FieldRef<"utilisateur", 'String'>
    readonly password: FieldRef<"utilisateur", 'String'>
    readonly adresse: FieldRef<"utilisateur", 'String'>
    readonly code_postal: FieldRef<"utilisateur", 'String'>
    readonly ville: FieldRef<"utilisateur", 'String'>
    readonly telephone: FieldRef<"utilisateur", 'String'>
    readonly role: FieldRef<"utilisateur", 'Role'>
    readonly passwordResetToken: FieldRef<"utilisateur", 'String'>
    readonly passwordResetExpires: FieldRef<"utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * utilisateur findUnique
   */
  export type utilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur to fetch.
     */
    where: utilisateurWhereUniqueInput
  }

  /**
   * utilisateur findUniqueOrThrow
   */
  export type utilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur to fetch.
     */
    where: utilisateurWhereUniqueInput
  }

  /**
   * utilisateur findFirst
   */
  export type utilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur to fetch.
     */
    where?: utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateurs.
     */
    cursor?: utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * utilisateur findFirstOrThrow
   */
  export type utilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which utilisateur to fetch.
     */
    where?: utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for utilisateurs.
     */
    cursor?: utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * utilisateur findMany
   */
  export type utilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * Filter, which utilisateurs to fetch.
     */
    where?: utilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of utilisateurs to fetch.
     */
    orderBy?: utilisateurOrderByWithRelationInput | utilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing utilisateurs.
     */
    cursor?: utilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * utilisateur create
   */
  export type utilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a utilisateur.
     */
    data: XOR<utilisateurCreateInput, utilisateurUncheckedCreateInput>
  }

  /**
   * utilisateur createMany
   */
  export type utilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many utilisateurs.
     */
    data: utilisateurCreateManyInput | utilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * utilisateur createManyAndReturn
   */
  export type utilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many utilisateurs.
     */
    data: utilisateurCreateManyInput | utilisateurCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * utilisateur update
   */
  export type utilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a utilisateur.
     */
    data: XOR<utilisateurUpdateInput, utilisateurUncheckedUpdateInput>
    /**
     * Choose, which utilisateur to update.
     */
    where: utilisateurWhereUniqueInput
  }

  /**
   * utilisateur updateMany
   */
  export type utilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update utilisateurs.
     */
    data: XOR<utilisateurUpdateManyMutationInput, utilisateurUncheckedUpdateManyInput>
    /**
     * Filter which utilisateurs to update
     */
    where?: utilisateurWhereInput
    /**
     * Limit how many utilisateurs to update.
     */
    limit?: number
  }

  /**
   * utilisateur updateManyAndReturn
   */
  export type utilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * The data used to update utilisateurs.
     */
    data: XOR<utilisateurUpdateManyMutationInput, utilisateurUncheckedUpdateManyInput>
    /**
     * Filter which utilisateurs to update
     */
    where?: utilisateurWhereInput
    /**
     * Limit how many utilisateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * utilisateur upsert
   */
  export type utilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the utilisateur to update in case it exists.
     */
    where: utilisateurWhereUniqueInput
    /**
     * In case the utilisateur found by the `where` argument doesn't exist, create a new utilisateur with this data.
     */
    create: XOR<utilisateurCreateInput, utilisateurUncheckedCreateInput>
    /**
     * In case the utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<utilisateurUpdateInput, utilisateurUncheckedUpdateInput>
  }

  /**
   * utilisateur delete
   */
  export type utilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    /**
     * Filter which utilisateur to delete.
     */
    where: utilisateurWhereUniqueInput
  }

  /**
   * utilisateur deleteMany
   */
  export type utilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which utilisateurs to delete
     */
    where?: utilisateurWhereInput
    /**
     * Limit how many utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * utilisateur.article
   */
  export type utilisateur$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the article
     */
    select?: articleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the article
     */
    omit?: articleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articleInclude<ExtArgs> | null
    where?: articleWhereInput
    orderBy?: articleOrderByWithRelationInput | articleOrderByWithRelationInput[]
    cursor?: articleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * utilisateur.favoris
   */
  export type utilisateur$favorisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favoris
     */
    select?: favorisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the favoris
     */
    omit?: favorisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favorisInclude<ExtArgs> | null
    where?: favorisWhereInput
    orderBy?: favorisOrderByWithRelationInput | favorisOrderByWithRelationInput[]
    cursor?: favorisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavorisScalarFieldEnum | FavorisScalarFieldEnum[]
  }

  /**
   * utilisateur.conversations
   */
  export type utilisateur$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * utilisateur without action
   */
  export type utilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
    guestName: string | null
    guestEmail: string | null
    isClosed: boolean | null
    isReadByAdmin: boolean | null
    isReadByUser: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    articleId: number | null
    userId: number | null
    guestName: string | null
    guestEmail: string | null
    isClosed: boolean | null
    isReadByAdmin: boolean | null
    isReadByUser: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    articleId: number
    userId: number
    guestName: number
    guestEmail: number
    isClosed: number
    isReadByAdmin: number
    isReadByUser: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    guestName?: true
    guestEmail?: true
    isClosed?: true
    isReadByAdmin?: true
    isReadByUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    guestName?: true
    guestEmail?: true
    isClosed?: true
    isReadByAdmin?: true
    isReadByUser?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    articleId?: true
    userId?: true
    guestName?: true
    guestEmail?: true
    isClosed?: true
    isReadByAdmin?: true
    isReadByUser?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    articleId: number
    userId: number | null
    guestName: string | null
    guestEmail: string | null
    isClosed: boolean
    isReadByAdmin: boolean
    isReadByUser: boolean
    createdAt: Date
    updatedAt: Date
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    user?: boolean | Conversation$userArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    user?: boolean | Conversation$userArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    userId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | articleDefaultArgs<ExtArgs>
    user?: boolean | Conversation$userArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    articleId?: boolean
    userId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "userId" | "guestName" | "guestEmail" | "isClosed" | "isReadByAdmin" | "isReadByUser" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    user?: boolean | Conversation$userArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    user?: boolean | Conversation$userArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | articleDefaultArgs<ExtArgs>
    user?: boolean | Conversation$userArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      article: Prisma.$articlePayload<ExtArgs>
      user: Prisma.$utilisateurPayload<ExtArgs> | null
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      articleId: number
      userId: number | null
      guestName: string | null
      guestEmail: string | null
      isClosed: boolean
      isReadByAdmin: boolean
      isReadByUser: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends articleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articleDefaultArgs<ExtArgs>>): Prisma__articleClient<$Result.GetResult<Prisma.$articlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Conversation$userArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$userArgs<ExtArgs>>): Prisma__utilisateurClient<$Result.GetResult<Prisma.$utilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'Int'>
    readonly articleId: FieldRef<"Conversation", 'Int'>
    readonly userId: FieldRef<"Conversation", 'Int'>
    readonly guestName: FieldRef<"Conversation", 'String'>
    readonly guestEmail: FieldRef<"Conversation", 'String'>
    readonly isClosed: FieldRef<"Conversation", 'Boolean'>
    readonly isReadByAdmin: FieldRef<"Conversation", 'Boolean'>
    readonly isReadByUser: FieldRef<"Conversation", 'Boolean'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.user
   */
  export type Conversation$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the utilisateur
     */
    select?: utilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the utilisateur
     */
    omit?: utilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: utilisateurInclude<ExtArgs> | null
    where?: utilisateurWhereInput
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    conversationId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    conversationId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    conversationId: number | null
    senderIsAdmin: boolean | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    conversationId: number | null
    senderIsAdmin: boolean | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    senderIsAdmin: number
    content: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    conversationId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    senderIsAdmin?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    senderIsAdmin?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    senderIsAdmin?: true
    content?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    conversationId: number
    senderIsAdmin: boolean
    content: string
    isRead: boolean
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderIsAdmin?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderIsAdmin?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderIsAdmin?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    senderIsAdmin?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "senderIsAdmin" | "content" | "isRead" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversationId: number
      senderIsAdmin: boolean
      content: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly conversationId: FieldRef<"Message", 'Int'>
    readonly senderIsAdmin: FieldRef<"Message", 'Boolean'>
    readonly content: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArchivageScalarFieldEnum: {
    id: 'id',
    nom_archivage: 'nom_archivage'
  };

  export type ArchivageScalarFieldEnum = (typeof ArchivageScalarFieldEnum)[keyof typeof ArchivageScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    archivage_id: 'archivage_id',
    categorie_id: 'categorie_id',
    nom_auteur: 'nom_auteur',
    prenom_auteur: 'prenom_auteur',
    titre: 'titre',
    illustrations: 'illustrations',
    editeur: 'editeur',
    date_impression: 'date_impression',
    nombre_pages: 'nombre_pages',
    description: 'description',
    prix_achat: 'prix_achat',
    valeur_marche_min: 'valeur_marche_min',
    prix_vente_internet: 'prix_vente_internet',
    quantite_volume: 'quantite_volume',
    poids_net_kg: 'poids_net_kg',
    frais_postaux: 'frais_postaux',
    date_creation: 'date_creation',
    date_vente: 'date_vente',
    nom_complet: 'nom_complet',
    pseudo_titre: 'pseudo_titre',
    collection: 'collection',
    justification: 'justification',
    date_EO: 'date_EO',
    estimation: 'estimation',
    prix_reserve: 'prix_reserve',
    disponible: 'disponible',
    envoi_possible: 'envoi_possible',
    edition_papier_id: 'edition_papier_id',
    id_utilisateur: 'id_utilisateur'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const Article_themeScalarFieldEnum: {
    article_id: 'article_id',
    theme_id: 'theme_id'
  };

  export type Article_themeScalarFieldEnum = (typeof Article_themeScalarFieldEnum)[keyof typeof Article_themeScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    nom_categorie: 'nom_categorie',
    image_url: 'image_url',
    image_entete_url: 'image_entete_url',
    description: 'description'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const Categorie_themeScalarFieldEnum: {
    categorie_id: 'categorie_id',
    theme_id: 'theme_id'
  };

  export type Categorie_themeScalarFieldEnum = (typeof Categorie_themeScalarFieldEnum)[keyof typeof Categorie_themeScalarFieldEnum]


  export const Edition_papierScalarFieldEnum: {
    id: 'id',
    libelle_edition_papier: 'libelle_edition_papier'
  };

  export type Edition_papierScalarFieldEnum = (typeof Edition_papierScalarFieldEnum)[keyof typeof Edition_papierScalarFieldEnum]


  export const FavorisScalarFieldEnum: {
    utilisateur_id: 'utilisateur_id',
    article_id: 'article_id'
  };

  export type FavorisScalarFieldEnum = (typeof FavorisScalarFieldEnum)[keyof typeof FavorisScalarFieldEnum]


  export const PhotosScalarFieldEnum: {
    id: 'id',
    article_id: 'article_id',
    libelle_photo: 'libelle_photo',
    url_photo: 'url_photo',
    a_la_une: 'a_la_une'
  };

  export type PhotosScalarFieldEnum = (typeof PhotosScalarFieldEnum)[keyof typeof PhotosScalarFieldEnum]


  export const ThemeScalarFieldEnum: {
    id: 'id',
    libelle_theme: 'libelle_theme'
  };

  export type ThemeScalarFieldEnum = (typeof ThemeScalarFieldEnum)[keyof typeof ThemeScalarFieldEnum]


  export const Type_utilisateurScalarFieldEnum: {
    id: 'id',
    nom_type_utilisateur: 'nom_type_utilisateur'
  };

  export type Type_utilisateurScalarFieldEnum = (typeof Type_utilisateurScalarFieldEnum)[keyof typeof Type_utilisateurScalarFieldEnum]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    type_utilisateur_id: 'type_utilisateur_id',
    email: 'email',
    nom: 'nom',
    prenom: 'prenom',
    password: 'password',
    adresse: 'adresse',
    code_postal: 'code_postal',
    ville: 'ville',
    telephone: 'telephone',
    role: 'role',
    passwordResetToken: 'passwordResetToken',
    passwordResetExpires: 'passwordResetExpires'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    userId: 'userId',
    guestName: 'guestName',
    guestEmail: 'guestEmail',
    isClosed: 'isClosed',
    isReadByAdmin: 'isReadByAdmin',
    isReadByUser: 'isReadByUser',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    senderIsAdmin: 'senderIsAdmin',
    content: 'content',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Choix'
   */
  export type EnumChoixFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Choix'>
    


  /**
   * Reference to a field of type 'Choix[]'
   */
  export type ListEnumChoixFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Choix[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type archivageWhereInput = {
    AND?: archivageWhereInput | archivageWhereInput[]
    OR?: archivageWhereInput[]
    NOT?: archivageWhereInput | archivageWhereInput[]
    id?: IntFilter<"archivage"> | number
    nom_archivage?: StringNullableFilter<"archivage"> | string | null
    article?: ArticleListRelationFilter
  }

  export type archivageOrderByWithRelationInput = {
    id?: SortOrder
    nom_archivage?: SortOrderInput | SortOrder
    article?: articleOrderByRelationAggregateInput
  }

  export type archivageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: archivageWhereInput | archivageWhereInput[]
    OR?: archivageWhereInput[]
    NOT?: archivageWhereInput | archivageWhereInput[]
    nom_archivage?: StringNullableFilter<"archivage"> | string | null
    article?: ArticleListRelationFilter
  }, "id" | "id">

  export type archivageOrderByWithAggregationInput = {
    id?: SortOrder
    nom_archivage?: SortOrderInput | SortOrder
    _count?: archivageCountOrderByAggregateInput
    _avg?: archivageAvgOrderByAggregateInput
    _max?: archivageMaxOrderByAggregateInput
    _min?: archivageMinOrderByAggregateInput
    _sum?: archivageSumOrderByAggregateInput
  }

  export type archivageScalarWhereWithAggregatesInput = {
    AND?: archivageScalarWhereWithAggregatesInput | archivageScalarWhereWithAggregatesInput[]
    OR?: archivageScalarWhereWithAggregatesInput[]
    NOT?: archivageScalarWhereWithAggregatesInput | archivageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"archivage"> | number
    nom_archivage?: StringNullableWithAggregatesFilter<"archivage"> | string | null
  }

  export type articleWhereInput = {
    AND?: articleWhereInput | articleWhereInput[]
    OR?: articleWhereInput[]
    NOT?: articleWhereInput | articleWhereInput[]
    id?: IntFilter<"article"> | number
    archivage_id?: IntNullableFilter<"article"> | number | null
    categorie_id?: IntNullableFilter<"article"> | number | null
    nom_auteur?: StringNullableFilter<"article"> | string | null
    prenom_auteur?: StringNullableFilter<"article"> | string | null
    titre?: StringNullableFilter<"article"> | string | null
    illustrations?: StringNullableFilter<"article"> | string | null
    editeur?: StringNullableFilter<"article"> | string | null
    date_impression?: StringNullableFilter<"article"> | string | null
    nombre_pages?: StringNullableFilter<"article"> | string | null
    description?: StringNullableFilter<"article"> | string | null
    prix_achat?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: IntNullableFilter<"article"> | number | null
    poids_net_kg?: StringNullableFilter<"article"> | string | null
    frais_postaux?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    date_creation?: DateTimeNullableFilter<"article"> | Date | string | null
    date_vente?: DateTimeNullableFilter<"article"> | Date | string | null
    nom_complet?: StringNullableFilter<"article"> | string | null
    pseudo_titre?: StringNullableFilter<"article"> | string | null
    collection?: StringNullableFilter<"article"> | string | null
    justification?: StringNullableFilter<"article"> | string | null
    date_EO?: StringNullableFilter<"article"> | string | null
    estimation?: StringNullableFilter<"article"> | string | null
    prix_reserve?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    disponible?: EnumChoixNullableFilter<"article"> | $Enums.Choix | null
    envoi_possible?: EnumChoixNullableFilter<"article"> | $Enums.Choix | null
    edition_papier_id?: IntNullableFilter<"article"> | number | null
    id_utilisateur?: IntNullableFilter<"article"> | number | null
    archivage?: XOR<ArchivageNullableScalarRelationFilter, archivageWhereInput> | null
    categorie?: XOR<CategorieNullableScalarRelationFilter, categorieWhereInput> | null
    edition_papier?: XOR<Edition_papierNullableScalarRelationFilter, edition_papierWhereInput> | null
    utilisateur?: XOR<UtilisateurNullableScalarRelationFilter, utilisateurWhereInput> | null
    article_theme?: Article_themeListRelationFilter
    favoris?: FavorisListRelationFilter
    photos?: PhotosListRelationFilter
    conversations?: ConversationListRelationFilter
  }

  export type articleOrderByWithRelationInput = {
    id?: SortOrder
    archivage_id?: SortOrderInput | SortOrder
    categorie_id?: SortOrderInput | SortOrder
    nom_auteur?: SortOrderInput | SortOrder
    prenom_auteur?: SortOrderInput | SortOrder
    titre?: SortOrderInput | SortOrder
    illustrations?: SortOrderInput | SortOrder
    editeur?: SortOrderInput | SortOrder
    date_impression?: SortOrderInput | SortOrder
    nombre_pages?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    prix_achat?: SortOrderInput | SortOrder
    valeur_marche_min?: SortOrderInput | SortOrder
    prix_vente_internet?: SortOrderInput | SortOrder
    quantite_volume?: SortOrderInput | SortOrder
    poids_net_kg?: SortOrderInput | SortOrder
    frais_postaux?: SortOrderInput | SortOrder
    date_creation?: SortOrderInput | SortOrder
    date_vente?: SortOrderInput | SortOrder
    nom_complet?: SortOrderInput | SortOrder
    pseudo_titre?: SortOrderInput | SortOrder
    collection?: SortOrderInput | SortOrder
    justification?: SortOrderInput | SortOrder
    date_EO?: SortOrderInput | SortOrder
    estimation?: SortOrderInput | SortOrder
    prix_reserve?: SortOrderInput | SortOrder
    disponible?: SortOrderInput | SortOrder
    envoi_possible?: SortOrderInput | SortOrder
    edition_papier_id?: SortOrderInput | SortOrder
    id_utilisateur?: SortOrderInput | SortOrder
    archivage?: archivageOrderByWithRelationInput
    categorie?: categorieOrderByWithRelationInput
    edition_papier?: edition_papierOrderByWithRelationInput
    utilisateur?: utilisateurOrderByWithRelationInput
    article_theme?: article_themeOrderByRelationAggregateInput
    favoris?: favorisOrderByRelationAggregateInput
    photos?: photosOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
  }

  export type articleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articleWhereInput | articleWhereInput[]
    OR?: articleWhereInput[]
    NOT?: articleWhereInput | articleWhereInput[]
    archivage_id?: IntNullableFilter<"article"> | number | null
    categorie_id?: IntNullableFilter<"article"> | number | null
    nom_auteur?: StringNullableFilter<"article"> | string | null
    prenom_auteur?: StringNullableFilter<"article"> | string | null
    titre?: StringNullableFilter<"article"> | string | null
    illustrations?: StringNullableFilter<"article"> | string | null
    editeur?: StringNullableFilter<"article"> | string | null
    date_impression?: StringNullableFilter<"article"> | string | null
    nombre_pages?: StringNullableFilter<"article"> | string | null
    description?: StringNullableFilter<"article"> | string | null
    prix_achat?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: IntNullableFilter<"article"> | number | null
    poids_net_kg?: StringNullableFilter<"article"> | string | null
    frais_postaux?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    date_creation?: DateTimeNullableFilter<"article"> | Date | string | null
    date_vente?: DateTimeNullableFilter<"article"> | Date | string | null
    nom_complet?: StringNullableFilter<"article"> | string | null
    pseudo_titre?: StringNullableFilter<"article"> | string | null
    collection?: StringNullableFilter<"article"> | string | null
    justification?: StringNullableFilter<"article"> | string | null
    date_EO?: StringNullableFilter<"article"> | string | null
    estimation?: StringNullableFilter<"article"> | string | null
    prix_reserve?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    disponible?: EnumChoixNullableFilter<"article"> | $Enums.Choix | null
    envoi_possible?: EnumChoixNullableFilter<"article"> | $Enums.Choix | null
    edition_papier_id?: IntNullableFilter<"article"> | number | null
    id_utilisateur?: IntNullableFilter<"article"> | number | null
    archivage?: XOR<ArchivageNullableScalarRelationFilter, archivageWhereInput> | null
    categorie?: XOR<CategorieNullableScalarRelationFilter, categorieWhereInput> | null
    edition_papier?: XOR<Edition_papierNullableScalarRelationFilter, edition_papierWhereInput> | null
    utilisateur?: XOR<UtilisateurNullableScalarRelationFilter, utilisateurWhereInput> | null
    article_theme?: Article_themeListRelationFilter
    favoris?: FavorisListRelationFilter
    photos?: PhotosListRelationFilter
    conversations?: ConversationListRelationFilter
  }, "id">

  export type articleOrderByWithAggregationInput = {
    id?: SortOrder
    archivage_id?: SortOrderInput | SortOrder
    categorie_id?: SortOrderInput | SortOrder
    nom_auteur?: SortOrderInput | SortOrder
    prenom_auteur?: SortOrderInput | SortOrder
    titre?: SortOrderInput | SortOrder
    illustrations?: SortOrderInput | SortOrder
    editeur?: SortOrderInput | SortOrder
    date_impression?: SortOrderInput | SortOrder
    nombre_pages?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    prix_achat?: SortOrderInput | SortOrder
    valeur_marche_min?: SortOrderInput | SortOrder
    prix_vente_internet?: SortOrderInput | SortOrder
    quantite_volume?: SortOrderInput | SortOrder
    poids_net_kg?: SortOrderInput | SortOrder
    frais_postaux?: SortOrderInput | SortOrder
    date_creation?: SortOrderInput | SortOrder
    date_vente?: SortOrderInput | SortOrder
    nom_complet?: SortOrderInput | SortOrder
    pseudo_titre?: SortOrderInput | SortOrder
    collection?: SortOrderInput | SortOrder
    justification?: SortOrderInput | SortOrder
    date_EO?: SortOrderInput | SortOrder
    estimation?: SortOrderInput | SortOrder
    prix_reserve?: SortOrderInput | SortOrder
    disponible?: SortOrderInput | SortOrder
    envoi_possible?: SortOrderInput | SortOrder
    edition_papier_id?: SortOrderInput | SortOrder
    id_utilisateur?: SortOrderInput | SortOrder
    _count?: articleCountOrderByAggregateInput
    _avg?: articleAvgOrderByAggregateInput
    _max?: articleMaxOrderByAggregateInput
    _min?: articleMinOrderByAggregateInput
    _sum?: articleSumOrderByAggregateInput
  }

  export type articleScalarWhereWithAggregatesInput = {
    AND?: articleScalarWhereWithAggregatesInput | articleScalarWhereWithAggregatesInput[]
    OR?: articleScalarWhereWithAggregatesInput[]
    NOT?: articleScalarWhereWithAggregatesInput | articleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"article"> | number
    archivage_id?: IntNullableWithAggregatesFilter<"article"> | number | null
    categorie_id?: IntNullableWithAggregatesFilter<"article"> | number | null
    nom_auteur?: StringNullableWithAggregatesFilter<"article"> | string | null
    prenom_auteur?: StringNullableWithAggregatesFilter<"article"> | string | null
    titre?: StringNullableWithAggregatesFilter<"article"> | string | null
    illustrations?: StringNullableWithAggregatesFilter<"article"> | string | null
    editeur?: StringNullableWithAggregatesFilter<"article"> | string | null
    date_impression?: StringNullableWithAggregatesFilter<"article"> | string | null
    nombre_pages?: StringNullableWithAggregatesFilter<"article"> | string | null
    description?: StringNullableWithAggregatesFilter<"article"> | string | null
    prix_achat?: DecimalNullableWithAggregatesFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: DecimalNullableWithAggregatesFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: DecimalNullableWithAggregatesFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: IntNullableWithAggregatesFilter<"article"> | number | null
    poids_net_kg?: StringNullableWithAggregatesFilter<"article"> | string | null
    frais_postaux?: DecimalNullableWithAggregatesFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    date_creation?: DateTimeNullableWithAggregatesFilter<"article"> | Date | string | null
    date_vente?: DateTimeNullableWithAggregatesFilter<"article"> | Date | string | null
    nom_complet?: StringNullableWithAggregatesFilter<"article"> | string | null
    pseudo_titre?: StringNullableWithAggregatesFilter<"article"> | string | null
    collection?: StringNullableWithAggregatesFilter<"article"> | string | null
    justification?: StringNullableWithAggregatesFilter<"article"> | string | null
    date_EO?: StringNullableWithAggregatesFilter<"article"> | string | null
    estimation?: StringNullableWithAggregatesFilter<"article"> | string | null
    prix_reserve?: DecimalNullableWithAggregatesFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    disponible?: EnumChoixNullableWithAggregatesFilter<"article"> | $Enums.Choix | null
    envoi_possible?: EnumChoixNullableWithAggregatesFilter<"article"> | $Enums.Choix | null
    edition_papier_id?: IntNullableWithAggregatesFilter<"article"> | number | null
    id_utilisateur?: IntNullableWithAggregatesFilter<"article"> | number | null
  }

  export type article_themeWhereInput = {
    AND?: article_themeWhereInput | article_themeWhereInput[]
    OR?: article_themeWhereInput[]
    NOT?: article_themeWhereInput | article_themeWhereInput[]
    article_id?: IntFilter<"article_theme"> | number
    theme_id?: IntFilter<"article_theme"> | number
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, themeWhereInput>
  }

  export type article_themeOrderByWithRelationInput = {
    article_id?: SortOrder
    theme_id?: SortOrder
    article?: articleOrderByWithRelationInput
    theme?: themeOrderByWithRelationInput
  }

  export type article_themeWhereUniqueInput = Prisma.AtLeast<{
    article_id_theme_id?: article_themeArticle_idTheme_idCompoundUniqueInput
    AND?: article_themeWhereInput | article_themeWhereInput[]
    OR?: article_themeWhereInput[]
    NOT?: article_themeWhereInput | article_themeWhereInput[]
    article_id?: IntFilter<"article_theme"> | number
    theme_id?: IntFilter<"article_theme"> | number
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, themeWhereInput>
  }, "article_id_theme_id">

  export type article_themeOrderByWithAggregationInput = {
    article_id?: SortOrder
    theme_id?: SortOrder
    _count?: article_themeCountOrderByAggregateInput
    _avg?: article_themeAvgOrderByAggregateInput
    _max?: article_themeMaxOrderByAggregateInput
    _min?: article_themeMinOrderByAggregateInput
    _sum?: article_themeSumOrderByAggregateInput
  }

  export type article_themeScalarWhereWithAggregatesInput = {
    AND?: article_themeScalarWhereWithAggregatesInput | article_themeScalarWhereWithAggregatesInput[]
    OR?: article_themeScalarWhereWithAggregatesInput[]
    NOT?: article_themeScalarWhereWithAggregatesInput | article_themeScalarWhereWithAggregatesInput[]
    article_id?: IntWithAggregatesFilter<"article_theme"> | number
    theme_id?: IntWithAggregatesFilter<"article_theme"> | number
  }

  export type categorieWhereInput = {
    AND?: categorieWhereInput | categorieWhereInput[]
    OR?: categorieWhereInput[]
    NOT?: categorieWhereInput | categorieWhereInput[]
    id?: IntFilter<"categorie"> | number
    nom_categorie?: StringFilter<"categorie"> | string
    image_url?: StringNullableFilter<"categorie"> | string | null
    image_entete_url?: StringNullableFilter<"categorie"> | string | null
    description?: StringNullableFilter<"categorie"> | string | null
    article?: ArticleListRelationFilter
    categorie_theme?: Categorie_themeListRelationFilter
  }

  export type categorieOrderByWithRelationInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
    image_url?: SortOrderInput | SortOrder
    image_entete_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    article?: articleOrderByRelationAggregateInput
    categorie_theme?: categorie_themeOrderByRelationAggregateInput
  }

  export type categorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categorieWhereInput | categorieWhereInput[]
    OR?: categorieWhereInput[]
    NOT?: categorieWhereInput | categorieWhereInput[]
    nom_categorie?: StringFilter<"categorie"> | string
    image_url?: StringNullableFilter<"categorie"> | string | null
    image_entete_url?: StringNullableFilter<"categorie"> | string | null
    description?: StringNullableFilter<"categorie"> | string | null
    article?: ArticleListRelationFilter
    categorie_theme?: Categorie_themeListRelationFilter
  }, "id">

  export type categorieOrderByWithAggregationInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
    image_url?: SortOrderInput | SortOrder
    image_entete_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: categorieCountOrderByAggregateInput
    _avg?: categorieAvgOrderByAggregateInput
    _max?: categorieMaxOrderByAggregateInput
    _min?: categorieMinOrderByAggregateInput
    _sum?: categorieSumOrderByAggregateInput
  }

  export type categorieScalarWhereWithAggregatesInput = {
    AND?: categorieScalarWhereWithAggregatesInput | categorieScalarWhereWithAggregatesInput[]
    OR?: categorieScalarWhereWithAggregatesInput[]
    NOT?: categorieScalarWhereWithAggregatesInput | categorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categorie"> | number
    nom_categorie?: StringWithAggregatesFilter<"categorie"> | string
    image_url?: StringNullableWithAggregatesFilter<"categorie"> | string | null
    image_entete_url?: StringNullableWithAggregatesFilter<"categorie"> | string | null
    description?: StringNullableWithAggregatesFilter<"categorie"> | string | null
  }

  export type categorie_themeWhereInput = {
    AND?: categorie_themeWhereInput | categorie_themeWhereInput[]
    OR?: categorie_themeWhereInput[]
    NOT?: categorie_themeWhereInput | categorie_themeWhereInput[]
    categorie_id?: IntFilter<"categorie_theme"> | number
    theme_id?: IntFilter<"categorie_theme"> | number
    categorie?: XOR<CategorieScalarRelationFilter, categorieWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, themeWhereInput>
  }

  export type categorie_themeOrderByWithRelationInput = {
    categorie_id?: SortOrder
    theme_id?: SortOrder
    categorie?: categorieOrderByWithRelationInput
    theme?: themeOrderByWithRelationInput
  }

  export type categorie_themeWhereUniqueInput = Prisma.AtLeast<{
    categorie_id_theme_id?: categorie_themeCategorie_idTheme_idCompoundUniqueInput
    AND?: categorie_themeWhereInput | categorie_themeWhereInput[]
    OR?: categorie_themeWhereInput[]
    NOT?: categorie_themeWhereInput | categorie_themeWhereInput[]
    categorie_id?: IntFilter<"categorie_theme"> | number
    theme_id?: IntFilter<"categorie_theme"> | number
    categorie?: XOR<CategorieScalarRelationFilter, categorieWhereInput>
    theme?: XOR<ThemeScalarRelationFilter, themeWhereInput>
  }, "categorie_id_theme_id">

  export type categorie_themeOrderByWithAggregationInput = {
    categorie_id?: SortOrder
    theme_id?: SortOrder
    _count?: categorie_themeCountOrderByAggregateInput
    _avg?: categorie_themeAvgOrderByAggregateInput
    _max?: categorie_themeMaxOrderByAggregateInput
    _min?: categorie_themeMinOrderByAggregateInput
    _sum?: categorie_themeSumOrderByAggregateInput
  }

  export type categorie_themeScalarWhereWithAggregatesInput = {
    AND?: categorie_themeScalarWhereWithAggregatesInput | categorie_themeScalarWhereWithAggregatesInput[]
    OR?: categorie_themeScalarWhereWithAggregatesInput[]
    NOT?: categorie_themeScalarWhereWithAggregatesInput | categorie_themeScalarWhereWithAggregatesInput[]
    categorie_id?: IntWithAggregatesFilter<"categorie_theme"> | number
    theme_id?: IntWithAggregatesFilter<"categorie_theme"> | number
  }

  export type edition_papierWhereInput = {
    AND?: edition_papierWhereInput | edition_papierWhereInput[]
    OR?: edition_papierWhereInput[]
    NOT?: edition_papierWhereInput | edition_papierWhereInput[]
    id?: IntFilter<"edition_papier"> | number
    libelle_edition_papier?: StringNullableFilter<"edition_papier"> | string | null
    article?: ArticleListRelationFilter
  }

  export type edition_papierOrderByWithRelationInput = {
    id?: SortOrder
    libelle_edition_papier?: SortOrderInput | SortOrder
    article?: articleOrderByRelationAggregateInput
  }

  export type edition_papierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: edition_papierWhereInput | edition_papierWhereInput[]
    OR?: edition_papierWhereInput[]
    NOT?: edition_papierWhereInput | edition_papierWhereInput[]
    libelle_edition_papier?: StringNullableFilter<"edition_papier"> | string | null
    article?: ArticleListRelationFilter
  }, "id">

  export type edition_papierOrderByWithAggregationInput = {
    id?: SortOrder
    libelle_edition_papier?: SortOrderInput | SortOrder
    _count?: edition_papierCountOrderByAggregateInput
    _avg?: edition_papierAvgOrderByAggregateInput
    _max?: edition_papierMaxOrderByAggregateInput
    _min?: edition_papierMinOrderByAggregateInput
    _sum?: edition_papierSumOrderByAggregateInput
  }

  export type edition_papierScalarWhereWithAggregatesInput = {
    AND?: edition_papierScalarWhereWithAggregatesInput | edition_papierScalarWhereWithAggregatesInput[]
    OR?: edition_papierScalarWhereWithAggregatesInput[]
    NOT?: edition_papierScalarWhereWithAggregatesInput | edition_papierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"edition_papier"> | number
    libelle_edition_papier?: StringNullableWithAggregatesFilter<"edition_papier"> | string | null
  }

  export type favorisWhereInput = {
    AND?: favorisWhereInput | favorisWhereInput[]
    OR?: favorisWhereInput[]
    NOT?: favorisWhereInput | favorisWhereInput[]
    utilisateur_id?: IntFilter<"favoris"> | number
    article_id?: IntFilter<"favoris"> | number
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, utilisateurWhereInput>
  }

  export type favorisOrderByWithRelationInput = {
    utilisateur_id?: SortOrder
    article_id?: SortOrder
    article?: articleOrderByWithRelationInput
    utilisateur?: utilisateurOrderByWithRelationInput
  }

  export type favorisWhereUniqueInput = Prisma.AtLeast<{
    utilisateur_id_article_id?: favorisUtilisateur_idArticle_idCompoundUniqueInput
    AND?: favorisWhereInput | favorisWhereInput[]
    OR?: favorisWhereInput[]
    NOT?: favorisWhereInput | favorisWhereInput[]
    utilisateur_id?: IntFilter<"favoris"> | number
    article_id?: IntFilter<"favoris"> | number
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, utilisateurWhereInput>
  }, "utilisateur_id_article_id">

  export type favorisOrderByWithAggregationInput = {
    utilisateur_id?: SortOrder
    article_id?: SortOrder
    _count?: favorisCountOrderByAggregateInput
    _avg?: favorisAvgOrderByAggregateInput
    _max?: favorisMaxOrderByAggregateInput
    _min?: favorisMinOrderByAggregateInput
    _sum?: favorisSumOrderByAggregateInput
  }

  export type favorisScalarWhereWithAggregatesInput = {
    AND?: favorisScalarWhereWithAggregatesInput | favorisScalarWhereWithAggregatesInput[]
    OR?: favorisScalarWhereWithAggregatesInput[]
    NOT?: favorisScalarWhereWithAggregatesInput | favorisScalarWhereWithAggregatesInput[]
    utilisateur_id?: IntWithAggregatesFilter<"favoris"> | number
    article_id?: IntWithAggregatesFilter<"favoris"> | number
  }

  export type photosWhereInput = {
    AND?: photosWhereInput | photosWhereInput[]
    OR?: photosWhereInput[]
    NOT?: photosWhereInput | photosWhereInput[]
    id?: IntFilter<"photos"> | number
    article_id?: IntFilter<"photos"> | number
    libelle_photo?: StringFilter<"photos"> | string
    url_photo?: StringNullableFilter<"photos"> | string | null
    a_la_une?: EnumChoixNullableFilter<"photos"> | $Enums.Choix | null
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
  }

  export type photosOrderByWithRelationInput = {
    id?: SortOrder
    article_id?: SortOrder
    libelle_photo?: SortOrder
    url_photo?: SortOrderInput | SortOrder
    a_la_une?: SortOrderInput | SortOrder
    article?: articleOrderByWithRelationInput
  }

  export type photosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: photosWhereInput | photosWhereInput[]
    OR?: photosWhereInput[]
    NOT?: photosWhereInput | photosWhereInput[]
    article_id?: IntFilter<"photos"> | number
    libelle_photo?: StringFilter<"photos"> | string
    url_photo?: StringNullableFilter<"photos"> | string | null
    a_la_une?: EnumChoixNullableFilter<"photos"> | $Enums.Choix | null
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
  }, "id">

  export type photosOrderByWithAggregationInput = {
    id?: SortOrder
    article_id?: SortOrder
    libelle_photo?: SortOrder
    url_photo?: SortOrderInput | SortOrder
    a_la_une?: SortOrderInput | SortOrder
    _count?: photosCountOrderByAggregateInput
    _avg?: photosAvgOrderByAggregateInput
    _max?: photosMaxOrderByAggregateInput
    _min?: photosMinOrderByAggregateInput
    _sum?: photosSumOrderByAggregateInput
  }

  export type photosScalarWhereWithAggregatesInput = {
    AND?: photosScalarWhereWithAggregatesInput | photosScalarWhereWithAggregatesInput[]
    OR?: photosScalarWhereWithAggregatesInput[]
    NOT?: photosScalarWhereWithAggregatesInput | photosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"photos"> | number
    article_id?: IntWithAggregatesFilter<"photos"> | number
    libelle_photo?: StringWithAggregatesFilter<"photos"> | string
    url_photo?: StringNullableWithAggregatesFilter<"photos"> | string | null
    a_la_une?: EnumChoixNullableWithAggregatesFilter<"photos"> | $Enums.Choix | null
  }

  export type themeWhereInput = {
    AND?: themeWhereInput | themeWhereInput[]
    OR?: themeWhereInput[]
    NOT?: themeWhereInput | themeWhereInput[]
    id?: IntFilter<"theme"> | number
    libelle_theme?: StringNullableFilter<"theme"> | string | null
    article_theme?: Article_themeListRelationFilter
    categorie_theme?: Categorie_themeListRelationFilter
  }

  export type themeOrderByWithRelationInput = {
    id?: SortOrder
    libelle_theme?: SortOrderInput | SortOrder
    article_theme?: article_themeOrderByRelationAggregateInput
    categorie_theme?: categorie_themeOrderByRelationAggregateInput
  }

  export type themeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: themeWhereInput | themeWhereInput[]
    OR?: themeWhereInput[]
    NOT?: themeWhereInput | themeWhereInput[]
    libelle_theme?: StringNullableFilter<"theme"> | string | null
    article_theme?: Article_themeListRelationFilter
    categorie_theme?: Categorie_themeListRelationFilter
  }, "id">

  export type themeOrderByWithAggregationInput = {
    id?: SortOrder
    libelle_theme?: SortOrderInput | SortOrder
    _count?: themeCountOrderByAggregateInput
    _avg?: themeAvgOrderByAggregateInput
    _max?: themeMaxOrderByAggregateInput
    _min?: themeMinOrderByAggregateInput
    _sum?: themeSumOrderByAggregateInput
  }

  export type themeScalarWhereWithAggregatesInput = {
    AND?: themeScalarWhereWithAggregatesInput | themeScalarWhereWithAggregatesInput[]
    OR?: themeScalarWhereWithAggregatesInput[]
    NOT?: themeScalarWhereWithAggregatesInput | themeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"theme"> | number
    libelle_theme?: StringNullableWithAggregatesFilter<"theme"> | string | null
  }

  export type type_utilisateurWhereInput = {
    AND?: type_utilisateurWhereInput | type_utilisateurWhereInput[]
    OR?: type_utilisateurWhereInput[]
    NOT?: type_utilisateurWhereInput | type_utilisateurWhereInput[]
    id?: IntFilter<"type_utilisateur"> | number
    nom_type_utilisateur?: StringFilter<"type_utilisateur"> | string
    utilisateur?: UtilisateurListRelationFilter
  }

  export type type_utilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nom_type_utilisateur?: SortOrder
    utilisateur?: utilisateurOrderByRelationAggregateInput
  }

  export type type_utilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: type_utilisateurWhereInput | type_utilisateurWhereInput[]
    OR?: type_utilisateurWhereInput[]
    NOT?: type_utilisateurWhereInput | type_utilisateurWhereInput[]
    nom_type_utilisateur?: StringFilter<"type_utilisateur"> | string
    utilisateur?: UtilisateurListRelationFilter
  }, "id">

  export type type_utilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nom_type_utilisateur?: SortOrder
    _count?: type_utilisateurCountOrderByAggregateInput
    _avg?: type_utilisateurAvgOrderByAggregateInput
    _max?: type_utilisateurMaxOrderByAggregateInput
    _min?: type_utilisateurMinOrderByAggregateInput
    _sum?: type_utilisateurSumOrderByAggregateInput
  }

  export type type_utilisateurScalarWhereWithAggregatesInput = {
    AND?: type_utilisateurScalarWhereWithAggregatesInput | type_utilisateurScalarWhereWithAggregatesInput[]
    OR?: type_utilisateurScalarWhereWithAggregatesInput[]
    NOT?: type_utilisateurScalarWhereWithAggregatesInput | type_utilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"type_utilisateur"> | number
    nom_type_utilisateur?: StringWithAggregatesFilter<"type_utilisateur"> | string
  }

  export type utilisateurWhereInput = {
    AND?: utilisateurWhereInput | utilisateurWhereInput[]
    OR?: utilisateurWhereInput[]
    NOT?: utilisateurWhereInput | utilisateurWhereInput[]
    id?: IntFilter<"utilisateur"> | number
    type_utilisateur_id?: IntFilter<"utilisateur"> | number
    email?: StringFilter<"utilisateur"> | string
    nom?: StringNullableFilter<"utilisateur"> | string | null
    prenom?: StringNullableFilter<"utilisateur"> | string | null
    password?: StringNullableFilter<"utilisateur"> | string | null
    adresse?: StringNullableFilter<"utilisateur"> | string | null
    code_postal?: StringNullableFilter<"utilisateur"> | string | null
    ville?: StringNullableFilter<"utilisateur"> | string | null
    telephone?: StringNullableFilter<"utilisateur"> | string | null
    role?: EnumRoleNullableFilter<"utilisateur"> | $Enums.Role | null
    passwordResetToken?: StringNullableFilter<"utilisateur"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"utilisateur"> | Date | string | null
    article?: ArticleListRelationFilter
    favoris?: FavorisListRelationFilter
    type_utilisateur?: XOR<Type_utilisateurScalarRelationFilter, type_utilisateurWhereInput>
    conversations?: ConversationListRelationFilter
  }

  export type utilisateurOrderByWithRelationInput = {
    id?: SortOrder
    type_utilisateur_id?: SortOrder
    email?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    code_postal?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    article?: articleOrderByRelationAggregateInput
    favoris?: favorisOrderByRelationAggregateInput
    type_utilisateur?: type_utilisateurOrderByWithRelationInput
    conversations?: ConversationOrderByRelationAggregateInput
  }

  export type utilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    passwordResetToken?: string
    AND?: utilisateurWhereInput | utilisateurWhereInput[]
    OR?: utilisateurWhereInput[]
    NOT?: utilisateurWhereInput | utilisateurWhereInput[]
    type_utilisateur_id?: IntFilter<"utilisateur"> | number
    nom?: StringNullableFilter<"utilisateur"> | string | null
    prenom?: StringNullableFilter<"utilisateur"> | string | null
    password?: StringNullableFilter<"utilisateur"> | string | null
    adresse?: StringNullableFilter<"utilisateur"> | string | null
    code_postal?: StringNullableFilter<"utilisateur"> | string | null
    ville?: StringNullableFilter<"utilisateur"> | string | null
    telephone?: StringNullableFilter<"utilisateur"> | string | null
    role?: EnumRoleNullableFilter<"utilisateur"> | $Enums.Role | null
    passwordResetExpires?: DateTimeNullableFilter<"utilisateur"> | Date | string | null
    article?: ArticleListRelationFilter
    favoris?: FavorisListRelationFilter
    type_utilisateur?: XOR<Type_utilisateurScalarRelationFilter, type_utilisateurWhereInput>
    conversations?: ConversationListRelationFilter
  }, "id" | "email" | "passwordResetToken">

  export type utilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    type_utilisateur_id?: SortOrder
    email?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    code_postal?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    _count?: utilisateurCountOrderByAggregateInput
    _avg?: utilisateurAvgOrderByAggregateInput
    _max?: utilisateurMaxOrderByAggregateInput
    _min?: utilisateurMinOrderByAggregateInput
    _sum?: utilisateurSumOrderByAggregateInput
  }

  export type utilisateurScalarWhereWithAggregatesInput = {
    AND?: utilisateurScalarWhereWithAggregatesInput | utilisateurScalarWhereWithAggregatesInput[]
    OR?: utilisateurScalarWhereWithAggregatesInput[]
    NOT?: utilisateurScalarWhereWithAggregatesInput | utilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"utilisateur"> | number
    type_utilisateur_id?: IntWithAggregatesFilter<"utilisateur"> | number
    email?: StringWithAggregatesFilter<"utilisateur"> | string
    nom?: StringNullableWithAggregatesFilter<"utilisateur"> | string | null
    prenom?: StringNullableWithAggregatesFilter<"utilisateur"> | string | null
    password?: StringNullableWithAggregatesFilter<"utilisateur"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"utilisateur"> | string | null
    code_postal?: StringNullableWithAggregatesFilter<"utilisateur"> | string | null
    ville?: StringNullableWithAggregatesFilter<"utilisateur"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"utilisateur"> | string | null
    role?: EnumRoleNullableWithAggregatesFilter<"utilisateur"> | $Enums.Role | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"utilisateur"> | string | null
    passwordResetExpires?: DateTimeNullableWithAggregatesFilter<"utilisateur"> | Date | string | null
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: IntFilter<"Conversation"> | number
    articleId?: IntFilter<"Conversation"> | number
    userId?: IntNullableFilter<"Conversation"> | number | null
    guestName?: StringNullableFilter<"Conversation"> | string | null
    guestEmail?: StringNullableFilter<"Conversation"> | string | null
    isClosed?: BoolFilter<"Conversation"> | boolean
    isReadByAdmin?: BoolFilter<"Conversation"> | boolean
    isReadByUser?: BoolFilter<"Conversation"> | boolean
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
    user?: XOR<UtilisateurNullableScalarRelationFilter, utilisateurWhereInput> | null
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestName?: SortOrderInput | SortOrder
    guestEmail?: SortOrderInput | SortOrder
    isClosed?: SortOrder
    isReadByAdmin?: SortOrder
    isReadByUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: articleOrderByWithRelationInput
    user?: utilisateurOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    articleId?: IntFilter<"Conversation"> | number
    userId?: IntNullableFilter<"Conversation"> | number | null
    guestName?: StringNullableFilter<"Conversation"> | string | null
    guestEmail?: StringNullableFilter<"Conversation"> | string | null
    isClosed?: BoolFilter<"Conversation"> | boolean
    isReadByAdmin?: BoolFilter<"Conversation"> | boolean
    isReadByUser?: BoolFilter<"Conversation"> | boolean
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    article?: XOR<ArticleScalarRelationFilter, articleWhereInput>
    user?: XOR<UtilisateurNullableScalarRelationFilter, utilisateurWhereInput> | null
    messages?: MessageListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestName?: SortOrderInput | SortOrder
    guestEmail?: SortOrderInput | SortOrder
    isClosed?: SortOrder
    isReadByAdmin?: SortOrder
    isReadByUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversation"> | number
    articleId?: IntWithAggregatesFilter<"Conversation"> | number
    userId?: IntNullableWithAggregatesFilter<"Conversation"> | number | null
    guestName?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    guestEmail?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    isClosed?: BoolWithAggregatesFilter<"Conversation"> | boolean
    isReadByAdmin?: BoolWithAggregatesFilter<"Conversation"> | boolean
    isReadByUser?: BoolWithAggregatesFilter<"Conversation"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    senderIsAdmin?: BoolFilter<"Message"> | boolean
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderIsAdmin?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: IntFilter<"Message"> | number
    senderIsAdmin?: BoolFilter<"Message"> | boolean
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderIsAdmin?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    conversationId?: IntWithAggregatesFilter<"Message"> | number
    senderIsAdmin?: BoolWithAggregatesFilter<"Message"> | boolean
    content?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type archivageCreateInput = {
    nom_archivage?: string | null
    article?: articleCreateNestedManyWithoutArchivageInput
  }

  export type archivageUncheckedCreateInput = {
    id?: number
    nom_archivage?: string | null
    article?: articleUncheckedCreateNestedManyWithoutArchivageInput
  }

  export type archivageUpdateInput = {
    nom_archivage?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUpdateManyWithoutArchivageNestedInput
  }

  export type archivageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_archivage?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUncheckedUpdateManyWithoutArchivageNestedInput
  }

  export type archivageCreateManyInput = {
    id?: number
    nom_archivage?: string | null
  }

  export type archivageUpdateManyMutationInput = {
    nom_archivage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_archivage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type articleCreateInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    archivage?: archivageCreateNestedOneWithoutArticleInput
    categorie?: categorieCreateNestedOneWithoutArticleInput
    edition_papier?: edition_papierCreateNestedOneWithoutArticleInput
    utilisateur?: utilisateurCreateNestedOneWithoutArticleInput
    article_theme?: article_themeCreateNestedManyWithoutArticleInput
    favoris?: favorisCreateNestedManyWithoutArticleInput
    photos?: photosCreateNestedManyWithoutArticleInput
    conversations?: ConversationCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutArticleInput
    favoris?: favorisUncheckedCreateNestedManyWithoutArticleInput
    photos?: photosUncheckedCreateNestedManyWithoutArticleInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleUpdateInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    archivage?: archivageUpdateOneWithoutArticleNestedInput
    categorie?: categorieUpdateOneWithoutArticleNestedInput
    edition_papier?: edition_papierUpdateOneWithoutArticleNestedInput
    utilisateur?: utilisateurUpdateOneWithoutArticleNestedInput
    article_theme?: article_themeUpdateManyWithoutArticleNestedInput
    favoris?: favorisUpdateManyWithoutArticleNestedInput
    photos?: photosUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
    article_theme?: article_themeUncheckedUpdateManyWithoutArticleNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutArticleNestedInput
    photos?: photosUncheckedUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleCreateManyInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
  }

  export type articleUpdateManyMutationInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
  }

  export type articleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type article_themeCreateInput = {
    article: articleCreateNestedOneWithoutArticle_themeInput
    theme: themeCreateNestedOneWithoutArticle_themeInput
  }

  export type article_themeUncheckedCreateInput = {
    article_id: number
    theme_id: number
  }

  export type article_themeUpdateInput = {
    article?: articleUpdateOneRequiredWithoutArticle_themeNestedInput
    theme?: themeUpdateOneRequiredWithoutArticle_themeNestedInput
  }

  export type article_themeUncheckedUpdateInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type article_themeCreateManyInput = {
    article_id: number
    theme_id: number
  }

  export type article_themeUpdateManyMutationInput = {

  }

  export type article_themeUncheckedUpdateManyInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type categorieCreateInput = {
    nom_categorie: string
    image_url?: string | null
    image_entete_url?: string | null
    description?: string | null
    article?: articleCreateNestedManyWithoutCategorieInput
    categorie_theme?: categorie_themeCreateNestedManyWithoutCategorieInput
  }

  export type categorieUncheckedCreateInput = {
    id?: number
    nom_categorie: string
    image_url?: string | null
    image_entete_url?: string | null
    description?: string | null
    article?: articleUncheckedCreateNestedManyWithoutCategorieInput
    categorie_theme?: categorie_themeUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type categorieUpdateInput = {
    nom_categorie?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_entete_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUpdateManyWithoutCategorieNestedInput
    categorie_theme?: categorie_themeUpdateManyWithoutCategorieNestedInput
  }

  export type categorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_categorie?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_entete_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUncheckedUpdateManyWithoutCategorieNestedInput
    categorie_theme?: categorie_themeUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type categorieCreateManyInput = {
    id?: number
    nom_categorie: string
    image_url?: string | null
    image_entete_url?: string | null
    description?: string | null
  }

  export type categorieUpdateManyMutationInput = {
    nom_categorie?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_entete_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_categorie?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_entete_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categorie_themeCreateInput = {
    categorie: categorieCreateNestedOneWithoutCategorie_themeInput
    theme: themeCreateNestedOneWithoutCategorie_themeInput
  }

  export type categorie_themeUncheckedCreateInput = {
    categorie_id: number
    theme_id: number
  }

  export type categorie_themeUpdateInput = {
    categorie?: categorieUpdateOneRequiredWithoutCategorie_themeNestedInput
    theme?: themeUpdateOneRequiredWithoutCategorie_themeNestedInput
  }

  export type categorie_themeUncheckedUpdateInput = {
    categorie_id?: IntFieldUpdateOperationsInput | number
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type categorie_themeCreateManyInput = {
    categorie_id: number
    theme_id: number
  }

  export type categorie_themeUpdateManyMutationInput = {

  }

  export type categorie_themeUncheckedUpdateManyInput = {
    categorie_id?: IntFieldUpdateOperationsInput | number
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type edition_papierCreateInput = {
    libelle_edition_papier?: string | null
    article?: articleCreateNestedManyWithoutEdition_papierInput
  }

  export type edition_papierUncheckedCreateInput = {
    id?: number
    libelle_edition_papier?: string | null
    article?: articleUncheckedCreateNestedManyWithoutEdition_papierInput
  }

  export type edition_papierUpdateInput = {
    libelle_edition_papier?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUpdateManyWithoutEdition_papierNestedInput
  }

  export type edition_papierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_edition_papier?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUncheckedUpdateManyWithoutEdition_papierNestedInput
  }

  export type edition_papierCreateManyInput = {
    id?: number
    libelle_edition_papier?: string | null
  }

  export type edition_papierUpdateManyMutationInput = {
    libelle_edition_papier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type edition_papierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_edition_papier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favorisCreateInput = {
    article: articleCreateNestedOneWithoutFavorisInput
    utilisateur: utilisateurCreateNestedOneWithoutFavorisInput
  }

  export type favorisUncheckedCreateInput = {
    utilisateur_id: number
    article_id: number
  }

  export type favorisUpdateInput = {
    article?: articleUpdateOneRequiredWithoutFavorisNestedInput
    utilisateur?: utilisateurUpdateOneRequiredWithoutFavorisNestedInput
  }

  export type favorisUncheckedUpdateInput = {
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
  }

  export type favorisCreateManyInput = {
    utilisateur_id: number
    article_id: number
  }

  export type favorisUpdateManyMutationInput = {

  }

  export type favorisUncheckedUpdateManyInput = {
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
  }

  export type photosCreateInput = {
    libelle_photo: string
    url_photo?: string | null
    a_la_une?: $Enums.Choix | null
    article: articleCreateNestedOneWithoutPhotosInput
  }

  export type photosUncheckedCreateInput = {
    id?: number
    article_id: number
    libelle_photo: string
    url_photo?: string | null
    a_la_une?: $Enums.Choix | null
  }

  export type photosUpdateInput = {
    libelle_photo?: StringFieldUpdateOperationsInput | string
    url_photo?: NullableStringFieldUpdateOperationsInput | string | null
    a_la_une?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    article?: articleUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type photosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    libelle_photo?: StringFieldUpdateOperationsInput | string
    url_photo?: NullableStringFieldUpdateOperationsInput | string | null
    a_la_une?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
  }

  export type photosCreateManyInput = {
    id?: number
    article_id: number
    libelle_photo: string
    url_photo?: string | null
    a_la_une?: $Enums.Choix | null
  }

  export type photosUpdateManyMutationInput = {
    libelle_photo?: StringFieldUpdateOperationsInput | string
    url_photo?: NullableStringFieldUpdateOperationsInput | string | null
    a_la_une?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
  }

  export type photosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    libelle_photo?: StringFieldUpdateOperationsInput | string
    url_photo?: NullableStringFieldUpdateOperationsInput | string | null
    a_la_une?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
  }

  export type themeCreateInput = {
    libelle_theme?: string | null
    article_theme?: article_themeCreateNestedManyWithoutThemeInput
    categorie_theme?: categorie_themeCreateNestedManyWithoutThemeInput
  }

  export type themeUncheckedCreateInput = {
    id?: number
    libelle_theme?: string | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutThemeInput
    categorie_theme?: categorie_themeUncheckedCreateNestedManyWithoutThemeInput
  }

  export type themeUpdateInput = {
    libelle_theme?: NullableStringFieldUpdateOperationsInput | string | null
    article_theme?: article_themeUpdateManyWithoutThemeNestedInput
    categorie_theme?: categorie_themeUpdateManyWithoutThemeNestedInput
  }

  export type themeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: NullableStringFieldUpdateOperationsInput | string | null
    article_theme?: article_themeUncheckedUpdateManyWithoutThemeNestedInput
    categorie_theme?: categorie_themeUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type themeCreateManyInput = {
    id?: number
    libelle_theme?: string | null
  }

  export type themeUpdateManyMutationInput = {
    libelle_theme?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type themeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type type_utilisateurCreateInput = {
    nom_type_utilisateur: string
    utilisateur?: utilisateurCreateNestedManyWithoutType_utilisateurInput
  }

  export type type_utilisateurUncheckedCreateInput = {
    id?: number
    nom_type_utilisateur: string
    utilisateur?: utilisateurUncheckedCreateNestedManyWithoutType_utilisateurInput
  }

  export type type_utilisateurUpdateInput = {
    nom_type_utilisateur?: StringFieldUpdateOperationsInput | string
    utilisateur?: utilisateurUpdateManyWithoutType_utilisateurNestedInput
  }

  export type type_utilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_type_utilisateur?: StringFieldUpdateOperationsInput | string
    utilisateur?: utilisateurUncheckedUpdateManyWithoutType_utilisateurNestedInput
  }

  export type type_utilisateurCreateManyInput = {
    id?: number
    nom_type_utilisateur: string
  }

  export type type_utilisateurUpdateManyMutationInput = {
    nom_type_utilisateur?: StringFieldUpdateOperationsInput | string
  }

  export type type_utilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_type_utilisateur?: StringFieldUpdateOperationsInput | string
  }

  export type utilisateurCreateInput = {
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    article?: articleCreateNestedManyWithoutUtilisateurInput
    favoris?: favorisCreateNestedManyWithoutUtilisateurInput
    type_utilisateur: type_utilisateurCreateNestedOneWithoutUtilisateurInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type utilisateurUncheckedCreateInput = {
    id?: number
    type_utilisateur_id: number
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    article?: articleUncheckedCreateNestedManyWithoutUtilisateurInput
    favoris?: favorisUncheckedCreateNestedManyWithoutUtilisateurInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type utilisateurUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUpdateManyWithoutUtilisateurNestedInput
    favoris?: favorisUpdateManyWithoutUtilisateurNestedInput
    type_utilisateur?: type_utilisateurUpdateOneRequiredWithoutUtilisateurNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type utilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_utilisateur_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUncheckedUpdateManyWithoutUtilisateurNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutUtilisateurNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type utilisateurCreateManyInput = {
    id?: number
    type_utilisateur_id: number
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type utilisateurUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type utilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_utilisateur_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ConversationCreateInput = {
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    article: articleCreateNestedOneWithoutConversationsInput
    user?: utilisateurCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    articleId: number
    userId?: number | null
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: articleUpdateOneRequiredWithoutConversationsNestedInput
    user?: utilisateurUpdateOneWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: number
    articleId: number
    userId?: number | null
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    senderIsAdmin: boolean
    content: string
    isRead?: boolean
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    conversationId: number
    senderIsAdmin: boolean
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    senderIsAdmin?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    senderIsAdmin?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    conversationId: number
    senderIsAdmin: boolean
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    senderIsAdmin?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    senderIsAdmin?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ArticleListRelationFilter = {
    every?: articleWhereInput
    some?: articleWhereInput
    none?: articleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type articleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type archivageCountOrderByAggregateInput = {
    id?: SortOrder
    nom_archivage?: SortOrder
  }

  export type archivageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type archivageMaxOrderByAggregateInput = {
    id?: SortOrder
    nom_archivage?: SortOrder
  }

  export type archivageMinOrderByAggregateInput = {
    id?: SortOrder
    nom_archivage?: SortOrder
  }

  export type archivageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumChoixNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Choix | EnumChoixFieldRefInput<$PrismaModel> | null
    in?: $Enums.Choix[] | ListEnumChoixFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Choix[] | ListEnumChoixFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChoixNullableFilter<$PrismaModel> | $Enums.Choix | null
  }

  export type ArchivageNullableScalarRelationFilter = {
    is?: archivageWhereInput | null
    isNot?: archivageWhereInput | null
  }

  export type CategorieNullableScalarRelationFilter = {
    is?: categorieWhereInput | null
    isNot?: categorieWhereInput | null
  }

  export type Edition_papierNullableScalarRelationFilter = {
    is?: edition_papierWhereInput | null
    isNot?: edition_papierWhereInput | null
  }

  export type UtilisateurNullableScalarRelationFilter = {
    is?: utilisateurWhereInput | null
    isNot?: utilisateurWhereInput | null
  }

  export type Article_themeListRelationFilter = {
    every?: article_themeWhereInput
    some?: article_themeWhereInput
    none?: article_themeWhereInput
  }

  export type FavorisListRelationFilter = {
    every?: favorisWhereInput
    some?: favorisWhereInput
    none?: favorisWhereInput
  }

  export type PhotosListRelationFilter = {
    every?: photosWhereInput
    some?: photosWhereInput
    none?: photosWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type article_themeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type favorisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type photosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articleCountOrderByAggregateInput = {
    id?: SortOrder
    archivage_id?: SortOrder
    categorie_id?: SortOrder
    nom_auteur?: SortOrder
    prenom_auteur?: SortOrder
    titre?: SortOrder
    illustrations?: SortOrder
    editeur?: SortOrder
    date_impression?: SortOrder
    nombre_pages?: SortOrder
    description?: SortOrder
    prix_achat?: SortOrder
    valeur_marche_min?: SortOrder
    prix_vente_internet?: SortOrder
    quantite_volume?: SortOrder
    poids_net_kg?: SortOrder
    frais_postaux?: SortOrder
    date_creation?: SortOrder
    date_vente?: SortOrder
    nom_complet?: SortOrder
    pseudo_titre?: SortOrder
    collection?: SortOrder
    justification?: SortOrder
    date_EO?: SortOrder
    estimation?: SortOrder
    prix_reserve?: SortOrder
    disponible?: SortOrder
    envoi_possible?: SortOrder
    edition_papier_id?: SortOrder
    id_utilisateur?: SortOrder
  }

  export type articleAvgOrderByAggregateInput = {
    id?: SortOrder
    archivage_id?: SortOrder
    categorie_id?: SortOrder
    prix_achat?: SortOrder
    valeur_marche_min?: SortOrder
    prix_vente_internet?: SortOrder
    quantite_volume?: SortOrder
    frais_postaux?: SortOrder
    prix_reserve?: SortOrder
    edition_papier_id?: SortOrder
    id_utilisateur?: SortOrder
  }

  export type articleMaxOrderByAggregateInput = {
    id?: SortOrder
    archivage_id?: SortOrder
    categorie_id?: SortOrder
    nom_auteur?: SortOrder
    prenom_auteur?: SortOrder
    titre?: SortOrder
    illustrations?: SortOrder
    editeur?: SortOrder
    date_impression?: SortOrder
    nombre_pages?: SortOrder
    description?: SortOrder
    prix_achat?: SortOrder
    valeur_marche_min?: SortOrder
    prix_vente_internet?: SortOrder
    quantite_volume?: SortOrder
    poids_net_kg?: SortOrder
    frais_postaux?: SortOrder
    date_creation?: SortOrder
    date_vente?: SortOrder
    nom_complet?: SortOrder
    pseudo_titre?: SortOrder
    collection?: SortOrder
    justification?: SortOrder
    date_EO?: SortOrder
    estimation?: SortOrder
    prix_reserve?: SortOrder
    disponible?: SortOrder
    envoi_possible?: SortOrder
    edition_papier_id?: SortOrder
    id_utilisateur?: SortOrder
  }

  export type articleMinOrderByAggregateInput = {
    id?: SortOrder
    archivage_id?: SortOrder
    categorie_id?: SortOrder
    nom_auteur?: SortOrder
    prenom_auteur?: SortOrder
    titre?: SortOrder
    illustrations?: SortOrder
    editeur?: SortOrder
    date_impression?: SortOrder
    nombre_pages?: SortOrder
    description?: SortOrder
    prix_achat?: SortOrder
    valeur_marche_min?: SortOrder
    prix_vente_internet?: SortOrder
    quantite_volume?: SortOrder
    poids_net_kg?: SortOrder
    frais_postaux?: SortOrder
    date_creation?: SortOrder
    date_vente?: SortOrder
    nom_complet?: SortOrder
    pseudo_titre?: SortOrder
    collection?: SortOrder
    justification?: SortOrder
    date_EO?: SortOrder
    estimation?: SortOrder
    prix_reserve?: SortOrder
    disponible?: SortOrder
    envoi_possible?: SortOrder
    edition_papier_id?: SortOrder
    id_utilisateur?: SortOrder
  }

  export type articleSumOrderByAggregateInput = {
    id?: SortOrder
    archivage_id?: SortOrder
    categorie_id?: SortOrder
    prix_achat?: SortOrder
    valeur_marche_min?: SortOrder
    prix_vente_internet?: SortOrder
    quantite_volume?: SortOrder
    frais_postaux?: SortOrder
    prix_reserve?: SortOrder
    edition_papier_id?: SortOrder
    id_utilisateur?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumChoixNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Choix | EnumChoixFieldRefInput<$PrismaModel> | null
    in?: $Enums.Choix[] | ListEnumChoixFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Choix[] | ListEnumChoixFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChoixNullableWithAggregatesFilter<$PrismaModel> | $Enums.Choix | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumChoixNullableFilter<$PrismaModel>
    _max?: NestedEnumChoixNullableFilter<$PrismaModel>
  }

  export type ArticleScalarRelationFilter = {
    is?: articleWhereInput
    isNot?: articleWhereInput
  }

  export type ThemeScalarRelationFilter = {
    is?: themeWhereInput
    isNot?: themeWhereInput
  }

  export type article_themeArticle_idTheme_idCompoundUniqueInput = {
    article_id: number
    theme_id: number
  }

  export type article_themeCountOrderByAggregateInput = {
    article_id?: SortOrder
    theme_id?: SortOrder
  }

  export type article_themeAvgOrderByAggregateInput = {
    article_id?: SortOrder
    theme_id?: SortOrder
  }

  export type article_themeMaxOrderByAggregateInput = {
    article_id?: SortOrder
    theme_id?: SortOrder
  }

  export type article_themeMinOrderByAggregateInput = {
    article_id?: SortOrder
    theme_id?: SortOrder
  }

  export type article_themeSumOrderByAggregateInput = {
    article_id?: SortOrder
    theme_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Categorie_themeListRelationFilter = {
    every?: categorie_themeWhereInput
    some?: categorie_themeWhereInput
    none?: categorie_themeWhereInput
  }

  export type categorie_themeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categorieCountOrderByAggregateInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
    image_url?: SortOrder
    image_entete_url?: SortOrder
    description?: SortOrder
  }

  export type categorieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categorieMaxOrderByAggregateInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
    image_url?: SortOrder
    image_entete_url?: SortOrder
    description?: SortOrder
  }

  export type categorieMinOrderByAggregateInput = {
    id?: SortOrder
    nom_categorie?: SortOrder
    image_url?: SortOrder
    image_entete_url?: SortOrder
    description?: SortOrder
  }

  export type categorieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CategorieScalarRelationFilter = {
    is?: categorieWhereInput
    isNot?: categorieWhereInput
  }

  export type categorie_themeCategorie_idTheme_idCompoundUniqueInput = {
    categorie_id: number
    theme_id: number
  }

  export type categorie_themeCountOrderByAggregateInput = {
    categorie_id?: SortOrder
    theme_id?: SortOrder
  }

  export type categorie_themeAvgOrderByAggregateInput = {
    categorie_id?: SortOrder
    theme_id?: SortOrder
  }

  export type categorie_themeMaxOrderByAggregateInput = {
    categorie_id?: SortOrder
    theme_id?: SortOrder
  }

  export type categorie_themeMinOrderByAggregateInput = {
    categorie_id?: SortOrder
    theme_id?: SortOrder
  }

  export type categorie_themeSumOrderByAggregateInput = {
    categorie_id?: SortOrder
    theme_id?: SortOrder
  }

  export type edition_papierCountOrderByAggregateInput = {
    id?: SortOrder
    libelle_edition_papier?: SortOrder
  }

  export type edition_papierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type edition_papierMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle_edition_papier?: SortOrder
  }

  export type edition_papierMinOrderByAggregateInput = {
    id?: SortOrder
    libelle_edition_papier?: SortOrder
  }

  export type edition_papierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurScalarRelationFilter = {
    is?: utilisateurWhereInput
    isNot?: utilisateurWhereInput
  }

  export type favorisUtilisateur_idArticle_idCompoundUniqueInput = {
    utilisateur_id: number
    article_id: number
  }

  export type favorisCountOrderByAggregateInput = {
    utilisateur_id?: SortOrder
    article_id?: SortOrder
  }

  export type favorisAvgOrderByAggregateInput = {
    utilisateur_id?: SortOrder
    article_id?: SortOrder
  }

  export type favorisMaxOrderByAggregateInput = {
    utilisateur_id?: SortOrder
    article_id?: SortOrder
  }

  export type favorisMinOrderByAggregateInput = {
    utilisateur_id?: SortOrder
    article_id?: SortOrder
  }

  export type favorisSumOrderByAggregateInput = {
    utilisateur_id?: SortOrder
    article_id?: SortOrder
  }

  export type photosCountOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    libelle_photo?: SortOrder
    url_photo?: SortOrder
    a_la_une?: SortOrder
  }

  export type photosAvgOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
  }

  export type photosMaxOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    libelle_photo?: SortOrder
    url_photo?: SortOrder
    a_la_une?: SortOrder
  }

  export type photosMinOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    libelle_photo?: SortOrder
    url_photo?: SortOrder
    a_la_une?: SortOrder
  }

  export type photosSumOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
  }

  export type themeCountOrderByAggregateInput = {
    id?: SortOrder
    libelle_theme?: SortOrder
  }

  export type themeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type themeMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle_theme?: SortOrder
  }

  export type themeMinOrderByAggregateInput = {
    id?: SortOrder
    libelle_theme?: SortOrder
  }

  export type themeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurListRelationFilter = {
    every?: utilisateurWhereInput
    some?: utilisateurWhereInput
    none?: utilisateurWhereInput
  }

  export type utilisateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type type_utilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nom_type_utilisateur?: SortOrder
  }

  export type type_utilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type type_utilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom_type_utilisateur?: SortOrder
  }

  export type type_utilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nom_type_utilisateur?: SortOrder
  }

  export type type_utilisateurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type Type_utilisateurScalarRelationFilter = {
    is?: type_utilisateurWhereInput
    isNot?: type_utilisateurWhereInput
  }

  export type utilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    type_utilisateur_id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    password?: SortOrder
    adresse?: SortOrder
    code_postal?: SortOrder
    ville?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type utilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
    type_utilisateur_id?: SortOrder
  }

  export type utilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    type_utilisateur_id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    password?: SortOrder
    adresse?: SortOrder
    code_postal?: SortOrder
    ville?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type utilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    type_utilisateur_id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    password?: SortOrder
    adresse?: SortOrder
    code_postal?: SortOrder
    ville?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type utilisateurSumOrderByAggregateInput = {
    id?: SortOrder
    type_utilisateur_id?: SortOrder
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    isClosed?: SortOrder
    isReadByAdmin?: SortOrder
    isReadByUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    isClosed?: SortOrder
    isReadByAdmin?: SortOrder
    isReadByUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    isClosed?: SortOrder
    isReadByAdmin?: SortOrder
    isReadByUser?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderIsAdmin?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderIsAdmin?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderIsAdmin?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
  }

  export type articleCreateNestedManyWithoutArchivageInput = {
    create?: XOR<articleCreateWithoutArchivageInput, articleUncheckedCreateWithoutArchivageInput> | articleCreateWithoutArchivageInput[] | articleUncheckedCreateWithoutArchivageInput[]
    connectOrCreate?: articleCreateOrConnectWithoutArchivageInput | articleCreateOrConnectWithoutArchivageInput[]
    createMany?: articleCreateManyArchivageInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type articleUncheckedCreateNestedManyWithoutArchivageInput = {
    create?: XOR<articleCreateWithoutArchivageInput, articleUncheckedCreateWithoutArchivageInput> | articleCreateWithoutArchivageInput[] | articleUncheckedCreateWithoutArchivageInput[]
    connectOrCreate?: articleCreateOrConnectWithoutArchivageInput | articleCreateOrConnectWithoutArchivageInput[]
    createMany?: articleCreateManyArchivageInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type articleUpdateManyWithoutArchivageNestedInput = {
    create?: XOR<articleCreateWithoutArchivageInput, articleUncheckedCreateWithoutArchivageInput> | articleCreateWithoutArchivageInput[] | articleUncheckedCreateWithoutArchivageInput[]
    connectOrCreate?: articleCreateOrConnectWithoutArchivageInput | articleCreateOrConnectWithoutArchivageInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutArchivageInput | articleUpsertWithWhereUniqueWithoutArchivageInput[]
    createMany?: articleCreateManyArchivageInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutArchivageInput | articleUpdateWithWhereUniqueWithoutArchivageInput[]
    updateMany?: articleUpdateManyWithWhereWithoutArchivageInput | articleUpdateManyWithWhereWithoutArchivageInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type articleUncheckedUpdateManyWithoutArchivageNestedInput = {
    create?: XOR<articleCreateWithoutArchivageInput, articleUncheckedCreateWithoutArchivageInput> | articleCreateWithoutArchivageInput[] | articleUncheckedCreateWithoutArchivageInput[]
    connectOrCreate?: articleCreateOrConnectWithoutArchivageInput | articleCreateOrConnectWithoutArchivageInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutArchivageInput | articleUpsertWithWhereUniqueWithoutArchivageInput[]
    createMany?: articleCreateManyArchivageInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutArchivageInput | articleUpdateWithWhereUniqueWithoutArchivageInput[]
    updateMany?: articleUpdateManyWithWhereWithoutArchivageInput | articleUpdateManyWithWhereWithoutArchivageInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type archivageCreateNestedOneWithoutArticleInput = {
    create?: XOR<archivageCreateWithoutArticleInput, archivageUncheckedCreateWithoutArticleInput>
    connectOrCreate?: archivageCreateOrConnectWithoutArticleInput
    connect?: archivageWhereUniqueInput
  }

  export type categorieCreateNestedOneWithoutArticleInput = {
    create?: XOR<categorieCreateWithoutArticleInput, categorieUncheckedCreateWithoutArticleInput>
    connectOrCreate?: categorieCreateOrConnectWithoutArticleInput
    connect?: categorieWhereUniqueInput
  }

  export type edition_papierCreateNestedOneWithoutArticleInput = {
    create?: XOR<edition_papierCreateWithoutArticleInput, edition_papierUncheckedCreateWithoutArticleInput>
    connectOrCreate?: edition_papierCreateOrConnectWithoutArticleInput
    connect?: edition_papierWhereUniqueInput
  }

  export type utilisateurCreateNestedOneWithoutArticleInput = {
    create?: XOR<utilisateurCreateWithoutArticleInput, utilisateurUncheckedCreateWithoutArticleInput>
    connectOrCreate?: utilisateurCreateOrConnectWithoutArticleInput
    connect?: utilisateurWhereUniqueInput
  }

  export type article_themeCreateNestedManyWithoutArticleInput = {
    create?: XOR<article_themeCreateWithoutArticleInput, article_themeUncheckedCreateWithoutArticleInput> | article_themeCreateWithoutArticleInput[] | article_themeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_themeCreateOrConnectWithoutArticleInput | article_themeCreateOrConnectWithoutArticleInput[]
    createMany?: article_themeCreateManyArticleInputEnvelope
    connect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
  }

  export type favorisCreateNestedManyWithoutArticleInput = {
    create?: XOR<favorisCreateWithoutArticleInput, favorisUncheckedCreateWithoutArticleInput> | favorisCreateWithoutArticleInput[] | favorisUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: favorisCreateOrConnectWithoutArticleInput | favorisCreateOrConnectWithoutArticleInput[]
    createMany?: favorisCreateManyArticleInputEnvelope
    connect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
  }

  export type photosCreateNestedManyWithoutArticleInput = {
    create?: XOR<photosCreateWithoutArticleInput, photosUncheckedCreateWithoutArticleInput> | photosCreateWithoutArticleInput[] | photosUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: photosCreateOrConnectWithoutArticleInput | photosCreateOrConnectWithoutArticleInput[]
    createMany?: photosCreateManyArticleInputEnvelope
    connect?: photosWhereUniqueInput | photosWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutArticleInput = {
    create?: XOR<ConversationCreateWithoutArticleInput, ConversationUncheckedCreateWithoutArticleInput> | ConversationCreateWithoutArticleInput[] | ConversationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutArticleInput | ConversationCreateOrConnectWithoutArticleInput[]
    createMany?: ConversationCreateManyArticleInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type article_themeUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<article_themeCreateWithoutArticleInput, article_themeUncheckedCreateWithoutArticleInput> | article_themeCreateWithoutArticleInput[] | article_themeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_themeCreateOrConnectWithoutArticleInput | article_themeCreateOrConnectWithoutArticleInput[]
    createMany?: article_themeCreateManyArticleInputEnvelope
    connect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
  }

  export type favorisUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<favorisCreateWithoutArticleInput, favorisUncheckedCreateWithoutArticleInput> | favorisCreateWithoutArticleInput[] | favorisUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: favorisCreateOrConnectWithoutArticleInput | favorisCreateOrConnectWithoutArticleInput[]
    createMany?: favorisCreateManyArticleInputEnvelope
    connect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
  }

  export type photosUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<photosCreateWithoutArticleInput, photosUncheckedCreateWithoutArticleInput> | photosCreateWithoutArticleInput[] | photosUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: photosCreateOrConnectWithoutArticleInput | photosCreateOrConnectWithoutArticleInput[]
    createMany?: photosCreateManyArticleInputEnvelope
    connect?: photosWhereUniqueInput | photosWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ConversationCreateWithoutArticleInput, ConversationUncheckedCreateWithoutArticleInput> | ConversationCreateWithoutArticleInput[] | ConversationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutArticleInput | ConversationCreateOrConnectWithoutArticleInput[]
    createMany?: ConversationCreateManyArticleInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumChoixFieldUpdateOperationsInput = {
    set?: $Enums.Choix | null
  }

  export type archivageUpdateOneWithoutArticleNestedInput = {
    create?: XOR<archivageCreateWithoutArticleInput, archivageUncheckedCreateWithoutArticleInput>
    connectOrCreate?: archivageCreateOrConnectWithoutArticleInput
    upsert?: archivageUpsertWithoutArticleInput
    disconnect?: archivageWhereInput | boolean
    delete?: archivageWhereInput | boolean
    connect?: archivageWhereUniqueInput
    update?: XOR<XOR<archivageUpdateToOneWithWhereWithoutArticleInput, archivageUpdateWithoutArticleInput>, archivageUncheckedUpdateWithoutArticleInput>
  }

  export type categorieUpdateOneWithoutArticleNestedInput = {
    create?: XOR<categorieCreateWithoutArticleInput, categorieUncheckedCreateWithoutArticleInput>
    connectOrCreate?: categorieCreateOrConnectWithoutArticleInput
    upsert?: categorieUpsertWithoutArticleInput
    disconnect?: categorieWhereInput | boolean
    delete?: categorieWhereInput | boolean
    connect?: categorieWhereUniqueInput
    update?: XOR<XOR<categorieUpdateToOneWithWhereWithoutArticleInput, categorieUpdateWithoutArticleInput>, categorieUncheckedUpdateWithoutArticleInput>
  }

  export type edition_papierUpdateOneWithoutArticleNestedInput = {
    create?: XOR<edition_papierCreateWithoutArticleInput, edition_papierUncheckedCreateWithoutArticleInput>
    connectOrCreate?: edition_papierCreateOrConnectWithoutArticleInput
    upsert?: edition_papierUpsertWithoutArticleInput
    disconnect?: edition_papierWhereInput | boolean
    delete?: edition_papierWhereInput | boolean
    connect?: edition_papierWhereUniqueInput
    update?: XOR<XOR<edition_papierUpdateToOneWithWhereWithoutArticleInput, edition_papierUpdateWithoutArticleInput>, edition_papierUncheckedUpdateWithoutArticleInput>
  }

  export type utilisateurUpdateOneWithoutArticleNestedInput = {
    create?: XOR<utilisateurCreateWithoutArticleInput, utilisateurUncheckedCreateWithoutArticleInput>
    connectOrCreate?: utilisateurCreateOrConnectWithoutArticleInput
    upsert?: utilisateurUpsertWithoutArticleInput
    disconnect?: utilisateurWhereInput | boolean
    delete?: utilisateurWhereInput | boolean
    connect?: utilisateurWhereUniqueInput
    update?: XOR<XOR<utilisateurUpdateToOneWithWhereWithoutArticleInput, utilisateurUpdateWithoutArticleInput>, utilisateurUncheckedUpdateWithoutArticleInput>
  }

  export type article_themeUpdateManyWithoutArticleNestedInput = {
    create?: XOR<article_themeCreateWithoutArticleInput, article_themeUncheckedCreateWithoutArticleInput> | article_themeCreateWithoutArticleInput[] | article_themeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_themeCreateOrConnectWithoutArticleInput | article_themeCreateOrConnectWithoutArticleInput[]
    upsert?: article_themeUpsertWithWhereUniqueWithoutArticleInput | article_themeUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: article_themeCreateManyArticleInputEnvelope
    set?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    disconnect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    delete?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    connect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    update?: article_themeUpdateWithWhereUniqueWithoutArticleInput | article_themeUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: article_themeUpdateManyWithWhereWithoutArticleInput | article_themeUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: article_themeScalarWhereInput | article_themeScalarWhereInput[]
  }

  export type favorisUpdateManyWithoutArticleNestedInput = {
    create?: XOR<favorisCreateWithoutArticleInput, favorisUncheckedCreateWithoutArticleInput> | favorisCreateWithoutArticleInput[] | favorisUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: favorisCreateOrConnectWithoutArticleInput | favorisCreateOrConnectWithoutArticleInput[]
    upsert?: favorisUpsertWithWhereUniqueWithoutArticleInput | favorisUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: favorisCreateManyArticleInputEnvelope
    set?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    disconnect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    delete?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    connect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    update?: favorisUpdateWithWhereUniqueWithoutArticleInput | favorisUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: favorisUpdateManyWithWhereWithoutArticleInput | favorisUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: favorisScalarWhereInput | favorisScalarWhereInput[]
  }

  export type photosUpdateManyWithoutArticleNestedInput = {
    create?: XOR<photosCreateWithoutArticleInput, photosUncheckedCreateWithoutArticleInput> | photosCreateWithoutArticleInput[] | photosUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: photosCreateOrConnectWithoutArticleInput | photosCreateOrConnectWithoutArticleInput[]
    upsert?: photosUpsertWithWhereUniqueWithoutArticleInput | photosUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: photosCreateManyArticleInputEnvelope
    set?: photosWhereUniqueInput | photosWhereUniqueInput[]
    disconnect?: photosWhereUniqueInput | photosWhereUniqueInput[]
    delete?: photosWhereUniqueInput | photosWhereUniqueInput[]
    connect?: photosWhereUniqueInput | photosWhereUniqueInput[]
    update?: photosUpdateWithWhereUniqueWithoutArticleInput | photosUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: photosUpdateManyWithWhereWithoutArticleInput | photosUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: photosScalarWhereInput | photosScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ConversationCreateWithoutArticleInput, ConversationUncheckedCreateWithoutArticleInput> | ConversationCreateWithoutArticleInput[] | ConversationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutArticleInput | ConversationCreateOrConnectWithoutArticleInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutArticleInput | ConversationUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ConversationCreateManyArticleInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutArticleInput | ConversationUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutArticleInput | ConversationUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type article_themeUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<article_themeCreateWithoutArticleInput, article_themeUncheckedCreateWithoutArticleInput> | article_themeCreateWithoutArticleInput[] | article_themeUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: article_themeCreateOrConnectWithoutArticleInput | article_themeCreateOrConnectWithoutArticleInput[]
    upsert?: article_themeUpsertWithWhereUniqueWithoutArticleInput | article_themeUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: article_themeCreateManyArticleInputEnvelope
    set?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    disconnect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    delete?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    connect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    update?: article_themeUpdateWithWhereUniqueWithoutArticleInput | article_themeUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: article_themeUpdateManyWithWhereWithoutArticleInput | article_themeUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: article_themeScalarWhereInput | article_themeScalarWhereInput[]
  }

  export type favorisUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<favorisCreateWithoutArticleInput, favorisUncheckedCreateWithoutArticleInput> | favorisCreateWithoutArticleInput[] | favorisUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: favorisCreateOrConnectWithoutArticleInput | favorisCreateOrConnectWithoutArticleInput[]
    upsert?: favorisUpsertWithWhereUniqueWithoutArticleInput | favorisUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: favorisCreateManyArticleInputEnvelope
    set?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    disconnect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    delete?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    connect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    update?: favorisUpdateWithWhereUniqueWithoutArticleInput | favorisUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: favorisUpdateManyWithWhereWithoutArticleInput | favorisUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: favorisScalarWhereInput | favorisScalarWhereInput[]
  }

  export type photosUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<photosCreateWithoutArticleInput, photosUncheckedCreateWithoutArticleInput> | photosCreateWithoutArticleInput[] | photosUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: photosCreateOrConnectWithoutArticleInput | photosCreateOrConnectWithoutArticleInput[]
    upsert?: photosUpsertWithWhereUniqueWithoutArticleInput | photosUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: photosCreateManyArticleInputEnvelope
    set?: photosWhereUniqueInput | photosWhereUniqueInput[]
    disconnect?: photosWhereUniqueInput | photosWhereUniqueInput[]
    delete?: photosWhereUniqueInput | photosWhereUniqueInput[]
    connect?: photosWhereUniqueInput | photosWhereUniqueInput[]
    update?: photosUpdateWithWhereUniqueWithoutArticleInput | photosUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: photosUpdateManyWithWhereWithoutArticleInput | photosUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: photosScalarWhereInput | photosScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ConversationCreateWithoutArticleInput, ConversationUncheckedCreateWithoutArticleInput> | ConversationCreateWithoutArticleInput[] | ConversationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutArticleInput | ConversationCreateOrConnectWithoutArticleInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutArticleInput | ConversationUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ConversationCreateManyArticleInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutArticleInput | ConversationUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutArticleInput | ConversationUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type articleCreateNestedOneWithoutArticle_themeInput = {
    create?: XOR<articleCreateWithoutArticle_themeInput, articleUncheckedCreateWithoutArticle_themeInput>
    connectOrCreate?: articleCreateOrConnectWithoutArticle_themeInput
    connect?: articleWhereUniqueInput
  }

  export type themeCreateNestedOneWithoutArticle_themeInput = {
    create?: XOR<themeCreateWithoutArticle_themeInput, themeUncheckedCreateWithoutArticle_themeInput>
    connectOrCreate?: themeCreateOrConnectWithoutArticle_themeInput
    connect?: themeWhereUniqueInput
  }

  export type articleUpdateOneRequiredWithoutArticle_themeNestedInput = {
    create?: XOR<articleCreateWithoutArticle_themeInput, articleUncheckedCreateWithoutArticle_themeInput>
    connectOrCreate?: articleCreateOrConnectWithoutArticle_themeInput
    upsert?: articleUpsertWithoutArticle_themeInput
    connect?: articleWhereUniqueInput
    update?: XOR<XOR<articleUpdateToOneWithWhereWithoutArticle_themeInput, articleUpdateWithoutArticle_themeInput>, articleUncheckedUpdateWithoutArticle_themeInput>
  }

  export type themeUpdateOneRequiredWithoutArticle_themeNestedInput = {
    create?: XOR<themeCreateWithoutArticle_themeInput, themeUncheckedCreateWithoutArticle_themeInput>
    connectOrCreate?: themeCreateOrConnectWithoutArticle_themeInput
    upsert?: themeUpsertWithoutArticle_themeInput
    connect?: themeWhereUniqueInput
    update?: XOR<XOR<themeUpdateToOneWithWhereWithoutArticle_themeInput, themeUpdateWithoutArticle_themeInput>, themeUncheckedUpdateWithoutArticle_themeInput>
  }

  export type articleCreateNestedManyWithoutCategorieInput = {
    create?: XOR<articleCreateWithoutCategorieInput, articleUncheckedCreateWithoutCategorieInput> | articleCreateWithoutCategorieInput[] | articleUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: articleCreateOrConnectWithoutCategorieInput | articleCreateOrConnectWithoutCategorieInput[]
    createMany?: articleCreateManyCategorieInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type categorie_themeCreateNestedManyWithoutCategorieInput = {
    create?: XOR<categorie_themeCreateWithoutCategorieInput, categorie_themeUncheckedCreateWithoutCategorieInput> | categorie_themeCreateWithoutCategorieInput[] | categorie_themeUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: categorie_themeCreateOrConnectWithoutCategorieInput | categorie_themeCreateOrConnectWithoutCategorieInput[]
    createMany?: categorie_themeCreateManyCategorieInputEnvelope
    connect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
  }

  export type articleUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<articleCreateWithoutCategorieInput, articleUncheckedCreateWithoutCategorieInput> | articleCreateWithoutCategorieInput[] | articleUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: articleCreateOrConnectWithoutCategorieInput | articleCreateOrConnectWithoutCategorieInput[]
    createMany?: articleCreateManyCategorieInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type categorie_themeUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<categorie_themeCreateWithoutCategorieInput, categorie_themeUncheckedCreateWithoutCategorieInput> | categorie_themeCreateWithoutCategorieInput[] | categorie_themeUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: categorie_themeCreateOrConnectWithoutCategorieInput | categorie_themeCreateOrConnectWithoutCategorieInput[]
    createMany?: categorie_themeCreateManyCategorieInputEnvelope
    connect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type articleUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<articleCreateWithoutCategorieInput, articleUncheckedCreateWithoutCategorieInput> | articleCreateWithoutCategorieInput[] | articleUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: articleCreateOrConnectWithoutCategorieInput | articleCreateOrConnectWithoutCategorieInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutCategorieInput | articleUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: articleCreateManyCategorieInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutCategorieInput | articleUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: articleUpdateManyWithWhereWithoutCategorieInput | articleUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type categorie_themeUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<categorie_themeCreateWithoutCategorieInput, categorie_themeUncheckedCreateWithoutCategorieInput> | categorie_themeCreateWithoutCategorieInput[] | categorie_themeUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: categorie_themeCreateOrConnectWithoutCategorieInput | categorie_themeCreateOrConnectWithoutCategorieInput[]
    upsert?: categorie_themeUpsertWithWhereUniqueWithoutCategorieInput | categorie_themeUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: categorie_themeCreateManyCategorieInputEnvelope
    set?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    disconnect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    delete?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    connect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    update?: categorie_themeUpdateWithWhereUniqueWithoutCategorieInput | categorie_themeUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: categorie_themeUpdateManyWithWhereWithoutCategorieInput | categorie_themeUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: categorie_themeScalarWhereInput | categorie_themeScalarWhereInput[]
  }

  export type articleUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<articleCreateWithoutCategorieInput, articleUncheckedCreateWithoutCategorieInput> | articleCreateWithoutCategorieInput[] | articleUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: articleCreateOrConnectWithoutCategorieInput | articleCreateOrConnectWithoutCategorieInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutCategorieInput | articleUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: articleCreateManyCategorieInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutCategorieInput | articleUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: articleUpdateManyWithWhereWithoutCategorieInput | articleUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type categorie_themeUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<categorie_themeCreateWithoutCategorieInput, categorie_themeUncheckedCreateWithoutCategorieInput> | categorie_themeCreateWithoutCategorieInput[] | categorie_themeUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: categorie_themeCreateOrConnectWithoutCategorieInput | categorie_themeCreateOrConnectWithoutCategorieInput[]
    upsert?: categorie_themeUpsertWithWhereUniqueWithoutCategorieInput | categorie_themeUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: categorie_themeCreateManyCategorieInputEnvelope
    set?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    disconnect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    delete?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    connect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    update?: categorie_themeUpdateWithWhereUniqueWithoutCategorieInput | categorie_themeUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: categorie_themeUpdateManyWithWhereWithoutCategorieInput | categorie_themeUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: categorie_themeScalarWhereInput | categorie_themeScalarWhereInput[]
  }

  export type categorieCreateNestedOneWithoutCategorie_themeInput = {
    create?: XOR<categorieCreateWithoutCategorie_themeInput, categorieUncheckedCreateWithoutCategorie_themeInput>
    connectOrCreate?: categorieCreateOrConnectWithoutCategorie_themeInput
    connect?: categorieWhereUniqueInput
  }

  export type themeCreateNestedOneWithoutCategorie_themeInput = {
    create?: XOR<themeCreateWithoutCategorie_themeInput, themeUncheckedCreateWithoutCategorie_themeInput>
    connectOrCreate?: themeCreateOrConnectWithoutCategorie_themeInput
    connect?: themeWhereUniqueInput
  }

  export type categorieUpdateOneRequiredWithoutCategorie_themeNestedInput = {
    create?: XOR<categorieCreateWithoutCategorie_themeInput, categorieUncheckedCreateWithoutCategorie_themeInput>
    connectOrCreate?: categorieCreateOrConnectWithoutCategorie_themeInput
    upsert?: categorieUpsertWithoutCategorie_themeInput
    connect?: categorieWhereUniqueInput
    update?: XOR<XOR<categorieUpdateToOneWithWhereWithoutCategorie_themeInput, categorieUpdateWithoutCategorie_themeInput>, categorieUncheckedUpdateWithoutCategorie_themeInput>
  }

  export type themeUpdateOneRequiredWithoutCategorie_themeNestedInput = {
    create?: XOR<themeCreateWithoutCategorie_themeInput, themeUncheckedCreateWithoutCategorie_themeInput>
    connectOrCreate?: themeCreateOrConnectWithoutCategorie_themeInput
    upsert?: themeUpsertWithoutCategorie_themeInput
    connect?: themeWhereUniqueInput
    update?: XOR<XOR<themeUpdateToOneWithWhereWithoutCategorie_themeInput, themeUpdateWithoutCategorie_themeInput>, themeUncheckedUpdateWithoutCategorie_themeInput>
  }

  export type articleCreateNestedManyWithoutEdition_papierInput = {
    create?: XOR<articleCreateWithoutEdition_papierInput, articleUncheckedCreateWithoutEdition_papierInput> | articleCreateWithoutEdition_papierInput[] | articleUncheckedCreateWithoutEdition_papierInput[]
    connectOrCreate?: articleCreateOrConnectWithoutEdition_papierInput | articleCreateOrConnectWithoutEdition_papierInput[]
    createMany?: articleCreateManyEdition_papierInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type articleUncheckedCreateNestedManyWithoutEdition_papierInput = {
    create?: XOR<articleCreateWithoutEdition_papierInput, articleUncheckedCreateWithoutEdition_papierInput> | articleCreateWithoutEdition_papierInput[] | articleUncheckedCreateWithoutEdition_papierInput[]
    connectOrCreate?: articleCreateOrConnectWithoutEdition_papierInput | articleCreateOrConnectWithoutEdition_papierInput[]
    createMany?: articleCreateManyEdition_papierInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type articleUpdateManyWithoutEdition_papierNestedInput = {
    create?: XOR<articleCreateWithoutEdition_papierInput, articleUncheckedCreateWithoutEdition_papierInput> | articleCreateWithoutEdition_papierInput[] | articleUncheckedCreateWithoutEdition_papierInput[]
    connectOrCreate?: articleCreateOrConnectWithoutEdition_papierInput | articleCreateOrConnectWithoutEdition_papierInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutEdition_papierInput | articleUpsertWithWhereUniqueWithoutEdition_papierInput[]
    createMany?: articleCreateManyEdition_papierInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutEdition_papierInput | articleUpdateWithWhereUniqueWithoutEdition_papierInput[]
    updateMany?: articleUpdateManyWithWhereWithoutEdition_papierInput | articleUpdateManyWithWhereWithoutEdition_papierInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type articleUncheckedUpdateManyWithoutEdition_papierNestedInput = {
    create?: XOR<articleCreateWithoutEdition_papierInput, articleUncheckedCreateWithoutEdition_papierInput> | articleCreateWithoutEdition_papierInput[] | articleUncheckedCreateWithoutEdition_papierInput[]
    connectOrCreate?: articleCreateOrConnectWithoutEdition_papierInput | articleCreateOrConnectWithoutEdition_papierInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutEdition_papierInput | articleUpsertWithWhereUniqueWithoutEdition_papierInput[]
    createMany?: articleCreateManyEdition_papierInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutEdition_papierInput | articleUpdateWithWhereUniqueWithoutEdition_papierInput[]
    updateMany?: articleUpdateManyWithWhereWithoutEdition_papierInput | articleUpdateManyWithWhereWithoutEdition_papierInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type articleCreateNestedOneWithoutFavorisInput = {
    create?: XOR<articleCreateWithoutFavorisInput, articleUncheckedCreateWithoutFavorisInput>
    connectOrCreate?: articleCreateOrConnectWithoutFavorisInput
    connect?: articleWhereUniqueInput
  }

  export type utilisateurCreateNestedOneWithoutFavorisInput = {
    create?: XOR<utilisateurCreateWithoutFavorisInput, utilisateurUncheckedCreateWithoutFavorisInput>
    connectOrCreate?: utilisateurCreateOrConnectWithoutFavorisInput
    connect?: utilisateurWhereUniqueInput
  }

  export type articleUpdateOneRequiredWithoutFavorisNestedInput = {
    create?: XOR<articleCreateWithoutFavorisInput, articleUncheckedCreateWithoutFavorisInput>
    connectOrCreate?: articleCreateOrConnectWithoutFavorisInput
    upsert?: articleUpsertWithoutFavorisInput
    connect?: articleWhereUniqueInput
    update?: XOR<XOR<articleUpdateToOneWithWhereWithoutFavorisInput, articleUpdateWithoutFavorisInput>, articleUncheckedUpdateWithoutFavorisInput>
  }

  export type utilisateurUpdateOneRequiredWithoutFavorisNestedInput = {
    create?: XOR<utilisateurCreateWithoutFavorisInput, utilisateurUncheckedCreateWithoutFavorisInput>
    connectOrCreate?: utilisateurCreateOrConnectWithoutFavorisInput
    upsert?: utilisateurUpsertWithoutFavorisInput
    connect?: utilisateurWhereUniqueInput
    update?: XOR<XOR<utilisateurUpdateToOneWithWhereWithoutFavorisInput, utilisateurUpdateWithoutFavorisInput>, utilisateurUncheckedUpdateWithoutFavorisInput>
  }

  export type articleCreateNestedOneWithoutPhotosInput = {
    create?: XOR<articleCreateWithoutPhotosInput, articleUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: articleCreateOrConnectWithoutPhotosInput
    connect?: articleWhereUniqueInput
  }

  export type articleUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<articleCreateWithoutPhotosInput, articleUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: articleCreateOrConnectWithoutPhotosInput
    upsert?: articleUpsertWithoutPhotosInput
    connect?: articleWhereUniqueInput
    update?: XOR<XOR<articleUpdateToOneWithWhereWithoutPhotosInput, articleUpdateWithoutPhotosInput>, articleUncheckedUpdateWithoutPhotosInput>
  }

  export type article_themeCreateNestedManyWithoutThemeInput = {
    create?: XOR<article_themeCreateWithoutThemeInput, article_themeUncheckedCreateWithoutThemeInput> | article_themeCreateWithoutThemeInput[] | article_themeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: article_themeCreateOrConnectWithoutThemeInput | article_themeCreateOrConnectWithoutThemeInput[]
    createMany?: article_themeCreateManyThemeInputEnvelope
    connect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
  }

  export type categorie_themeCreateNestedManyWithoutThemeInput = {
    create?: XOR<categorie_themeCreateWithoutThemeInput, categorie_themeUncheckedCreateWithoutThemeInput> | categorie_themeCreateWithoutThemeInput[] | categorie_themeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: categorie_themeCreateOrConnectWithoutThemeInput | categorie_themeCreateOrConnectWithoutThemeInput[]
    createMany?: categorie_themeCreateManyThemeInputEnvelope
    connect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
  }

  export type article_themeUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<article_themeCreateWithoutThemeInput, article_themeUncheckedCreateWithoutThemeInput> | article_themeCreateWithoutThemeInput[] | article_themeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: article_themeCreateOrConnectWithoutThemeInput | article_themeCreateOrConnectWithoutThemeInput[]
    createMany?: article_themeCreateManyThemeInputEnvelope
    connect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
  }

  export type categorie_themeUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<categorie_themeCreateWithoutThemeInput, categorie_themeUncheckedCreateWithoutThemeInput> | categorie_themeCreateWithoutThemeInput[] | categorie_themeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: categorie_themeCreateOrConnectWithoutThemeInput | categorie_themeCreateOrConnectWithoutThemeInput[]
    createMany?: categorie_themeCreateManyThemeInputEnvelope
    connect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
  }

  export type article_themeUpdateManyWithoutThemeNestedInput = {
    create?: XOR<article_themeCreateWithoutThemeInput, article_themeUncheckedCreateWithoutThemeInput> | article_themeCreateWithoutThemeInput[] | article_themeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: article_themeCreateOrConnectWithoutThemeInput | article_themeCreateOrConnectWithoutThemeInput[]
    upsert?: article_themeUpsertWithWhereUniqueWithoutThemeInput | article_themeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: article_themeCreateManyThemeInputEnvelope
    set?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    disconnect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    delete?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    connect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    update?: article_themeUpdateWithWhereUniqueWithoutThemeInput | article_themeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: article_themeUpdateManyWithWhereWithoutThemeInput | article_themeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: article_themeScalarWhereInput | article_themeScalarWhereInput[]
  }

  export type categorie_themeUpdateManyWithoutThemeNestedInput = {
    create?: XOR<categorie_themeCreateWithoutThemeInput, categorie_themeUncheckedCreateWithoutThemeInput> | categorie_themeCreateWithoutThemeInput[] | categorie_themeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: categorie_themeCreateOrConnectWithoutThemeInput | categorie_themeCreateOrConnectWithoutThemeInput[]
    upsert?: categorie_themeUpsertWithWhereUniqueWithoutThemeInput | categorie_themeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: categorie_themeCreateManyThemeInputEnvelope
    set?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    disconnect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    delete?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    connect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    update?: categorie_themeUpdateWithWhereUniqueWithoutThemeInput | categorie_themeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: categorie_themeUpdateManyWithWhereWithoutThemeInput | categorie_themeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: categorie_themeScalarWhereInput | categorie_themeScalarWhereInput[]
  }

  export type article_themeUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<article_themeCreateWithoutThemeInput, article_themeUncheckedCreateWithoutThemeInput> | article_themeCreateWithoutThemeInput[] | article_themeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: article_themeCreateOrConnectWithoutThemeInput | article_themeCreateOrConnectWithoutThemeInput[]
    upsert?: article_themeUpsertWithWhereUniqueWithoutThemeInput | article_themeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: article_themeCreateManyThemeInputEnvelope
    set?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    disconnect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    delete?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    connect?: article_themeWhereUniqueInput | article_themeWhereUniqueInput[]
    update?: article_themeUpdateWithWhereUniqueWithoutThemeInput | article_themeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: article_themeUpdateManyWithWhereWithoutThemeInput | article_themeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: article_themeScalarWhereInput | article_themeScalarWhereInput[]
  }

  export type categorie_themeUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<categorie_themeCreateWithoutThemeInput, categorie_themeUncheckedCreateWithoutThemeInput> | categorie_themeCreateWithoutThemeInput[] | categorie_themeUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: categorie_themeCreateOrConnectWithoutThemeInput | categorie_themeCreateOrConnectWithoutThemeInput[]
    upsert?: categorie_themeUpsertWithWhereUniqueWithoutThemeInput | categorie_themeUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: categorie_themeCreateManyThemeInputEnvelope
    set?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    disconnect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    delete?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    connect?: categorie_themeWhereUniqueInput | categorie_themeWhereUniqueInput[]
    update?: categorie_themeUpdateWithWhereUniqueWithoutThemeInput | categorie_themeUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: categorie_themeUpdateManyWithWhereWithoutThemeInput | categorie_themeUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: categorie_themeScalarWhereInput | categorie_themeScalarWhereInput[]
  }

  export type utilisateurCreateNestedManyWithoutType_utilisateurInput = {
    create?: XOR<utilisateurCreateWithoutType_utilisateurInput, utilisateurUncheckedCreateWithoutType_utilisateurInput> | utilisateurCreateWithoutType_utilisateurInput[] | utilisateurUncheckedCreateWithoutType_utilisateurInput[]
    connectOrCreate?: utilisateurCreateOrConnectWithoutType_utilisateurInput | utilisateurCreateOrConnectWithoutType_utilisateurInput[]
    createMany?: utilisateurCreateManyType_utilisateurInputEnvelope
    connect?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
  }

  export type utilisateurUncheckedCreateNestedManyWithoutType_utilisateurInput = {
    create?: XOR<utilisateurCreateWithoutType_utilisateurInput, utilisateurUncheckedCreateWithoutType_utilisateurInput> | utilisateurCreateWithoutType_utilisateurInput[] | utilisateurUncheckedCreateWithoutType_utilisateurInput[]
    connectOrCreate?: utilisateurCreateOrConnectWithoutType_utilisateurInput | utilisateurCreateOrConnectWithoutType_utilisateurInput[]
    createMany?: utilisateurCreateManyType_utilisateurInputEnvelope
    connect?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
  }

  export type utilisateurUpdateManyWithoutType_utilisateurNestedInput = {
    create?: XOR<utilisateurCreateWithoutType_utilisateurInput, utilisateurUncheckedCreateWithoutType_utilisateurInput> | utilisateurCreateWithoutType_utilisateurInput[] | utilisateurUncheckedCreateWithoutType_utilisateurInput[]
    connectOrCreate?: utilisateurCreateOrConnectWithoutType_utilisateurInput | utilisateurCreateOrConnectWithoutType_utilisateurInput[]
    upsert?: utilisateurUpsertWithWhereUniqueWithoutType_utilisateurInput | utilisateurUpsertWithWhereUniqueWithoutType_utilisateurInput[]
    createMany?: utilisateurCreateManyType_utilisateurInputEnvelope
    set?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
    disconnect?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
    delete?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
    connect?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
    update?: utilisateurUpdateWithWhereUniqueWithoutType_utilisateurInput | utilisateurUpdateWithWhereUniqueWithoutType_utilisateurInput[]
    updateMany?: utilisateurUpdateManyWithWhereWithoutType_utilisateurInput | utilisateurUpdateManyWithWhereWithoutType_utilisateurInput[]
    deleteMany?: utilisateurScalarWhereInput | utilisateurScalarWhereInput[]
  }

  export type utilisateurUncheckedUpdateManyWithoutType_utilisateurNestedInput = {
    create?: XOR<utilisateurCreateWithoutType_utilisateurInput, utilisateurUncheckedCreateWithoutType_utilisateurInput> | utilisateurCreateWithoutType_utilisateurInput[] | utilisateurUncheckedCreateWithoutType_utilisateurInput[]
    connectOrCreate?: utilisateurCreateOrConnectWithoutType_utilisateurInput | utilisateurCreateOrConnectWithoutType_utilisateurInput[]
    upsert?: utilisateurUpsertWithWhereUniqueWithoutType_utilisateurInput | utilisateurUpsertWithWhereUniqueWithoutType_utilisateurInput[]
    createMany?: utilisateurCreateManyType_utilisateurInputEnvelope
    set?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
    disconnect?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
    delete?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
    connect?: utilisateurWhereUniqueInput | utilisateurWhereUniqueInput[]
    update?: utilisateurUpdateWithWhereUniqueWithoutType_utilisateurInput | utilisateurUpdateWithWhereUniqueWithoutType_utilisateurInput[]
    updateMany?: utilisateurUpdateManyWithWhereWithoutType_utilisateurInput | utilisateurUpdateManyWithWhereWithoutType_utilisateurInput[]
    deleteMany?: utilisateurScalarWhereInput | utilisateurScalarWhereInput[]
  }

  export type articleCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<articleCreateWithoutUtilisateurInput, articleUncheckedCreateWithoutUtilisateurInput> | articleCreateWithoutUtilisateurInput[] | articleUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: articleCreateOrConnectWithoutUtilisateurInput | articleCreateOrConnectWithoutUtilisateurInput[]
    createMany?: articleCreateManyUtilisateurInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type favorisCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<favorisCreateWithoutUtilisateurInput, favorisUncheckedCreateWithoutUtilisateurInput> | favorisCreateWithoutUtilisateurInput[] | favorisUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: favorisCreateOrConnectWithoutUtilisateurInput | favorisCreateOrConnectWithoutUtilisateurInput[]
    createMany?: favorisCreateManyUtilisateurInputEnvelope
    connect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
  }

  export type type_utilisateurCreateNestedOneWithoutUtilisateurInput = {
    create?: XOR<type_utilisateurCreateWithoutUtilisateurInput, type_utilisateurUncheckedCreateWithoutUtilisateurInput>
    connectOrCreate?: type_utilisateurCreateOrConnectWithoutUtilisateurInput
    connect?: type_utilisateurWhereUniqueInput
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type articleUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<articleCreateWithoutUtilisateurInput, articleUncheckedCreateWithoutUtilisateurInput> | articleCreateWithoutUtilisateurInput[] | articleUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: articleCreateOrConnectWithoutUtilisateurInput | articleCreateOrConnectWithoutUtilisateurInput[]
    createMany?: articleCreateManyUtilisateurInputEnvelope
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
  }

  export type favorisUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<favorisCreateWithoutUtilisateurInput, favorisUncheckedCreateWithoutUtilisateurInput> | favorisCreateWithoutUtilisateurInput[] | favorisUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: favorisCreateOrConnectWithoutUtilisateurInput | favorisCreateOrConnectWithoutUtilisateurInput[]
    createMany?: favorisCreateManyUtilisateurInputEnvelope
    connect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type articleUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<articleCreateWithoutUtilisateurInput, articleUncheckedCreateWithoutUtilisateurInput> | articleCreateWithoutUtilisateurInput[] | articleUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: articleCreateOrConnectWithoutUtilisateurInput | articleCreateOrConnectWithoutUtilisateurInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutUtilisateurInput | articleUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: articleCreateManyUtilisateurInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutUtilisateurInput | articleUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: articleUpdateManyWithWhereWithoutUtilisateurInput | articleUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type favorisUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<favorisCreateWithoutUtilisateurInput, favorisUncheckedCreateWithoutUtilisateurInput> | favorisCreateWithoutUtilisateurInput[] | favorisUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: favorisCreateOrConnectWithoutUtilisateurInput | favorisCreateOrConnectWithoutUtilisateurInput[]
    upsert?: favorisUpsertWithWhereUniqueWithoutUtilisateurInput | favorisUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: favorisCreateManyUtilisateurInputEnvelope
    set?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    disconnect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    delete?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    connect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    update?: favorisUpdateWithWhereUniqueWithoutUtilisateurInput | favorisUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: favorisUpdateManyWithWhereWithoutUtilisateurInput | favorisUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: favorisScalarWhereInput | favorisScalarWhereInput[]
  }

  export type type_utilisateurUpdateOneRequiredWithoutUtilisateurNestedInput = {
    create?: XOR<type_utilisateurCreateWithoutUtilisateurInput, type_utilisateurUncheckedCreateWithoutUtilisateurInput>
    connectOrCreate?: type_utilisateurCreateOrConnectWithoutUtilisateurInput
    upsert?: type_utilisateurUpsertWithoutUtilisateurInput
    connect?: type_utilisateurWhereUniqueInput
    update?: XOR<XOR<type_utilisateurUpdateToOneWithWhereWithoutUtilisateurInput, type_utilisateurUpdateWithoutUtilisateurInput>, type_utilisateurUncheckedUpdateWithoutUtilisateurInput>
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type articleUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<articleCreateWithoutUtilisateurInput, articleUncheckedCreateWithoutUtilisateurInput> | articleCreateWithoutUtilisateurInput[] | articleUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: articleCreateOrConnectWithoutUtilisateurInput | articleCreateOrConnectWithoutUtilisateurInput[]
    upsert?: articleUpsertWithWhereUniqueWithoutUtilisateurInput | articleUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: articleCreateManyUtilisateurInputEnvelope
    set?: articleWhereUniqueInput | articleWhereUniqueInput[]
    disconnect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    delete?: articleWhereUniqueInput | articleWhereUniqueInput[]
    connect?: articleWhereUniqueInput | articleWhereUniqueInput[]
    update?: articleUpdateWithWhereUniqueWithoutUtilisateurInput | articleUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: articleUpdateManyWithWhereWithoutUtilisateurInput | articleUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: articleScalarWhereInput | articleScalarWhereInput[]
  }

  export type favorisUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<favorisCreateWithoutUtilisateurInput, favorisUncheckedCreateWithoutUtilisateurInput> | favorisCreateWithoutUtilisateurInput[] | favorisUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: favorisCreateOrConnectWithoutUtilisateurInput | favorisCreateOrConnectWithoutUtilisateurInput[]
    upsert?: favorisUpsertWithWhereUniqueWithoutUtilisateurInput | favorisUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: favorisCreateManyUtilisateurInputEnvelope
    set?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    disconnect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    delete?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    connect?: favorisWhereUniqueInput | favorisWhereUniqueInput[]
    update?: favorisUpdateWithWhereUniqueWithoutUtilisateurInput | favorisUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: favorisUpdateManyWithWhereWithoutUtilisateurInput | favorisUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: favorisScalarWhereInput | favorisScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type articleCreateNestedOneWithoutConversationsInput = {
    create?: XOR<articleCreateWithoutConversationsInput, articleUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: articleCreateOrConnectWithoutConversationsInput
    connect?: articleWhereUniqueInput
  }

  export type utilisateurCreateNestedOneWithoutConversationsInput = {
    create?: XOR<utilisateurCreateWithoutConversationsInput, utilisateurUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: utilisateurCreateOrConnectWithoutConversationsInput
    connect?: utilisateurWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type articleUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<articleCreateWithoutConversationsInput, articleUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: articleCreateOrConnectWithoutConversationsInput
    upsert?: articleUpsertWithoutConversationsInput
    connect?: articleWhereUniqueInput
    update?: XOR<XOR<articleUpdateToOneWithWhereWithoutConversationsInput, articleUpdateWithoutConversationsInput>, articleUncheckedUpdateWithoutConversationsInput>
  }

  export type utilisateurUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<utilisateurCreateWithoutConversationsInput, utilisateurUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: utilisateurCreateOrConnectWithoutConversationsInput
    upsert?: utilisateurUpsertWithoutConversationsInput
    disconnect?: utilisateurWhereInput | boolean
    delete?: utilisateurWhereInput | boolean
    connect?: utilisateurWhereUniqueInput
    update?: XOR<XOR<utilisateurUpdateToOneWithWhereWithoutConversationsInput, utilisateurUpdateWithoutConversationsInput>, utilisateurUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumChoixNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Choix | EnumChoixFieldRefInput<$PrismaModel> | null
    in?: $Enums.Choix[] | ListEnumChoixFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Choix[] | ListEnumChoixFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChoixNullableFilter<$PrismaModel> | $Enums.Choix | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumChoixNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Choix | EnumChoixFieldRefInput<$PrismaModel> | null
    in?: $Enums.Choix[] | ListEnumChoixFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Choix[] | ListEnumChoixFieldRefInput<$PrismaModel> | null
    not?: NestedEnumChoixNullableWithAggregatesFilter<$PrismaModel> | $Enums.Choix | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumChoixNullableFilter<$PrismaModel>
    _max?: NestedEnumChoixNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type articleCreateWithoutArchivageInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    categorie?: categorieCreateNestedOneWithoutArticleInput
    edition_papier?: edition_papierCreateNestedOneWithoutArticleInput
    utilisateur?: utilisateurCreateNestedOneWithoutArticleInput
    article_theme?: article_themeCreateNestedManyWithoutArticleInput
    favoris?: favorisCreateNestedManyWithoutArticleInput
    photos?: photosCreateNestedManyWithoutArticleInput
    conversations?: ConversationCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutArchivageInput = {
    id?: number
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutArticleInput
    favoris?: favorisUncheckedCreateNestedManyWithoutArticleInput
    photos?: photosUncheckedCreateNestedManyWithoutArticleInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutArchivageInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutArchivageInput, articleUncheckedCreateWithoutArchivageInput>
  }

  export type articleCreateManyArchivageInputEnvelope = {
    data: articleCreateManyArchivageInput | articleCreateManyArchivageInput[]
    skipDuplicates?: boolean
  }

  export type articleUpsertWithWhereUniqueWithoutArchivageInput = {
    where: articleWhereUniqueInput
    update: XOR<articleUpdateWithoutArchivageInput, articleUncheckedUpdateWithoutArchivageInput>
    create: XOR<articleCreateWithoutArchivageInput, articleUncheckedCreateWithoutArchivageInput>
  }

  export type articleUpdateWithWhereUniqueWithoutArchivageInput = {
    where: articleWhereUniqueInput
    data: XOR<articleUpdateWithoutArchivageInput, articleUncheckedUpdateWithoutArchivageInput>
  }

  export type articleUpdateManyWithWhereWithoutArchivageInput = {
    where: articleScalarWhereInput
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyWithoutArchivageInput>
  }

  export type articleScalarWhereInput = {
    AND?: articleScalarWhereInput | articleScalarWhereInput[]
    OR?: articleScalarWhereInput[]
    NOT?: articleScalarWhereInput | articleScalarWhereInput[]
    id?: IntFilter<"article"> | number
    archivage_id?: IntNullableFilter<"article"> | number | null
    categorie_id?: IntNullableFilter<"article"> | number | null
    nom_auteur?: StringNullableFilter<"article"> | string | null
    prenom_auteur?: StringNullableFilter<"article"> | string | null
    titre?: StringNullableFilter<"article"> | string | null
    illustrations?: StringNullableFilter<"article"> | string | null
    editeur?: StringNullableFilter<"article"> | string | null
    date_impression?: StringNullableFilter<"article"> | string | null
    nombre_pages?: StringNullableFilter<"article"> | string | null
    description?: StringNullableFilter<"article"> | string | null
    prix_achat?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: IntNullableFilter<"article"> | number | null
    poids_net_kg?: StringNullableFilter<"article"> | string | null
    frais_postaux?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    date_creation?: DateTimeNullableFilter<"article"> | Date | string | null
    date_vente?: DateTimeNullableFilter<"article"> | Date | string | null
    nom_complet?: StringNullableFilter<"article"> | string | null
    pseudo_titre?: StringNullableFilter<"article"> | string | null
    collection?: StringNullableFilter<"article"> | string | null
    justification?: StringNullableFilter<"article"> | string | null
    date_EO?: StringNullableFilter<"article"> | string | null
    estimation?: StringNullableFilter<"article"> | string | null
    prix_reserve?: DecimalNullableFilter<"article"> | Decimal | DecimalJsLike | number | string | null
    disponible?: EnumChoixNullableFilter<"article"> | $Enums.Choix | null
    envoi_possible?: EnumChoixNullableFilter<"article"> | $Enums.Choix | null
    edition_papier_id?: IntNullableFilter<"article"> | number | null
    id_utilisateur?: IntNullableFilter<"article"> | number | null
  }

  export type archivageCreateWithoutArticleInput = {
    nom_archivage?: string | null
  }

  export type archivageUncheckedCreateWithoutArticleInput = {
    id?: number
    nom_archivage?: string | null
  }

  export type archivageCreateOrConnectWithoutArticleInput = {
    where: archivageWhereUniqueInput
    create: XOR<archivageCreateWithoutArticleInput, archivageUncheckedCreateWithoutArticleInput>
  }

  export type categorieCreateWithoutArticleInput = {
    nom_categorie: string
    image_url?: string | null
    image_entete_url?: string | null
    description?: string | null
    categorie_theme?: categorie_themeCreateNestedManyWithoutCategorieInput
  }

  export type categorieUncheckedCreateWithoutArticleInput = {
    id?: number
    nom_categorie: string
    image_url?: string | null
    image_entete_url?: string | null
    description?: string | null
    categorie_theme?: categorie_themeUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type categorieCreateOrConnectWithoutArticleInput = {
    where: categorieWhereUniqueInput
    create: XOR<categorieCreateWithoutArticleInput, categorieUncheckedCreateWithoutArticleInput>
  }

  export type edition_papierCreateWithoutArticleInput = {
    libelle_edition_papier?: string | null
  }

  export type edition_papierUncheckedCreateWithoutArticleInput = {
    id?: number
    libelle_edition_papier?: string | null
  }

  export type edition_papierCreateOrConnectWithoutArticleInput = {
    where: edition_papierWhereUniqueInput
    create: XOR<edition_papierCreateWithoutArticleInput, edition_papierUncheckedCreateWithoutArticleInput>
  }

  export type utilisateurCreateWithoutArticleInput = {
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    favoris?: favorisCreateNestedManyWithoutUtilisateurInput
    type_utilisateur: type_utilisateurCreateNestedOneWithoutUtilisateurInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type utilisateurUncheckedCreateWithoutArticleInput = {
    id?: number
    type_utilisateur_id: number
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    favoris?: favorisUncheckedCreateNestedManyWithoutUtilisateurInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type utilisateurCreateOrConnectWithoutArticleInput = {
    where: utilisateurWhereUniqueInput
    create: XOR<utilisateurCreateWithoutArticleInput, utilisateurUncheckedCreateWithoutArticleInput>
  }

  export type article_themeCreateWithoutArticleInput = {
    theme: themeCreateNestedOneWithoutArticle_themeInput
  }

  export type article_themeUncheckedCreateWithoutArticleInput = {
    theme_id: number
  }

  export type article_themeCreateOrConnectWithoutArticleInput = {
    where: article_themeWhereUniqueInput
    create: XOR<article_themeCreateWithoutArticleInput, article_themeUncheckedCreateWithoutArticleInput>
  }

  export type article_themeCreateManyArticleInputEnvelope = {
    data: article_themeCreateManyArticleInput | article_themeCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type favorisCreateWithoutArticleInput = {
    utilisateur: utilisateurCreateNestedOneWithoutFavorisInput
  }

  export type favorisUncheckedCreateWithoutArticleInput = {
    utilisateur_id: number
  }

  export type favorisCreateOrConnectWithoutArticleInput = {
    where: favorisWhereUniqueInput
    create: XOR<favorisCreateWithoutArticleInput, favorisUncheckedCreateWithoutArticleInput>
  }

  export type favorisCreateManyArticleInputEnvelope = {
    data: favorisCreateManyArticleInput | favorisCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type photosCreateWithoutArticleInput = {
    libelle_photo: string
    url_photo?: string | null
    a_la_une?: $Enums.Choix | null
  }

  export type photosUncheckedCreateWithoutArticleInput = {
    id?: number
    libelle_photo: string
    url_photo?: string | null
    a_la_une?: $Enums.Choix | null
  }

  export type photosCreateOrConnectWithoutArticleInput = {
    where: photosWhereUniqueInput
    create: XOR<photosCreateWithoutArticleInput, photosUncheckedCreateWithoutArticleInput>
  }

  export type photosCreateManyArticleInputEnvelope = {
    data: photosCreateManyArticleInput | photosCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutArticleInput = {
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: utilisateurCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutArticleInput = {
    id?: number
    userId?: number | null
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutArticleInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutArticleInput, ConversationUncheckedCreateWithoutArticleInput>
  }

  export type ConversationCreateManyArticleInputEnvelope = {
    data: ConversationCreateManyArticleInput | ConversationCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type archivageUpsertWithoutArticleInput = {
    update: XOR<archivageUpdateWithoutArticleInput, archivageUncheckedUpdateWithoutArticleInput>
    create: XOR<archivageCreateWithoutArticleInput, archivageUncheckedCreateWithoutArticleInput>
    where?: archivageWhereInput
  }

  export type archivageUpdateToOneWithWhereWithoutArticleInput = {
    where?: archivageWhereInput
    data: XOR<archivageUpdateWithoutArticleInput, archivageUncheckedUpdateWithoutArticleInput>
  }

  export type archivageUpdateWithoutArticleInput = {
    nom_archivage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type archivageUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_archivage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categorieUpsertWithoutArticleInput = {
    update: XOR<categorieUpdateWithoutArticleInput, categorieUncheckedUpdateWithoutArticleInput>
    create: XOR<categorieCreateWithoutArticleInput, categorieUncheckedCreateWithoutArticleInput>
    where?: categorieWhereInput
  }

  export type categorieUpdateToOneWithWhereWithoutArticleInput = {
    where?: categorieWhereInput
    data: XOR<categorieUpdateWithoutArticleInput, categorieUncheckedUpdateWithoutArticleInput>
  }

  export type categorieUpdateWithoutArticleInput = {
    nom_categorie?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_entete_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorie_theme?: categorie_themeUpdateManyWithoutCategorieNestedInput
  }

  export type categorieUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_categorie?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_entete_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categorie_theme?: categorie_themeUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type edition_papierUpsertWithoutArticleInput = {
    update: XOR<edition_papierUpdateWithoutArticleInput, edition_papierUncheckedUpdateWithoutArticleInput>
    create: XOR<edition_papierCreateWithoutArticleInput, edition_papierUncheckedCreateWithoutArticleInput>
    where?: edition_papierWhereInput
  }

  export type edition_papierUpdateToOneWithWhereWithoutArticleInput = {
    where?: edition_papierWhereInput
    data: XOR<edition_papierUpdateWithoutArticleInput, edition_papierUncheckedUpdateWithoutArticleInput>
  }

  export type edition_papierUpdateWithoutArticleInput = {
    libelle_edition_papier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type edition_papierUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_edition_papier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type utilisateurUpsertWithoutArticleInput = {
    update: XOR<utilisateurUpdateWithoutArticleInput, utilisateurUncheckedUpdateWithoutArticleInput>
    create: XOR<utilisateurCreateWithoutArticleInput, utilisateurUncheckedCreateWithoutArticleInput>
    where?: utilisateurWhereInput
  }

  export type utilisateurUpdateToOneWithWhereWithoutArticleInput = {
    where?: utilisateurWhereInput
    data: XOR<utilisateurUpdateWithoutArticleInput, utilisateurUncheckedUpdateWithoutArticleInput>
  }

  export type utilisateurUpdateWithoutArticleInput = {
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoris?: favorisUpdateManyWithoutUtilisateurNestedInput
    type_utilisateur?: type_utilisateurUpdateOneRequiredWithoutUtilisateurNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type utilisateurUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_utilisateur_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoris?: favorisUncheckedUpdateManyWithoutUtilisateurNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type article_themeUpsertWithWhereUniqueWithoutArticleInput = {
    where: article_themeWhereUniqueInput
    update: XOR<article_themeUpdateWithoutArticleInput, article_themeUncheckedUpdateWithoutArticleInput>
    create: XOR<article_themeCreateWithoutArticleInput, article_themeUncheckedCreateWithoutArticleInput>
  }

  export type article_themeUpdateWithWhereUniqueWithoutArticleInput = {
    where: article_themeWhereUniqueInput
    data: XOR<article_themeUpdateWithoutArticleInput, article_themeUncheckedUpdateWithoutArticleInput>
  }

  export type article_themeUpdateManyWithWhereWithoutArticleInput = {
    where: article_themeScalarWhereInput
    data: XOR<article_themeUpdateManyMutationInput, article_themeUncheckedUpdateManyWithoutArticleInput>
  }

  export type article_themeScalarWhereInput = {
    AND?: article_themeScalarWhereInput | article_themeScalarWhereInput[]
    OR?: article_themeScalarWhereInput[]
    NOT?: article_themeScalarWhereInput | article_themeScalarWhereInput[]
    article_id?: IntFilter<"article_theme"> | number
    theme_id?: IntFilter<"article_theme"> | number
  }

  export type favorisUpsertWithWhereUniqueWithoutArticleInput = {
    where: favorisWhereUniqueInput
    update: XOR<favorisUpdateWithoutArticleInput, favorisUncheckedUpdateWithoutArticleInput>
    create: XOR<favorisCreateWithoutArticleInput, favorisUncheckedCreateWithoutArticleInput>
  }

  export type favorisUpdateWithWhereUniqueWithoutArticleInput = {
    where: favorisWhereUniqueInput
    data: XOR<favorisUpdateWithoutArticleInput, favorisUncheckedUpdateWithoutArticleInput>
  }

  export type favorisUpdateManyWithWhereWithoutArticleInput = {
    where: favorisScalarWhereInput
    data: XOR<favorisUpdateManyMutationInput, favorisUncheckedUpdateManyWithoutArticleInput>
  }

  export type favorisScalarWhereInput = {
    AND?: favorisScalarWhereInput | favorisScalarWhereInput[]
    OR?: favorisScalarWhereInput[]
    NOT?: favorisScalarWhereInput | favorisScalarWhereInput[]
    utilisateur_id?: IntFilter<"favoris"> | number
    article_id?: IntFilter<"favoris"> | number
  }

  export type photosUpsertWithWhereUniqueWithoutArticleInput = {
    where: photosWhereUniqueInput
    update: XOR<photosUpdateWithoutArticleInput, photosUncheckedUpdateWithoutArticleInput>
    create: XOR<photosCreateWithoutArticleInput, photosUncheckedCreateWithoutArticleInput>
  }

  export type photosUpdateWithWhereUniqueWithoutArticleInput = {
    where: photosWhereUniqueInput
    data: XOR<photosUpdateWithoutArticleInput, photosUncheckedUpdateWithoutArticleInput>
  }

  export type photosUpdateManyWithWhereWithoutArticleInput = {
    where: photosScalarWhereInput
    data: XOR<photosUpdateManyMutationInput, photosUncheckedUpdateManyWithoutArticleInput>
  }

  export type photosScalarWhereInput = {
    AND?: photosScalarWhereInput | photosScalarWhereInput[]
    OR?: photosScalarWhereInput[]
    NOT?: photosScalarWhereInput | photosScalarWhereInput[]
    id?: IntFilter<"photos"> | number
    article_id?: IntFilter<"photos"> | number
    libelle_photo?: StringFilter<"photos"> | string
    url_photo?: StringNullableFilter<"photos"> | string | null
    a_la_une?: EnumChoixNullableFilter<"photos"> | $Enums.Choix | null
  }

  export type ConversationUpsertWithWhereUniqueWithoutArticleInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutArticleInput, ConversationUncheckedUpdateWithoutArticleInput>
    create: XOR<ConversationCreateWithoutArticleInput, ConversationUncheckedCreateWithoutArticleInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutArticleInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutArticleInput, ConversationUncheckedUpdateWithoutArticleInput>
  }

  export type ConversationUpdateManyWithWhereWithoutArticleInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutArticleInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: IntFilter<"Conversation"> | number
    articleId?: IntFilter<"Conversation"> | number
    userId?: IntNullableFilter<"Conversation"> | number | null
    guestName?: StringNullableFilter<"Conversation"> | string | null
    guestEmail?: StringNullableFilter<"Conversation"> | string | null
    isClosed?: BoolFilter<"Conversation"> | boolean
    isReadByAdmin?: BoolFilter<"Conversation"> | boolean
    isReadByUser?: BoolFilter<"Conversation"> | boolean
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type articleCreateWithoutArticle_themeInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    archivage?: archivageCreateNestedOneWithoutArticleInput
    categorie?: categorieCreateNestedOneWithoutArticleInput
    edition_papier?: edition_papierCreateNestedOneWithoutArticleInput
    utilisateur?: utilisateurCreateNestedOneWithoutArticleInput
    favoris?: favorisCreateNestedManyWithoutArticleInput
    photos?: photosCreateNestedManyWithoutArticleInput
    conversations?: ConversationCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutArticle_themeInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
    favoris?: favorisUncheckedCreateNestedManyWithoutArticleInput
    photos?: photosUncheckedCreateNestedManyWithoutArticleInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutArticle_themeInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutArticle_themeInput, articleUncheckedCreateWithoutArticle_themeInput>
  }

  export type themeCreateWithoutArticle_themeInput = {
    libelle_theme?: string | null
    categorie_theme?: categorie_themeCreateNestedManyWithoutThemeInput
  }

  export type themeUncheckedCreateWithoutArticle_themeInput = {
    id?: number
    libelle_theme?: string | null
    categorie_theme?: categorie_themeUncheckedCreateNestedManyWithoutThemeInput
  }

  export type themeCreateOrConnectWithoutArticle_themeInput = {
    where: themeWhereUniqueInput
    create: XOR<themeCreateWithoutArticle_themeInput, themeUncheckedCreateWithoutArticle_themeInput>
  }

  export type articleUpsertWithoutArticle_themeInput = {
    update: XOR<articleUpdateWithoutArticle_themeInput, articleUncheckedUpdateWithoutArticle_themeInput>
    create: XOR<articleCreateWithoutArticle_themeInput, articleUncheckedCreateWithoutArticle_themeInput>
    where?: articleWhereInput
  }

  export type articleUpdateToOneWithWhereWithoutArticle_themeInput = {
    where?: articleWhereInput
    data: XOR<articleUpdateWithoutArticle_themeInput, articleUncheckedUpdateWithoutArticle_themeInput>
  }

  export type articleUpdateWithoutArticle_themeInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    archivage?: archivageUpdateOneWithoutArticleNestedInput
    categorie?: categorieUpdateOneWithoutArticleNestedInput
    edition_papier?: edition_papierUpdateOneWithoutArticleNestedInput
    utilisateur?: utilisateurUpdateOneWithoutArticleNestedInput
    favoris?: favorisUpdateManyWithoutArticleNestedInput
    photos?: photosUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutArticle_themeInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
    favoris?: favorisUncheckedUpdateManyWithoutArticleNestedInput
    photos?: photosUncheckedUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type themeUpsertWithoutArticle_themeInput = {
    update: XOR<themeUpdateWithoutArticle_themeInput, themeUncheckedUpdateWithoutArticle_themeInput>
    create: XOR<themeCreateWithoutArticle_themeInput, themeUncheckedCreateWithoutArticle_themeInput>
    where?: themeWhereInput
  }

  export type themeUpdateToOneWithWhereWithoutArticle_themeInput = {
    where?: themeWhereInput
    data: XOR<themeUpdateWithoutArticle_themeInput, themeUncheckedUpdateWithoutArticle_themeInput>
  }

  export type themeUpdateWithoutArticle_themeInput = {
    libelle_theme?: NullableStringFieldUpdateOperationsInput | string | null
    categorie_theme?: categorie_themeUpdateManyWithoutThemeNestedInput
  }

  export type themeUncheckedUpdateWithoutArticle_themeInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: NullableStringFieldUpdateOperationsInput | string | null
    categorie_theme?: categorie_themeUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type articleCreateWithoutCategorieInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    archivage?: archivageCreateNestedOneWithoutArticleInput
    edition_papier?: edition_papierCreateNestedOneWithoutArticleInput
    utilisateur?: utilisateurCreateNestedOneWithoutArticleInput
    article_theme?: article_themeCreateNestedManyWithoutArticleInput
    favoris?: favorisCreateNestedManyWithoutArticleInput
    photos?: photosCreateNestedManyWithoutArticleInput
    conversations?: ConversationCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutCategorieInput = {
    id?: number
    archivage_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutArticleInput
    favoris?: favorisUncheckedCreateNestedManyWithoutArticleInput
    photos?: photosUncheckedCreateNestedManyWithoutArticleInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutCategorieInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutCategorieInput, articleUncheckedCreateWithoutCategorieInput>
  }

  export type articleCreateManyCategorieInputEnvelope = {
    data: articleCreateManyCategorieInput | articleCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type categorie_themeCreateWithoutCategorieInput = {
    theme: themeCreateNestedOneWithoutCategorie_themeInput
  }

  export type categorie_themeUncheckedCreateWithoutCategorieInput = {
    theme_id: number
  }

  export type categorie_themeCreateOrConnectWithoutCategorieInput = {
    where: categorie_themeWhereUniqueInput
    create: XOR<categorie_themeCreateWithoutCategorieInput, categorie_themeUncheckedCreateWithoutCategorieInput>
  }

  export type categorie_themeCreateManyCategorieInputEnvelope = {
    data: categorie_themeCreateManyCategorieInput | categorie_themeCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type articleUpsertWithWhereUniqueWithoutCategorieInput = {
    where: articleWhereUniqueInput
    update: XOR<articleUpdateWithoutCategorieInput, articleUncheckedUpdateWithoutCategorieInput>
    create: XOR<articleCreateWithoutCategorieInput, articleUncheckedCreateWithoutCategorieInput>
  }

  export type articleUpdateWithWhereUniqueWithoutCategorieInput = {
    where: articleWhereUniqueInput
    data: XOR<articleUpdateWithoutCategorieInput, articleUncheckedUpdateWithoutCategorieInput>
  }

  export type articleUpdateManyWithWhereWithoutCategorieInput = {
    where: articleScalarWhereInput
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyWithoutCategorieInput>
  }

  export type categorie_themeUpsertWithWhereUniqueWithoutCategorieInput = {
    where: categorie_themeWhereUniqueInput
    update: XOR<categorie_themeUpdateWithoutCategorieInput, categorie_themeUncheckedUpdateWithoutCategorieInput>
    create: XOR<categorie_themeCreateWithoutCategorieInput, categorie_themeUncheckedCreateWithoutCategorieInput>
  }

  export type categorie_themeUpdateWithWhereUniqueWithoutCategorieInput = {
    where: categorie_themeWhereUniqueInput
    data: XOR<categorie_themeUpdateWithoutCategorieInput, categorie_themeUncheckedUpdateWithoutCategorieInput>
  }

  export type categorie_themeUpdateManyWithWhereWithoutCategorieInput = {
    where: categorie_themeScalarWhereInput
    data: XOR<categorie_themeUpdateManyMutationInput, categorie_themeUncheckedUpdateManyWithoutCategorieInput>
  }

  export type categorie_themeScalarWhereInput = {
    AND?: categorie_themeScalarWhereInput | categorie_themeScalarWhereInput[]
    OR?: categorie_themeScalarWhereInput[]
    NOT?: categorie_themeScalarWhereInput | categorie_themeScalarWhereInput[]
    categorie_id?: IntFilter<"categorie_theme"> | number
    theme_id?: IntFilter<"categorie_theme"> | number
  }

  export type categorieCreateWithoutCategorie_themeInput = {
    nom_categorie: string
    image_url?: string | null
    image_entete_url?: string | null
    description?: string | null
    article?: articleCreateNestedManyWithoutCategorieInput
  }

  export type categorieUncheckedCreateWithoutCategorie_themeInput = {
    id?: number
    nom_categorie: string
    image_url?: string | null
    image_entete_url?: string | null
    description?: string | null
    article?: articleUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type categorieCreateOrConnectWithoutCategorie_themeInput = {
    where: categorieWhereUniqueInput
    create: XOR<categorieCreateWithoutCategorie_themeInput, categorieUncheckedCreateWithoutCategorie_themeInput>
  }

  export type themeCreateWithoutCategorie_themeInput = {
    libelle_theme?: string | null
    article_theme?: article_themeCreateNestedManyWithoutThemeInput
  }

  export type themeUncheckedCreateWithoutCategorie_themeInput = {
    id?: number
    libelle_theme?: string | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutThemeInput
  }

  export type themeCreateOrConnectWithoutCategorie_themeInput = {
    where: themeWhereUniqueInput
    create: XOR<themeCreateWithoutCategorie_themeInput, themeUncheckedCreateWithoutCategorie_themeInput>
  }

  export type categorieUpsertWithoutCategorie_themeInput = {
    update: XOR<categorieUpdateWithoutCategorie_themeInput, categorieUncheckedUpdateWithoutCategorie_themeInput>
    create: XOR<categorieCreateWithoutCategorie_themeInput, categorieUncheckedCreateWithoutCategorie_themeInput>
    where?: categorieWhereInput
  }

  export type categorieUpdateToOneWithWhereWithoutCategorie_themeInput = {
    where?: categorieWhereInput
    data: XOR<categorieUpdateWithoutCategorie_themeInput, categorieUncheckedUpdateWithoutCategorie_themeInput>
  }

  export type categorieUpdateWithoutCategorie_themeInput = {
    nom_categorie?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_entete_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUpdateManyWithoutCategorieNestedInput
  }

  export type categorieUncheckedUpdateWithoutCategorie_themeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_categorie?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    image_entete_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    article?: articleUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type themeUpsertWithoutCategorie_themeInput = {
    update: XOR<themeUpdateWithoutCategorie_themeInput, themeUncheckedUpdateWithoutCategorie_themeInput>
    create: XOR<themeCreateWithoutCategorie_themeInput, themeUncheckedCreateWithoutCategorie_themeInput>
    where?: themeWhereInput
  }

  export type themeUpdateToOneWithWhereWithoutCategorie_themeInput = {
    where?: themeWhereInput
    data: XOR<themeUpdateWithoutCategorie_themeInput, themeUncheckedUpdateWithoutCategorie_themeInput>
  }

  export type themeUpdateWithoutCategorie_themeInput = {
    libelle_theme?: NullableStringFieldUpdateOperationsInput | string | null
    article_theme?: article_themeUpdateManyWithoutThemeNestedInput
  }

  export type themeUncheckedUpdateWithoutCategorie_themeInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_theme?: NullableStringFieldUpdateOperationsInput | string | null
    article_theme?: article_themeUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type articleCreateWithoutEdition_papierInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    archivage?: archivageCreateNestedOneWithoutArticleInput
    categorie?: categorieCreateNestedOneWithoutArticleInput
    utilisateur?: utilisateurCreateNestedOneWithoutArticleInput
    article_theme?: article_themeCreateNestedManyWithoutArticleInput
    favoris?: favorisCreateNestedManyWithoutArticleInput
    photos?: photosCreateNestedManyWithoutArticleInput
    conversations?: ConversationCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutEdition_papierInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    id_utilisateur?: number | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutArticleInput
    favoris?: favorisUncheckedCreateNestedManyWithoutArticleInput
    photos?: photosUncheckedCreateNestedManyWithoutArticleInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutEdition_papierInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutEdition_papierInput, articleUncheckedCreateWithoutEdition_papierInput>
  }

  export type articleCreateManyEdition_papierInputEnvelope = {
    data: articleCreateManyEdition_papierInput | articleCreateManyEdition_papierInput[]
    skipDuplicates?: boolean
  }

  export type articleUpsertWithWhereUniqueWithoutEdition_papierInput = {
    where: articleWhereUniqueInput
    update: XOR<articleUpdateWithoutEdition_papierInput, articleUncheckedUpdateWithoutEdition_papierInput>
    create: XOR<articleCreateWithoutEdition_papierInput, articleUncheckedCreateWithoutEdition_papierInput>
  }

  export type articleUpdateWithWhereUniqueWithoutEdition_papierInput = {
    where: articleWhereUniqueInput
    data: XOR<articleUpdateWithoutEdition_papierInput, articleUncheckedUpdateWithoutEdition_papierInput>
  }

  export type articleUpdateManyWithWhereWithoutEdition_papierInput = {
    where: articleScalarWhereInput
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyWithoutEdition_papierInput>
  }

  export type articleCreateWithoutFavorisInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    archivage?: archivageCreateNestedOneWithoutArticleInput
    categorie?: categorieCreateNestedOneWithoutArticleInput
    edition_papier?: edition_papierCreateNestedOneWithoutArticleInput
    utilisateur?: utilisateurCreateNestedOneWithoutArticleInput
    article_theme?: article_themeCreateNestedManyWithoutArticleInput
    photos?: photosCreateNestedManyWithoutArticleInput
    conversations?: ConversationCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutFavorisInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutArticleInput
    photos?: photosUncheckedCreateNestedManyWithoutArticleInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutFavorisInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutFavorisInput, articleUncheckedCreateWithoutFavorisInput>
  }

  export type utilisateurCreateWithoutFavorisInput = {
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    article?: articleCreateNestedManyWithoutUtilisateurInput
    type_utilisateur: type_utilisateurCreateNestedOneWithoutUtilisateurInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type utilisateurUncheckedCreateWithoutFavorisInput = {
    id?: number
    type_utilisateur_id: number
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    article?: articleUncheckedCreateNestedManyWithoutUtilisateurInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type utilisateurCreateOrConnectWithoutFavorisInput = {
    where: utilisateurWhereUniqueInput
    create: XOR<utilisateurCreateWithoutFavorisInput, utilisateurUncheckedCreateWithoutFavorisInput>
  }

  export type articleUpsertWithoutFavorisInput = {
    update: XOR<articleUpdateWithoutFavorisInput, articleUncheckedUpdateWithoutFavorisInput>
    create: XOR<articleCreateWithoutFavorisInput, articleUncheckedCreateWithoutFavorisInput>
    where?: articleWhereInput
  }

  export type articleUpdateToOneWithWhereWithoutFavorisInput = {
    where?: articleWhereInput
    data: XOR<articleUpdateWithoutFavorisInput, articleUncheckedUpdateWithoutFavorisInput>
  }

  export type articleUpdateWithoutFavorisInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    archivage?: archivageUpdateOneWithoutArticleNestedInput
    categorie?: categorieUpdateOneWithoutArticleNestedInput
    edition_papier?: edition_papierUpdateOneWithoutArticleNestedInput
    utilisateur?: utilisateurUpdateOneWithoutArticleNestedInput
    article_theme?: article_themeUpdateManyWithoutArticleNestedInput
    photos?: photosUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutFavorisInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
    article_theme?: article_themeUncheckedUpdateManyWithoutArticleNestedInput
    photos?: photosUncheckedUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type utilisateurUpsertWithoutFavorisInput = {
    update: XOR<utilisateurUpdateWithoutFavorisInput, utilisateurUncheckedUpdateWithoutFavorisInput>
    create: XOR<utilisateurCreateWithoutFavorisInput, utilisateurUncheckedCreateWithoutFavorisInput>
    where?: utilisateurWhereInput
  }

  export type utilisateurUpdateToOneWithWhereWithoutFavorisInput = {
    where?: utilisateurWhereInput
    data: XOR<utilisateurUpdateWithoutFavorisInput, utilisateurUncheckedUpdateWithoutFavorisInput>
  }

  export type utilisateurUpdateWithoutFavorisInput = {
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUpdateManyWithoutUtilisateurNestedInput
    type_utilisateur?: type_utilisateurUpdateOneRequiredWithoutUtilisateurNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type utilisateurUncheckedUpdateWithoutFavorisInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_utilisateur_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUncheckedUpdateManyWithoutUtilisateurNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type articleCreateWithoutPhotosInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    archivage?: archivageCreateNestedOneWithoutArticleInput
    categorie?: categorieCreateNestedOneWithoutArticleInput
    edition_papier?: edition_papierCreateNestedOneWithoutArticleInput
    utilisateur?: utilisateurCreateNestedOneWithoutArticleInput
    article_theme?: article_themeCreateNestedManyWithoutArticleInput
    favoris?: favorisCreateNestedManyWithoutArticleInput
    conversations?: ConversationCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutPhotosInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutArticleInput
    favoris?: favorisUncheckedCreateNestedManyWithoutArticleInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutPhotosInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutPhotosInput, articleUncheckedCreateWithoutPhotosInput>
  }

  export type articleUpsertWithoutPhotosInput = {
    update: XOR<articleUpdateWithoutPhotosInput, articleUncheckedUpdateWithoutPhotosInput>
    create: XOR<articleCreateWithoutPhotosInput, articleUncheckedCreateWithoutPhotosInput>
    where?: articleWhereInput
  }

  export type articleUpdateToOneWithWhereWithoutPhotosInput = {
    where?: articleWhereInput
    data: XOR<articleUpdateWithoutPhotosInput, articleUncheckedUpdateWithoutPhotosInput>
  }

  export type articleUpdateWithoutPhotosInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    archivage?: archivageUpdateOneWithoutArticleNestedInput
    categorie?: categorieUpdateOneWithoutArticleNestedInput
    edition_papier?: edition_papierUpdateOneWithoutArticleNestedInput
    utilisateur?: utilisateurUpdateOneWithoutArticleNestedInput
    article_theme?: article_themeUpdateManyWithoutArticleNestedInput
    favoris?: favorisUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
    article_theme?: article_themeUncheckedUpdateManyWithoutArticleNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type article_themeCreateWithoutThemeInput = {
    article: articleCreateNestedOneWithoutArticle_themeInput
  }

  export type article_themeUncheckedCreateWithoutThemeInput = {
    article_id: number
  }

  export type article_themeCreateOrConnectWithoutThemeInput = {
    where: article_themeWhereUniqueInput
    create: XOR<article_themeCreateWithoutThemeInput, article_themeUncheckedCreateWithoutThemeInput>
  }

  export type article_themeCreateManyThemeInputEnvelope = {
    data: article_themeCreateManyThemeInput | article_themeCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type categorie_themeCreateWithoutThemeInput = {
    categorie: categorieCreateNestedOneWithoutCategorie_themeInput
  }

  export type categorie_themeUncheckedCreateWithoutThemeInput = {
    categorie_id: number
  }

  export type categorie_themeCreateOrConnectWithoutThemeInput = {
    where: categorie_themeWhereUniqueInput
    create: XOR<categorie_themeCreateWithoutThemeInput, categorie_themeUncheckedCreateWithoutThemeInput>
  }

  export type categorie_themeCreateManyThemeInputEnvelope = {
    data: categorie_themeCreateManyThemeInput | categorie_themeCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type article_themeUpsertWithWhereUniqueWithoutThemeInput = {
    where: article_themeWhereUniqueInput
    update: XOR<article_themeUpdateWithoutThemeInput, article_themeUncheckedUpdateWithoutThemeInput>
    create: XOR<article_themeCreateWithoutThemeInput, article_themeUncheckedCreateWithoutThemeInput>
  }

  export type article_themeUpdateWithWhereUniqueWithoutThemeInput = {
    where: article_themeWhereUniqueInput
    data: XOR<article_themeUpdateWithoutThemeInput, article_themeUncheckedUpdateWithoutThemeInput>
  }

  export type article_themeUpdateManyWithWhereWithoutThemeInput = {
    where: article_themeScalarWhereInput
    data: XOR<article_themeUpdateManyMutationInput, article_themeUncheckedUpdateManyWithoutThemeInput>
  }

  export type categorie_themeUpsertWithWhereUniqueWithoutThemeInput = {
    where: categorie_themeWhereUniqueInput
    update: XOR<categorie_themeUpdateWithoutThemeInput, categorie_themeUncheckedUpdateWithoutThemeInput>
    create: XOR<categorie_themeCreateWithoutThemeInput, categorie_themeUncheckedCreateWithoutThemeInput>
  }

  export type categorie_themeUpdateWithWhereUniqueWithoutThemeInput = {
    where: categorie_themeWhereUniqueInput
    data: XOR<categorie_themeUpdateWithoutThemeInput, categorie_themeUncheckedUpdateWithoutThemeInput>
  }

  export type categorie_themeUpdateManyWithWhereWithoutThemeInput = {
    where: categorie_themeScalarWhereInput
    data: XOR<categorie_themeUpdateManyMutationInput, categorie_themeUncheckedUpdateManyWithoutThemeInput>
  }

  export type utilisateurCreateWithoutType_utilisateurInput = {
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    article?: articleCreateNestedManyWithoutUtilisateurInput
    favoris?: favorisCreateNestedManyWithoutUtilisateurInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type utilisateurUncheckedCreateWithoutType_utilisateurInput = {
    id?: number
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    article?: articleUncheckedCreateNestedManyWithoutUtilisateurInput
    favoris?: favorisUncheckedCreateNestedManyWithoutUtilisateurInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type utilisateurCreateOrConnectWithoutType_utilisateurInput = {
    where: utilisateurWhereUniqueInput
    create: XOR<utilisateurCreateWithoutType_utilisateurInput, utilisateurUncheckedCreateWithoutType_utilisateurInput>
  }

  export type utilisateurCreateManyType_utilisateurInputEnvelope = {
    data: utilisateurCreateManyType_utilisateurInput | utilisateurCreateManyType_utilisateurInput[]
    skipDuplicates?: boolean
  }

  export type utilisateurUpsertWithWhereUniqueWithoutType_utilisateurInput = {
    where: utilisateurWhereUniqueInput
    update: XOR<utilisateurUpdateWithoutType_utilisateurInput, utilisateurUncheckedUpdateWithoutType_utilisateurInput>
    create: XOR<utilisateurCreateWithoutType_utilisateurInput, utilisateurUncheckedCreateWithoutType_utilisateurInput>
  }

  export type utilisateurUpdateWithWhereUniqueWithoutType_utilisateurInput = {
    where: utilisateurWhereUniqueInput
    data: XOR<utilisateurUpdateWithoutType_utilisateurInput, utilisateurUncheckedUpdateWithoutType_utilisateurInput>
  }

  export type utilisateurUpdateManyWithWhereWithoutType_utilisateurInput = {
    where: utilisateurScalarWhereInput
    data: XOR<utilisateurUpdateManyMutationInput, utilisateurUncheckedUpdateManyWithoutType_utilisateurInput>
  }

  export type utilisateurScalarWhereInput = {
    AND?: utilisateurScalarWhereInput | utilisateurScalarWhereInput[]
    OR?: utilisateurScalarWhereInput[]
    NOT?: utilisateurScalarWhereInput | utilisateurScalarWhereInput[]
    id?: IntFilter<"utilisateur"> | number
    type_utilisateur_id?: IntFilter<"utilisateur"> | number
    email?: StringFilter<"utilisateur"> | string
    nom?: StringNullableFilter<"utilisateur"> | string | null
    prenom?: StringNullableFilter<"utilisateur"> | string | null
    password?: StringNullableFilter<"utilisateur"> | string | null
    adresse?: StringNullableFilter<"utilisateur"> | string | null
    code_postal?: StringNullableFilter<"utilisateur"> | string | null
    ville?: StringNullableFilter<"utilisateur"> | string | null
    telephone?: StringNullableFilter<"utilisateur"> | string | null
    role?: EnumRoleNullableFilter<"utilisateur"> | $Enums.Role | null
    passwordResetToken?: StringNullableFilter<"utilisateur"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"utilisateur"> | Date | string | null
  }

  export type articleCreateWithoutUtilisateurInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    archivage?: archivageCreateNestedOneWithoutArticleInput
    categorie?: categorieCreateNestedOneWithoutArticleInput
    edition_papier?: edition_papierCreateNestedOneWithoutArticleInput
    article_theme?: article_themeCreateNestedManyWithoutArticleInput
    favoris?: favorisCreateNestedManyWithoutArticleInput
    photos?: photosCreateNestedManyWithoutArticleInput
    conversations?: ConversationCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutArticleInput
    favoris?: favorisUncheckedCreateNestedManyWithoutArticleInput
    photos?: photosUncheckedCreateNestedManyWithoutArticleInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutUtilisateurInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutUtilisateurInput, articleUncheckedCreateWithoutUtilisateurInput>
  }

  export type articleCreateManyUtilisateurInputEnvelope = {
    data: articleCreateManyUtilisateurInput | articleCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type favorisCreateWithoutUtilisateurInput = {
    article: articleCreateNestedOneWithoutFavorisInput
  }

  export type favorisUncheckedCreateWithoutUtilisateurInput = {
    article_id: number
  }

  export type favorisCreateOrConnectWithoutUtilisateurInput = {
    where: favorisWhereUniqueInput
    create: XOR<favorisCreateWithoutUtilisateurInput, favorisUncheckedCreateWithoutUtilisateurInput>
  }

  export type favorisCreateManyUtilisateurInputEnvelope = {
    data: favorisCreateManyUtilisateurInput | favorisCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type type_utilisateurCreateWithoutUtilisateurInput = {
    nom_type_utilisateur: string
  }

  export type type_utilisateurUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    nom_type_utilisateur: string
  }

  export type type_utilisateurCreateOrConnectWithoutUtilisateurInput = {
    where: type_utilisateurWhereUniqueInput
    create: XOR<type_utilisateurCreateWithoutUtilisateurInput, type_utilisateurUncheckedCreateWithoutUtilisateurInput>
  }

  export type ConversationCreateWithoutUserInput = {
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    article: articleCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: number
    articleId: number
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateManyUserInputEnvelope = {
    data: ConversationCreateManyUserInput | ConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type articleUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: articleWhereUniqueInput
    update: XOR<articleUpdateWithoutUtilisateurInput, articleUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<articleCreateWithoutUtilisateurInput, articleUncheckedCreateWithoutUtilisateurInput>
  }

  export type articleUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: articleWhereUniqueInput
    data: XOR<articleUpdateWithoutUtilisateurInput, articleUncheckedUpdateWithoutUtilisateurInput>
  }

  export type articleUpdateManyWithWhereWithoutUtilisateurInput = {
    where: articleScalarWhereInput
    data: XOR<articleUpdateManyMutationInput, articleUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type favorisUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: favorisWhereUniqueInput
    update: XOR<favorisUpdateWithoutUtilisateurInput, favorisUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<favorisCreateWithoutUtilisateurInput, favorisUncheckedCreateWithoutUtilisateurInput>
  }

  export type favorisUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: favorisWhereUniqueInput
    data: XOR<favorisUpdateWithoutUtilisateurInput, favorisUncheckedUpdateWithoutUtilisateurInput>
  }

  export type favorisUpdateManyWithWhereWithoutUtilisateurInput = {
    where: favorisScalarWhereInput
    data: XOR<favorisUpdateManyMutationInput, favorisUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type type_utilisateurUpsertWithoutUtilisateurInput = {
    update: XOR<type_utilisateurUpdateWithoutUtilisateurInput, type_utilisateurUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<type_utilisateurCreateWithoutUtilisateurInput, type_utilisateurUncheckedCreateWithoutUtilisateurInput>
    where?: type_utilisateurWhereInput
  }

  export type type_utilisateurUpdateToOneWithWhereWithoutUtilisateurInput = {
    where?: type_utilisateurWhereInput
    data: XOR<type_utilisateurUpdateWithoutUtilisateurInput, type_utilisateurUncheckedUpdateWithoutUtilisateurInput>
  }

  export type type_utilisateurUpdateWithoutUtilisateurInput = {
    nom_type_utilisateur?: StringFieldUpdateOperationsInput | string
  }

  export type type_utilisateurUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_type_utilisateur?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type articleCreateWithoutConversationsInput = {
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    archivage?: archivageCreateNestedOneWithoutArticleInput
    categorie?: categorieCreateNestedOneWithoutArticleInput
    edition_papier?: edition_papierCreateNestedOneWithoutArticleInput
    utilisateur?: utilisateurCreateNestedOneWithoutArticleInput
    article_theme?: article_themeCreateNestedManyWithoutArticleInput
    favoris?: favorisCreateNestedManyWithoutArticleInput
    photos?: photosCreateNestedManyWithoutArticleInput
  }

  export type articleUncheckedCreateWithoutConversationsInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
    article_theme?: article_themeUncheckedCreateNestedManyWithoutArticleInput
    favoris?: favorisUncheckedCreateNestedManyWithoutArticleInput
    photos?: photosUncheckedCreateNestedManyWithoutArticleInput
  }

  export type articleCreateOrConnectWithoutConversationsInput = {
    where: articleWhereUniqueInput
    create: XOR<articleCreateWithoutConversationsInput, articleUncheckedCreateWithoutConversationsInput>
  }

  export type utilisateurCreateWithoutConversationsInput = {
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    article?: articleCreateNestedManyWithoutUtilisateurInput
    favoris?: favorisCreateNestedManyWithoutUtilisateurInput
    type_utilisateur: type_utilisateurCreateNestedOneWithoutUtilisateurInput
  }

  export type utilisateurUncheckedCreateWithoutConversationsInput = {
    id?: number
    type_utilisateur_id: number
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    article?: articleUncheckedCreateNestedManyWithoutUtilisateurInput
    favoris?: favorisUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type utilisateurCreateOrConnectWithoutConversationsInput = {
    where: utilisateurWhereUniqueInput
    create: XOR<utilisateurCreateWithoutConversationsInput, utilisateurUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    senderIsAdmin: boolean
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: number
    senderIsAdmin: boolean
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type articleUpsertWithoutConversationsInput = {
    update: XOR<articleUpdateWithoutConversationsInput, articleUncheckedUpdateWithoutConversationsInput>
    create: XOR<articleCreateWithoutConversationsInput, articleUncheckedCreateWithoutConversationsInput>
    where?: articleWhereInput
  }

  export type articleUpdateToOneWithWhereWithoutConversationsInput = {
    where?: articleWhereInput
    data: XOR<articleUpdateWithoutConversationsInput, articleUncheckedUpdateWithoutConversationsInput>
  }

  export type articleUpdateWithoutConversationsInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    archivage?: archivageUpdateOneWithoutArticleNestedInput
    categorie?: categorieUpdateOneWithoutArticleNestedInput
    edition_papier?: edition_papierUpdateOneWithoutArticleNestedInput
    utilisateur?: utilisateurUpdateOneWithoutArticleNestedInput
    article_theme?: article_themeUpdateManyWithoutArticleNestedInput
    favoris?: favorisUpdateManyWithoutArticleNestedInput
    photos?: photosUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
    article_theme?: article_themeUncheckedUpdateManyWithoutArticleNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutArticleNestedInput
    photos?: photosUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type utilisateurUpsertWithoutConversationsInput = {
    update: XOR<utilisateurUpdateWithoutConversationsInput, utilisateurUncheckedUpdateWithoutConversationsInput>
    create: XOR<utilisateurCreateWithoutConversationsInput, utilisateurUncheckedCreateWithoutConversationsInput>
    where?: utilisateurWhereInput
  }

  export type utilisateurUpdateToOneWithWhereWithoutConversationsInput = {
    where?: utilisateurWhereInput
    data: XOR<utilisateurUpdateWithoutConversationsInput, utilisateurUncheckedUpdateWithoutConversationsInput>
  }

  export type utilisateurUpdateWithoutConversationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUpdateManyWithoutUtilisateurNestedInput
    favoris?: favorisUpdateManyWithoutUtilisateurNestedInput
    type_utilisateur?: type_utilisateurUpdateOneRequiredWithoutUtilisateurNestedInput
  }

  export type utilisateurUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type_utilisateur_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUncheckedUpdateManyWithoutUtilisateurNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    senderIsAdmin?: BoolFilter<"Message"> | boolean
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ConversationCreateWithoutMessagesInput = {
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    article: articleCreateNestedOneWithoutConversationsInput
    user?: utilisateurCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: number
    articleId: number
    userId?: number | null
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: articleUpdateOneRequiredWithoutConversationsNestedInput
    user?: utilisateurUpdateOneWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articleCreateManyArchivageInput = {
    id?: number
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
  }

  export type articleUpdateWithoutArchivageInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    categorie?: categorieUpdateOneWithoutArticleNestedInput
    edition_papier?: edition_papierUpdateOneWithoutArticleNestedInput
    utilisateur?: utilisateurUpdateOneWithoutArticleNestedInput
    article_theme?: article_themeUpdateManyWithoutArticleNestedInput
    favoris?: favorisUpdateManyWithoutArticleNestedInput
    photos?: photosUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutArchivageInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
    article_theme?: article_themeUncheckedUpdateManyWithoutArticleNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutArticleNestedInput
    photos?: photosUncheckedUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateManyWithoutArchivageInput = {
    id?: IntFieldUpdateOperationsInput | number
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type article_themeCreateManyArticleInput = {
    theme_id: number
  }

  export type favorisCreateManyArticleInput = {
    utilisateur_id: number
  }

  export type photosCreateManyArticleInput = {
    id?: number
    libelle_photo: string
    url_photo?: string | null
    a_la_une?: $Enums.Choix | null
  }

  export type ConversationCreateManyArticleInput = {
    id?: number
    userId?: number | null
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type article_themeUpdateWithoutArticleInput = {
    theme?: themeUpdateOneRequiredWithoutArticle_themeNestedInput
  }

  export type article_themeUncheckedUpdateWithoutArticleInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type article_themeUncheckedUpdateManyWithoutArticleInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type favorisUpdateWithoutArticleInput = {
    utilisateur?: utilisateurUpdateOneRequiredWithoutFavorisNestedInput
  }

  export type favorisUncheckedUpdateWithoutArticleInput = {
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type favorisUncheckedUpdateManyWithoutArticleInput = {
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type photosUpdateWithoutArticleInput = {
    libelle_photo?: StringFieldUpdateOperationsInput | string
    url_photo?: NullableStringFieldUpdateOperationsInput | string | null
    a_la_une?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
  }

  export type photosUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_photo?: StringFieldUpdateOperationsInput | string
    url_photo?: NullableStringFieldUpdateOperationsInput | string | null
    a_la_une?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
  }

  export type photosUncheckedUpdateManyWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle_photo?: StringFieldUpdateOperationsInput | string
    url_photo?: NullableStringFieldUpdateOperationsInput | string | null
    a_la_une?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
  }

  export type ConversationUpdateWithoutArticleInput = {
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: utilisateurUpdateOneWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutArticleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type articleCreateManyCategorieInput = {
    id?: number
    archivage_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
    id_utilisateur?: number | null
  }

  export type categorie_themeCreateManyCategorieInput = {
    theme_id: number
  }

  export type articleUpdateWithoutCategorieInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    archivage?: archivageUpdateOneWithoutArticleNestedInput
    edition_papier?: edition_papierUpdateOneWithoutArticleNestedInput
    utilisateur?: utilisateurUpdateOneWithoutArticleNestedInput
    article_theme?: article_themeUpdateManyWithoutArticleNestedInput
    favoris?: favorisUpdateManyWithoutArticleNestedInput
    photos?: photosUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
    article_theme?: article_themeUncheckedUpdateManyWithoutArticleNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutArticleNestedInput
    photos?: photosUncheckedUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type categorie_themeUpdateWithoutCategorieInput = {
    theme?: themeUpdateOneRequiredWithoutCategorie_themeNestedInput
  }

  export type categorie_themeUncheckedUpdateWithoutCategorieInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type categorie_themeUncheckedUpdateManyWithoutCategorieInput = {
    theme_id?: IntFieldUpdateOperationsInput | number
  }

  export type articleCreateManyEdition_papierInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    id_utilisateur?: number | null
  }

  export type articleUpdateWithoutEdition_papierInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    archivage?: archivageUpdateOneWithoutArticleNestedInput
    categorie?: categorieUpdateOneWithoutArticleNestedInput
    utilisateur?: utilisateurUpdateOneWithoutArticleNestedInput
    article_theme?: article_themeUpdateManyWithoutArticleNestedInput
    favoris?: favorisUpdateManyWithoutArticleNestedInput
    photos?: photosUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutEdition_papierInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
    article_theme?: article_themeUncheckedUpdateManyWithoutArticleNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutArticleNestedInput
    photos?: photosUncheckedUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateManyWithoutEdition_papierInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    id_utilisateur?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type article_themeCreateManyThemeInput = {
    article_id: number
  }

  export type categorie_themeCreateManyThemeInput = {
    categorie_id: number
  }

  export type article_themeUpdateWithoutThemeInput = {
    article?: articleUpdateOneRequiredWithoutArticle_themeNestedInput
  }

  export type article_themeUncheckedUpdateWithoutThemeInput = {
    article_id?: IntFieldUpdateOperationsInput | number
  }

  export type article_themeUncheckedUpdateManyWithoutThemeInput = {
    article_id?: IntFieldUpdateOperationsInput | number
  }

  export type categorie_themeUpdateWithoutThemeInput = {
    categorie?: categorieUpdateOneRequiredWithoutCategorie_themeNestedInput
  }

  export type categorie_themeUncheckedUpdateWithoutThemeInput = {
    categorie_id?: IntFieldUpdateOperationsInput | number
  }

  export type categorie_themeUncheckedUpdateManyWithoutThemeInput = {
    categorie_id?: IntFieldUpdateOperationsInput | number
  }

  export type utilisateurCreateManyType_utilisateurInput = {
    id?: number
    email: string
    nom?: string | null
    prenom?: string | null
    password?: string | null
    adresse?: string | null
    code_postal?: string | null
    ville?: string | null
    telephone?: string | null
    role?: $Enums.Role | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type utilisateurUpdateWithoutType_utilisateurInput = {
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUpdateManyWithoutUtilisateurNestedInput
    favoris?: favorisUpdateManyWithoutUtilisateurNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type utilisateurUncheckedUpdateWithoutType_utilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    article?: articleUncheckedUpdateManyWithoutUtilisateurNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutUtilisateurNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type utilisateurUncheckedUpdateManyWithoutType_utilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articleCreateManyUtilisateurInput = {
    id?: number
    archivage_id?: number | null
    categorie_id?: number | null
    nom_auteur?: string | null
    prenom_auteur?: string | null
    titre?: string | null
    illustrations?: string | null
    editeur?: string | null
    date_impression?: string | null
    nombre_pages?: string | null
    description?: string | null
    prix_achat?: Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: Decimal | DecimalJsLike | number | string | null
    quantite_volume?: number | null
    poids_net_kg?: string | null
    frais_postaux?: Decimal | DecimalJsLike | number | string | null
    date_creation?: Date | string | null
    date_vente?: Date | string | null
    nom_complet?: string | null
    pseudo_titre?: string | null
    collection?: string | null
    justification?: string | null
    date_EO?: string | null
    estimation?: string | null
    prix_reserve?: Decimal | DecimalJsLike | number | string | null
    disponible?: $Enums.Choix | null
    envoi_possible?: $Enums.Choix | null
    edition_papier_id?: number | null
  }

  export type favorisCreateManyUtilisateurInput = {
    article_id: number
  }

  export type ConversationCreateManyUserInput = {
    id?: number
    articleId: number
    guestName?: string | null
    guestEmail?: string | null
    isClosed?: boolean
    isReadByAdmin?: boolean
    isReadByUser?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type articleUpdateWithoutUtilisateurInput = {
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    archivage?: archivageUpdateOneWithoutArticleNestedInput
    categorie?: categorieUpdateOneWithoutArticleNestedInput
    edition_papier?: edition_papierUpdateOneWithoutArticleNestedInput
    article_theme?: article_themeUpdateManyWithoutArticleNestedInput
    favoris?: favorisUpdateManyWithoutArticleNestedInput
    photos?: photosUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
    article_theme?: article_themeUncheckedUpdateManyWithoutArticleNestedInput
    favoris?: favorisUncheckedUpdateManyWithoutArticleNestedInput
    photos?: photosUncheckedUpdateManyWithoutArticleNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type articleUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    archivage_id?: NullableIntFieldUpdateOperationsInput | number | null
    categorie_id?: NullableIntFieldUpdateOperationsInput | number | null
    nom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    prenom_auteur?: NullableStringFieldUpdateOperationsInput | string | null
    titre?: NullableStringFieldUpdateOperationsInput | string | null
    illustrations?: NullableStringFieldUpdateOperationsInput | string | null
    editeur?: NullableStringFieldUpdateOperationsInput | string | null
    date_impression?: NullableStringFieldUpdateOperationsInput | string | null
    nombre_pages?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix_achat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valeur_marche_min?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    prix_vente_internet?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantite_volume?: NullableIntFieldUpdateOperationsInput | number | null
    poids_net_kg?: NullableStringFieldUpdateOperationsInput | string | null
    frais_postaux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    date_vente?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    pseudo_titre?: NullableStringFieldUpdateOperationsInput | string | null
    collection?: NullableStringFieldUpdateOperationsInput | string | null
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    date_EO?: NullableStringFieldUpdateOperationsInput | string | null
    estimation?: NullableStringFieldUpdateOperationsInput | string | null
    prix_reserve?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    disponible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    envoi_possible?: NullableEnumChoixFieldUpdateOperationsInput | $Enums.Choix | null
    edition_papier_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type favorisUpdateWithoutUtilisateurInput = {
    article?: articleUpdateOneRequiredWithoutFavorisNestedInput
  }

  export type favorisUncheckedUpdateWithoutUtilisateurInput = {
    article_id?: IntFieldUpdateOperationsInput | number
  }

  export type favorisUncheckedUpdateManyWithoutUtilisateurInput = {
    article_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationUpdateWithoutUserInput = {
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: articleUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    articleId?: IntFieldUpdateOperationsInput | number
    guestName?: NullableStringFieldUpdateOperationsInput | string | null
    guestEmail?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    isReadByAdmin?: BoolFieldUpdateOperationsInput | boolean
    isReadByUser?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: number
    senderIsAdmin: boolean
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    senderIsAdmin?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderIsAdmin?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderIsAdmin?: BoolFieldUpdateOperationsInput | boolean
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}