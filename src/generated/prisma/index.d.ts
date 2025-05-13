
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserDetails
 * 
 */
export type UserDetails = $Result.DefaultSelection<Prisma.$UserDetailsPayload>
/**
 * Model Posts
 * 
 */
export type Posts = $Result.DefaultSelection<Prisma.$PostsPayload>
/**
 * Model PostInterests
 * 
 */
export type PostInterests = $Result.DefaultSelection<Prisma.$PostInterestsPayload>
/**
 * Model Reactions
 * 
 */
export type Reactions = $Result.DefaultSelection<Prisma.$ReactionsPayload>
/**
 * Model Matches
 * 
 */
export type Matches = $Result.DefaultSelection<Prisma.$MatchesPayload>
/**
 * Model Interests
 * 
 */
export type Interests = $Result.DefaultSelection<Prisma.$InterestsPayload>
/**
 * Model UserInterests
 * 
 */
export type UserInterests = $Result.DefaultSelection<Prisma.$UserInterestsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDetails`: Exposes CRUD operations for the **UserDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDetails
    * const userDetails = await prisma.userDetails.findMany()
    * ```
    */
  get userDetails(): Prisma.UserDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **Posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.PostsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postInterests`: Exposes CRUD operations for the **PostInterests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostInterests
    * const postInterests = await prisma.postInterests.findMany()
    * ```
    */
  get postInterests(): Prisma.PostInterestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reactions`: Exposes CRUD operations for the **Reactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reactions.findMany()
    * ```
    */
  get reactions(): Prisma.ReactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matches`: Exposes CRUD operations for the **Matches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.matches.findMany()
    * ```
    */
  get matches(): Prisma.MatchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interests`: Exposes CRUD operations for the **Interests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interests.findMany()
    * ```
    */
  get interests(): Prisma.InterestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userInterests`: Exposes CRUD operations for the **UserInterests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInterests
    * const userInterests = await prisma.userInterests.findMany()
    * ```
    */
  get userInterests(): Prisma.UserInterestsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    UserDetails: 'UserDetails',
    Posts: 'Posts',
    PostInterests: 'PostInterests',
    Reactions: 'Reactions',
    Matches: 'Matches',
    Interests: 'Interests',
    UserInterests: 'UserInterests'
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
      modelProps: "user" | "userDetails" | "posts" | "postInterests" | "reactions" | "matches" | "interests" | "userInterests"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserDetails: {
        payload: Prisma.$UserDetailsPayload<ExtArgs>
        fields: Prisma.UserDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findFirst: {
            args: Prisma.UserDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findMany: {
            args: Prisma.UserDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          create: {
            args: Prisma.UserDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          createMany: {
            args: Prisma.UserDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          delete: {
            args: Prisma.UserDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          update: {
            args: Prisma.UserDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          deleteMany: {
            args: Prisma.UserDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          upsert: {
            args: Prisma.UserDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          aggregate: {
            args: Prisma.UserDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDetails>
          }
          groupBy: {
            args: Prisma.UserDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsCountAggregateOutputType> | number
          }
        }
      }
      Posts: {
        payload: Prisma.$PostsPayload<ExtArgs>
        fields: Prisma.PostsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findFirst: {
            args: Prisma.PostsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          findMany: {
            args: Prisma.PostsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          create: {
            args: Prisma.PostsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          createMany: {
            args: Prisma.PostsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          delete: {
            args: Prisma.PostsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          update: {
            args: Prisma.PostsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          deleteMany: {
            args: Prisma.PostsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>[]
          }
          upsert: {
            args: Prisma.PostsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.PostsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      PostInterests: {
        payload: Prisma.$PostInterestsPayload<ExtArgs>
        fields: Prisma.PostInterestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostInterestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostInterestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>
          }
          findFirst: {
            args: Prisma.PostInterestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostInterestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>
          }
          findMany: {
            args: Prisma.PostInterestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>[]
          }
          create: {
            args: Prisma.PostInterestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>
          }
          createMany: {
            args: Prisma.PostInterestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostInterestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>[]
          }
          delete: {
            args: Prisma.PostInterestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>
          }
          update: {
            args: Prisma.PostInterestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>
          }
          deleteMany: {
            args: Prisma.PostInterestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostInterestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostInterestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>[]
          }
          upsert: {
            args: Prisma.PostInterestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInterestsPayload>
          }
          aggregate: {
            args: Prisma.PostInterestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostInterests>
          }
          groupBy: {
            args: Prisma.PostInterestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostInterestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostInterestsCountArgs<ExtArgs>
            result: $Utils.Optional<PostInterestsCountAggregateOutputType> | number
          }
        }
      }
      Reactions: {
        payload: Prisma.$ReactionsPayload<ExtArgs>
        fields: Prisma.ReactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          findFirst: {
            args: Prisma.ReactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          findMany: {
            args: Prisma.ReactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>[]
          }
          create: {
            args: Prisma.ReactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          createMany: {
            args: Prisma.ReactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>[]
          }
          delete: {
            args: Prisma.ReactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          update: {
            args: Prisma.ReactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          deleteMany: {
            args: Prisma.ReactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>[]
          }
          upsert: {
            args: Prisma.ReactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionsPayload>
          }
          aggregate: {
            args: Prisma.ReactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReactions>
          }
          groupBy: {
            args: Prisma.ReactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionsCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionsCountAggregateOutputType> | number
          }
        }
      }
      Matches: {
        payload: Prisma.$MatchesPayload<ExtArgs>
        fields: Prisma.MatchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          findFirst: {
            args: Prisma.MatchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          findMany: {
            args: Prisma.MatchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          create: {
            args: Prisma.MatchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          createMany: {
            args: Prisma.MatchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          delete: {
            args: Prisma.MatchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          update: {
            args: Prisma.MatchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          deleteMany: {
            args: Prisma.MatchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>[]
          }
          upsert: {
            args: Prisma.MatchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchesPayload>
          }
          aggregate: {
            args: Prisma.MatchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatches>
          }
          groupBy: {
            args: Prisma.MatchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchesCountArgs<ExtArgs>
            result: $Utils.Optional<MatchesCountAggregateOutputType> | number
          }
        }
      }
      Interests: {
        payload: Prisma.$InterestsPayload<ExtArgs>
        fields: Prisma.InterestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>
          }
          findFirst: {
            args: Prisma.InterestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>
          }
          findMany: {
            args: Prisma.InterestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>[]
          }
          create: {
            args: Prisma.InterestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>
          }
          createMany: {
            args: Prisma.InterestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InterestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>[]
          }
          delete: {
            args: Prisma.InterestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>
          }
          update: {
            args: Prisma.InterestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>
          }
          deleteMany: {
            args: Prisma.InterestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InterestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InterestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>[]
          }
          upsert: {
            args: Prisma.InterestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InterestsPayload>
          }
          aggregate: {
            args: Prisma.InterestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInterests>
          }
          groupBy: {
            args: Prisma.InterestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InterestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestsCountArgs<ExtArgs>
            result: $Utils.Optional<InterestsCountAggregateOutputType> | number
          }
        }
      }
      UserInterests: {
        payload: Prisma.$UserInterestsPayload<ExtArgs>
        fields: Prisma.UserInterestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserInterestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserInterestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>
          }
          findFirst: {
            args: Prisma.UserInterestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserInterestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>
          }
          findMany: {
            args: Prisma.UserInterestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>[]
          }
          create: {
            args: Prisma.UserInterestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>
          }
          createMany: {
            args: Prisma.UserInterestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserInterestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>[]
          }
          delete: {
            args: Prisma.UserInterestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>
          }
          update: {
            args: Prisma.UserInterestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>
          }
          deleteMany: {
            args: Prisma.UserInterestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserInterestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserInterestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>[]
          }
          upsert: {
            args: Prisma.UserInterestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserInterestsPayload>
          }
          aggregate: {
            args: Prisma.UserInterestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserInterests>
          }
          groupBy: {
            args: Prisma.UserInterestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserInterestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserInterestsCountArgs<ExtArgs>
            result: $Utils.Optional<UserInterestsCountAggregateOutputType> | number
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
    user?: UserOmit
    userDetails?: UserDetailsOmit
    posts?: PostsOmit
    postInterests?: PostInterestsOmit
    reactions?: ReactionsOmit
    matches?: MatchesOmit
    interests?: InterestsOmit
    userInterests?: UserInterestsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    reactions: number
    matches: number
    matchedWith: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    matches?: boolean | UserCountOutputTypeCountMatchesArgs
    matchedWith?: boolean | UserCountOutputTypeCountMatchedWithArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchesWhereInput
  }


  /**
   * Count Type UserDetailsCountOutputType
   */

  export type UserDetailsCountOutputType = {
    userInterests: number
  }

  export type UserDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userInterests?: boolean | UserDetailsCountOutputTypeCountUserInterestsArgs
  }

  // Custom InputTypes
  /**
   * UserDetailsCountOutputType without action
   */
  export type UserDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsCountOutputType
     */
    select?: UserDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserDetailsCountOutputType without action
   */
  export type UserDetailsCountOutputTypeCountUserInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestsWhereInput
  }


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    postInterests: number
    reactions: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postInterests?: boolean | PostsCountOutputTypeCountPostInterestsArgs
    reactions?: boolean | PostsCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountPostInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostInterestsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionsWhereInput
  }


  /**
   * Count Type InterestsCountOutputType
   */

  export type InterestsCountOutputType = {
    userInterests: number
    postInterests: number
  }

  export type InterestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userInterests?: boolean | InterestsCountOutputTypeCountUserInterestsArgs
    postInterests?: boolean | InterestsCountOutputTypeCountPostInterestsArgs
  }

  // Custom InputTypes
  /**
   * InterestsCountOutputType without action
   */
  export type InterestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestsCountOutputType
     */
    select?: InterestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InterestsCountOutputType without action
   */
  export type InterestsCountOutputTypeCountUserInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestsWhereInput
  }

  /**
   * InterestsCountOutputType without action
   */
  export type InterestsCountOutputTypeCountPostInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostInterestsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    matchedWith?: boolean | User$matchedWithArgs<ExtArgs>
    userDetails?: boolean | User$userDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    matchedWith?: boolean | User$matchedWithArgs<ExtArgs>
    userDetails?: boolean | User$userDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostsPayload<ExtArgs>[]
      reactions: Prisma.$ReactionsPayload<ExtArgs>[]
      matches: Prisma.$MatchesPayload<ExtArgs>[]
      matchedWith: Prisma.$MatchesPayload<ExtArgs>[]
      userDetails: Prisma.$UserDetailsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends User$matchesArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchedWith<T extends User$matchedWithArgs<ExtArgs> = {}>(args?: Subset<T, User$matchedWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userDetails<T extends User$userDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$userDetailsArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    cursor?: PostsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    where?: ReactionsWhereInput
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    cursor?: ReactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * User.matches
   */
  export type User$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    where?: MatchesWhereInput
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    cursor?: MatchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * User.matchedWith
   */
  export type User$matchedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    where?: MatchesWhereInput
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    cursor?: MatchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * User.userDetails
   */
  export type User$userDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    where?: UserDetailsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserDetails
   */

  export type AggregateUserDetails = {
    _count: UserDetailsCountAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  export type UserDetailsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    bio: string | null
    department: string | null
    year: string | null
    image: string | null
    reading: string | null
    availability: string | null
  }

  export type UserDetailsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    bio: string | null
    department: string | null
    year: string | null
    image: string | null
    reading: string | null
    availability: string | null
  }

  export type UserDetailsCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    bio: number
    department: number
    year: number
    image: number
    reading: number
    availability: number
    _all: number
  }


  export type UserDetailsMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    bio?: true
    department?: true
    year?: true
    image?: true
    reading?: true
    availability?: true
  }

  export type UserDetailsMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    bio?: true
    department?: true
    year?: true
    image?: true
    reading?: true
    availability?: true
  }

  export type UserDetailsCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    bio?: true
    department?: true
    year?: true
    image?: true
    reading?: true
    availability?: true
    _all?: true
  }

  export type UserDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to aggregate.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDetails
    **/
    _count?: true | UserDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDetailsMaxAggregateInputType
  }

  export type GetUserDetailsAggregateType<T extends UserDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDetails[P]>
      : GetScalarType<T[P], AggregateUserDetails[P]>
  }




  export type UserDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsWhereInput
    orderBy?: UserDetailsOrderByWithAggregationInput | UserDetailsOrderByWithAggregationInput[]
    by: UserDetailsScalarFieldEnum[] | UserDetailsScalarFieldEnum
    having?: UserDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDetailsCountAggregateInputType | true
    _min?: UserDetailsMinAggregateInputType
    _max?: UserDetailsMaxAggregateInputType
  }

  export type UserDetailsGroupByOutputType = {
    id: string
    userId: string
    name: string
    bio: string
    department: string
    year: string
    image: string
    reading: string
    availability: string
    _count: UserDetailsCountAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  type GetUserDetailsGroupByPayload<T extends UserDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
        }
      >
    >


  export type UserDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    bio?: boolean
    department?: boolean
    year?: boolean
    image?: boolean
    reading?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    userInterests?: boolean | UserDetails$userInterestsArgs<ExtArgs>
    _count?: boolean | UserDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    bio?: boolean
    department?: boolean
    year?: boolean
    image?: boolean
    reading?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    bio?: boolean
    department?: boolean
    year?: boolean
    image?: boolean
    reading?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    bio?: boolean
    department?: boolean
    year?: boolean
    image?: boolean
    reading?: boolean
    availability?: boolean
  }

  export type UserDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "bio" | "department" | "year" | "image" | "reading" | "availability", ExtArgs["result"]["userDetails"]>
  export type UserDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    userInterests?: boolean | UserDetails$userInterestsArgs<ExtArgs>
    _count?: boolean | UserDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      userInterests: Prisma.$UserInterestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      bio: string
      department: string
      year: string
      image: string
      reading: string
      availability: string
    }, ExtArgs["result"]["userDetails"]>
    composites: {}
  }

  type UserDetailsGetPayload<S extends boolean | null | undefined | UserDetailsDefaultArgs> = $Result.GetResult<Prisma.$UserDetailsPayload, S>

  type UserDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDetailsCountAggregateInputType | true
    }

  export interface UserDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDetails'], meta: { name: 'UserDetails' } }
    /**
     * Find zero or one UserDetails that matches the filter.
     * @param {UserDetailsFindUniqueArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDetailsFindUniqueArgs>(args: SelectSubset<T, UserDetailsFindUniqueArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDetailsFindUniqueOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDetailsFindFirstArgs>(args?: SelectSubset<T, UserDetailsFindFirstArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDetails
     * const userDetails = await prisma.userDetails.findMany()
     * 
     * // Get first 10 UserDetails
     * const userDetails = await prisma.userDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDetailsWithIdOnly = await prisma.userDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDetailsFindManyArgs>(args?: SelectSubset<T, UserDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDetails.
     * @param {UserDetailsCreateArgs} args - Arguments to create a UserDetails.
     * @example
     * // Create one UserDetails
     * const UserDetails = await prisma.userDetails.create({
     *   data: {
     *     // ... data to create a UserDetails
     *   }
     * })
     * 
     */
    create<T extends UserDetailsCreateArgs>(args: SelectSubset<T, UserDetailsCreateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDetails.
     * @param {UserDetailsCreateManyArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDetailsCreateManyArgs>(args?: SelectSubset<T, UserDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDetails and returns the data saved in the database.
     * @param {UserDetailsCreateManyAndReturnArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDetails and only return the `id`
     * const userDetailsWithIdOnly = await prisma.userDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDetails.
     * @param {UserDetailsDeleteArgs} args - Arguments to delete one UserDetails.
     * @example
     * // Delete one UserDetails
     * const UserDetails = await prisma.userDetails.delete({
     *   where: {
     *     // ... filter to delete one UserDetails
     *   }
     * })
     * 
     */
    delete<T extends UserDetailsDeleteArgs>(args: SelectSubset<T, UserDetailsDeleteArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDetails.
     * @param {UserDetailsUpdateArgs} args - Arguments to update one UserDetails.
     * @example
     * // Update one UserDetails
     * const userDetails = await prisma.userDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDetailsUpdateArgs>(args: SelectSubset<T, UserDetailsUpdateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDetails.
     * @param {UserDetailsDeleteManyArgs} args - Arguments to filter UserDetails to delete.
     * @example
     * // Delete a few UserDetails
     * const { count } = await prisma.userDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDetailsDeleteManyArgs>(args?: SelectSubset<T, UserDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDetailsUpdateManyArgs>(args: SelectSubset<T, UserDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails and returns the data updated in the database.
     * @param {UserDetailsUpdateManyAndReturnArgs} args - Arguments to update many UserDetails.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDetails and only return the `id`
     * const userDetailsWithIdOnly = await prisma.userDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDetails.
     * @param {UserDetailsUpsertArgs} args - Arguments to update or create a UserDetails.
     * @example
     * // Update or create a UserDetails
     * const userDetails = await prisma.userDetails.upsert({
     *   create: {
     *     // ... data to create a UserDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDetails we want to update
     *   }
     * })
     */
    upsert<T extends UserDetailsUpsertArgs>(args: SelectSubset<T, UserDetailsUpsertArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsCountArgs} args - Arguments to filter UserDetails to count.
     * @example
     * // Count the number of UserDetails
     * const count = await prisma.userDetails.count({
     *   where: {
     *     // ... the filter for the UserDetails we want to count
     *   }
     * })
    **/
    count<T extends UserDetailsCountArgs>(
      args?: Subset<T, UserDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDetailsAggregateArgs>(args: Subset<T, UserDetailsAggregateArgs>): Prisma.PrismaPromise<GetUserDetailsAggregateType<T>>

    /**
     * Group by UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsGroupByArgs} args - Group by arguments.
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
      T extends UserDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDetailsGroupByArgs['orderBy'] }
        : { orderBy?: UserDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDetails model
   */
  readonly fields: UserDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userInterests<T extends UserDetails$userInterestsArgs<ExtArgs> = {}>(args?: Subset<T, UserDetails$userInterestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserDetails model
   */
  interface UserDetailsFieldRefs {
    readonly id: FieldRef<"UserDetails", 'String'>
    readonly userId: FieldRef<"UserDetails", 'String'>
    readonly name: FieldRef<"UserDetails", 'String'>
    readonly bio: FieldRef<"UserDetails", 'String'>
    readonly department: FieldRef<"UserDetails", 'String'>
    readonly year: FieldRef<"UserDetails", 'String'>
    readonly image: FieldRef<"UserDetails", 'String'>
    readonly reading: FieldRef<"UserDetails", 'String'>
    readonly availability: FieldRef<"UserDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserDetails findUnique
   */
  export type UserDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findUniqueOrThrow
   */
  export type UserDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findFirst
   */
  export type UserDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findFirstOrThrow
   */
  export type UserDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findMany
   */
  export type UserDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails create
   */
  export type UserDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDetails.
     */
    data: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
  }

  /**
   * UserDetails createMany
   */
  export type UserDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetails createManyAndReturn
   */
  export type UserDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetails update
   */
  export type UserDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDetails.
     */
    data: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
    /**
     * Choose, which UserDetails to update.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails updateMany
   */
  export type UserDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
  }

  /**
   * UserDetails updateManyAndReturn
   */
  export type UserDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetails upsert
   */
  export type UserDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDetails to update in case it exists.
     */
    where: UserDetailsWhereUniqueInput
    /**
     * In case the UserDetails found by the `where` argument doesn't exist, create a new UserDetails with this data.
     */
    create: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
    /**
     * In case the UserDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
  }

  /**
   * UserDetails delete
   */
  export type UserDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter which UserDetails to delete.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails deleteMany
   */
  export type UserDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to delete
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to delete.
     */
    limit?: number
  }

  /**
   * UserDetails.userInterests
   */
  export type UserDetails$userInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    where?: UserInterestsWhereInput
    orderBy?: UserInterestsOrderByWithRelationInput | UserInterestsOrderByWithRelationInput[]
    cursor?: UserInterestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInterestsScalarFieldEnum | UserInterestsScalarFieldEnum[]
  }

  /**
   * UserDetails without action
   */
  export type UserDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to aggregate.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type PostsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostsWhereInput
    orderBy?: PostsOrderByWithAggregationInput | PostsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: PostsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type PostsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    postInterests?: boolean | Posts$postInterestsArgs<ExtArgs>
    reactions?: boolean | Posts$reactionsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type PostsSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PostsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["posts"]>
  export type PostsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    postInterests?: boolean | Posts$postInterestsArgs<ExtArgs>
    reactions?: boolean | Posts$reactionsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Posts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      postInterests: Prisma.$PostInterestsPayload<ExtArgs>[]
      reactions: Prisma.$ReactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type PostsGetPayload<S extends boolean | null | undefined | PostsDefaultArgs> = $Result.GetResult<Prisma.$PostsPayload, S>

  type PostsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface PostsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Posts'], meta: { name: 'Posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {PostsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostsFindUniqueArgs>(args: SelectSubset<T, PostsFindUniqueArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostsFindFirstArgs>(args?: SelectSubset<T, PostsFindFirstArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostsFindManyArgs>(args?: SelectSubset<T, PostsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {PostsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends PostsCreateArgs>(args: SelectSubset<T, PostsCreateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostsCreateManyArgs>(args?: SelectSubset<T, PostsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {PostsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends PostsDeleteArgs>(args: SelectSubset<T, PostsDeleteArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {PostsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostsUpdateArgs>(args: SelectSubset<T, PostsUpdateArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostsDeleteManyArgs>(args?: SelectSubset<T, PostsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostsUpdateManyArgs>(args: SelectSubset<T, PostsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {PostsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends PostsUpsertArgs>(args: SelectSubset<T, PostsUpsertArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostsCountArgs>(
      args?: Subset<T, PostsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
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
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Posts model
   */
  readonly fields: PostsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    postInterests<T extends Posts$postInterestsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$postInterestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Posts$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Posts$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Posts model
   */
  interface PostsFieldRefs {
    readonly id: FieldRef<"Posts", 'String'>
    readonly content: FieldRef<"Posts", 'String'>
    readonly createdAt: FieldRef<"Posts", 'DateTime'>
    readonly updatedAt: FieldRef<"Posts", 'DateTime'>
    readonly userId: FieldRef<"Posts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Posts findUnique
   */
  export type PostsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findUniqueOrThrow
   */
  export type PostsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts findFirst
   */
  export type PostsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findFirstOrThrow
   */
  export type PostsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts findMany
   */
  export type PostsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostsOrderByWithRelationInput | PostsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * Posts create
   */
  export type PostsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to create a Posts.
     */
    data: XOR<PostsCreateInput, PostsUncheckedCreateInput>
  }

  /**
   * Posts createMany
   */
  export type PostsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Posts createManyAndReturn
   */
  export type PostsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostsCreateManyInput | PostsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts update
   */
  export type PostsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The data needed to update a Posts.
     */
    data: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
    /**
     * Choose, which Posts to update.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts updateMany
   */
  export type PostsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Posts updateManyAndReturn
   */
  export type PostsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Posts upsert
   */
  export type PostsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * The filter to search for the Posts to update in case it exists.
     */
    where: PostsWhereUniqueInput
    /**
     * In case the Posts found by the `where` argument doesn't exist, create a new Posts with this data.
     */
    create: XOR<PostsCreateInput, PostsUncheckedCreateInput>
    /**
     * In case the Posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostsUpdateInput, PostsUncheckedUpdateInput>
  }

  /**
   * Posts delete
   */
  export type PostsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
    /**
     * Filter which Posts to delete.
     */
    where: PostsWhereUniqueInput
  }

  /**
   * Posts deleteMany
   */
  export type PostsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostsWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Posts.postInterests
   */
  export type Posts$postInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    where?: PostInterestsWhereInput
    orderBy?: PostInterestsOrderByWithRelationInput | PostInterestsOrderByWithRelationInput[]
    cursor?: PostInterestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostInterestsScalarFieldEnum | PostInterestsScalarFieldEnum[]
  }

  /**
   * Posts.reactions
   */
  export type Posts$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    where?: ReactionsWhereInput
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    cursor?: ReactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Posts without action
   */
  export type PostsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Posts
     */
    select?: PostsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Posts
     */
    omit?: PostsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostsInclude<ExtArgs> | null
  }


  /**
   * Model PostInterests
   */

  export type AggregatePostInterests = {
    _count: PostInterestsCountAggregateOutputType | null
    _min: PostInterestsMinAggregateOutputType | null
    _max: PostInterestsMaxAggregateOutputType | null
  }

  export type PostInterestsMinAggregateOutputType = {
    id: string | null
    postId: string | null
    interestId: string | null
  }

  export type PostInterestsMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    interestId: string | null
  }

  export type PostInterestsCountAggregateOutputType = {
    id: number
    postId: number
    interestId: number
    _all: number
  }


  export type PostInterestsMinAggregateInputType = {
    id?: true
    postId?: true
    interestId?: true
  }

  export type PostInterestsMaxAggregateInputType = {
    id?: true
    postId?: true
    interestId?: true
  }

  export type PostInterestsCountAggregateInputType = {
    id?: true
    postId?: true
    interestId?: true
    _all?: true
  }

  export type PostInterestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostInterests to aggregate.
     */
    where?: PostInterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostInterests to fetch.
     */
    orderBy?: PostInterestsOrderByWithRelationInput | PostInterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostInterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostInterests
    **/
    _count?: true | PostInterestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostInterestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostInterestsMaxAggregateInputType
  }

  export type GetPostInterestsAggregateType<T extends PostInterestsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostInterests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostInterests[P]>
      : GetScalarType<T[P], AggregatePostInterests[P]>
  }




  export type PostInterestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostInterestsWhereInput
    orderBy?: PostInterestsOrderByWithAggregationInput | PostInterestsOrderByWithAggregationInput[]
    by: PostInterestsScalarFieldEnum[] | PostInterestsScalarFieldEnum
    having?: PostInterestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostInterestsCountAggregateInputType | true
    _min?: PostInterestsMinAggregateInputType
    _max?: PostInterestsMaxAggregateInputType
  }

  export type PostInterestsGroupByOutputType = {
    id: string
    postId: string
    interestId: string
    _count: PostInterestsCountAggregateOutputType | null
    _min: PostInterestsMinAggregateOutputType | null
    _max: PostInterestsMaxAggregateOutputType | null
  }

  type GetPostInterestsGroupByPayload<T extends PostInterestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostInterestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostInterestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostInterestsGroupByOutputType[P]>
            : GetScalarType<T[P], PostInterestsGroupByOutputType[P]>
        }
      >
    >


  export type PostInterestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    interestId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postInterests"]>

  export type PostInterestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    interestId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postInterests"]>

  export type PostInterestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    interestId?: boolean
    post?: boolean | PostsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postInterests"]>

  export type PostInterestsSelectScalar = {
    id?: boolean
    postId?: boolean
    interestId?: boolean
  }

  export type PostInterestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "interestId", ExtArgs["result"]["postInterests"]>
  export type PostInterestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }
  export type PostInterestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }
  export type PostInterestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }

  export type $PostInterestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostInterests"
    objects: {
      post: Prisma.$PostsPayload<ExtArgs>
      interest: Prisma.$InterestsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      interestId: string
    }, ExtArgs["result"]["postInterests"]>
    composites: {}
  }

  type PostInterestsGetPayload<S extends boolean | null | undefined | PostInterestsDefaultArgs> = $Result.GetResult<Prisma.$PostInterestsPayload, S>

  type PostInterestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostInterestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostInterestsCountAggregateInputType | true
    }

  export interface PostInterestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostInterests'], meta: { name: 'PostInterests' } }
    /**
     * Find zero or one PostInterests that matches the filter.
     * @param {PostInterestsFindUniqueArgs} args - Arguments to find a PostInterests
     * @example
     * // Get one PostInterests
     * const postInterests = await prisma.postInterests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostInterestsFindUniqueArgs>(args: SelectSubset<T, PostInterestsFindUniqueArgs<ExtArgs>>): Prisma__PostInterestsClient<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostInterests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostInterestsFindUniqueOrThrowArgs} args - Arguments to find a PostInterests
     * @example
     * // Get one PostInterests
     * const postInterests = await prisma.postInterests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostInterestsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostInterestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostInterestsClient<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInterestsFindFirstArgs} args - Arguments to find a PostInterests
     * @example
     * // Get one PostInterests
     * const postInterests = await prisma.postInterests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostInterestsFindFirstArgs>(args?: SelectSubset<T, PostInterestsFindFirstArgs<ExtArgs>>): Prisma__PostInterestsClient<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostInterests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInterestsFindFirstOrThrowArgs} args - Arguments to find a PostInterests
     * @example
     * // Get one PostInterests
     * const postInterests = await prisma.postInterests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostInterestsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostInterestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostInterestsClient<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInterestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostInterests
     * const postInterests = await prisma.postInterests.findMany()
     * 
     * // Get first 10 PostInterests
     * const postInterests = await prisma.postInterests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postInterestsWithIdOnly = await prisma.postInterests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostInterestsFindManyArgs>(args?: SelectSubset<T, PostInterestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostInterests.
     * @param {PostInterestsCreateArgs} args - Arguments to create a PostInterests.
     * @example
     * // Create one PostInterests
     * const PostInterests = await prisma.postInterests.create({
     *   data: {
     *     // ... data to create a PostInterests
     *   }
     * })
     * 
     */
    create<T extends PostInterestsCreateArgs>(args: SelectSubset<T, PostInterestsCreateArgs<ExtArgs>>): Prisma__PostInterestsClient<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostInterests.
     * @param {PostInterestsCreateManyArgs} args - Arguments to create many PostInterests.
     * @example
     * // Create many PostInterests
     * const postInterests = await prisma.postInterests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostInterestsCreateManyArgs>(args?: SelectSubset<T, PostInterestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostInterests and returns the data saved in the database.
     * @param {PostInterestsCreateManyAndReturnArgs} args - Arguments to create many PostInterests.
     * @example
     * // Create many PostInterests
     * const postInterests = await prisma.postInterests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostInterests and only return the `id`
     * const postInterestsWithIdOnly = await prisma.postInterests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostInterestsCreateManyAndReturnArgs>(args?: SelectSubset<T, PostInterestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostInterests.
     * @param {PostInterestsDeleteArgs} args - Arguments to delete one PostInterests.
     * @example
     * // Delete one PostInterests
     * const PostInterests = await prisma.postInterests.delete({
     *   where: {
     *     // ... filter to delete one PostInterests
     *   }
     * })
     * 
     */
    delete<T extends PostInterestsDeleteArgs>(args: SelectSubset<T, PostInterestsDeleteArgs<ExtArgs>>): Prisma__PostInterestsClient<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostInterests.
     * @param {PostInterestsUpdateArgs} args - Arguments to update one PostInterests.
     * @example
     * // Update one PostInterests
     * const postInterests = await prisma.postInterests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostInterestsUpdateArgs>(args: SelectSubset<T, PostInterestsUpdateArgs<ExtArgs>>): Prisma__PostInterestsClient<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostInterests.
     * @param {PostInterestsDeleteManyArgs} args - Arguments to filter PostInterests to delete.
     * @example
     * // Delete a few PostInterests
     * const { count } = await prisma.postInterests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostInterestsDeleteManyArgs>(args?: SelectSubset<T, PostInterestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInterestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostInterests
     * const postInterests = await prisma.postInterests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostInterestsUpdateManyArgs>(args: SelectSubset<T, PostInterestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostInterests and returns the data updated in the database.
     * @param {PostInterestsUpdateManyAndReturnArgs} args - Arguments to update many PostInterests.
     * @example
     * // Update many PostInterests
     * const postInterests = await prisma.postInterests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostInterests and only return the `id`
     * const postInterestsWithIdOnly = await prisma.postInterests.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostInterestsUpdateManyAndReturnArgs>(args: SelectSubset<T, PostInterestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostInterests.
     * @param {PostInterestsUpsertArgs} args - Arguments to update or create a PostInterests.
     * @example
     * // Update or create a PostInterests
     * const postInterests = await prisma.postInterests.upsert({
     *   create: {
     *     // ... data to create a PostInterests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostInterests we want to update
     *   }
     * })
     */
    upsert<T extends PostInterestsUpsertArgs>(args: SelectSubset<T, PostInterestsUpsertArgs<ExtArgs>>): Prisma__PostInterestsClient<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInterestsCountArgs} args - Arguments to filter PostInterests to count.
     * @example
     * // Count the number of PostInterests
     * const count = await prisma.postInterests.count({
     *   where: {
     *     // ... the filter for the PostInterests we want to count
     *   }
     * })
    **/
    count<T extends PostInterestsCountArgs>(
      args?: Subset<T, PostInterestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostInterestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInterestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostInterestsAggregateArgs>(args: Subset<T, PostInterestsAggregateArgs>): Prisma.PrismaPromise<GetPostInterestsAggregateType<T>>

    /**
     * Group by PostInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInterestsGroupByArgs} args - Group by arguments.
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
      T extends PostInterestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostInterestsGroupByArgs['orderBy'] }
        : { orderBy?: PostInterestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostInterestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostInterestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostInterests model
   */
  readonly fields: PostInterestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostInterests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostInterestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends InterestsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterestsDefaultArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostInterests model
   */
  interface PostInterestsFieldRefs {
    readonly id: FieldRef<"PostInterests", 'String'>
    readonly postId: FieldRef<"PostInterests", 'String'>
    readonly interestId: FieldRef<"PostInterests", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostInterests findUnique
   */
  export type PostInterestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * Filter, which PostInterests to fetch.
     */
    where: PostInterestsWhereUniqueInput
  }

  /**
   * PostInterests findUniqueOrThrow
   */
  export type PostInterestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * Filter, which PostInterests to fetch.
     */
    where: PostInterestsWhereUniqueInput
  }

  /**
   * PostInterests findFirst
   */
  export type PostInterestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * Filter, which PostInterests to fetch.
     */
    where?: PostInterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostInterests to fetch.
     */
    orderBy?: PostInterestsOrderByWithRelationInput | PostInterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostInterests.
     */
    cursor?: PostInterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostInterests.
     */
    distinct?: PostInterestsScalarFieldEnum | PostInterestsScalarFieldEnum[]
  }

  /**
   * PostInterests findFirstOrThrow
   */
  export type PostInterestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * Filter, which PostInterests to fetch.
     */
    where?: PostInterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostInterests to fetch.
     */
    orderBy?: PostInterestsOrderByWithRelationInput | PostInterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostInterests.
     */
    cursor?: PostInterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostInterests.
     */
    distinct?: PostInterestsScalarFieldEnum | PostInterestsScalarFieldEnum[]
  }

  /**
   * PostInterests findMany
   */
  export type PostInterestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * Filter, which PostInterests to fetch.
     */
    where?: PostInterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostInterests to fetch.
     */
    orderBy?: PostInterestsOrderByWithRelationInput | PostInterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostInterests.
     */
    cursor?: PostInterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostInterests.
     */
    skip?: number
    distinct?: PostInterestsScalarFieldEnum | PostInterestsScalarFieldEnum[]
  }

  /**
   * PostInterests create
   */
  export type PostInterestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostInterests.
     */
    data: XOR<PostInterestsCreateInput, PostInterestsUncheckedCreateInput>
  }

  /**
   * PostInterests createMany
   */
  export type PostInterestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostInterests.
     */
    data: PostInterestsCreateManyInput | PostInterestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostInterests createManyAndReturn
   */
  export type PostInterestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * The data used to create many PostInterests.
     */
    data: PostInterestsCreateManyInput | PostInterestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostInterests update
   */
  export type PostInterestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostInterests.
     */
    data: XOR<PostInterestsUpdateInput, PostInterestsUncheckedUpdateInput>
    /**
     * Choose, which PostInterests to update.
     */
    where: PostInterestsWhereUniqueInput
  }

  /**
   * PostInterests updateMany
   */
  export type PostInterestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostInterests.
     */
    data: XOR<PostInterestsUpdateManyMutationInput, PostInterestsUncheckedUpdateManyInput>
    /**
     * Filter which PostInterests to update
     */
    where?: PostInterestsWhereInput
    /**
     * Limit how many PostInterests to update.
     */
    limit?: number
  }

  /**
   * PostInterests updateManyAndReturn
   */
  export type PostInterestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * The data used to update PostInterests.
     */
    data: XOR<PostInterestsUpdateManyMutationInput, PostInterestsUncheckedUpdateManyInput>
    /**
     * Filter which PostInterests to update
     */
    where?: PostInterestsWhereInput
    /**
     * Limit how many PostInterests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostInterests upsert
   */
  export type PostInterestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostInterests to update in case it exists.
     */
    where: PostInterestsWhereUniqueInput
    /**
     * In case the PostInterests found by the `where` argument doesn't exist, create a new PostInterests with this data.
     */
    create: XOR<PostInterestsCreateInput, PostInterestsUncheckedCreateInput>
    /**
     * In case the PostInterests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostInterestsUpdateInput, PostInterestsUncheckedUpdateInput>
  }

  /**
   * PostInterests delete
   */
  export type PostInterestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    /**
     * Filter which PostInterests to delete.
     */
    where: PostInterestsWhereUniqueInput
  }

  /**
   * PostInterests deleteMany
   */
  export type PostInterestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostInterests to delete
     */
    where?: PostInterestsWhereInput
    /**
     * Limit how many PostInterests to delete.
     */
    limit?: number
  }

  /**
   * PostInterests without action
   */
  export type PostInterestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
  }


  /**
   * Model Reactions
   */

  export type AggregateReactions = {
    _count: ReactionsCountAggregateOutputType | null
    _min: ReactionsMinAggregateOutputType | null
    _max: ReactionsMaxAggregateOutputType | null
  }

  export type ReactionsMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionsMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReactionsCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReactionsMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionsMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReactionsCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to aggregate.
     */
    where?: ReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionsMaxAggregateInputType
  }

  export type GetReactionsAggregateType<T extends ReactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateReactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReactions[P]>
      : GetScalarType<T[P], AggregateReactions[P]>
  }




  export type ReactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionsWhereInput
    orderBy?: ReactionsOrderByWithAggregationInput | ReactionsOrderByWithAggregationInput[]
    by: ReactionsScalarFieldEnum[] | ReactionsScalarFieldEnum
    having?: ReactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionsCountAggregateInputType | true
    _min?: ReactionsMinAggregateInputType
    _max?: ReactionsMaxAggregateInputType
  }

  export type ReactionsGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ReactionsCountAggregateOutputType | null
    _min: ReactionsMinAggregateOutputType | null
    _max: ReactionsMaxAggregateOutputType | null
  }

  type GetReactionsGroupByPayload<T extends ReactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionsGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionsGroupByOutputType[P]>
        }
      >
    >


  export type ReactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reactions"]>

  export type ReactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reactions"]>

  export type ReactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reactions"]>

  export type ReactionsSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["reactions"]>
  export type ReactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type ReactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }
  export type ReactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostsDefaultArgs<ExtArgs>
  }

  export type $ReactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reactions"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reactions"]>
    composites: {}
  }

  type ReactionsGetPayload<S extends boolean | null | undefined | ReactionsDefaultArgs> = $Result.GetResult<Prisma.$ReactionsPayload, S>

  type ReactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionsCountAggregateInputType | true
    }

  export interface ReactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reactions'], meta: { name: 'Reactions' } }
    /**
     * Find zero or one Reactions that matches the filter.
     * @param {ReactionsFindUniqueArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionsFindUniqueArgs>(args: SelectSubset<T, ReactionsFindUniqueArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionsFindUniqueOrThrowArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsFindFirstArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionsFindFirstArgs>(args?: SelectSubset<T, ReactionsFindFirstArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsFindFirstOrThrowArgs} args - Arguments to find a Reactions
     * @example
     * // Get one Reactions
     * const reactions = await prisma.reactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reactions.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionsWithIdOnly = await prisma.reactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionsFindManyArgs>(args?: SelectSubset<T, ReactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reactions.
     * @param {ReactionsCreateArgs} args - Arguments to create a Reactions.
     * @example
     * // Create one Reactions
     * const Reactions = await prisma.reactions.create({
     *   data: {
     *     // ... data to create a Reactions
     *   }
     * })
     * 
     */
    create<T extends ReactionsCreateArgs>(args: SelectSubset<T, ReactionsCreateArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionsCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reactions = await prisma.reactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionsCreateManyArgs>(args?: SelectSubset<T, ReactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionsCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reactions = await prisma.reactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionsWithIdOnly = await prisma.reactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reactions.
     * @param {ReactionsDeleteArgs} args - Arguments to delete one Reactions.
     * @example
     * // Delete one Reactions
     * const Reactions = await prisma.reactions.delete({
     *   where: {
     *     // ... filter to delete one Reactions
     *   }
     * })
     * 
     */
    delete<T extends ReactionsDeleteArgs>(args: SelectSubset<T, ReactionsDeleteArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reactions.
     * @param {ReactionsUpdateArgs} args - Arguments to update one Reactions.
     * @example
     * // Update one Reactions
     * const reactions = await prisma.reactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionsUpdateArgs>(args: SelectSubset<T, ReactionsUpdateArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionsDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionsDeleteManyArgs>(args?: SelectSubset<T, ReactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reactions = await prisma.reactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionsUpdateManyArgs>(args: SelectSubset<T, ReactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionsUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reactions = await prisma.reactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reactions and only return the `id`
     * const reactionsWithIdOnly = await prisma.reactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reactions.
     * @param {ReactionsUpsertArgs} args - Arguments to update or create a Reactions.
     * @example
     * // Update or create a Reactions
     * const reactions = await prisma.reactions.upsert({
     *   create: {
     *     // ... data to create a Reactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reactions we want to update
     *   }
     * })
     */
    upsert<T extends ReactionsUpsertArgs>(args: SelectSubset<T, ReactionsUpsertArgs<ExtArgs>>): Prisma__ReactionsClient<$Result.GetResult<Prisma.$ReactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reactions.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionsCountArgs>(
      args?: Subset<T, ReactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReactionsAggregateArgs>(args: Subset<T, ReactionsAggregateArgs>): Prisma.PrismaPromise<GetReactionsAggregateType<T>>

    /**
     * Group by Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionsGroupByArgs} args - Group by arguments.
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
      T extends ReactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionsGroupByArgs['orderBy'] }
        : { orderBy?: ReactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reactions model
   */
  readonly fields: ReactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostsDefaultArgs<ExtArgs>>): Prisma__PostsClient<$Result.GetResult<Prisma.$PostsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reactions model
   */
  interface ReactionsFieldRefs {
    readonly id: FieldRef<"Reactions", 'String'>
    readonly postId: FieldRef<"Reactions", 'String'>
    readonly userId: FieldRef<"Reactions", 'String'>
    readonly createdAt: FieldRef<"Reactions", 'DateTime'>
    readonly updatedAt: FieldRef<"Reactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reactions findUnique
   */
  export type ReactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where: ReactionsWhereUniqueInput
  }

  /**
   * Reactions findUniqueOrThrow
   */
  export type ReactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where: ReactionsWhereUniqueInput
  }

  /**
   * Reactions findFirst
   */
  export type ReactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Reactions findFirstOrThrow
   */
  export type ReactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Reactions findMany
   */
  export type ReactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionsOrderByWithRelationInput | ReactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionsScalarFieldEnum | ReactionsScalarFieldEnum[]
  }

  /**
   * Reactions create
   */
  export type ReactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reactions.
     */
    data: XOR<ReactionsCreateInput, ReactionsUncheckedCreateInput>
  }

  /**
   * Reactions createMany
   */
  export type ReactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionsCreateManyInput | ReactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reactions createManyAndReturn
   */
  export type ReactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionsCreateManyInput | ReactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reactions update
   */
  export type ReactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reactions.
     */
    data: XOR<ReactionsUpdateInput, ReactionsUncheckedUpdateInput>
    /**
     * Choose, which Reactions to update.
     */
    where: ReactionsWhereUniqueInput
  }

  /**
   * Reactions updateMany
   */
  export type ReactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionsUpdateManyMutationInput, ReactionsUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionsWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reactions updateManyAndReturn
   */
  export type ReactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionsUpdateManyMutationInput, ReactionsUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionsWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reactions upsert
   */
  export type ReactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reactions to update in case it exists.
     */
    where: ReactionsWhereUniqueInput
    /**
     * In case the Reactions found by the `where` argument doesn't exist, create a new Reactions with this data.
     */
    create: XOR<ReactionsCreateInput, ReactionsUncheckedCreateInput>
    /**
     * In case the Reactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionsUpdateInput, ReactionsUncheckedUpdateInput>
  }

  /**
   * Reactions delete
   */
  export type ReactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
    /**
     * Filter which Reactions to delete.
     */
    where: ReactionsWhereUniqueInput
  }

  /**
   * Reactions deleteMany
   */
  export type ReactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionsWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reactions without action
   */
  export type ReactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reactions
     */
    select?: ReactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reactions
     */
    omit?: ReactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionsInclude<ExtArgs> | null
  }


  /**
   * Model Matches
   */

  export type AggregateMatches = {
    _count: MatchesCountAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  export type MatchesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    matchUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    matchUserId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchesCountAggregateOutputType = {
    id: number
    userId: number
    matchUserId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchesMinAggregateInputType = {
    id?: true
    userId?: true
    matchUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchesMaxAggregateInputType = {
    id?: true
    userId?: true
    matchUserId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchesCountAggregateInputType = {
    id?: true
    userId?: true
    matchUserId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to aggregate.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchesMaxAggregateInputType
  }

  export type GetMatchesAggregateType<T extends MatchesAggregateArgs> = {
        [P in keyof T & keyof AggregateMatches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatches[P]>
      : GetScalarType<T[P], AggregateMatches[P]>
  }




  export type MatchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchesWhereInput
    orderBy?: MatchesOrderByWithAggregationInput | MatchesOrderByWithAggregationInput[]
    by: MatchesScalarFieldEnum[] | MatchesScalarFieldEnum
    having?: MatchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchesCountAggregateInputType | true
    _min?: MatchesMinAggregateInputType
    _max?: MatchesMaxAggregateInputType
  }

  export type MatchesGroupByOutputType = {
    id: string
    userId: string
    matchUserId: string
    createdAt: Date
    updatedAt: Date
    _count: MatchesCountAggregateOutputType | null
    _min: MatchesMinAggregateOutputType | null
    _max: MatchesMaxAggregateOutputType | null
  }

  type GetMatchesGroupByPayload<T extends MatchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchesGroupByOutputType[P]>
            : GetScalarType<T[P], MatchesGroupByOutputType[P]>
        }
      >
    >


  export type MatchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    matchUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    matchUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    matchUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matches"]>

  export type MatchesSelectScalar = {
    id?: boolean
    userId?: boolean
    matchUserId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "matchUserId" | "createdAt" | "updatedAt", ExtArgs["result"]["matches"]>
  export type MatchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    matchUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    matchUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    matchUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matches"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      matchUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      matchUserId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matches"]>
    composites: {}
  }

  type MatchesGetPayload<S extends boolean | null | undefined | MatchesDefaultArgs> = $Result.GetResult<Prisma.$MatchesPayload, S>

  type MatchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchesCountAggregateInputType | true
    }

  export interface MatchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matches'], meta: { name: 'Matches' } }
    /**
     * Find zero or one Matches that matches the filter.
     * @param {MatchesFindUniqueArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchesFindUniqueArgs>(args: SelectSubset<T, MatchesFindUniqueArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Matches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchesFindUniqueOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchesFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindFirstArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchesFindFirstArgs>(args?: SelectSubset<T, MatchesFindFirstArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Matches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindFirstOrThrowArgs} args - Arguments to find a Matches
     * @example
     * // Get one Matches
     * const matches = await prisma.matches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchesFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.matches.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.matches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchesWithIdOnly = await prisma.matches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchesFindManyArgs>(args?: SelectSubset<T, MatchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Matches.
     * @param {MatchesCreateArgs} args - Arguments to create a Matches.
     * @example
     * // Create one Matches
     * const Matches = await prisma.matches.create({
     *   data: {
     *     // ... data to create a Matches
     *   }
     * })
     * 
     */
    create<T extends MatchesCreateArgs>(args: SelectSubset<T, MatchesCreateArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchesCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchesCreateManyArgs>(args?: SelectSubset<T, MatchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchesCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const matches = await prisma.matches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchesCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Matches.
     * @param {MatchesDeleteArgs} args - Arguments to delete one Matches.
     * @example
     * // Delete one Matches
     * const Matches = await prisma.matches.delete({
     *   where: {
     *     // ... filter to delete one Matches
     *   }
     * })
     * 
     */
    delete<T extends MatchesDeleteArgs>(args: SelectSubset<T, MatchesDeleteArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Matches.
     * @param {MatchesUpdateArgs} args - Arguments to update one Matches.
     * @example
     * // Update one Matches
     * const matches = await prisma.matches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchesUpdateArgs>(args: SelectSubset<T, MatchesUpdateArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchesDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.matches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchesDeleteManyArgs>(args?: SelectSubset<T, MatchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchesUpdateManyArgs>(args: SelectSubset<T, MatchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchesUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const matches = await prisma.matches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchesWithIdOnly = await prisma.matches.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchesUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Matches.
     * @param {MatchesUpsertArgs} args - Arguments to update or create a Matches.
     * @example
     * // Update or create a Matches
     * const matches = await prisma.matches.upsert({
     *   create: {
     *     // ... data to create a Matches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matches we want to update
     *   }
     * })
     */
    upsert<T extends MatchesUpsertArgs>(args: SelectSubset<T, MatchesUpsertArgs<ExtArgs>>): Prisma__MatchesClient<$Result.GetResult<Prisma.$MatchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.matches.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchesCountArgs>(
      args?: Subset<T, MatchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchesAggregateArgs>(args: Subset<T, MatchesAggregateArgs>): Prisma.PrismaPromise<GetMatchesAggregateType<T>>

    /**
     * Group by Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchesGroupByArgs} args - Group by arguments.
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
      T extends MatchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchesGroupByArgs['orderBy'] }
        : { orderBy?: MatchesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matches model
   */
  readonly fields: MatchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Matches model
   */
  interface MatchesFieldRefs {
    readonly id: FieldRef<"Matches", 'String'>
    readonly userId: FieldRef<"Matches", 'String'>
    readonly matchUserId: FieldRef<"Matches", 'String'>
    readonly createdAt: FieldRef<"Matches", 'DateTime'>
    readonly updatedAt: FieldRef<"Matches", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Matches findUnique
   */
  export type MatchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches findUniqueOrThrow
   */
  export type MatchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches findFirst
   */
  export type MatchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches findFirstOrThrow
   */
  export type MatchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches findMany
   */
  export type MatchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchesOrderByWithRelationInput | MatchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchesScalarFieldEnum | MatchesScalarFieldEnum[]
  }

  /**
   * Matches create
   */
  export type MatchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The data needed to create a Matches.
     */
    data: XOR<MatchesCreateInput, MatchesUncheckedCreateInput>
  }

  /**
   * Matches createMany
   */
  export type MatchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchesCreateManyInput | MatchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Matches createManyAndReturn
   */
  export type MatchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchesCreateManyInput | MatchesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matches update
   */
  export type MatchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The data needed to update a Matches.
     */
    data: XOR<MatchesUpdateInput, MatchesUncheckedUpdateInput>
    /**
     * Choose, which Matches to update.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches updateMany
   */
  export type MatchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Matches updateManyAndReturn
   */
  export type MatchesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Matches upsert
   */
  export type MatchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * The filter to search for the Matches to update in case it exists.
     */
    where: MatchesWhereUniqueInput
    /**
     * In case the Matches found by the `where` argument doesn't exist, create a new Matches with this data.
     */
    create: XOR<MatchesCreateInput, MatchesUncheckedCreateInput>
    /**
     * In case the Matches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchesUpdateInput, MatchesUncheckedUpdateInput>
  }

  /**
   * Matches delete
   */
  export type MatchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
    /**
     * Filter which Matches to delete.
     */
    where: MatchesWhereUniqueInput
  }

  /**
   * Matches deleteMany
   */
  export type MatchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchesWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Matches without action
   */
  export type MatchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matches
     */
    select?: MatchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Matches
     */
    omit?: MatchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchesInclude<ExtArgs> | null
  }


  /**
   * Model Interests
   */

  export type AggregateInterests = {
    _count: InterestsCountAggregateOutputType | null
    _min: InterestsMinAggregateOutputType | null
    _max: InterestsMaxAggregateOutputType | null
  }

  export type InterestsMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterestsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterestsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterestsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterestsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterestsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to aggregate.
     */
    where?: InterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestsOrderByWithRelationInput | InterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interests
    **/
    _count?: true | InterestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestsMaxAggregateInputType
  }

  export type GetInterestsAggregateType<T extends InterestsAggregateArgs> = {
        [P in keyof T & keyof AggregateInterests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterests[P]>
      : GetScalarType<T[P], AggregateInterests[P]>
  }




  export type InterestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestsWhereInput
    orderBy?: InterestsOrderByWithAggregationInput | InterestsOrderByWithAggregationInput[]
    by: InterestsScalarFieldEnum[] | InterestsScalarFieldEnum
    having?: InterestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestsCountAggregateInputType | true
    _min?: InterestsMinAggregateInputType
    _max?: InterestsMaxAggregateInputType
  }

  export type InterestsGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: InterestsCountAggregateOutputType | null
    _min: InterestsMinAggregateOutputType | null
    _max: InterestsMaxAggregateOutputType | null
  }

  type GetInterestsGroupByPayload<T extends InterestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestsGroupByOutputType[P]>
            : GetScalarType<T[P], InterestsGroupByOutputType[P]>
        }
      >
    >


  export type InterestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userInterests?: boolean | Interests$userInterestsArgs<ExtArgs>
    postInterests?: boolean | Interests$postInterestsArgs<ExtArgs>
    _count?: boolean | InterestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interests"]>

  export type InterestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["interests"]>

  export type InterestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["interests"]>

  export type InterestsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InterestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["interests"]>
  export type InterestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userInterests?: boolean | Interests$userInterestsArgs<ExtArgs>
    postInterests?: boolean | Interests$postInterestsArgs<ExtArgs>
    _count?: boolean | InterestsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InterestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InterestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InterestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interests"
    objects: {
      userInterests: Prisma.$UserInterestsPayload<ExtArgs>[]
      postInterests: Prisma.$PostInterestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interests"]>
    composites: {}
  }

  type InterestsGetPayload<S extends boolean | null | undefined | InterestsDefaultArgs> = $Result.GetResult<Prisma.$InterestsPayload, S>

  type InterestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InterestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InterestsCountAggregateInputType | true
    }

  export interface InterestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interests'], meta: { name: 'Interests' } }
    /**
     * Find zero or one Interests that matches the filter.
     * @param {InterestsFindUniqueArgs} args - Arguments to find a Interests
     * @example
     * // Get one Interests
     * const interests = await prisma.interests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InterestsFindUniqueArgs>(args: SelectSubset<T, InterestsFindUniqueArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Interests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InterestsFindUniqueOrThrowArgs} args - Arguments to find a Interests
     * @example
     * // Get one Interests
     * const interests = await prisma.interests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InterestsFindUniqueOrThrowArgs>(args: SelectSubset<T, InterestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestsFindFirstArgs} args - Arguments to find a Interests
     * @example
     * // Get one Interests
     * const interests = await prisma.interests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InterestsFindFirstArgs>(args?: SelectSubset<T, InterestsFindFirstArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Interests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestsFindFirstOrThrowArgs} args - Arguments to find a Interests
     * @example
     * // Get one Interests
     * const interests = await prisma.interests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InterestsFindFirstOrThrowArgs>(args?: SelectSubset<T, InterestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interests.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestsWithIdOnly = await prisma.interests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InterestsFindManyArgs>(args?: SelectSubset<T, InterestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Interests.
     * @param {InterestsCreateArgs} args - Arguments to create a Interests.
     * @example
     * // Create one Interests
     * const Interests = await prisma.interests.create({
     *   data: {
     *     // ... data to create a Interests
     *   }
     * })
     * 
     */
    create<T extends InterestsCreateArgs>(args: SelectSubset<T, InterestsCreateArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Interests.
     * @param {InterestsCreateManyArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interests = await prisma.interests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InterestsCreateManyArgs>(args?: SelectSubset<T, InterestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Interests and returns the data saved in the database.
     * @param {InterestsCreateManyAndReturnArgs} args - Arguments to create many Interests.
     * @example
     * // Create many Interests
     * const interests = await prisma.interests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Interests and only return the `id`
     * const interestsWithIdOnly = await prisma.interests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InterestsCreateManyAndReturnArgs>(args?: SelectSubset<T, InterestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Interests.
     * @param {InterestsDeleteArgs} args - Arguments to delete one Interests.
     * @example
     * // Delete one Interests
     * const Interests = await prisma.interests.delete({
     *   where: {
     *     // ... filter to delete one Interests
     *   }
     * })
     * 
     */
    delete<T extends InterestsDeleteArgs>(args: SelectSubset<T, InterestsDeleteArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Interests.
     * @param {InterestsUpdateArgs} args - Arguments to update one Interests.
     * @example
     * // Update one Interests
     * const interests = await prisma.interests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InterestsUpdateArgs>(args: SelectSubset<T, InterestsUpdateArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Interests.
     * @param {InterestsDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InterestsDeleteManyArgs>(args?: SelectSubset<T, InterestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interests = await prisma.interests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InterestsUpdateManyArgs>(args: SelectSubset<T, InterestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests and returns the data updated in the database.
     * @param {InterestsUpdateManyAndReturnArgs} args - Arguments to update many Interests.
     * @example
     * // Update many Interests
     * const interests = await prisma.interests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Interests and only return the `id`
     * const interestsWithIdOnly = await prisma.interests.updateManyAndReturn({
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
    updateManyAndReturn<T extends InterestsUpdateManyAndReturnArgs>(args: SelectSubset<T, InterestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Interests.
     * @param {InterestsUpsertArgs} args - Arguments to update or create a Interests.
     * @example
     * // Update or create a Interests
     * const interests = await prisma.interests.upsert({
     *   create: {
     *     // ... data to create a Interests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interests we want to update
     *   }
     * })
     */
    upsert<T extends InterestsUpsertArgs>(args: SelectSubset<T, InterestsUpsertArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestsCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interests.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends InterestsCountArgs>(
      args?: Subset<T, InterestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterestsAggregateArgs>(args: Subset<T, InterestsAggregateArgs>): Prisma.PrismaPromise<GetInterestsAggregateType<T>>

    /**
     * Group by Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestsGroupByArgs} args - Group by arguments.
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
      T extends InterestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestsGroupByArgs['orderBy'] }
        : { orderBy?: InterestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InterestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interests model
   */
  readonly fields: InterestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userInterests<T extends Interests$userInterestsArgs<ExtArgs> = {}>(args?: Subset<T, Interests$userInterestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postInterests<T extends Interests$postInterestsArgs<ExtArgs> = {}>(args?: Subset<T, Interests$postInterestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostInterestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Interests model
   */
  interface InterestsFieldRefs {
    readonly id: FieldRef<"Interests", 'String'>
    readonly name: FieldRef<"Interests", 'String'>
    readonly createdAt: FieldRef<"Interests", 'DateTime'>
    readonly updatedAt: FieldRef<"Interests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Interests findUnique
   */
  export type InterestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where: InterestsWhereUniqueInput
  }

  /**
   * Interests findUniqueOrThrow
   */
  export type InterestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where: InterestsWhereUniqueInput
  }

  /**
   * Interests findFirst
   */
  export type InterestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestsOrderByWithRelationInput | InterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestsScalarFieldEnum | InterestsScalarFieldEnum[]
  }

  /**
   * Interests findFirstOrThrow
   */
  export type InterestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestsOrderByWithRelationInput | InterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestsScalarFieldEnum | InterestsScalarFieldEnum[]
  }

  /**
   * Interests findMany
   */
  export type InterestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestsOrderByWithRelationInput | InterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interests.
     */
    cursor?: InterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    distinct?: InterestsScalarFieldEnum | InterestsScalarFieldEnum[]
  }

  /**
   * Interests create
   */
  export type InterestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * The data needed to create a Interests.
     */
    data: XOR<InterestsCreateInput, InterestsUncheckedCreateInput>
  }

  /**
   * Interests createMany
   */
  export type InterestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interests.
     */
    data: InterestsCreateManyInput | InterestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interests createManyAndReturn
   */
  export type InterestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * The data used to create many Interests.
     */
    data: InterestsCreateManyInput | InterestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Interests update
   */
  export type InterestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * The data needed to update a Interests.
     */
    data: XOR<InterestsUpdateInput, InterestsUncheckedUpdateInput>
    /**
     * Choose, which Interests to update.
     */
    where: InterestsWhereUniqueInput
  }

  /**
   * Interests updateMany
   */
  export type InterestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestsUpdateManyMutationInput, InterestsUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestsWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interests updateManyAndReturn
   */
  export type InterestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestsUpdateManyMutationInput, InterestsUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestsWhereInput
    /**
     * Limit how many Interests to update.
     */
    limit?: number
  }

  /**
   * Interests upsert
   */
  export type InterestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * The filter to search for the Interests to update in case it exists.
     */
    where: InterestsWhereUniqueInput
    /**
     * In case the Interests found by the `where` argument doesn't exist, create a new Interests with this data.
     */
    create: XOR<InterestsCreateInput, InterestsUncheckedCreateInput>
    /**
     * In case the Interests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestsUpdateInput, InterestsUncheckedUpdateInput>
  }

  /**
   * Interests delete
   */
  export type InterestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
    /**
     * Filter which Interests to delete.
     */
    where: InterestsWhereUniqueInput
  }

  /**
   * Interests deleteMany
   */
  export type InterestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to delete
     */
    where?: InterestsWhereInput
    /**
     * Limit how many Interests to delete.
     */
    limit?: number
  }

  /**
   * Interests.userInterests
   */
  export type Interests$userInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    where?: UserInterestsWhereInput
    orderBy?: UserInterestsOrderByWithRelationInput | UserInterestsOrderByWithRelationInput[]
    cursor?: UserInterestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserInterestsScalarFieldEnum | UserInterestsScalarFieldEnum[]
  }

  /**
   * Interests.postInterests
   */
  export type Interests$postInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInterests
     */
    select?: PostInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInterests
     */
    omit?: PostInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInterestsInclude<ExtArgs> | null
    where?: PostInterestsWhereInput
    orderBy?: PostInterestsOrderByWithRelationInput | PostInterestsOrderByWithRelationInput[]
    cursor?: PostInterestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostInterestsScalarFieldEnum | PostInterestsScalarFieldEnum[]
  }

  /**
   * Interests without action
   */
  export type InterestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interests
     */
    select?: InterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Interests
     */
    omit?: InterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InterestsInclude<ExtArgs> | null
  }


  /**
   * Model UserInterests
   */

  export type AggregateUserInterests = {
    _count: UserInterestsCountAggregateOutputType | null
    _min: UserInterestsMinAggregateOutputType | null
    _max: UserInterestsMaxAggregateOutputType | null
  }

  export type UserInterestsMinAggregateOutputType = {
    id: string | null
    userDetailsId: string | null
    interestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserInterestsMaxAggregateOutputType = {
    id: string | null
    userDetailsId: string | null
    interestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserInterestsCountAggregateOutputType = {
    id: number
    userDetailsId: number
    interestId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserInterestsMinAggregateInputType = {
    id?: true
    userDetailsId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserInterestsMaxAggregateInputType = {
    id?: true
    userDetailsId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserInterestsCountAggregateInputType = {
    id?: true
    userDetailsId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserInterestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInterests to aggregate.
     */
    where?: UserInterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestsOrderByWithRelationInput | UserInterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInterests
    **/
    _count?: true | UserInterestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInterestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInterestsMaxAggregateInputType
  }

  export type GetUserInterestsAggregateType<T extends UserInterestsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInterests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInterests[P]>
      : GetScalarType<T[P], AggregateUserInterests[P]>
  }




  export type UserInterestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserInterestsWhereInput
    orderBy?: UserInterestsOrderByWithAggregationInput | UserInterestsOrderByWithAggregationInput[]
    by: UserInterestsScalarFieldEnum[] | UserInterestsScalarFieldEnum
    having?: UserInterestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInterestsCountAggregateInputType | true
    _min?: UserInterestsMinAggregateInputType
    _max?: UserInterestsMaxAggregateInputType
  }

  export type UserInterestsGroupByOutputType = {
    id: string
    userDetailsId: string
    interestId: string
    createdAt: Date
    updatedAt: Date
    _count: UserInterestsCountAggregateOutputType | null
    _min: UserInterestsMinAggregateOutputType | null
    _max: UserInterestsMaxAggregateOutputType | null
  }

  type GetUserInterestsGroupByPayload<T extends UserInterestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserInterestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInterestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInterestsGroupByOutputType[P]>
            : GetScalarType<T[P], UserInterestsGroupByOutputType[P]>
        }
      >
    >


  export type UserInterestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userDetailsId?: boolean
    interestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userDetails?: boolean | UserDetailsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInterests"]>

  export type UserInterestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userDetailsId?: boolean
    interestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userDetails?: boolean | UserDetailsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInterests"]>

  export type UserInterestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userDetailsId?: boolean
    interestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userDetails?: boolean | UserDetailsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userInterests"]>

  export type UserInterestsSelectScalar = {
    id?: boolean
    userDetailsId?: boolean
    interestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInterestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userDetailsId" | "interestId" | "createdAt" | "updatedAt", ExtArgs["result"]["userInterests"]>
  export type UserInterestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDetailsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }
  export type UserInterestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDetailsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }
  export type UserInterestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserDetailsDefaultArgs<ExtArgs>
    interest?: boolean | InterestsDefaultArgs<ExtArgs>
  }

  export type $UserInterestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserInterests"
    objects: {
      userDetails: Prisma.$UserDetailsPayload<ExtArgs>
      interest: Prisma.$InterestsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userDetailsId: string
      interestId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userInterests"]>
    composites: {}
  }

  type UserInterestsGetPayload<S extends boolean | null | undefined | UserInterestsDefaultArgs> = $Result.GetResult<Prisma.$UserInterestsPayload, S>

  type UserInterestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserInterestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserInterestsCountAggregateInputType | true
    }

  export interface UserInterestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserInterests'], meta: { name: 'UserInterests' } }
    /**
     * Find zero or one UserInterests that matches the filter.
     * @param {UserInterestsFindUniqueArgs} args - Arguments to find a UserInterests
     * @example
     * // Get one UserInterests
     * const userInterests = await prisma.userInterests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserInterestsFindUniqueArgs>(args: SelectSubset<T, UserInterestsFindUniqueArgs<ExtArgs>>): Prisma__UserInterestsClient<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserInterests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserInterestsFindUniqueOrThrowArgs} args - Arguments to find a UserInterests
     * @example
     * // Get one UserInterests
     * const userInterests = await prisma.userInterests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserInterestsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserInterestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserInterestsClient<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestsFindFirstArgs} args - Arguments to find a UserInterests
     * @example
     * // Get one UserInterests
     * const userInterests = await prisma.userInterests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserInterestsFindFirstArgs>(args?: SelectSubset<T, UserInterestsFindFirstArgs<ExtArgs>>): Prisma__UserInterestsClient<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserInterests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestsFindFirstOrThrowArgs} args - Arguments to find a UserInterests
     * @example
     * // Get one UserInterests
     * const userInterests = await prisma.userInterests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserInterestsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserInterestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserInterestsClient<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInterests
     * const userInterests = await prisma.userInterests.findMany()
     * 
     * // Get first 10 UserInterests
     * const userInterests = await prisma.userInterests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInterestsWithIdOnly = await prisma.userInterests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserInterestsFindManyArgs>(args?: SelectSubset<T, UserInterestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserInterests.
     * @param {UserInterestsCreateArgs} args - Arguments to create a UserInterests.
     * @example
     * // Create one UserInterests
     * const UserInterests = await prisma.userInterests.create({
     *   data: {
     *     // ... data to create a UserInterests
     *   }
     * })
     * 
     */
    create<T extends UserInterestsCreateArgs>(args: SelectSubset<T, UserInterestsCreateArgs<ExtArgs>>): Prisma__UserInterestsClient<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserInterests.
     * @param {UserInterestsCreateManyArgs} args - Arguments to create many UserInterests.
     * @example
     * // Create many UserInterests
     * const userInterests = await prisma.userInterests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserInterestsCreateManyArgs>(args?: SelectSubset<T, UserInterestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserInterests and returns the data saved in the database.
     * @param {UserInterestsCreateManyAndReturnArgs} args - Arguments to create many UserInterests.
     * @example
     * // Create many UserInterests
     * const userInterests = await prisma.userInterests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserInterests and only return the `id`
     * const userInterestsWithIdOnly = await prisma.userInterests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserInterestsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserInterestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserInterests.
     * @param {UserInterestsDeleteArgs} args - Arguments to delete one UserInterests.
     * @example
     * // Delete one UserInterests
     * const UserInterests = await prisma.userInterests.delete({
     *   where: {
     *     // ... filter to delete one UserInterests
     *   }
     * })
     * 
     */
    delete<T extends UserInterestsDeleteArgs>(args: SelectSubset<T, UserInterestsDeleteArgs<ExtArgs>>): Prisma__UserInterestsClient<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserInterests.
     * @param {UserInterestsUpdateArgs} args - Arguments to update one UserInterests.
     * @example
     * // Update one UserInterests
     * const userInterests = await prisma.userInterests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserInterestsUpdateArgs>(args: SelectSubset<T, UserInterestsUpdateArgs<ExtArgs>>): Prisma__UserInterestsClient<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserInterests.
     * @param {UserInterestsDeleteManyArgs} args - Arguments to filter UserInterests to delete.
     * @example
     * // Delete a few UserInterests
     * const { count } = await prisma.userInterests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserInterestsDeleteManyArgs>(args?: SelectSubset<T, UserInterestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInterests
     * const userInterests = await prisma.userInterests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserInterestsUpdateManyArgs>(args: SelectSubset<T, UserInterestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInterests and returns the data updated in the database.
     * @param {UserInterestsUpdateManyAndReturnArgs} args - Arguments to update many UserInterests.
     * @example
     * // Update many UserInterests
     * const userInterests = await prisma.userInterests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserInterests and only return the `id`
     * const userInterestsWithIdOnly = await prisma.userInterests.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserInterestsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserInterestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserInterests.
     * @param {UserInterestsUpsertArgs} args - Arguments to update or create a UserInterests.
     * @example
     * // Update or create a UserInterests
     * const userInterests = await prisma.userInterests.upsert({
     *   create: {
     *     // ... data to create a UserInterests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInterests we want to update
     *   }
     * })
     */
    upsert<T extends UserInterestsUpsertArgs>(args: SelectSubset<T, UserInterestsUpsertArgs<ExtArgs>>): Prisma__UserInterestsClient<$Result.GetResult<Prisma.$UserInterestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestsCountArgs} args - Arguments to filter UserInterests to count.
     * @example
     * // Count the number of UserInterests
     * const count = await prisma.userInterests.count({
     *   where: {
     *     // ... the filter for the UserInterests we want to count
     *   }
     * })
    **/
    count<T extends UserInterestsCountArgs>(
      args?: Subset<T, UserInterestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInterestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInterestsAggregateArgs>(args: Subset<T, UserInterestsAggregateArgs>): Prisma.PrismaPromise<GetUserInterestsAggregateType<T>>

    /**
     * Group by UserInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInterestsGroupByArgs} args - Group by arguments.
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
      T extends UserInterestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInterestsGroupByArgs['orderBy'] }
        : { orderBy?: UserInterestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInterestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInterestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserInterests model
   */
  readonly fields: UserInterestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInterests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserInterestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userDetails<T extends UserDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDetailsDefaultArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    interest<T extends InterestsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InterestsDefaultArgs<ExtArgs>>): Prisma__InterestsClient<$Result.GetResult<Prisma.$InterestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserInterests model
   */
  interface UserInterestsFieldRefs {
    readonly id: FieldRef<"UserInterests", 'String'>
    readonly userDetailsId: FieldRef<"UserInterests", 'String'>
    readonly interestId: FieldRef<"UserInterests", 'String'>
    readonly createdAt: FieldRef<"UserInterests", 'DateTime'>
    readonly updatedAt: FieldRef<"UserInterests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserInterests findUnique
   */
  export type UserInterestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * Filter, which UserInterests to fetch.
     */
    where: UserInterestsWhereUniqueInput
  }

  /**
   * UserInterests findUniqueOrThrow
   */
  export type UserInterestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * Filter, which UserInterests to fetch.
     */
    where: UserInterestsWhereUniqueInput
  }

  /**
   * UserInterests findFirst
   */
  export type UserInterestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * Filter, which UserInterests to fetch.
     */
    where?: UserInterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestsOrderByWithRelationInput | UserInterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInterests.
     */
    cursor?: UserInterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInterests.
     */
    distinct?: UserInterestsScalarFieldEnum | UserInterestsScalarFieldEnum[]
  }

  /**
   * UserInterests findFirstOrThrow
   */
  export type UserInterestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * Filter, which UserInterests to fetch.
     */
    where?: UserInterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestsOrderByWithRelationInput | UserInterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInterests.
     */
    cursor?: UserInterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInterests.
     */
    distinct?: UserInterestsScalarFieldEnum | UserInterestsScalarFieldEnum[]
  }

  /**
   * UserInterests findMany
   */
  export type UserInterestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * Filter, which UserInterests to fetch.
     */
    where?: UserInterestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInterests to fetch.
     */
    orderBy?: UserInterestsOrderByWithRelationInput | UserInterestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInterests.
     */
    cursor?: UserInterestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInterests.
     */
    skip?: number
    distinct?: UserInterestsScalarFieldEnum | UserInterestsScalarFieldEnum[]
  }

  /**
   * UserInterests create
   */
  export type UserInterestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserInterests.
     */
    data: XOR<UserInterestsCreateInput, UserInterestsUncheckedCreateInput>
  }

  /**
   * UserInterests createMany
   */
  export type UserInterestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserInterests.
     */
    data: UserInterestsCreateManyInput | UserInterestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserInterests createManyAndReturn
   */
  export type UserInterestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * The data used to create many UserInterests.
     */
    data: UserInterestsCreateManyInput | UserInterestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserInterests update
   */
  export type UserInterestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserInterests.
     */
    data: XOR<UserInterestsUpdateInput, UserInterestsUncheckedUpdateInput>
    /**
     * Choose, which UserInterests to update.
     */
    where: UserInterestsWhereUniqueInput
  }

  /**
   * UserInterests updateMany
   */
  export type UserInterestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserInterests.
     */
    data: XOR<UserInterestsUpdateManyMutationInput, UserInterestsUncheckedUpdateManyInput>
    /**
     * Filter which UserInterests to update
     */
    where?: UserInterestsWhereInput
    /**
     * Limit how many UserInterests to update.
     */
    limit?: number
  }

  /**
   * UserInterests updateManyAndReturn
   */
  export type UserInterestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * The data used to update UserInterests.
     */
    data: XOR<UserInterestsUpdateManyMutationInput, UserInterestsUncheckedUpdateManyInput>
    /**
     * Filter which UserInterests to update
     */
    where?: UserInterestsWhereInput
    /**
     * Limit how many UserInterests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserInterests upsert
   */
  export type UserInterestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserInterests to update in case it exists.
     */
    where: UserInterestsWhereUniqueInput
    /**
     * In case the UserInterests found by the `where` argument doesn't exist, create a new UserInterests with this data.
     */
    create: XOR<UserInterestsCreateInput, UserInterestsUncheckedCreateInput>
    /**
     * In case the UserInterests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInterestsUpdateInput, UserInterestsUncheckedUpdateInput>
  }

  /**
   * UserInterests delete
   */
  export type UserInterestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
    /**
     * Filter which UserInterests to delete.
     */
    where: UserInterestsWhereUniqueInput
  }

  /**
   * UserInterests deleteMany
   */
  export type UserInterestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserInterests to delete
     */
    where?: UserInterestsWhereInput
    /**
     * Limit how many UserInterests to delete.
     */
    limit?: number
  }

  /**
   * UserInterests without action
   */
  export type UserInterestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserInterests
     */
    select?: UserInterestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserInterests
     */
    omit?: UserInterestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInterestsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserDetailsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    bio: 'bio',
    department: 'department',
    year: 'year',
    image: 'image',
    reading: 'reading',
    availability: 'availability'
  };

  export type UserDetailsScalarFieldEnum = (typeof UserDetailsScalarFieldEnum)[keyof typeof UserDetailsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const PostInterestsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    interestId: 'interestId'
  };

  export type PostInterestsScalarFieldEnum = (typeof PostInterestsScalarFieldEnum)[keyof typeof PostInterestsScalarFieldEnum]


  export const ReactionsScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReactionsScalarFieldEnum = (typeof ReactionsScalarFieldEnum)[keyof typeof ReactionsScalarFieldEnum]


  export const MatchesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    matchUserId: 'matchUserId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchesScalarFieldEnum = (typeof MatchesScalarFieldEnum)[keyof typeof MatchesScalarFieldEnum]


  export const InterestsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterestsScalarFieldEnum = (typeof InterestsScalarFieldEnum)[keyof typeof InterestsScalarFieldEnum]


  export const UserInterestsScalarFieldEnum: {
    id: 'id',
    userDetailsId: 'userDetailsId',
    interestId: 'interestId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserInterestsScalarFieldEnum = (typeof UserInterestsScalarFieldEnum)[keyof typeof UserInterestsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostsListRelationFilter
    reactions?: ReactionsListRelationFilter
    matches?: MatchesListRelationFilter
    matchedWith?: MatchesListRelationFilter
    userDetails?: XOR<UserDetailsNullableScalarRelationFilter, UserDetailsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostsOrderByRelationAggregateInput
    reactions?: ReactionsOrderByRelationAggregateInput
    matches?: MatchesOrderByRelationAggregateInput
    matchedWith?: MatchesOrderByRelationAggregateInput
    userDetails?: UserDetailsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostsListRelationFilter
    reactions?: ReactionsListRelationFilter
    matches?: MatchesListRelationFilter
    matchedWith?: MatchesListRelationFilter
    userDetails?: XOR<UserDetailsNullableScalarRelationFilter, UserDetailsWhereInput> | null
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserDetailsWhereInput = {
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    id?: StringFilter<"UserDetails"> | string
    userId?: StringFilter<"UserDetails"> | string
    name?: StringFilter<"UserDetails"> | string
    bio?: StringFilter<"UserDetails"> | string
    department?: StringFilter<"UserDetails"> | string
    year?: StringFilter<"UserDetails"> | string
    image?: StringFilter<"UserDetails"> | string
    reading?: StringFilter<"UserDetails"> | string
    availability?: StringFilter<"UserDetails"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userInterests?: UserInterestsListRelationFilter
  }

  export type UserDetailsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    department?: SortOrder
    year?: SortOrder
    image?: SortOrder
    reading?: SortOrder
    availability?: SortOrder
    user?: UserOrderByWithRelationInput
    userInterests?: UserInterestsOrderByRelationAggregateInput
  }

  export type UserDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    name?: StringFilter<"UserDetails"> | string
    bio?: StringFilter<"UserDetails"> | string
    department?: StringFilter<"UserDetails"> | string
    year?: StringFilter<"UserDetails"> | string
    image?: StringFilter<"UserDetails"> | string
    reading?: StringFilter<"UserDetails"> | string
    availability?: StringFilter<"UserDetails"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userInterests?: UserInterestsListRelationFilter
  }, "id" | "userId">

  export type UserDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    department?: SortOrder
    year?: SortOrder
    image?: SortOrder
    reading?: SortOrder
    availability?: SortOrder
    _count?: UserDetailsCountOrderByAggregateInput
    _max?: UserDetailsMaxOrderByAggregateInput
    _min?: UserDetailsMinOrderByAggregateInput
  }

  export type UserDetailsScalarWhereWithAggregatesInput = {
    AND?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    OR?: UserDetailsScalarWhereWithAggregatesInput[]
    NOT?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDetails"> | string
    userId?: StringWithAggregatesFilter<"UserDetails"> | string
    name?: StringWithAggregatesFilter<"UserDetails"> | string
    bio?: StringWithAggregatesFilter<"UserDetails"> | string
    department?: StringWithAggregatesFilter<"UserDetails"> | string
    year?: StringWithAggregatesFilter<"UserDetails"> | string
    image?: StringWithAggregatesFilter<"UserDetails"> | string
    reading?: StringWithAggregatesFilter<"UserDetails"> | string
    availability?: StringWithAggregatesFilter<"UserDetails"> | string
  }

  export type PostsWhereInput = {
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    id?: StringFilter<"Posts"> | string
    content?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    updatedAt?: DateTimeFilter<"Posts"> | Date | string
    userId?: StringFilter<"Posts"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    postInterests?: PostInterestsListRelationFilter
    reactions?: ReactionsListRelationFilter
  }

  export type PostsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    postInterests?: PostInterestsOrderByRelationAggregateInput
    reactions?: ReactionsOrderByRelationAggregateInput
  }

  export type PostsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostsWhereInput | PostsWhereInput[]
    OR?: PostsWhereInput[]
    NOT?: PostsWhereInput | PostsWhereInput[]
    content?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    updatedAt?: DateTimeFilter<"Posts"> | Date | string
    userId?: StringFilter<"Posts"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    postInterests?: PostInterestsListRelationFilter
    reactions?: ReactionsListRelationFilter
  }, "id">

  export type PostsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PostsCountOrderByAggregateInput
    _max?: PostsMaxOrderByAggregateInput
    _min?: PostsMinOrderByAggregateInput
  }

  export type PostsScalarWhereWithAggregatesInput = {
    AND?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    OR?: PostsScalarWhereWithAggregatesInput[]
    NOT?: PostsScalarWhereWithAggregatesInput | PostsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Posts"> | string
    content?: StringWithAggregatesFilter<"Posts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Posts"> | Date | string
    userId?: StringWithAggregatesFilter<"Posts"> | string
  }

  export type PostInterestsWhereInput = {
    AND?: PostInterestsWhereInput | PostInterestsWhereInput[]
    OR?: PostInterestsWhereInput[]
    NOT?: PostInterestsWhereInput | PostInterestsWhereInput[]
    id?: StringFilter<"PostInterests"> | string
    postId?: StringFilter<"PostInterests"> | string
    interestId?: StringFilter<"PostInterests"> | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    interest?: XOR<InterestsScalarRelationFilter, InterestsWhereInput>
  }

  export type PostInterestsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    interestId?: SortOrder
    post?: PostsOrderByWithRelationInput
    interest?: InterestsOrderByWithRelationInput
  }

  export type PostInterestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostInterestsWhereInput | PostInterestsWhereInput[]
    OR?: PostInterestsWhereInput[]
    NOT?: PostInterestsWhereInput | PostInterestsWhereInput[]
    postId?: StringFilter<"PostInterests"> | string
    interestId?: StringFilter<"PostInterests"> | string
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
    interest?: XOR<InterestsScalarRelationFilter, InterestsWhereInput>
  }, "id">

  export type PostInterestsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    interestId?: SortOrder
    _count?: PostInterestsCountOrderByAggregateInput
    _max?: PostInterestsMaxOrderByAggregateInput
    _min?: PostInterestsMinOrderByAggregateInput
  }

  export type PostInterestsScalarWhereWithAggregatesInput = {
    AND?: PostInterestsScalarWhereWithAggregatesInput | PostInterestsScalarWhereWithAggregatesInput[]
    OR?: PostInterestsScalarWhereWithAggregatesInput[]
    NOT?: PostInterestsScalarWhereWithAggregatesInput | PostInterestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostInterests"> | string
    postId?: StringWithAggregatesFilter<"PostInterests"> | string
    interestId?: StringWithAggregatesFilter<"PostInterests"> | string
  }

  export type ReactionsWhereInput = {
    AND?: ReactionsWhereInput | ReactionsWhereInput[]
    OR?: ReactionsWhereInput[]
    NOT?: ReactionsWhereInput | ReactionsWhereInput[]
    id?: StringFilter<"Reactions"> | string
    postId?: StringFilter<"Reactions"> | string
    userId?: StringFilter<"Reactions"> | string
    createdAt?: DateTimeFilter<"Reactions"> | Date | string
    updatedAt?: DateTimeFilter<"Reactions"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }

  export type ReactionsOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    post?: PostsOrderByWithRelationInput
  }

  export type ReactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReactionsWhereInput | ReactionsWhereInput[]
    OR?: ReactionsWhereInput[]
    NOT?: ReactionsWhereInput | ReactionsWhereInput[]
    postId?: StringFilter<"Reactions"> | string
    userId?: StringFilter<"Reactions"> | string
    createdAt?: DateTimeFilter<"Reactions"> | Date | string
    updatedAt?: DateTimeFilter<"Reactions"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostsScalarRelationFilter, PostsWhereInput>
  }, "id">

  export type ReactionsOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReactionsCountOrderByAggregateInput
    _max?: ReactionsMaxOrderByAggregateInput
    _min?: ReactionsMinOrderByAggregateInput
  }

  export type ReactionsScalarWhereWithAggregatesInput = {
    AND?: ReactionsScalarWhereWithAggregatesInput | ReactionsScalarWhereWithAggregatesInput[]
    OR?: ReactionsScalarWhereWithAggregatesInput[]
    NOT?: ReactionsScalarWhereWithAggregatesInput | ReactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reactions"> | string
    postId?: StringWithAggregatesFilter<"Reactions"> | string
    userId?: StringWithAggregatesFilter<"Reactions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reactions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reactions"> | Date | string
  }

  export type MatchesWhereInput = {
    AND?: MatchesWhereInput | MatchesWhereInput[]
    OR?: MatchesWhereInput[]
    NOT?: MatchesWhereInput | MatchesWhereInput[]
    id?: StringFilter<"Matches"> | string
    userId?: StringFilter<"Matches"> | string
    matchUserId?: StringFilter<"Matches"> | string
    createdAt?: DateTimeFilter<"Matches"> | Date | string
    updatedAt?: DateTimeFilter<"Matches"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    matchUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    matchUser?: UserOrderByWithRelationInput
  }

  export type MatchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchesWhereInput | MatchesWhereInput[]
    OR?: MatchesWhereInput[]
    NOT?: MatchesWhereInput | MatchesWhereInput[]
    userId?: StringFilter<"Matches"> | string
    matchUserId?: StringFilter<"Matches"> | string
    createdAt?: DateTimeFilter<"Matches"> | Date | string
    updatedAt?: DateTimeFilter<"Matches"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    matchUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchesCountOrderByAggregateInput
    _max?: MatchesMaxOrderByAggregateInput
    _min?: MatchesMinOrderByAggregateInput
  }

  export type MatchesScalarWhereWithAggregatesInput = {
    AND?: MatchesScalarWhereWithAggregatesInput | MatchesScalarWhereWithAggregatesInput[]
    OR?: MatchesScalarWhereWithAggregatesInput[]
    NOT?: MatchesScalarWhereWithAggregatesInput | MatchesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Matches"> | string
    userId?: StringWithAggregatesFilter<"Matches"> | string
    matchUserId?: StringWithAggregatesFilter<"Matches"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Matches"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Matches"> | Date | string
  }

  export type InterestsWhereInput = {
    AND?: InterestsWhereInput | InterestsWhereInput[]
    OR?: InterestsWhereInput[]
    NOT?: InterestsWhereInput | InterestsWhereInput[]
    id?: StringFilter<"Interests"> | string
    name?: StringFilter<"Interests"> | string
    createdAt?: DateTimeFilter<"Interests"> | Date | string
    updatedAt?: DateTimeFilter<"Interests"> | Date | string
    userInterests?: UserInterestsListRelationFilter
    postInterests?: PostInterestsListRelationFilter
  }

  export type InterestsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userInterests?: UserInterestsOrderByRelationAggregateInput
    postInterests?: PostInterestsOrderByRelationAggregateInput
  }

  export type InterestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: InterestsWhereInput | InterestsWhereInput[]
    OR?: InterestsWhereInput[]
    NOT?: InterestsWhereInput | InterestsWhereInput[]
    createdAt?: DateTimeFilter<"Interests"> | Date | string
    updatedAt?: DateTimeFilter<"Interests"> | Date | string
    userInterests?: UserInterestsListRelationFilter
    postInterests?: PostInterestsListRelationFilter
  }, "id" | "name">

  export type InterestsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InterestsCountOrderByAggregateInput
    _max?: InterestsMaxOrderByAggregateInput
    _min?: InterestsMinOrderByAggregateInput
  }

  export type InterestsScalarWhereWithAggregatesInput = {
    AND?: InterestsScalarWhereWithAggregatesInput | InterestsScalarWhereWithAggregatesInput[]
    OR?: InterestsScalarWhereWithAggregatesInput[]
    NOT?: InterestsScalarWhereWithAggregatesInput | InterestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Interests"> | string
    name?: StringWithAggregatesFilter<"Interests"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Interests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Interests"> | Date | string
  }

  export type UserInterestsWhereInput = {
    AND?: UserInterestsWhereInput | UserInterestsWhereInput[]
    OR?: UserInterestsWhereInput[]
    NOT?: UserInterestsWhereInput | UserInterestsWhereInput[]
    id?: StringFilter<"UserInterests"> | string
    userDetailsId?: StringFilter<"UserInterests"> | string
    interestId?: StringFilter<"UserInterests"> | string
    createdAt?: DateTimeFilter<"UserInterests"> | Date | string
    updatedAt?: DateTimeFilter<"UserInterests"> | Date | string
    userDetails?: XOR<UserDetailsScalarRelationFilter, UserDetailsWhereInput>
    interest?: XOR<InterestsScalarRelationFilter, InterestsWhereInput>
  }

  export type UserInterestsOrderByWithRelationInput = {
    id?: SortOrder
    userDetailsId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userDetails?: UserDetailsOrderByWithRelationInput
    interest?: InterestsOrderByWithRelationInput
  }

  export type UserInterestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userDetailsId_interestId?: UserInterestsUserDetailsIdInterestIdCompoundUniqueInput
    AND?: UserInterestsWhereInput | UserInterestsWhereInput[]
    OR?: UserInterestsWhereInput[]
    NOT?: UserInterestsWhereInput | UserInterestsWhereInput[]
    userDetailsId?: StringFilter<"UserInterests"> | string
    interestId?: StringFilter<"UserInterests"> | string
    createdAt?: DateTimeFilter<"UserInterests"> | Date | string
    updatedAt?: DateTimeFilter<"UserInterests"> | Date | string
    userDetails?: XOR<UserDetailsScalarRelationFilter, UserDetailsWhereInput>
    interest?: XOR<InterestsScalarRelationFilter, InterestsWhereInput>
  }, "id" | "userDetailsId_interestId">

  export type UserInterestsOrderByWithAggregationInput = {
    id?: SortOrder
    userDetailsId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserInterestsCountOrderByAggregateInput
    _max?: UserInterestsMaxOrderByAggregateInput
    _min?: UserInterestsMinOrderByAggregateInput
  }

  export type UserInterestsScalarWhereWithAggregatesInput = {
    AND?: UserInterestsScalarWhereWithAggregatesInput | UserInterestsScalarWhereWithAggregatesInput[]
    OR?: UserInterestsScalarWhereWithAggregatesInput[]
    NOT?: UserInterestsScalarWhereWithAggregatesInput | UserInterestsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserInterests"> | string
    userDetailsId?: StringWithAggregatesFilter<"UserInterests"> | string
    interestId?: StringWithAggregatesFilter<"UserInterests"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserInterests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserInterests"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCreateNestedManyWithoutUserInput
    reactions?: ReactionsCreateNestedManyWithoutUserInput
    matches?: MatchesCreateNestedManyWithoutUserInput
    matchedWith?: MatchesCreateNestedManyWithoutMatchUserInput
    userDetails?: UserDetailsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchesUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchesUncheckedCreateNestedManyWithoutMatchUserInput
    userDetails?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUpdateManyWithoutUserNestedInput
    reactions?: ReactionsUpdateManyWithoutUserNestedInput
    matches?: MatchesUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUpdateManyWithoutMatchUserNestedInput
    userDetails?: UserDetailsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchesUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUncheckedUpdateManyWithoutMatchUserNestedInput
    userDetails?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailsCreateInput = {
    id?: string
    name: string
    bio: string
    department: string
    year: string
    image: string
    reading: string
    availability: string
    user: UserCreateNestedOneWithoutUserDetailsInput
    userInterests?: UserInterestsCreateNestedManyWithoutUserDetailsInput
  }

  export type UserDetailsUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    bio: string
    department: string
    year: string
    image: string
    reading: string
    availability: string
    userInterests?: UserInterestsUncheckedCreateNestedManyWithoutUserDetailsInput
  }

  export type UserDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    reading?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserDetailsNestedInput
    userInterests?: UserInterestsUpdateManyWithoutUserDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    reading?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    userInterests?: UserInterestsUncheckedUpdateManyWithoutUserDetailsNestedInput
  }

  export type UserDetailsCreateManyInput = {
    id?: string
    userId: string
    name: string
    bio: string
    department: string
    year: string
    image: string
    reading: string
    availability: string
  }

  export type UserDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    reading?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    reading?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
  }

  export type PostsCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postInterests?: PostInterestsCreateNestedManyWithoutPostInput
    reactions?: ReactionsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    postInterests?: PostInterestsUncheckedCreateNestedManyWithoutPostInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postInterests?: PostInterestsUpdateManyWithoutPostNestedInput
    reactions?: ReactionsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postInterests?: PostInterestsUncheckedUpdateManyWithoutPostNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PostsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostInterestsCreateInput = {
    id?: string
    post: PostsCreateNestedOneWithoutPostInterestsInput
    interest: InterestsCreateNestedOneWithoutPostInterestsInput
  }

  export type PostInterestsUncheckedCreateInput = {
    id?: string
    postId: string
    interestId: string
  }

  export type PostInterestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    post?: PostsUpdateOneRequiredWithoutPostInterestsNestedInput
    interest?: InterestsUpdateOneRequiredWithoutPostInterestsNestedInput
  }

  export type PostInterestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
  }

  export type PostInterestsCreateManyInput = {
    id?: string
    postId: string
    interestId: string
  }

  export type PostInterestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PostInterestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutReactionsInput
    post: PostsCreateNestedOneWithoutReactionsInput
  }

  export type ReactionsUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutReactionsNestedInput
    post?: PostsUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionsCreateManyInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchesCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutMatchesInput
    matchUser: UserCreateNestedOneWithoutMatchedWithInput
  }

  export type MatchesUncheckedCreateInput = {
    id?: string
    userId: string
    matchUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutMatchesNestedInput
    matchUser?: UserUpdateOneRequiredWithoutMatchedWithNestedInput
  }

  export type MatchesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchesCreateManyInput = {
    id?: string
    userId: string
    matchUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestsCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userInterests?: UserInterestsCreateNestedManyWithoutInterestInput
    postInterests?: PostInterestsCreateNestedManyWithoutInterestInput
  }

  export type InterestsUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userInterests?: UserInterestsUncheckedCreateNestedManyWithoutInterestInput
    postInterests?: PostInterestsUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInterests?: UserInterestsUpdateManyWithoutInterestNestedInput
    postInterests?: PostInterestsUpdateManyWithoutInterestNestedInput
  }

  export type InterestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInterests?: UserInterestsUncheckedUpdateManyWithoutInterestNestedInput
    postInterests?: PostInterestsUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type InterestsCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InterestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InterestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userDetails: UserDetailsCreateNestedOneWithoutUserInterestsInput
    interest: InterestsCreateNestedOneWithoutUserInterestsInput
  }

  export type UserInterestsUncheckedCreateInput = {
    id?: string
    userDetailsId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUpdateOneRequiredWithoutUserInterestsNestedInput
    interest?: InterestsUpdateOneRequiredWithoutUserInterestsNestedInput
  }

  export type UserInterestsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userDetailsId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestsCreateManyInput = {
    id?: string
    userDetailsId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userDetailsId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PostsListRelationFilter = {
    every?: PostsWhereInput
    some?: PostsWhereInput
    none?: PostsWhereInput
  }

  export type ReactionsListRelationFilter = {
    every?: ReactionsWhereInput
    some?: ReactionsWhereInput
    none?: ReactionsWhereInput
  }

  export type MatchesListRelationFilter = {
    every?: MatchesWhereInput
    some?: MatchesWhereInput
    none?: MatchesWhereInput
  }

  export type UserDetailsNullableScalarRelationFilter = {
    is?: UserDetailsWhereInput | null
    isNot?: UserDetailsWhereInput | null
  }

  export type PostsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserInterestsListRelationFilter = {
    every?: UserInterestsWhereInput
    some?: UserInterestsWhereInput
    none?: UserInterestsWhereInput
  }

  export type UserInterestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    department?: SortOrder
    year?: SortOrder
    image?: SortOrder
    reading?: SortOrder
    availability?: SortOrder
  }

  export type UserDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    department?: SortOrder
    year?: SortOrder
    image?: SortOrder
    reading?: SortOrder
    availability?: SortOrder
  }

  export type UserDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    department?: SortOrder
    year?: SortOrder
    image?: SortOrder
    reading?: SortOrder
    availability?: SortOrder
  }

  export type PostInterestsListRelationFilter = {
    every?: PostInterestsWhereInput
    some?: PostInterestsWhereInput
    none?: PostInterestsWhereInput
  }

  export type PostInterestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PostsScalarRelationFilter = {
    is?: PostsWhereInput
    isNot?: PostsWhereInput
  }

  export type InterestsScalarRelationFilter = {
    is?: InterestsWhereInput
    isNot?: InterestsWhereInput
  }

  export type PostInterestsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    interestId?: SortOrder
  }

  export type PostInterestsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    interestId?: SortOrder
  }

  export type PostInterestsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    interestId?: SortOrder
  }

  export type ReactionsCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReactionsMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchUserId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDetailsScalarRelationFilter = {
    is?: UserDetailsWhereInput
    isNot?: UserDetailsWhereInput
  }

  export type UserInterestsUserDetailsIdInterestIdCompoundUniqueInput = {
    userDetailsId: string
    interestId: string
  }

  export type UserInterestsCountOrderByAggregateInput = {
    id?: SortOrder
    userDetailsId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserInterestsMaxOrderByAggregateInput = {
    id?: SortOrder
    userDetailsId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserInterestsMinOrderByAggregateInput = {
    id?: SortOrder
    userDetailsId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostsCreateNestedManyWithoutUserInput = {
    create?: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput> | PostsCreateWithoutUserInput[] | PostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutUserInput | PostsCreateOrConnectWithoutUserInput[]
    createMany?: PostsCreateManyUserInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type ReactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput> | ReactionsCreateWithoutUserInput[] | ReactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutUserInput | ReactionsCreateOrConnectWithoutUserInput[]
    createMany?: ReactionsCreateManyUserInputEnvelope
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
  }

  export type MatchesCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchesCreateWithoutUserInput, MatchesUncheckedCreateWithoutUserInput> | MatchesCreateWithoutUserInput[] | MatchesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUserInput | MatchesCreateOrConnectWithoutUserInput[]
    createMany?: MatchesCreateManyUserInputEnvelope
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
  }

  export type MatchesCreateNestedManyWithoutMatchUserInput = {
    create?: XOR<MatchesCreateWithoutMatchUserInput, MatchesUncheckedCreateWithoutMatchUserInput> | MatchesCreateWithoutMatchUserInput[] | MatchesUncheckedCreateWithoutMatchUserInput[]
    connectOrCreate?: MatchesCreateOrConnectWithoutMatchUserInput | MatchesCreateOrConnectWithoutMatchUserInput[]
    createMany?: MatchesCreateManyMatchUserInputEnvelope
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
  }

  export type UserDetailsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput
    connect?: UserDetailsWhereUniqueInput
  }

  export type PostsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput> | PostsCreateWithoutUserInput[] | PostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutUserInput | PostsCreateOrConnectWithoutUserInput[]
    createMany?: PostsCreateManyUserInputEnvelope
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
  }

  export type ReactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput> | ReactionsCreateWithoutUserInput[] | ReactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutUserInput | ReactionsCreateOrConnectWithoutUserInput[]
    createMany?: ReactionsCreateManyUserInputEnvelope
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
  }

  export type MatchesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchesCreateWithoutUserInput, MatchesUncheckedCreateWithoutUserInput> | MatchesCreateWithoutUserInput[] | MatchesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUserInput | MatchesCreateOrConnectWithoutUserInput[]
    createMany?: MatchesCreateManyUserInputEnvelope
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
  }

  export type MatchesUncheckedCreateNestedManyWithoutMatchUserInput = {
    create?: XOR<MatchesCreateWithoutMatchUserInput, MatchesUncheckedCreateWithoutMatchUserInput> | MatchesCreateWithoutMatchUserInput[] | MatchesUncheckedCreateWithoutMatchUserInput[]
    connectOrCreate?: MatchesCreateOrConnectWithoutMatchUserInput | MatchesCreateOrConnectWithoutMatchUserInput[]
    createMany?: MatchesCreateManyMatchUserInputEnvelope
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
  }

  export type UserDetailsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput
    connect?: UserDetailsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput> | PostsCreateWithoutUserInput[] | PostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutUserInput | PostsCreateOrConnectWithoutUserInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutUserInput | PostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostsCreateManyUserInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutUserInput | PostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutUserInput | PostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type ReactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput> | ReactionsCreateWithoutUserInput[] | ReactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutUserInput | ReactionsCreateOrConnectWithoutUserInput[]
    upsert?: ReactionsUpsertWithWhereUniqueWithoutUserInput | ReactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionsCreateManyUserInputEnvelope
    set?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    disconnect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    delete?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    update?: ReactionsUpdateWithWhereUniqueWithoutUserInput | ReactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionsUpdateManyWithWhereWithoutUserInput | ReactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
  }

  export type MatchesUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchesCreateWithoutUserInput, MatchesUncheckedCreateWithoutUserInput> | MatchesCreateWithoutUserInput[] | MatchesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUserInput | MatchesCreateOrConnectWithoutUserInput[]
    upsert?: MatchesUpsertWithWhereUniqueWithoutUserInput | MatchesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchesCreateManyUserInputEnvelope
    set?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    disconnect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    delete?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    update?: MatchesUpdateWithWhereUniqueWithoutUserInput | MatchesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchesUpdateManyWithWhereWithoutUserInput | MatchesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
  }

  export type MatchesUpdateManyWithoutMatchUserNestedInput = {
    create?: XOR<MatchesCreateWithoutMatchUserInput, MatchesUncheckedCreateWithoutMatchUserInput> | MatchesCreateWithoutMatchUserInput[] | MatchesUncheckedCreateWithoutMatchUserInput[]
    connectOrCreate?: MatchesCreateOrConnectWithoutMatchUserInput | MatchesCreateOrConnectWithoutMatchUserInput[]
    upsert?: MatchesUpsertWithWhereUniqueWithoutMatchUserInput | MatchesUpsertWithWhereUniqueWithoutMatchUserInput[]
    createMany?: MatchesCreateManyMatchUserInputEnvelope
    set?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    disconnect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    delete?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    update?: MatchesUpdateWithWhereUniqueWithoutMatchUserInput | MatchesUpdateWithWhereUniqueWithoutMatchUserInput[]
    updateMany?: MatchesUpdateManyWithWhereWithoutMatchUserInput | MatchesUpdateManyWithWhereWithoutMatchUserInput[]
    deleteMany?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
  }

  export type UserDetailsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput
    upsert?: UserDetailsUpsertWithoutUserInput
    disconnect?: UserDetailsWhereInput | boolean
    delete?: UserDetailsWhereInput | boolean
    connect?: UserDetailsWhereUniqueInput
    update?: XOR<XOR<UserDetailsUpdateToOneWithWhereWithoutUserInput, UserDetailsUpdateWithoutUserInput>, UserDetailsUncheckedUpdateWithoutUserInput>
  }

  export type PostsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput> | PostsCreateWithoutUserInput[] | PostsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostsCreateOrConnectWithoutUserInput | PostsCreateOrConnectWithoutUserInput[]
    upsert?: PostsUpsertWithWhereUniqueWithoutUserInput | PostsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostsCreateManyUserInputEnvelope
    set?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    disconnect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    delete?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    connect?: PostsWhereUniqueInput | PostsWhereUniqueInput[]
    update?: PostsUpdateWithWhereUniqueWithoutUserInput | PostsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostsUpdateManyWithWhereWithoutUserInput | PostsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostsScalarWhereInput | PostsScalarWhereInput[]
  }

  export type ReactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput> | ReactionsCreateWithoutUserInput[] | ReactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutUserInput | ReactionsCreateOrConnectWithoutUserInput[]
    upsert?: ReactionsUpsertWithWhereUniqueWithoutUserInput | ReactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionsCreateManyUserInputEnvelope
    set?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    disconnect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    delete?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    update?: ReactionsUpdateWithWhereUniqueWithoutUserInput | ReactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionsUpdateManyWithWhereWithoutUserInput | ReactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
  }

  export type MatchesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchesCreateWithoutUserInput, MatchesUncheckedCreateWithoutUserInput> | MatchesCreateWithoutUserInput[] | MatchesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchesCreateOrConnectWithoutUserInput | MatchesCreateOrConnectWithoutUserInput[]
    upsert?: MatchesUpsertWithWhereUniqueWithoutUserInput | MatchesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchesCreateManyUserInputEnvelope
    set?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    disconnect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    delete?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    update?: MatchesUpdateWithWhereUniqueWithoutUserInput | MatchesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchesUpdateManyWithWhereWithoutUserInput | MatchesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
  }

  export type MatchesUncheckedUpdateManyWithoutMatchUserNestedInput = {
    create?: XOR<MatchesCreateWithoutMatchUserInput, MatchesUncheckedCreateWithoutMatchUserInput> | MatchesCreateWithoutMatchUserInput[] | MatchesUncheckedCreateWithoutMatchUserInput[]
    connectOrCreate?: MatchesCreateOrConnectWithoutMatchUserInput | MatchesCreateOrConnectWithoutMatchUserInput[]
    upsert?: MatchesUpsertWithWhereUniqueWithoutMatchUserInput | MatchesUpsertWithWhereUniqueWithoutMatchUserInput[]
    createMany?: MatchesCreateManyMatchUserInputEnvelope
    set?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    disconnect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    delete?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    connect?: MatchesWhereUniqueInput | MatchesWhereUniqueInput[]
    update?: MatchesUpdateWithWhereUniqueWithoutMatchUserInput | MatchesUpdateWithWhereUniqueWithoutMatchUserInput[]
    updateMany?: MatchesUpdateManyWithWhereWithoutMatchUserInput | MatchesUpdateManyWithWhereWithoutMatchUserInput[]
    deleteMany?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
  }

  export type UserDetailsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput
    upsert?: UserDetailsUpsertWithoutUserInput
    disconnect?: UserDetailsWhereInput | boolean
    delete?: UserDetailsWhereInput | boolean
    connect?: UserDetailsWhereUniqueInput
    update?: XOR<XOR<UserDetailsUpdateToOneWithWhereWithoutUserInput, UserDetailsUpdateWithoutUserInput>, UserDetailsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutUserDetailsInput = {
    create?: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type UserInterestsCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<UserInterestsCreateWithoutUserDetailsInput, UserInterestsUncheckedCreateWithoutUserDetailsInput> | UserInterestsCreateWithoutUserDetailsInput[] | UserInterestsUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: UserInterestsCreateOrConnectWithoutUserDetailsInput | UserInterestsCreateOrConnectWithoutUserDetailsInput[]
    createMany?: UserInterestsCreateManyUserDetailsInputEnvelope
    connect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
  }

  export type UserInterestsUncheckedCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<UserInterestsCreateWithoutUserDetailsInput, UserInterestsUncheckedCreateWithoutUserDetailsInput> | UserInterestsCreateWithoutUserDetailsInput[] | UserInterestsUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: UserInterestsCreateOrConnectWithoutUserDetailsInput | UserInterestsCreateOrConnectWithoutUserDetailsInput[]
    createMany?: UserInterestsCreateManyUserDetailsInputEnvelope
    connect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserDetailsNestedInput = {
    create?: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDetailsInput
    upsert?: UserUpsertWithoutUserDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDetailsInput, UserUpdateWithoutUserDetailsInput>, UserUncheckedUpdateWithoutUserDetailsInput>
  }

  export type UserInterestsUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<UserInterestsCreateWithoutUserDetailsInput, UserInterestsUncheckedCreateWithoutUserDetailsInput> | UserInterestsCreateWithoutUserDetailsInput[] | UserInterestsUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: UserInterestsCreateOrConnectWithoutUserDetailsInput | UserInterestsCreateOrConnectWithoutUserDetailsInput[]
    upsert?: UserInterestsUpsertWithWhereUniqueWithoutUserDetailsInput | UserInterestsUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: UserInterestsCreateManyUserDetailsInputEnvelope
    set?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    disconnect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    delete?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    connect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    update?: UserInterestsUpdateWithWhereUniqueWithoutUserDetailsInput | UserInterestsUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: UserInterestsUpdateManyWithWhereWithoutUserDetailsInput | UserInterestsUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: UserInterestsScalarWhereInput | UserInterestsScalarWhereInput[]
  }

  export type UserInterestsUncheckedUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<UserInterestsCreateWithoutUserDetailsInput, UserInterestsUncheckedCreateWithoutUserDetailsInput> | UserInterestsCreateWithoutUserDetailsInput[] | UserInterestsUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: UserInterestsCreateOrConnectWithoutUserDetailsInput | UserInterestsCreateOrConnectWithoutUserDetailsInput[]
    upsert?: UserInterestsUpsertWithWhereUniqueWithoutUserDetailsInput | UserInterestsUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: UserInterestsCreateManyUserDetailsInputEnvelope
    set?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    disconnect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    delete?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    connect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    update?: UserInterestsUpdateWithWhereUniqueWithoutUserDetailsInput | UserInterestsUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: UserInterestsUpdateManyWithWhereWithoutUserDetailsInput | UserInterestsUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: UserInterestsScalarWhereInput | UserInterestsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostInterestsCreateNestedManyWithoutPostInput = {
    create?: XOR<PostInterestsCreateWithoutPostInput, PostInterestsUncheckedCreateWithoutPostInput> | PostInterestsCreateWithoutPostInput[] | PostInterestsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostInterestsCreateOrConnectWithoutPostInput | PostInterestsCreateOrConnectWithoutPostInput[]
    createMany?: PostInterestsCreateManyPostInputEnvelope
    connect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
  }

  export type ReactionsCreateNestedManyWithoutPostInput = {
    create?: XOR<ReactionsCreateWithoutPostInput, ReactionsUncheckedCreateWithoutPostInput> | ReactionsCreateWithoutPostInput[] | ReactionsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutPostInput | ReactionsCreateOrConnectWithoutPostInput[]
    createMany?: ReactionsCreateManyPostInputEnvelope
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
  }

  export type PostInterestsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostInterestsCreateWithoutPostInput, PostInterestsUncheckedCreateWithoutPostInput> | PostInterestsCreateWithoutPostInput[] | PostInterestsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostInterestsCreateOrConnectWithoutPostInput | PostInterestsCreateOrConnectWithoutPostInput[]
    createMany?: PostInterestsCreateManyPostInputEnvelope
    connect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
  }

  export type ReactionsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReactionsCreateWithoutPostInput, ReactionsUncheckedCreateWithoutPostInput> | ReactionsCreateWithoutPostInput[] | ReactionsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutPostInput | ReactionsCreateOrConnectWithoutPostInput[]
    createMany?: ReactionsCreateManyPostInputEnvelope
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type PostInterestsUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostInterestsCreateWithoutPostInput, PostInterestsUncheckedCreateWithoutPostInput> | PostInterestsCreateWithoutPostInput[] | PostInterestsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostInterestsCreateOrConnectWithoutPostInput | PostInterestsCreateOrConnectWithoutPostInput[]
    upsert?: PostInterestsUpsertWithWhereUniqueWithoutPostInput | PostInterestsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostInterestsCreateManyPostInputEnvelope
    set?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    disconnect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    delete?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    connect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    update?: PostInterestsUpdateWithWhereUniqueWithoutPostInput | PostInterestsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostInterestsUpdateManyWithWhereWithoutPostInput | PostInterestsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostInterestsScalarWhereInput | PostInterestsScalarWhereInput[]
  }

  export type ReactionsUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReactionsCreateWithoutPostInput, ReactionsUncheckedCreateWithoutPostInput> | ReactionsCreateWithoutPostInput[] | ReactionsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutPostInput | ReactionsCreateOrConnectWithoutPostInput[]
    upsert?: ReactionsUpsertWithWhereUniqueWithoutPostInput | ReactionsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReactionsCreateManyPostInputEnvelope
    set?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    disconnect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    delete?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    update?: ReactionsUpdateWithWhereUniqueWithoutPostInput | ReactionsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReactionsUpdateManyWithWhereWithoutPostInput | ReactionsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
  }

  export type PostInterestsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostInterestsCreateWithoutPostInput, PostInterestsUncheckedCreateWithoutPostInput> | PostInterestsCreateWithoutPostInput[] | PostInterestsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostInterestsCreateOrConnectWithoutPostInput | PostInterestsCreateOrConnectWithoutPostInput[]
    upsert?: PostInterestsUpsertWithWhereUniqueWithoutPostInput | PostInterestsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostInterestsCreateManyPostInputEnvelope
    set?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    disconnect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    delete?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    connect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    update?: PostInterestsUpdateWithWhereUniqueWithoutPostInput | PostInterestsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostInterestsUpdateManyWithWhereWithoutPostInput | PostInterestsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostInterestsScalarWhereInput | PostInterestsScalarWhereInput[]
  }

  export type ReactionsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReactionsCreateWithoutPostInput, ReactionsUncheckedCreateWithoutPostInput> | ReactionsCreateWithoutPostInput[] | ReactionsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionsCreateOrConnectWithoutPostInput | ReactionsCreateOrConnectWithoutPostInput[]
    upsert?: ReactionsUpsertWithWhereUniqueWithoutPostInput | ReactionsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReactionsCreateManyPostInputEnvelope
    set?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    disconnect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    delete?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    connect?: ReactionsWhereUniqueInput | ReactionsWhereUniqueInput[]
    update?: ReactionsUpdateWithWhereUniqueWithoutPostInput | ReactionsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReactionsUpdateManyWithWhereWithoutPostInput | ReactionsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
  }

  export type PostsCreateNestedOneWithoutPostInterestsInput = {
    create?: XOR<PostsCreateWithoutPostInterestsInput, PostsUncheckedCreateWithoutPostInterestsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutPostInterestsInput
    connect?: PostsWhereUniqueInput
  }

  export type InterestsCreateNestedOneWithoutPostInterestsInput = {
    create?: XOR<InterestsCreateWithoutPostInterestsInput, InterestsUncheckedCreateWithoutPostInterestsInput>
    connectOrCreate?: InterestsCreateOrConnectWithoutPostInterestsInput
    connect?: InterestsWhereUniqueInput
  }

  export type PostsUpdateOneRequiredWithoutPostInterestsNestedInput = {
    create?: XOR<PostsCreateWithoutPostInterestsInput, PostsUncheckedCreateWithoutPostInterestsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutPostInterestsInput
    upsert?: PostsUpsertWithoutPostInterestsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutPostInterestsInput, PostsUpdateWithoutPostInterestsInput>, PostsUncheckedUpdateWithoutPostInterestsInput>
  }

  export type InterestsUpdateOneRequiredWithoutPostInterestsNestedInput = {
    create?: XOR<InterestsCreateWithoutPostInterestsInput, InterestsUncheckedCreateWithoutPostInterestsInput>
    connectOrCreate?: InterestsCreateOrConnectWithoutPostInterestsInput
    upsert?: InterestsUpsertWithoutPostInterestsInput
    connect?: InterestsWhereUniqueInput
    update?: XOR<XOR<InterestsUpdateToOneWithWhereWithoutPostInterestsInput, InterestsUpdateWithoutPostInterestsInput>, InterestsUncheckedUpdateWithoutPostInterestsInput>
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type PostsCreateNestedOneWithoutReactionsInput = {
    create?: XOR<PostsCreateWithoutReactionsInput, PostsUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutReactionsInput
    connect?: PostsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type PostsUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<PostsCreateWithoutReactionsInput, PostsUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: PostsCreateOrConnectWithoutReactionsInput
    upsert?: PostsUpsertWithoutReactionsInput
    connect?: PostsWhereUniqueInput
    update?: XOR<XOR<PostsUpdateToOneWithWhereWithoutReactionsInput, PostsUpdateWithoutReactionsInput>, PostsUncheckedUpdateWithoutReactionsInput>
  }

  export type UserCreateNestedOneWithoutMatchesInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchedWithInput = {
    create?: XOR<UserCreateWithoutMatchedWithInput, UserUncheckedCreateWithoutMatchedWithInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchedWithInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    upsert?: UserUpsertWithoutMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInput, UserUpdateWithoutMatchesInput>, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateOneRequiredWithoutMatchedWithNestedInput = {
    create?: XOR<UserCreateWithoutMatchedWithInput, UserUncheckedCreateWithoutMatchedWithInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchedWithInput
    upsert?: UserUpsertWithoutMatchedWithInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchedWithInput, UserUpdateWithoutMatchedWithInput>, UserUncheckedUpdateWithoutMatchedWithInput>
  }

  export type UserInterestsCreateNestedManyWithoutInterestInput = {
    create?: XOR<UserInterestsCreateWithoutInterestInput, UserInterestsUncheckedCreateWithoutInterestInput> | UserInterestsCreateWithoutInterestInput[] | UserInterestsUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestsCreateOrConnectWithoutInterestInput | UserInterestsCreateOrConnectWithoutInterestInput[]
    createMany?: UserInterestsCreateManyInterestInputEnvelope
    connect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
  }

  export type PostInterestsCreateNestedManyWithoutInterestInput = {
    create?: XOR<PostInterestsCreateWithoutInterestInput, PostInterestsUncheckedCreateWithoutInterestInput> | PostInterestsCreateWithoutInterestInput[] | PostInterestsUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: PostInterestsCreateOrConnectWithoutInterestInput | PostInterestsCreateOrConnectWithoutInterestInput[]
    createMany?: PostInterestsCreateManyInterestInputEnvelope
    connect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
  }

  export type UserInterestsUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<UserInterestsCreateWithoutInterestInput, UserInterestsUncheckedCreateWithoutInterestInput> | UserInterestsCreateWithoutInterestInput[] | UserInterestsUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestsCreateOrConnectWithoutInterestInput | UserInterestsCreateOrConnectWithoutInterestInput[]
    createMany?: UserInterestsCreateManyInterestInputEnvelope
    connect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
  }

  export type PostInterestsUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<PostInterestsCreateWithoutInterestInput, PostInterestsUncheckedCreateWithoutInterestInput> | PostInterestsCreateWithoutInterestInput[] | PostInterestsUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: PostInterestsCreateOrConnectWithoutInterestInput | PostInterestsCreateOrConnectWithoutInterestInput[]
    createMany?: PostInterestsCreateManyInterestInputEnvelope
    connect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
  }

  export type UserInterestsUpdateManyWithoutInterestNestedInput = {
    create?: XOR<UserInterestsCreateWithoutInterestInput, UserInterestsUncheckedCreateWithoutInterestInput> | UserInterestsCreateWithoutInterestInput[] | UserInterestsUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestsCreateOrConnectWithoutInterestInput | UserInterestsCreateOrConnectWithoutInterestInput[]
    upsert?: UserInterestsUpsertWithWhereUniqueWithoutInterestInput | UserInterestsUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: UserInterestsCreateManyInterestInputEnvelope
    set?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    disconnect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    delete?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    connect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    update?: UserInterestsUpdateWithWhereUniqueWithoutInterestInput | UserInterestsUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: UserInterestsUpdateManyWithWhereWithoutInterestInput | UserInterestsUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: UserInterestsScalarWhereInput | UserInterestsScalarWhereInput[]
  }

  export type PostInterestsUpdateManyWithoutInterestNestedInput = {
    create?: XOR<PostInterestsCreateWithoutInterestInput, PostInterestsUncheckedCreateWithoutInterestInput> | PostInterestsCreateWithoutInterestInput[] | PostInterestsUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: PostInterestsCreateOrConnectWithoutInterestInput | PostInterestsCreateOrConnectWithoutInterestInput[]
    upsert?: PostInterestsUpsertWithWhereUniqueWithoutInterestInput | PostInterestsUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: PostInterestsCreateManyInterestInputEnvelope
    set?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    disconnect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    delete?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    connect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    update?: PostInterestsUpdateWithWhereUniqueWithoutInterestInput | PostInterestsUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: PostInterestsUpdateManyWithWhereWithoutInterestInput | PostInterestsUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: PostInterestsScalarWhereInput | PostInterestsScalarWhereInput[]
  }

  export type UserInterestsUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<UserInterestsCreateWithoutInterestInput, UserInterestsUncheckedCreateWithoutInterestInput> | UserInterestsCreateWithoutInterestInput[] | UserInterestsUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: UserInterestsCreateOrConnectWithoutInterestInput | UserInterestsCreateOrConnectWithoutInterestInput[]
    upsert?: UserInterestsUpsertWithWhereUniqueWithoutInterestInput | UserInterestsUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: UserInterestsCreateManyInterestInputEnvelope
    set?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    disconnect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    delete?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    connect?: UserInterestsWhereUniqueInput | UserInterestsWhereUniqueInput[]
    update?: UserInterestsUpdateWithWhereUniqueWithoutInterestInput | UserInterestsUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: UserInterestsUpdateManyWithWhereWithoutInterestInput | UserInterestsUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: UserInterestsScalarWhereInput | UserInterestsScalarWhereInput[]
  }

  export type PostInterestsUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<PostInterestsCreateWithoutInterestInput, PostInterestsUncheckedCreateWithoutInterestInput> | PostInterestsCreateWithoutInterestInput[] | PostInterestsUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: PostInterestsCreateOrConnectWithoutInterestInput | PostInterestsCreateOrConnectWithoutInterestInput[]
    upsert?: PostInterestsUpsertWithWhereUniqueWithoutInterestInput | PostInterestsUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: PostInterestsCreateManyInterestInputEnvelope
    set?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    disconnect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    delete?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    connect?: PostInterestsWhereUniqueInput | PostInterestsWhereUniqueInput[]
    update?: PostInterestsUpdateWithWhereUniqueWithoutInterestInput | PostInterestsUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: PostInterestsUpdateManyWithWhereWithoutInterestInput | PostInterestsUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: PostInterestsScalarWhereInput | PostInterestsScalarWhereInput[]
  }

  export type UserDetailsCreateNestedOneWithoutUserInterestsInput = {
    create?: XOR<UserDetailsCreateWithoutUserInterestsInput, UserDetailsUncheckedCreateWithoutUserInterestsInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInterestsInput
    connect?: UserDetailsWhereUniqueInput
  }

  export type InterestsCreateNestedOneWithoutUserInterestsInput = {
    create?: XOR<InterestsCreateWithoutUserInterestsInput, InterestsUncheckedCreateWithoutUserInterestsInput>
    connectOrCreate?: InterestsCreateOrConnectWithoutUserInterestsInput
    connect?: InterestsWhereUniqueInput
  }

  export type UserDetailsUpdateOneRequiredWithoutUserInterestsNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInterestsInput, UserDetailsUncheckedCreateWithoutUserInterestsInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInterestsInput
    upsert?: UserDetailsUpsertWithoutUserInterestsInput
    connect?: UserDetailsWhereUniqueInput
    update?: XOR<XOR<UserDetailsUpdateToOneWithWhereWithoutUserInterestsInput, UserDetailsUpdateWithoutUserInterestsInput>, UserDetailsUncheckedUpdateWithoutUserInterestsInput>
  }

  export type InterestsUpdateOneRequiredWithoutUserInterestsNestedInput = {
    create?: XOR<InterestsCreateWithoutUserInterestsInput, InterestsUncheckedCreateWithoutUserInterestsInput>
    connectOrCreate?: InterestsCreateOrConnectWithoutUserInterestsInput
    upsert?: InterestsUpsertWithoutUserInterestsInput
    connect?: InterestsWhereUniqueInput
    update?: XOR<XOR<InterestsUpdateToOneWithWhereWithoutUserInterestsInput, InterestsUpdateWithoutUserInterestsInput>, InterestsUncheckedUpdateWithoutUserInterestsInput>
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

  export type PostsCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postInterests?: PostInterestsCreateNestedManyWithoutPostInput
    reactions?: ReactionsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postInterests?: PostInterestsUncheckedCreateNestedManyWithoutPostInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutUserInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput>
  }

  export type PostsCreateManyUserInputEnvelope = {
    data: PostsCreateManyUserInput | PostsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReactionsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostsCreateNestedOneWithoutReactionsInput
  }

  export type ReactionsUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionsCreateOrConnectWithoutUserInput = {
    where: ReactionsWhereUniqueInput
    create: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput>
  }

  export type ReactionsCreateManyUserInputEnvelope = {
    data: ReactionsCreateManyUserInput | ReactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    matchUser: UserCreateNestedOneWithoutMatchedWithInput
  }

  export type MatchesUncheckedCreateWithoutUserInput = {
    id?: string
    matchUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchesCreateOrConnectWithoutUserInput = {
    where: MatchesWhereUniqueInput
    create: XOR<MatchesCreateWithoutUserInput, MatchesUncheckedCreateWithoutUserInput>
  }

  export type MatchesCreateManyUserInputEnvelope = {
    data: MatchesCreateManyUserInput | MatchesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchesCreateWithoutMatchUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutMatchesInput
  }

  export type MatchesUncheckedCreateWithoutMatchUserInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchesCreateOrConnectWithoutMatchUserInput = {
    where: MatchesWhereUniqueInput
    create: XOR<MatchesCreateWithoutMatchUserInput, MatchesUncheckedCreateWithoutMatchUserInput>
  }

  export type MatchesCreateManyMatchUserInputEnvelope = {
    data: MatchesCreateManyMatchUserInput | MatchesCreateManyMatchUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailsCreateWithoutUserInput = {
    id?: string
    name: string
    bio: string
    department: string
    year: string
    image: string
    reading: string
    availability: string
    userInterests?: UserInterestsCreateNestedManyWithoutUserDetailsInput
  }

  export type UserDetailsUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    bio: string
    department: string
    year: string
    image: string
    reading: string
    availability: string
    userInterests?: UserInterestsUncheckedCreateNestedManyWithoutUserDetailsInput
  }

  export type UserDetailsCreateOrConnectWithoutUserInput = {
    where: UserDetailsWhereUniqueInput
    create: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
  }

  export type PostsUpsertWithWhereUniqueWithoutUserInput = {
    where: PostsWhereUniqueInput
    update: XOR<PostsUpdateWithoutUserInput, PostsUncheckedUpdateWithoutUserInput>
    create: XOR<PostsCreateWithoutUserInput, PostsUncheckedCreateWithoutUserInput>
  }

  export type PostsUpdateWithWhereUniqueWithoutUserInput = {
    where: PostsWhereUniqueInput
    data: XOR<PostsUpdateWithoutUserInput, PostsUncheckedUpdateWithoutUserInput>
  }

  export type PostsUpdateManyWithWhereWithoutUserInput = {
    where: PostsScalarWhereInput
    data: XOR<PostsUpdateManyMutationInput, PostsUncheckedUpdateManyWithoutUserInput>
  }

  export type PostsScalarWhereInput = {
    AND?: PostsScalarWhereInput | PostsScalarWhereInput[]
    OR?: PostsScalarWhereInput[]
    NOT?: PostsScalarWhereInput | PostsScalarWhereInput[]
    id?: StringFilter<"Posts"> | string
    content?: StringFilter<"Posts"> | string
    createdAt?: DateTimeFilter<"Posts"> | Date | string
    updatedAt?: DateTimeFilter<"Posts"> | Date | string
    userId?: StringFilter<"Posts"> | string
  }

  export type ReactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionsWhereUniqueInput
    update: XOR<ReactionsUpdateWithoutUserInput, ReactionsUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionsCreateWithoutUserInput, ReactionsUncheckedCreateWithoutUserInput>
  }

  export type ReactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionsWhereUniqueInput
    data: XOR<ReactionsUpdateWithoutUserInput, ReactionsUncheckedUpdateWithoutUserInput>
  }

  export type ReactionsUpdateManyWithWhereWithoutUserInput = {
    where: ReactionsScalarWhereInput
    data: XOR<ReactionsUpdateManyMutationInput, ReactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionsScalarWhereInput = {
    AND?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
    OR?: ReactionsScalarWhereInput[]
    NOT?: ReactionsScalarWhereInput | ReactionsScalarWhereInput[]
    id?: StringFilter<"Reactions"> | string
    postId?: StringFilter<"Reactions"> | string
    userId?: StringFilter<"Reactions"> | string
    createdAt?: DateTimeFilter<"Reactions"> | Date | string
    updatedAt?: DateTimeFilter<"Reactions"> | Date | string
  }

  export type MatchesUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchesWhereUniqueInput
    update: XOR<MatchesUpdateWithoutUserInput, MatchesUncheckedUpdateWithoutUserInput>
    create: XOR<MatchesCreateWithoutUserInput, MatchesUncheckedCreateWithoutUserInput>
  }

  export type MatchesUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchesWhereUniqueInput
    data: XOR<MatchesUpdateWithoutUserInput, MatchesUncheckedUpdateWithoutUserInput>
  }

  export type MatchesUpdateManyWithWhereWithoutUserInput = {
    where: MatchesScalarWhereInput
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchesScalarWhereInput = {
    AND?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
    OR?: MatchesScalarWhereInput[]
    NOT?: MatchesScalarWhereInput | MatchesScalarWhereInput[]
    id?: StringFilter<"Matches"> | string
    userId?: StringFilter<"Matches"> | string
    matchUserId?: StringFilter<"Matches"> | string
    createdAt?: DateTimeFilter<"Matches"> | Date | string
    updatedAt?: DateTimeFilter<"Matches"> | Date | string
  }

  export type MatchesUpsertWithWhereUniqueWithoutMatchUserInput = {
    where: MatchesWhereUniqueInput
    update: XOR<MatchesUpdateWithoutMatchUserInput, MatchesUncheckedUpdateWithoutMatchUserInput>
    create: XOR<MatchesCreateWithoutMatchUserInput, MatchesUncheckedCreateWithoutMatchUserInput>
  }

  export type MatchesUpdateWithWhereUniqueWithoutMatchUserInput = {
    where: MatchesWhereUniqueInput
    data: XOR<MatchesUpdateWithoutMatchUserInput, MatchesUncheckedUpdateWithoutMatchUserInput>
  }

  export type MatchesUpdateManyWithWhereWithoutMatchUserInput = {
    where: MatchesScalarWhereInput
    data: XOR<MatchesUpdateManyMutationInput, MatchesUncheckedUpdateManyWithoutMatchUserInput>
  }

  export type UserDetailsUpsertWithoutUserInput = {
    update: XOR<UserDetailsUpdateWithoutUserInput, UserDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
    where?: UserDetailsWhereInput
  }

  export type UserDetailsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserDetailsWhereInput
    data: XOR<UserDetailsUpdateWithoutUserInput, UserDetailsUncheckedUpdateWithoutUserInput>
  }

  export type UserDetailsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    reading?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    userInterests?: UserInterestsUpdateManyWithoutUserDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    reading?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    userInterests?: UserInterestsUncheckedUpdateManyWithoutUserDetailsNestedInput
  }

  export type UserCreateWithoutUserDetailsInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCreateNestedManyWithoutUserInput
    reactions?: ReactionsCreateNestedManyWithoutUserInput
    matches?: MatchesCreateNestedManyWithoutUserInput
    matchedWith?: MatchesCreateNestedManyWithoutMatchUserInput
  }

  export type UserUncheckedCreateWithoutUserDetailsInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchesUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchesUncheckedCreateNestedManyWithoutMatchUserInput
  }

  export type UserCreateOrConnectWithoutUserDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
  }

  export type UserInterestsCreateWithoutUserDetailsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    interest: InterestsCreateNestedOneWithoutUserInterestsInput
  }

  export type UserInterestsUncheckedCreateWithoutUserDetailsInput = {
    id?: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestsCreateOrConnectWithoutUserDetailsInput = {
    where: UserInterestsWhereUniqueInput
    create: XOR<UserInterestsCreateWithoutUserDetailsInput, UserInterestsUncheckedCreateWithoutUserDetailsInput>
  }

  export type UserInterestsCreateManyUserDetailsInputEnvelope = {
    data: UserInterestsCreateManyUserDetailsInput | UserInterestsCreateManyUserDetailsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserDetailsInput = {
    update: XOR<UserUpdateWithoutUserDetailsInput, UserUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDetailsInput, UserUncheckedUpdateWithoutUserDetailsInput>
  }

  export type UserUpdateWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUpdateManyWithoutUserNestedInput
    reactions?: ReactionsUpdateManyWithoutUserNestedInput
    matches?: MatchesUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUpdateManyWithoutMatchUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchesUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUncheckedUpdateManyWithoutMatchUserNestedInput
  }

  export type UserInterestsUpsertWithWhereUniqueWithoutUserDetailsInput = {
    where: UserInterestsWhereUniqueInput
    update: XOR<UserInterestsUpdateWithoutUserDetailsInput, UserInterestsUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<UserInterestsCreateWithoutUserDetailsInput, UserInterestsUncheckedCreateWithoutUserDetailsInput>
  }

  export type UserInterestsUpdateWithWhereUniqueWithoutUserDetailsInput = {
    where: UserInterestsWhereUniqueInput
    data: XOR<UserInterestsUpdateWithoutUserDetailsInput, UserInterestsUncheckedUpdateWithoutUserDetailsInput>
  }

  export type UserInterestsUpdateManyWithWhereWithoutUserDetailsInput = {
    where: UserInterestsScalarWhereInput
    data: XOR<UserInterestsUpdateManyMutationInput, UserInterestsUncheckedUpdateManyWithoutUserDetailsInput>
  }

  export type UserInterestsScalarWhereInput = {
    AND?: UserInterestsScalarWhereInput | UserInterestsScalarWhereInput[]
    OR?: UserInterestsScalarWhereInput[]
    NOT?: UserInterestsScalarWhereInput | UserInterestsScalarWhereInput[]
    id?: StringFilter<"UserInterests"> | string
    userDetailsId?: StringFilter<"UserInterests"> | string
    interestId?: StringFilter<"UserInterests"> | string
    createdAt?: DateTimeFilter<"UserInterests"> | Date | string
    updatedAt?: DateTimeFilter<"UserInterests"> | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionsCreateNestedManyWithoutUserInput
    matches?: MatchesCreateNestedManyWithoutUserInput
    matchedWith?: MatchesCreateNestedManyWithoutMatchUserInput
    userDetails?: UserDetailsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reactions?: ReactionsUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchesUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchesUncheckedCreateNestedManyWithoutMatchUserInput
    userDetails?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type PostInterestsCreateWithoutPostInput = {
    id?: string
    interest: InterestsCreateNestedOneWithoutPostInterestsInput
  }

  export type PostInterestsUncheckedCreateWithoutPostInput = {
    id?: string
    interestId: string
  }

  export type PostInterestsCreateOrConnectWithoutPostInput = {
    where: PostInterestsWhereUniqueInput
    create: XOR<PostInterestsCreateWithoutPostInput, PostInterestsUncheckedCreateWithoutPostInput>
  }

  export type PostInterestsCreateManyPostInputEnvelope = {
    data: PostInterestsCreateManyPostInput | PostInterestsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ReactionsCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionsUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionsCreateOrConnectWithoutPostInput = {
    where: ReactionsWhereUniqueInput
    create: XOR<ReactionsCreateWithoutPostInput, ReactionsUncheckedCreateWithoutPostInput>
  }

  export type ReactionsCreateManyPostInputEnvelope = {
    data: ReactionsCreateManyPostInput | ReactionsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionsUpdateManyWithoutUserNestedInput
    matches?: MatchesUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUpdateManyWithoutMatchUserNestedInput
    userDetails?: UserDetailsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionsUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchesUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUncheckedUpdateManyWithoutMatchUserNestedInput
    userDetails?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PostInterestsUpsertWithWhereUniqueWithoutPostInput = {
    where: PostInterestsWhereUniqueInput
    update: XOR<PostInterestsUpdateWithoutPostInput, PostInterestsUncheckedUpdateWithoutPostInput>
    create: XOR<PostInterestsCreateWithoutPostInput, PostInterestsUncheckedCreateWithoutPostInput>
  }

  export type PostInterestsUpdateWithWhereUniqueWithoutPostInput = {
    where: PostInterestsWhereUniqueInput
    data: XOR<PostInterestsUpdateWithoutPostInput, PostInterestsUncheckedUpdateWithoutPostInput>
  }

  export type PostInterestsUpdateManyWithWhereWithoutPostInput = {
    where: PostInterestsScalarWhereInput
    data: XOR<PostInterestsUpdateManyMutationInput, PostInterestsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostInterestsScalarWhereInput = {
    AND?: PostInterestsScalarWhereInput | PostInterestsScalarWhereInput[]
    OR?: PostInterestsScalarWhereInput[]
    NOT?: PostInterestsScalarWhereInput | PostInterestsScalarWhereInput[]
    id?: StringFilter<"PostInterests"> | string
    postId?: StringFilter<"PostInterests"> | string
    interestId?: StringFilter<"PostInterests"> | string
  }

  export type ReactionsUpsertWithWhereUniqueWithoutPostInput = {
    where: ReactionsWhereUniqueInput
    update: XOR<ReactionsUpdateWithoutPostInput, ReactionsUncheckedUpdateWithoutPostInput>
    create: XOR<ReactionsCreateWithoutPostInput, ReactionsUncheckedCreateWithoutPostInput>
  }

  export type ReactionsUpdateWithWhereUniqueWithoutPostInput = {
    where: ReactionsWhereUniqueInput
    data: XOR<ReactionsUpdateWithoutPostInput, ReactionsUncheckedUpdateWithoutPostInput>
  }

  export type ReactionsUpdateManyWithWhereWithoutPostInput = {
    where: ReactionsScalarWhereInput
    data: XOR<ReactionsUpdateManyMutationInput, ReactionsUncheckedUpdateManyWithoutPostInput>
  }

  export type PostsCreateWithoutPostInterestsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    reactions?: ReactionsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutPostInterestsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    reactions?: ReactionsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutPostInterestsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutPostInterestsInput, PostsUncheckedCreateWithoutPostInterestsInput>
  }

  export type InterestsCreateWithoutPostInterestsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userInterests?: UserInterestsCreateNestedManyWithoutInterestInput
  }

  export type InterestsUncheckedCreateWithoutPostInterestsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userInterests?: UserInterestsUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestsCreateOrConnectWithoutPostInterestsInput = {
    where: InterestsWhereUniqueInput
    create: XOR<InterestsCreateWithoutPostInterestsInput, InterestsUncheckedCreateWithoutPostInterestsInput>
  }

  export type PostsUpsertWithoutPostInterestsInput = {
    update: XOR<PostsUpdateWithoutPostInterestsInput, PostsUncheckedUpdateWithoutPostInterestsInput>
    create: XOR<PostsCreateWithoutPostInterestsInput, PostsUncheckedCreateWithoutPostInterestsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutPostInterestsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutPostInterestsInput, PostsUncheckedUpdateWithoutPostInterestsInput>
  }

  export type PostsUpdateWithoutPostInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    reactions?: ReactionsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutPostInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    reactions?: ReactionsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type InterestsUpsertWithoutPostInterestsInput = {
    update: XOR<InterestsUpdateWithoutPostInterestsInput, InterestsUncheckedUpdateWithoutPostInterestsInput>
    create: XOR<InterestsCreateWithoutPostInterestsInput, InterestsUncheckedCreateWithoutPostInterestsInput>
    where?: InterestsWhereInput
  }

  export type InterestsUpdateToOneWithWhereWithoutPostInterestsInput = {
    where?: InterestsWhereInput
    data: XOR<InterestsUpdateWithoutPostInterestsInput, InterestsUncheckedUpdateWithoutPostInterestsInput>
  }

  export type InterestsUpdateWithoutPostInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInterests?: UserInterestsUpdateManyWithoutInterestNestedInput
  }

  export type InterestsUncheckedUpdateWithoutPostInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userInterests?: UserInterestsUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCreateNestedManyWithoutUserInput
    matches?: MatchesCreateNestedManyWithoutUserInput
    matchedWith?: MatchesCreateNestedManyWithoutMatchUserInput
    userDetails?: UserDetailsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchesUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchesUncheckedCreateNestedManyWithoutMatchUserInput
    userDetails?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type PostsCreateWithoutReactionsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postInterests?: PostInterestsCreateNestedManyWithoutPostInput
  }

  export type PostsUncheckedCreateWithoutReactionsInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    postInterests?: PostInterestsUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostsCreateOrConnectWithoutReactionsInput = {
    where: PostsWhereUniqueInput
    create: XOR<PostsCreateWithoutReactionsInput, PostsUncheckedCreateWithoutReactionsInput>
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUpdateManyWithoutUserNestedInput
    matches?: MatchesUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUpdateManyWithoutMatchUserNestedInput
    userDetails?: UserDetailsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchesUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUncheckedUpdateManyWithoutMatchUserNestedInput
    userDetails?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PostsUpsertWithoutReactionsInput = {
    update: XOR<PostsUpdateWithoutReactionsInput, PostsUncheckedUpdateWithoutReactionsInput>
    create: XOR<PostsCreateWithoutReactionsInput, PostsUncheckedCreateWithoutReactionsInput>
    where?: PostsWhereInput
  }

  export type PostsUpdateToOneWithWhereWithoutReactionsInput = {
    where?: PostsWhereInput
    data: XOR<PostsUpdateWithoutReactionsInput, PostsUncheckedUpdateWithoutReactionsInput>
  }

  export type PostsUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postInterests?: PostInterestsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postInterests?: PostInterestsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutMatchesInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCreateNestedManyWithoutUserInput
    reactions?: ReactionsCreateNestedManyWithoutUserInput
    matchedWith?: MatchesCreateNestedManyWithoutMatchUserInput
    userDetails?: UserDetailsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutUserInput
    matchedWith?: MatchesUncheckedCreateNestedManyWithoutMatchUserInput
    userDetails?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
  }

  export type UserCreateWithoutMatchedWithInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsCreateNestedManyWithoutUserInput
    reactions?: ReactionsCreateNestedManyWithoutUserInput
    matches?: MatchesCreateNestedManyWithoutUserInput
    userDetails?: UserDetailsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchedWithInput = {
    id?: string
    email: string
    username?: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostsUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionsUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchesUncheckedCreateNestedManyWithoutUserInput
    userDetails?: UserDetailsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchedWithInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchedWithInput, UserUncheckedCreateWithoutMatchedWithInput>
  }

  export type UserUpsertWithoutMatchesInput = {
    update: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUpdateManyWithoutUserNestedInput
    reactions?: ReactionsUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUpdateManyWithoutMatchUserNestedInput
    userDetails?: UserDetailsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutUserNestedInput
    matchedWith?: MatchesUncheckedUpdateManyWithoutMatchUserNestedInput
    userDetails?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUpsertWithoutMatchedWithInput = {
    update: XOR<UserUpdateWithoutMatchedWithInput, UserUncheckedUpdateWithoutMatchedWithInput>
    create: XOR<UserCreateWithoutMatchedWithInput, UserUncheckedCreateWithoutMatchedWithInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchedWithInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchedWithInput, UserUncheckedUpdateWithoutMatchedWithInput>
  }

  export type UserUpdateWithoutMatchedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUpdateManyWithoutUserNestedInput
    reactions?: ReactionsUpdateManyWithoutUserNestedInput
    matches?: MatchesUpdateManyWithoutUserNestedInput
    userDetails?: UserDetailsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostsUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchesUncheckedUpdateManyWithoutUserNestedInput
    userDetails?: UserDetailsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserInterestsCreateWithoutInterestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userDetails: UserDetailsCreateNestedOneWithoutUserInterestsInput
  }

  export type UserInterestsUncheckedCreateWithoutInterestInput = {
    id?: string
    userDetailsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestsCreateOrConnectWithoutInterestInput = {
    where: UserInterestsWhereUniqueInput
    create: XOR<UserInterestsCreateWithoutInterestInput, UserInterestsUncheckedCreateWithoutInterestInput>
  }

  export type UserInterestsCreateManyInterestInputEnvelope = {
    data: UserInterestsCreateManyInterestInput | UserInterestsCreateManyInterestInput[]
    skipDuplicates?: boolean
  }

  export type PostInterestsCreateWithoutInterestInput = {
    id?: string
    post: PostsCreateNestedOneWithoutPostInterestsInput
  }

  export type PostInterestsUncheckedCreateWithoutInterestInput = {
    id?: string
    postId: string
  }

  export type PostInterestsCreateOrConnectWithoutInterestInput = {
    where: PostInterestsWhereUniqueInput
    create: XOR<PostInterestsCreateWithoutInterestInput, PostInterestsUncheckedCreateWithoutInterestInput>
  }

  export type PostInterestsCreateManyInterestInputEnvelope = {
    data: PostInterestsCreateManyInterestInput | PostInterestsCreateManyInterestInput[]
    skipDuplicates?: boolean
  }

  export type UserInterestsUpsertWithWhereUniqueWithoutInterestInput = {
    where: UserInterestsWhereUniqueInput
    update: XOR<UserInterestsUpdateWithoutInterestInput, UserInterestsUncheckedUpdateWithoutInterestInput>
    create: XOR<UserInterestsCreateWithoutInterestInput, UserInterestsUncheckedCreateWithoutInterestInput>
  }

  export type UserInterestsUpdateWithWhereUniqueWithoutInterestInput = {
    where: UserInterestsWhereUniqueInput
    data: XOR<UserInterestsUpdateWithoutInterestInput, UserInterestsUncheckedUpdateWithoutInterestInput>
  }

  export type UserInterestsUpdateManyWithWhereWithoutInterestInput = {
    where: UserInterestsScalarWhereInput
    data: XOR<UserInterestsUpdateManyMutationInput, UserInterestsUncheckedUpdateManyWithoutInterestInput>
  }

  export type PostInterestsUpsertWithWhereUniqueWithoutInterestInput = {
    where: PostInterestsWhereUniqueInput
    update: XOR<PostInterestsUpdateWithoutInterestInput, PostInterestsUncheckedUpdateWithoutInterestInput>
    create: XOR<PostInterestsCreateWithoutInterestInput, PostInterestsUncheckedCreateWithoutInterestInput>
  }

  export type PostInterestsUpdateWithWhereUniqueWithoutInterestInput = {
    where: PostInterestsWhereUniqueInput
    data: XOR<PostInterestsUpdateWithoutInterestInput, PostInterestsUncheckedUpdateWithoutInterestInput>
  }

  export type PostInterestsUpdateManyWithWhereWithoutInterestInput = {
    where: PostInterestsScalarWhereInput
    data: XOR<PostInterestsUpdateManyMutationInput, PostInterestsUncheckedUpdateManyWithoutInterestInput>
  }

  export type UserDetailsCreateWithoutUserInterestsInput = {
    id?: string
    name: string
    bio: string
    department: string
    year: string
    image: string
    reading: string
    availability: string
    user: UserCreateNestedOneWithoutUserDetailsInput
  }

  export type UserDetailsUncheckedCreateWithoutUserInterestsInput = {
    id?: string
    userId: string
    name: string
    bio: string
    department: string
    year: string
    image: string
    reading: string
    availability: string
  }

  export type UserDetailsCreateOrConnectWithoutUserInterestsInput = {
    where: UserDetailsWhereUniqueInput
    create: XOR<UserDetailsCreateWithoutUserInterestsInput, UserDetailsUncheckedCreateWithoutUserInterestsInput>
  }

  export type InterestsCreateWithoutUserInterestsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postInterests?: PostInterestsCreateNestedManyWithoutInterestInput
  }

  export type InterestsUncheckedCreateWithoutUserInterestsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    postInterests?: PostInterestsUncheckedCreateNestedManyWithoutInterestInput
  }

  export type InterestsCreateOrConnectWithoutUserInterestsInput = {
    where: InterestsWhereUniqueInput
    create: XOR<InterestsCreateWithoutUserInterestsInput, InterestsUncheckedCreateWithoutUserInterestsInput>
  }

  export type UserDetailsUpsertWithoutUserInterestsInput = {
    update: XOR<UserDetailsUpdateWithoutUserInterestsInput, UserDetailsUncheckedUpdateWithoutUserInterestsInput>
    create: XOR<UserDetailsCreateWithoutUserInterestsInput, UserDetailsUncheckedCreateWithoutUserInterestsInput>
    where?: UserDetailsWhereInput
  }

  export type UserDetailsUpdateToOneWithWhereWithoutUserInterestsInput = {
    where?: UserDetailsWhereInput
    data: XOR<UserDetailsUpdateWithoutUserInterestsInput, UserDetailsUncheckedUpdateWithoutUserInterestsInput>
  }

  export type UserDetailsUpdateWithoutUserInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    reading?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutUserDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateWithoutUserInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    reading?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
  }

  export type InterestsUpsertWithoutUserInterestsInput = {
    update: XOR<InterestsUpdateWithoutUserInterestsInput, InterestsUncheckedUpdateWithoutUserInterestsInput>
    create: XOR<InterestsCreateWithoutUserInterestsInput, InterestsUncheckedCreateWithoutUserInterestsInput>
    where?: InterestsWhereInput
  }

  export type InterestsUpdateToOneWithWhereWithoutUserInterestsInput = {
    where?: InterestsWhereInput
    data: XOR<InterestsUpdateWithoutUserInterestsInput, InterestsUncheckedUpdateWithoutUserInterestsInput>
  }

  export type InterestsUpdateWithoutUserInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postInterests?: PostInterestsUpdateManyWithoutInterestNestedInput
  }

  export type InterestsUncheckedUpdateWithoutUserInterestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postInterests?: PostInterestsUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type PostsCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReactionsCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchesCreateManyUserInput = {
    id?: string
    matchUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchesCreateManyMatchUserInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postInterests?: PostInterestsUpdateManyWithoutPostNestedInput
    reactions?: ReactionsUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postInterests?: PostInterestsUncheckedUpdateManyWithoutPostNestedInput
    reactions?: ReactionsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostsUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchUser?: UserUpdateOneRequiredWithoutMatchedWithNestedInput
  }

  export type MatchesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchesUpdateWithoutMatchUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchesUncheckedUpdateWithoutMatchUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchesUncheckedUpdateManyWithoutMatchUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestsCreateManyUserDetailsInput = {
    id?: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInterestsUpdateWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interest?: InterestsUpdateOneRequiredWithoutUserInterestsNestedInput
  }

  export type UserInterestsUncheckedUpdateWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestsUncheckedUpdateManyWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostInterestsCreateManyPostInput = {
    id?: string
    interestId: string
  }

  export type ReactionsCreateManyPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostInterestsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    interest?: InterestsUpdateOneRequiredWithoutPostInterestsNestedInput
  }

  export type PostInterestsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
  }

  export type PostInterestsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionsUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionsUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionsUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestsCreateManyInterestInput = {
    id?: string
    userDetailsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostInterestsCreateManyInterestInput = {
    id?: string
    postId: string
  }

  export type UserInterestsUpdateWithoutInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUpdateOneRequiredWithoutUserInterestsNestedInput
  }

  export type UserInterestsUncheckedUpdateWithoutInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userDetailsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInterestsUncheckedUpdateManyWithoutInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userDetailsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostInterestsUpdateWithoutInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    post?: PostsUpdateOneRequiredWithoutPostInterestsNestedInput
  }

  export type PostInterestsUncheckedUpdateWithoutInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostInterestsUncheckedUpdateManyWithoutInterestInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
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