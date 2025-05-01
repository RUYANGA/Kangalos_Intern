
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
 * Model UniversityOfRwanda
 * 
 */
export type UniversityOfRwanda = $Result.DefaultSelection<Prisma.$UniversityOfRwandaPayload>
/**
 * Model College
 * 
 */
export type College = $Result.DefaultSelection<Prisma.$CollegePayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Departments
 * 
 */
export type Departments = $Result.DefaultSelection<Prisma.$DepartmentsPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model ProjectTeam
 * 
 */
export type ProjectTeam = $Result.DefaultSelection<Prisma.$ProjectTeamPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const STATUS: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type STATUS = (typeof STATUS)[keyof typeof STATUS]


export const PROJECTSTATUS: {
  NOT_SUBMITTED: 'NOT_SUBMITTED',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  IN_PROGRESS: 'IN_PROGRESS'
};

export type PROJECTSTATUS = (typeof PROJECTSTATUS)[keyof typeof PROJECTSTATUS]


export const ROLES: {
  ADMIN: 'ADMIN',
  STUDENT: 'STUDENT',
  SUPERVISOR: 'SUPERVISOR',
  HOD: 'HOD'
};

export type ROLES = (typeof ROLES)[keyof typeof ROLES]


export const ROLETEAM: {
  MEMBER: 'MEMBER',
  TEAM_LEADER: 'TEAM_LEADER',
  SUPERVISOR: 'SUPERVISOR'
};

export type ROLETEAM = (typeof ROLETEAM)[keyof typeof ROLETEAM]

}

export type STATUS = $Enums.STATUS

export const STATUS: typeof $Enums.STATUS

export type PROJECTSTATUS = $Enums.PROJECTSTATUS

export const PROJECTSTATUS: typeof $Enums.PROJECTSTATUS

export type ROLES = $Enums.ROLES

export const ROLES: typeof $Enums.ROLES

export type ROLETEAM = $Enums.ROLETEAM

export const ROLETEAM: typeof $Enums.ROLETEAM

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UniversityOfRwandas
 * const universityOfRwandas = await prisma.universityOfRwanda.findMany()
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
   * // Fetch zero or more UniversityOfRwandas
   * const universityOfRwandas = await prisma.universityOfRwanda.findMany()
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
   * `prisma.universityOfRwanda`: Exposes CRUD operations for the **UniversityOfRwanda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UniversityOfRwandas
    * const universityOfRwandas = await prisma.universityOfRwanda.findMany()
    * ```
    */
  get universityOfRwanda(): Prisma.UniversityOfRwandaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.college`: Exposes CRUD operations for the **College** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colleges
    * const colleges = await prisma.college.findMany()
    * ```
    */
  get college(): Prisma.CollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **Departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.DepartmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTeam`: Exposes CRUD operations for the **ProjectTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTeams
    * const projectTeams = await prisma.projectTeam.findMany()
    * ```
    */
  get projectTeam(): Prisma.ProjectTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;
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
    UniversityOfRwanda: 'UniversityOfRwanda',
    College: 'College',
    School: 'School',
    Departments: 'Departments',
    Program: 'Program',
    User: 'User',
    Otp: 'Otp',
    ProjectTeam: 'ProjectTeam',
    Project: 'Project'
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
      modelProps: "universityOfRwanda" | "college" | "school" | "departments" | "program" | "user" | "otp" | "projectTeam" | "project"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UniversityOfRwanda: {
        payload: Prisma.$UniversityOfRwandaPayload<ExtArgs>
        fields: Prisma.UniversityOfRwandaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversityOfRwandaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversityOfRwandaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>
          }
          findFirst: {
            args: Prisma.UniversityOfRwandaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversityOfRwandaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>
          }
          findMany: {
            args: Prisma.UniversityOfRwandaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>[]
          }
          create: {
            args: Prisma.UniversityOfRwandaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>
          }
          createMany: {
            args: Prisma.UniversityOfRwandaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UniversityOfRwandaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>[]
          }
          delete: {
            args: Prisma.UniversityOfRwandaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>
          }
          update: {
            args: Prisma.UniversityOfRwandaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>
          }
          deleteMany: {
            args: Prisma.UniversityOfRwandaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversityOfRwandaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UniversityOfRwandaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>[]
          }
          upsert: {
            args: Prisma.UniversityOfRwandaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityOfRwandaPayload>
          }
          aggregate: {
            args: Prisma.UniversityOfRwandaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversityOfRwanda>
          }
          groupBy: {
            args: Prisma.UniversityOfRwandaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityOfRwandaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniversityOfRwandaCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityOfRwandaCountAggregateOutputType> | number
          }
        }
      }
      College: {
        payload: Prisma.$CollegePayload<ExtArgs>
        fields: Prisma.CollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findFirst: {
            args: Prisma.CollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findMany: {
            args: Prisma.CollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          create: {
            args: Prisma.CollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          createMany: {
            args: Prisma.CollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          delete: {
            args: Prisma.CollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          update: {
            args: Prisma.CollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          deleteMany: {
            args: Prisma.CollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          upsert: {
            args: Prisma.CollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          aggregate: {
            args: Prisma.CollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollege>
          }
          groupBy: {
            args: Prisma.CollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCountAggregateOutputType> | number
          }
        }
      }
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Departments: {
        payload: Prisma.$DepartmentsPayload<ExtArgs>
        fields: Prisma.DepartmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findFirst: {
            args: Prisma.DepartmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findMany: {
            args: Prisma.DepartmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          create: {
            args: Prisma.DepartmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          createMany: {
            args: Prisma.DepartmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          delete: {
            args: Prisma.DepartmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          update: {
            args: Prisma.DepartmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.DepartmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
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
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      ProjectTeam: {
        payload: Prisma.$ProjectTeamPayload<ExtArgs>
        fields: Prisma.ProjectTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>
          }
          findFirst: {
            args: Prisma.ProjectTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>
          }
          findMany: {
            args: Prisma.ProjectTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>[]
          }
          create: {
            args: Prisma.ProjectTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>
          }
          createMany: {
            args: Prisma.ProjectTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>[]
          }
          delete: {
            args: Prisma.ProjectTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>
          }
          update: {
            args: Prisma.ProjectTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>[]
          }
          upsert: {
            args: Prisma.ProjectTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTeamPayload>
          }
          aggregate: {
            args: Prisma.ProjectTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTeam>
          }
          groupBy: {
            args: Prisma.ProjectTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTeamCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTeamCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
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
    universityOfRwanda?: UniversityOfRwandaOmit
    college?: CollegeOmit
    school?: SchoolOmit
    departments?: DepartmentsOmit
    program?: ProgramOmit
    user?: UserOmit
    otp?: OtpOmit
    projectTeam?: ProjectTeamOmit
    project?: ProjectOmit
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
   * Count Type UniversityOfRwandaCountOutputType
   */

  export type UniversityOfRwandaCountOutputType = {
    college: number
  }

  export type UniversityOfRwandaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | UniversityOfRwandaCountOutputTypeCountCollegeArgs
  }

  // Custom InputTypes
  /**
   * UniversityOfRwandaCountOutputType without action
   */
  export type UniversityOfRwandaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwandaCountOutputType
     */
    select?: UniversityOfRwandaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UniversityOfRwandaCountOutputType without action
   */
  export type UniversityOfRwandaCountOutputTypeCountCollegeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
  }


  /**
   * Count Type CollegeCountOutputType
   */

  export type CollegeCountOutputType = {
    school: number
  }

  export type CollegeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | CollegeCountOutputTypeCountSchoolArgs
  }

  // Custom InputTypes
  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCountOutputType
     */
    select?: CollegeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    department: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | SchoolCountOutputTypeCountDepartmentArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentsWhereInput
  }


  /**
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    programs: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | DepartmentsCountOutputTypeCountProgramsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    students: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ProgramCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type ProjectTeamCountOutputType
   */

  export type ProjectTeamCountOutputType = {
    projects: number
  }

  export type ProjectTeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ProjectTeamCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ProjectTeamCountOutputType without action
   */
  export type ProjectTeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeamCountOutputType
     */
    select?: ProjectTeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectTeamCountOutputType without action
   */
  export type ProjectTeamCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UniversityOfRwanda
   */

  export type AggregateUniversityOfRwanda = {
    _count: UniversityOfRwandaCountAggregateOutputType | null
    _min: UniversityOfRwandaMinAggregateOutputType | null
    _max: UniversityOfRwandaMaxAggregateOutputType | null
  }

  export type UniversityOfRwandaMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniversityOfRwandaMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UniversityOfRwandaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UniversityOfRwandaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniversityOfRwandaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UniversityOfRwandaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UniversityOfRwandaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniversityOfRwanda to aggregate.
     */
    where?: UniversityOfRwandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityOfRwandas to fetch.
     */
    orderBy?: UniversityOfRwandaOrderByWithRelationInput | UniversityOfRwandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversityOfRwandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityOfRwandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityOfRwandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UniversityOfRwandas
    **/
    _count?: true | UniversityOfRwandaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityOfRwandaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityOfRwandaMaxAggregateInputType
  }

  export type GetUniversityOfRwandaAggregateType<T extends UniversityOfRwandaAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversityOfRwanda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversityOfRwanda[P]>
      : GetScalarType<T[P], AggregateUniversityOfRwanda[P]>
  }




  export type UniversityOfRwandaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityOfRwandaWhereInput
    orderBy?: UniversityOfRwandaOrderByWithAggregationInput | UniversityOfRwandaOrderByWithAggregationInput[]
    by: UniversityOfRwandaScalarFieldEnum[] | UniversityOfRwandaScalarFieldEnum
    having?: UniversityOfRwandaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityOfRwandaCountAggregateInputType | true
    _min?: UniversityOfRwandaMinAggregateInputType
    _max?: UniversityOfRwandaMaxAggregateInputType
  }

  export type UniversityOfRwandaGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    _count: UniversityOfRwandaCountAggregateOutputType | null
    _min: UniversityOfRwandaMinAggregateOutputType | null
    _max: UniversityOfRwandaMaxAggregateOutputType | null
  }

  type GetUniversityOfRwandaGroupByPayload<T extends UniversityOfRwandaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityOfRwandaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityOfRwandaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityOfRwandaGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityOfRwandaGroupByOutputType[P]>
        }
      >
    >


  export type UniversityOfRwandaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | UniversityOfRwanda$collegeArgs<ExtArgs>
    _count?: boolean | UniversityOfRwandaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["universityOfRwanda"]>

  export type UniversityOfRwandaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["universityOfRwanda"]>

  export type UniversityOfRwandaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["universityOfRwanda"]>

  export type UniversityOfRwandaSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UniversityOfRwandaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt", ExtArgs["result"]["universityOfRwanda"]>
  export type UniversityOfRwandaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | UniversityOfRwanda$collegeArgs<ExtArgs>
    _count?: boolean | UniversityOfRwandaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UniversityOfRwandaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UniversityOfRwandaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UniversityOfRwandaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UniversityOfRwanda"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["universityOfRwanda"]>
    composites: {}
  }

  type UniversityOfRwandaGetPayload<S extends boolean | null | undefined | UniversityOfRwandaDefaultArgs> = $Result.GetResult<Prisma.$UniversityOfRwandaPayload, S>

  type UniversityOfRwandaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversityOfRwandaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityOfRwandaCountAggregateInputType | true
    }

  export interface UniversityOfRwandaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UniversityOfRwanda'], meta: { name: 'UniversityOfRwanda' } }
    /**
     * Find zero or one UniversityOfRwanda that matches the filter.
     * @param {UniversityOfRwandaFindUniqueArgs} args - Arguments to find a UniversityOfRwanda
     * @example
     * // Get one UniversityOfRwanda
     * const universityOfRwanda = await prisma.universityOfRwanda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversityOfRwandaFindUniqueArgs>(args: SelectSubset<T, UniversityOfRwandaFindUniqueArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UniversityOfRwanda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversityOfRwandaFindUniqueOrThrowArgs} args - Arguments to find a UniversityOfRwanda
     * @example
     * // Get one UniversityOfRwanda
     * const universityOfRwanda = await prisma.universityOfRwanda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversityOfRwandaFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversityOfRwandaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniversityOfRwanda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityOfRwandaFindFirstArgs} args - Arguments to find a UniversityOfRwanda
     * @example
     * // Get one UniversityOfRwanda
     * const universityOfRwanda = await prisma.universityOfRwanda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversityOfRwandaFindFirstArgs>(args?: SelectSubset<T, UniversityOfRwandaFindFirstArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniversityOfRwanda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityOfRwandaFindFirstOrThrowArgs} args - Arguments to find a UniversityOfRwanda
     * @example
     * // Get one UniversityOfRwanda
     * const universityOfRwanda = await prisma.universityOfRwanda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversityOfRwandaFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversityOfRwandaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UniversityOfRwandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityOfRwandaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UniversityOfRwandas
     * const universityOfRwandas = await prisma.universityOfRwanda.findMany()
     * 
     * // Get first 10 UniversityOfRwandas
     * const universityOfRwandas = await prisma.universityOfRwanda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universityOfRwandaWithIdOnly = await prisma.universityOfRwanda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniversityOfRwandaFindManyArgs>(args?: SelectSubset<T, UniversityOfRwandaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UniversityOfRwanda.
     * @param {UniversityOfRwandaCreateArgs} args - Arguments to create a UniversityOfRwanda.
     * @example
     * // Create one UniversityOfRwanda
     * const UniversityOfRwanda = await prisma.universityOfRwanda.create({
     *   data: {
     *     // ... data to create a UniversityOfRwanda
     *   }
     * })
     * 
     */
    create<T extends UniversityOfRwandaCreateArgs>(args: SelectSubset<T, UniversityOfRwandaCreateArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UniversityOfRwandas.
     * @param {UniversityOfRwandaCreateManyArgs} args - Arguments to create many UniversityOfRwandas.
     * @example
     * // Create many UniversityOfRwandas
     * const universityOfRwanda = await prisma.universityOfRwanda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversityOfRwandaCreateManyArgs>(args?: SelectSubset<T, UniversityOfRwandaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UniversityOfRwandas and returns the data saved in the database.
     * @param {UniversityOfRwandaCreateManyAndReturnArgs} args - Arguments to create many UniversityOfRwandas.
     * @example
     * // Create many UniversityOfRwandas
     * const universityOfRwanda = await prisma.universityOfRwanda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UniversityOfRwandas and only return the `id`
     * const universityOfRwandaWithIdOnly = await prisma.universityOfRwanda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UniversityOfRwandaCreateManyAndReturnArgs>(args?: SelectSubset<T, UniversityOfRwandaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UniversityOfRwanda.
     * @param {UniversityOfRwandaDeleteArgs} args - Arguments to delete one UniversityOfRwanda.
     * @example
     * // Delete one UniversityOfRwanda
     * const UniversityOfRwanda = await prisma.universityOfRwanda.delete({
     *   where: {
     *     // ... filter to delete one UniversityOfRwanda
     *   }
     * })
     * 
     */
    delete<T extends UniversityOfRwandaDeleteArgs>(args: SelectSubset<T, UniversityOfRwandaDeleteArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UniversityOfRwanda.
     * @param {UniversityOfRwandaUpdateArgs} args - Arguments to update one UniversityOfRwanda.
     * @example
     * // Update one UniversityOfRwanda
     * const universityOfRwanda = await prisma.universityOfRwanda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversityOfRwandaUpdateArgs>(args: SelectSubset<T, UniversityOfRwandaUpdateArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UniversityOfRwandas.
     * @param {UniversityOfRwandaDeleteManyArgs} args - Arguments to filter UniversityOfRwandas to delete.
     * @example
     * // Delete a few UniversityOfRwandas
     * const { count } = await prisma.universityOfRwanda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversityOfRwandaDeleteManyArgs>(args?: SelectSubset<T, UniversityOfRwandaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniversityOfRwandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityOfRwandaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UniversityOfRwandas
     * const universityOfRwanda = await prisma.universityOfRwanda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversityOfRwandaUpdateManyArgs>(args: SelectSubset<T, UniversityOfRwandaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniversityOfRwandas and returns the data updated in the database.
     * @param {UniversityOfRwandaUpdateManyAndReturnArgs} args - Arguments to update many UniversityOfRwandas.
     * @example
     * // Update many UniversityOfRwandas
     * const universityOfRwanda = await prisma.universityOfRwanda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UniversityOfRwandas and only return the `id`
     * const universityOfRwandaWithIdOnly = await prisma.universityOfRwanda.updateManyAndReturn({
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
    updateManyAndReturn<T extends UniversityOfRwandaUpdateManyAndReturnArgs>(args: SelectSubset<T, UniversityOfRwandaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UniversityOfRwanda.
     * @param {UniversityOfRwandaUpsertArgs} args - Arguments to update or create a UniversityOfRwanda.
     * @example
     * // Update or create a UniversityOfRwanda
     * const universityOfRwanda = await prisma.universityOfRwanda.upsert({
     *   create: {
     *     // ... data to create a UniversityOfRwanda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UniversityOfRwanda we want to update
     *   }
     * })
     */
    upsert<T extends UniversityOfRwandaUpsertArgs>(args: SelectSubset<T, UniversityOfRwandaUpsertArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UniversityOfRwandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityOfRwandaCountArgs} args - Arguments to filter UniversityOfRwandas to count.
     * @example
     * // Count the number of UniversityOfRwandas
     * const count = await prisma.universityOfRwanda.count({
     *   where: {
     *     // ... the filter for the UniversityOfRwandas we want to count
     *   }
     * })
    **/
    count<T extends UniversityOfRwandaCountArgs>(
      args?: Subset<T, UniversityOfRwandaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityOfRwandaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UniversityOfRwanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityOfRwandaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniversityOfRwandaAggregateArgs>(args: Subset<T, UniversityOfRwandaAggregateArgs>): Prisma.PrismaPromise<GetUniversityOfRwandaAggregateType<T>>

    /**
     * Group by UniversityOfRwanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityOfRwandaGroupByArgs} args - Group by arguments.
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
      T extends UniversityOfRwandaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversityOfRwandaGroupByArgs['orderBy'] }
        : { orderBy?: UniversityOfRwandaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniversityOfRwandaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityOfRwandaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UniversityOfRwanda model
   */
  readonly fields: UniversityOfRwandaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UniversityOfRwanda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversityOfRwandaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends UniversityOfRwanda$collegeArgs<ExtArgs> = {}>(args?: Subset<T, UniversityOfRwanda$collegeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UniversityOfRwanda model
   */
  interface UniversityOfRwandaFieldRefs {
    readonly id: FieldRef<"UniversityOfRwanda", 'String'>
    readonly createdAt: FieldRef<"UniversityOfRwanda", 'DateTime'>
    readonly updatedAt: FieldRef<"UniversityOfRwanda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UniversityOfRwanda findUnique
   */
  export type UniversityOfRwandaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * Filter, which UniversityOfRwanda to fetch.
     */
    where: UniversityOfRwandaWhereUniqueInput
  }

  /**
   * UniversityOfRwanda findUniqueOrThrow
   */
  export type UniversityOfRwandaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * Filter, which UniversityOfRwanda to fetch.
     */
    where: UniversityOfRwandaWhereUniqueInput
  }

  /**
   * UniversityOfRwanda findFirst
   */
  export type UniversityOfRwandaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * Filter, which UniversityOfRwanda to fetch.
     */
    where?: UniversityOfRwandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityOfRwandas to fetch.
     */
    orderBy?: UniversityOfRwandaOrderByWithRelationInput | UniversityOfRwandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniversityOfRwandas.
     */
    cursor?: UniversityOfRwandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityOfRwandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityOfRwandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniversityOfRwandas.
     */
    distinct?: UniversityOfRwandaScalarFieldEnum | UniversityOfRwandaScalarFieldEnum[]
  }

  /**
   * UniversityOfRwanda findFirstOrThrow
   */
  export type UniversityOfRwandaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * Filter, which UniversityOfRwanda to fetch.
     */
    where?: UniversityOfRwandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityOfRwandas to fetch.
     */
    orderBy?: UniversityOfRwandaOrderByWithRelationInput | UniversityOfRwandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniversityOfRwandas.
     */
    cursor?: UniversityOfRwandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityOfRwandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityOfRwandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniversityOfRwandas.
     */
    distinct?: UniversityOfRwandaScalarFieldEnum | UniversityOfRwandaScalarFieldEnum[]
  }

  /**
   * UniversityOfRwanda findMany
   */
  export type UniversityOfRwandaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * Filter, which UniversityOfRwandas to fetch.
     */
    where?: UniversityOfRwandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityOfRwandas to fetch.
     */
    orderBy?: UniversityOfRwandaOrderByWithRelationInput | UniversityOfRwandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UniversityOfRwandas.
     */
    cursor?: UniversityOfRwandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityOfRwandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityOfRwandas.
     */
    skip?: number
    distinct?: UniversityOfRwandaScalarFieldEnum | UniversityOfRwandaScalarFieldEnum[]
  }

  /**
   * UniversityOfRwanda create
   */
  export type UniversityOfRwandaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * The data needed to create a UniversityOfRwanda.
     */
    data: XOR<UniversityOfRwandaCreateInput, UniversityOfRwandaUncheckedCreateInput>
  }

  /**
   * UniversityOfRwanda createMany
   */
  export type UniversityOfRwandaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UniversityOfRwandas.
     */
    data: UniversityOfRwandaCreateManyInput | UniversityOfRwandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UniversityOfRwanda createManyAndReturn
   */
  export type UniversityOfRwandaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * The data used to create many UniversityOfRwandas.
     */
    data: UniversityOfRwandaCreateManyInput | UniversityOfRwandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UniversityOfRwanda update
   */
  export type UniversityOfRwandaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * The data needed to update a UniversityOfRwanda.
     */
    data: XOR<UniversityOfRwandaUpdateInput, UniversityOfRwandaUncheckedUpdateInput>
    /**
     * Choose, which UniversityOfRwanda to update.
     */
    where: UniversityOfRwandaWhereUniqueInput
  }

  /**
   * UniversityOfRwanda updateMany
   */
  export type UniversityOfRwandaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UniversityOfRwandas.
     */
    data: XOR<UniversityOfRwandaUpdateManyMutationInput, UniversityOfRwandaUncheckedUpdateManyInput>
    /**
     * Filter which UniversityOfRwandas to update
     */
    where?: UniversityOfRwandaWhereInput
    /**
     * Limit how many UniversityOfRwandas to update.
     */
    limit?: number
  }

  /**
   * UniversityOfRwanda updateManyAndReturn
   */
  export type UniversityOfRwandaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * The data used to update UniversityOfRwandas.
     */
    data: XOR<UniversityOfRwandaUpdateManyMutationInput, UniversityOfRwandaUncheckedUpdateManyInput>
    /**
     * Filter which UniversityOfRwandas to update
     */
    where?: UniversityOfRwandaWhereInput
    /**
     * Limit how many UniversityOfRwandas to update.
     */
    limit?: number
  }

  /**
   * UniversityOfRwanda upsert
   */
  export type UniversityOfRwandaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * The filter to search for the UniversityOfRwanda to update in case it exists.
     */
    where: UniversityOfRwandaWhereUniqueInput
    /**
     * In case the UniversityOfRwanda found by the `where` argument doesn't exist, create a new UniversityOfRwanda with this data.
     */
    create: XOR<UniversityOfRwandaCreateInput, UniversityOfRwandaUncheckedCreateInput>
    /**
     * In case the UniversityOfRwanda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversityOfRwandaUpdateInput, UniversityOfRwandaUncheckedUpdateInput>
  }

  /**
   * UniversityOfRwanda delete
   */
  export type UniversityOfRwandaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
    /**
     * Filter which UniversityOfRwanda to delete.
     */
    where: UniversityOfRwandaWhereUniqueInput
  }

  /**
   * UniversityOfRwanda deleteMany
   */
  export type UniversityOfRwandaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniversityOfRwandas to delete
     */
    where?: UniversityOfRwandaWhereInput
    /**
     * Limit how many UniversityOfRwandas to delete.
     */
    limit?: number
  }

  /**
   * UniversityOfRwanda.college
   */
  export type UniversityOfRwanda$collegeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    cursor?: CollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * UniversityOfRwanda without action
   */
  export type UniversityOfRwandaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityOfRwanda
     */
    select?: UniversityOfRwandaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityOfRwanda
     */
    omit?: UniversityOfRwandaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UniversityOfRwandaInclude<ExtArgs> | null
  }


  /**
   * Model College
   */

  export type AggregateCollege = {
    _count: CollegeCountAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  export type CollegeMinAggregateOutputType = {
    id: string | null
    name: string | null
    universityId: string | null
    dean: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollegeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    universityId: string | null
    dean: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollegeCountAggregateOutputType = {
    id: number
    name: number
    universityId: number
    dean: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollegeMinAggregateInputType = {
    id?: true
    name?: true
    universityId?: true
    dean?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollegeMaxAggregateInputType = {
    id?: true
    name?: true
    universityId?: true
    dean?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollegeCountAggregateInputType = {
    id?: true
    name?: true
    universityId?: true
    dean?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which College to aggregate.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colleges
    **/
    _count?: true | CollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeMaxAggregateInputType
  }

  export type GetCollegeAggregateType<T extends CollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollege[P]>
      : GetScalarType<T[P], AggregateCollege[P]>
  }




  export type CollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithAggregationInput | CollegeOrderByWithAggregationInput[]
    by: CollegeScalarFieldEnum[] | CollegeScalarFieldEnum
    having?: CollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCountAggregateInputType | true
    _min?: CollegeMinAggregateInputType
    _max?: CollegeMaxAggregateInputType
  }

  export type CollegeGroupByOutputType = {
    id: string
    name: string
    universityId: string
    dean: string
    createdAt: Date
    updatedAt: Date
    _count: CollegeCountAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  type GetCollegeGroupByPayload<T extends CollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeGroupByOutputType[P]>
        }
      >
    >


  export type CollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    universityId?: boolean
    dean?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityOfRwandaDefaultArgs<ExtArgs>
    school?: boolean | College$schoolArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    universityId?: boolean
    dean?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityOfRwandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    universityId?: boolean
    dean?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    university?: boolean | UniversityOfRwandaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectScalar = {
    id?: boolean
    name?: boolean
    universityId?: boolean
    dean?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "universityId" | "dean" | "createdAt" | "updatedAt", ExtArgs["result"]["college"]>
  export type CollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityOfRwandaDefaultArgs<ExtArgs>
    school?: boolean | College$schoolArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityOfRwandaDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    university?: boolean | UniversityOfRwandaDefaultArgs<ExtArgs>
  }

  export type $CollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "College"
    objects: {
      university: Prisma.$UniversityOfRwandaPayload<ExtArgs>
      school: Prisma.$SchoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      universityId: string
      dean: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["college"]>
    composites: {}
  }

  type CollegeGetPayload<S extends boolean | null | undefined | CollegeDefaultArgs> = $Result.GetResult<Prisma.$CollegePayload, S>

  type CollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCountAggregateInputType | true
    }

  export interface CollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['College'], meta: { name: 'College' } }
    /**
     * Find zero or one College that matches the filter.
     * @param {CollegeFindUniqueArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeFindUniqueArgs>(args: SelectSubset<T, CollegeFindUniqueArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one College that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeFindUniqueOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeFindFirstArgs>(args?: SelectSubset<T, CollegeFindFirstArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colleges
     * const colleges = await prisma.college.findMany()
     * 
     * // Get first 10 Colleges
     * const colleges = await prisma.college.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeWithIdOnly = await prisma.college.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeFindManyArgs>(args?: SelectSubset<T, CollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a College.
     * @param {CollegeCreateArgs} args - Arguments to create a College.
     * @example
     * // Create one College
     * const College = await prisma.college.create({
     *   data: {
     *     // ... data to create a College
     *   }
     * })
     * 
     */
    create<T extends CollegeCreateArgs>(args: SelectSubset<T, CollegeCreateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colleges.
     * @param {CollegeCreateManyArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCreateManyArgs>(args?: SelectSubset<T, CollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colleges and returns the data saved in the database.
     * @param {CollegeCreateManyAndReturnArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a College.
     * @param {CollegeDeleteArgs} args - Arguments to delete one College.
     * @example
     * // Delete one College
     * const College = await prisma.college.delete({
     *   where: {
     *     // ... filter to delete one College
     *   }
     * })
     * 
     */
    delete<T extends CollegeDeleteArgs>(args: SelectSubset<T, CollegeDeleteArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one College.
     * @param {CollegeUpdateArgs} args - Arguments to update one College.
     * @example
     * // Update one College
     * const college = await prisma.college.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeUpdateArgs>(args: SelectSubset<T, CollegeUpdateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colleges.
     * @param {CollegeDeleteManyArgs} args - Arguments to filter Colleges to delete.
     * @example
     * // Delete a few Colleges
     * const { count } = await prisma.college.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeDeleteManyArgs>(args?: SelectSubset<T, CollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeUpdateManyArgs>(args: SelectSubset<T, CollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges and returns the data updated in the database.
     * @param {CollegeUpdateManyAndReturnArgs} args - Arguments to update many Colleges.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.updateManyAndReturn({
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
    updateManyAndReturn<T extends CollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one College.
     * @param {CollegeUpsertArgs} args - Arguments to update or create a College.
     * @example
     * // Update or create a College
     * const college = await prisma.college.upsert({
     *   create: {
     *     // ... data to create a College
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the College we want to update
     *   }
     * })
     */
    upsert<T extends CollegeUpsertArgs>(args: SelectSubset<T, CollegeUpsertArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCountArgs} args - Arguments to filter Colleges to count.
     * @example
     * // Count the number of Colleges
     * const count = await prisma.college.count({
     *   where: {
     *     // ... the filter for the Colleges we want to count
     *   }
     * })
    **/
    count<T extends CollegeCountArgs>(
      args?: Subset<T, CollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollegeAggregateArgs>(args: Subset<T, CollegeAggregateArgs>): Prisma.PrismaPromise<GetCollegeAggregateType<T>>

    /**
     * Group by College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeGroupByArgs} args - Group by arguments.
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
      T extends CollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeGroupByArgs['orderBy'] }
        : { orderBy?: CollegeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the College model
   */
  readonly fields: CollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for College.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    university<T extends UniversityOfRwandaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UniversityOfRwandaDefaultArgs<ExtArgs>>): Prisma__UniversityOfRwandaClient<$Result.GetResult<Prisma.$UniversityOfRwandaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    school<T extends College$schoolArgs<ExtArgs> = {}>(args?: Subset<T, College$schoolArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the College model
   */
  interface CollegeFieldRefs {
    readonly id: FieldRef<"College", 'String'>
    readonly name: FieldRef<"College", 'String'>
    readonly universityId: FieldRef<"College", 'String'>
    readonly dean: FieldRef<"College", 'String'>
    readonly createdAt: FieldRef<"College", 'DateTime'>
    readonly updatedAt: FieldRef<"College", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * College findUnique
   */
  export type CollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findUniqueOrThrow
   */
  export type CollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findFirst
   */
  export type CollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findFirstOrThrow
   */
  export type CollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findMany
   */
  export type CollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which Colleges to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College create
   */
  export type CollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a College.
     */
    data: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
  }

  /**
   * College createMany
   */
  export type CollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College createManyAndReturn
   */
  export type CollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * College update
   */
  export type CollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a College.
     */
    data: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
    /**
     * Choose, which College to update.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College updateMany
   */
  export type CollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College updateManyAndReturn
   */
  export type CollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * College upsert
   */
  export type CollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the College to update in case it exists.
     */
    where: CollegeWhereUniqueInput
    /**
     * In case the College found by the `where` argument doesn't exist, create a new College with this data.
     */
    create: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
    /**
     * In case the College was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
  }

  /**
   * College delete
   */
  export type CollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter which College to delete.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College deleteMany
   */
  export type CollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colleges to delete
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to delete.
     */
    limit?: number
  }

  /**
   * College.school
   */
  export type College$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    cursor?: SchoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * College without action
   */
  export type CollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
  }


  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
    collegeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    collegeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    collegeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    collegeId: string
    createdAt: Date
    updatedAt: Date
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collegeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    department?: boolean | School$departmentArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collegeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collegeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    collegeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "collegeId" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    department?: boolean | School$departmentArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      college: Prisma.$CollegePayload<ExtArgs>
      department: Prisma.$DepartmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      collegeId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends School$departmentArgs<ExtArgs> = {}>(args?: Subset<T, School$departmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly collegeId: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.department
   */
  export type School$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    where?: DepartmentsWhereInput
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    cursor?: DepartmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentsCountAggregateOutputType = {
    id: number
    name: number
    schoolId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentsMinAggregateInputType = {
    id?: true
    name?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    id?: true
    name?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentsCountAggregateInputType = {
    id?: true
    name?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to aggregate.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type DepartmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentsWhereInput
    orderBy?: DepartmentsOrderByWithAggregationInput | DepartmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: DepartmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    id: string
    name: string
    schoolId: string
    createdAt: Date
    updatedAt: Date
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends DepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    programs?: boolean | Departments$programsArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type DepartmentsSelectScalar = {
    id?: boolean
    name?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "schoolId" | "createdAt" | "updatedAt", ExtArgs["result"]["departments"]>
  export type DepartmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    programs?: boolean | Departments$programsArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type DepartmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $DepartmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departments"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      programs: Prisma.$ProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      schoolId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type DepartmentsGetPayload<S extends boolean | null | undefined | DepartmentsDefaultArgs> = $Result.GetResult<Prisma.$DepartmentsPayload, S>

  type DepartmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface DepartmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departments'], meta: { name: 'Departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {DepartmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentsFindUniqueArgs>(args: SelectSubset<T, DepartmentsFindUniqueArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentsFindFirstArgs>(args?: SelectSubset<T, DepartmentsFindFirstArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentsWithIdOnly = await prisma.departments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentsFindManyArgs>(args?: SelectSubset<T, DepartmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departments.
     * @param {DepartmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends DepartmentsCreateArgs>(args: SelectSubset<T, DepartmentsCreateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentsCreateManyArgs>(args?: SelectSubset<T, DepartmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentsCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentsWithIdOnly = await prisma.departments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departments.
     * @param {DepartmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends DepartmentsDeleteArgs>(args: SelectSubset<T, DepartmentsDeleteArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departments.
     * @param {DepartmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentsUpdateArgs>(args: SelectSubset<T, DepartmentsUpdateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentsDeleteManyArgs>(args?: SelectSubset<T, DepartmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentsUpdateManyArgs>(args: SelectSubset<T, DepartmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentsUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentsWithIdOnly = await prisma.departments.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departments.
     * @param {DepartmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentsUpsertArgs>(args: SelectSubset<T, DepartmentsUpsertArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentsCountArgs>(
      args?: Subset<T, DepartmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsGroupByArgs} args - Group by arguments.
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
      T extends DepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departments model
   */
  readonly fields: DepartmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    programs<T extends Departments$programsArgs<ExtArgs> = {}>(args?: Subset<T, Departments$programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Departments model
   */
  interface DepartmentsFieldRefs {
    readonly id: FieldRef<"Departments", 'String'>
    readonly name: FieldRef<"Departments", 'String'>
    readonly schoolId: FieldRef<"Departments", 'String'>
    readonly createdAt: FieldRef<"Departments", 'DateTime'>
    readonly updatedAt: FieldRef<"Departments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Departments findUnique
   */
  export type DepartmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findUniqueOrThrow
   */
  export type DepartmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findFirst
   */
  export type DepartmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findFirstOrThrow
   */
  export type DepartmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findMany
   */
  export type DepartmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments create
   */
  export type DepartmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Departments.
     */
    data: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
  }

  /**
   * Departments createMany
   */
  export type DepartmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departments createManyAndReturn
   */
  export type DepartmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Departments update
   */
  export type DepartmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Departments.
     */
    data: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
    /**
     * Choose, which Departments to update.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments updateMany
   */
  export type DepartmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Departments updateManyAndReturn
   */
  export type DepartmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Departments upsert
   */
  export type DepartmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Departments to update in case it exists.
     */
    where: DepartmentsWhereUniqueInput
    /**
     * In case the Departments found by the `where` argument doesn't exist, create a new Departments with this data.
     */
    create: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
    /**
     * In case the Departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
  }

  /**
   * Departments delete
   */
  export type DepartmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter which Departments to delete.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments deleteMany
   */
  export type DepartmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentsWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Departments.programs
   */
  export type Departments$programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Departments without action
   */
  export type DepartmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departments
     */
    omit?: DepartmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    name: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    name: string | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    name: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramMinAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    name: string
    departmentId: string
    createdAt: Date
    updatedAt: Date
    _count: ProgramCountAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
    students?: boolean | Program$studentsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    name?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
    students?: boolean | Program$studentsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentsDefaultArgs<ExtArgs>
  }

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      department: Prisma.$DepartmentsPayload<ExtArgs>
      students: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      departmentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {ProgramUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
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
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Program$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Program$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'String'>
    readonly name: FieldRef<"Program", 'String'>
    readonly departmentId: FieldRef<"Program", 'String'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program updateManyAndReturn
   */
  export type ProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.students
   */
  export type Program$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    reg_no: number | null
  }

  export type UserSumAggregateOutputType = {
    reg_no: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    reg_no: number | null
    gender: string | null
    password: string | null
    role: $Enums.ROLES | null
    status: $Enums.STATUS | null
    roleInTeam: $Enums.ROLETEAM | null
    programId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    reg_no: number | null
    gender: string | null
    password: string | null
    role: $Enums.ROLES | null
    status: $Enums.STATUS | null
    roleInTeam: $Enums.ROLETEAM | null
    programId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    reg_no: number
    gender: number
    password: number
    role: number
    status: number
    roleInTeam: number
    programId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    reg_no?: true
  }

  export type UserSumAggregateInputType = {
    reg_no?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    reg_no?: true
    gender?: true
    password?: true
    role?: true
    status?: true
    roleInTeam?: true
    programId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    reg_no?: true
    gender?: true
    password?: true
    role?: true
    status?: true
    roleInTeam?: true
    programId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    reg_no?: true
    gender?: true
    password?: true
    role?: true
    status?: true
    roleInTeam?: true
    programId?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role: $Enums.ROLES
    status: $Enums.STATUS
    roleInTeam: $Enums.ROLETEAM
    programId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    reg_no?: boolean
    gender?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    roleInTeam?: boolean
    programId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otp?: boolean | User$otpArgs<ExtArgs>
    program?: boolean | User$programArgs<ExtArgs>
    projectTeam?: boolean | User$projectTeamArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    reg_no?: boolean
    gender?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    roleInTeam?: boolean
    programId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | User$programArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    reg_no?: boolean
    gender?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    roleInTeam?: boolean
    programId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    program?: boolean | User$programArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    reg_no?: boolean
    gender?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    roleInTeam?: boolean
    programId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "reg_no" | "gender" | "password" | "role" | "status" | "roleInTeam" | "programId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otp?: boolean | User$otpArgs<ExtArgs>
    program?: boolean | User$programArgs<ExtArgs>
    projectTeam?: boolean | User$projectTeamArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | User$programArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | User$programArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      otp: Prisma.$OtpPayload<ExtArgs> | null
      program: Prisma.$ProgramPayload<ExtArgs> | null
      projectTeam: Prisma.$ProjectTeamPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      reg_no: number
      gender: string
      password: string
      role: $Enums.ROLES
      status: $Enums.STATUS
      roleInTeam: $Enums.ROLETEAM
      programId: string | null
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
    otp<T extends User$otpArgs<ExtArgs> = {}>(args?: Subset<T, User$otpArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    program<T extends User$programArgs<ExtArgs> = {}>(args?: Subset<T, User$programArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projectTeam<T extends User$projectTeamArgs<ExtArgs> = {}>(args?: Subset<T, User$projectTeamArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly reg_no: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'ROLES'>
    readonly status: FieldRef<"User", 'STATUS'>
    readonly roleInTeam: FieldRef<"User", 'ROLETEAM'>
    readonly programId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.otp
   */
  export type User$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    where?: OtpWhereInput
  }

  /**
   * User.program
   */
  export type User$programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
  }

  /**
   * User.projectTeam
   */
  export type User$projectTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    where?: ProjectTeamWhereInput
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
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    otp: string | null
    userId: string | null
    createdAt: Date | null
    expiredDate: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    otp: string | null
    userId: string | null
    createdAt: Date | null
    expiredDate: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    otp: number
    userId: number
    createdAt: number
    expiredDate: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    otp?: true
    userId?: true
    createdAt?: true
    expiredDate?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    otp?: true
    userId?: true
    createdAt?: true
    expiredDate?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    otp?: true
    userId?: true
    createdAt?: true
    expiredDate?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    otp: string
    userId: string
    createdAt: Date
    expiredDate: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    userId?: boolean
    createdAt?: boolean
    expiredDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    userId?: boolean
    createdAt?: boolean
    expiredDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    otp?: boolean
    userId?: boolean
    createdAt?: boolean
    expiredDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    otp?: boolean
    userId?: boolean
    createdAt?: boolean
    expiredDate?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "otp" | "userId" | "createdAt" | "expiredDate", ExtArgs["result"]["otp"]>
  export type OtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      otp: string
      userId: string
      createdAt: Date
      expiredDate: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly userId: FieldRef<"Otp", 'String'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
    readonly expiredDate: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
  }


  /**
   * Model ProjectTeam
   */

  export type AggregateProjectTeam = {
    _count: ProjectTeamCountAggregateOutputType | null
    _min: ProjectTeamMinAggregateOutputType | null
    _max: ProjectTeamMaxAggregateOutputType | null
  }

  export type ProjectTeamMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectTeamMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectTeamCountAggregateOutputType = {
    id: number
    studentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectTeamMinAggregateInputType = {
    id?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectTeamMaxAggregateInputType = {
    id?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectTeamCountAggregateInputType = {
    id?: true
    studentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTeam to aggregate.
     */
    where?: ProjectTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeams to fetch.
     */
    orderBy?: ProjectTeamOrderByWithRelationInput | ProjectTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTeams
    **/
    _count?: true | ProjectTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTeamMaxAggregateInputType
  }

  export type GetProjectTeamAggregateType<T extends ProjectTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTeam[P]>
      : GetScalarType<T[P], AggregateProjectTeam[P]>
  }




  export type ProjectTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTeamWhereInput
    orderBy?: ProjectTeamOrderByWithAggregationInput | ProjectTeamOrderByWithAggregationInput[]
    by: ProjectTeamScalarFieldEnum[] | ProjectTeamScalarFieldEnum
    having?: ProjectTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTeamCountAggregateInputType | true
    _min?: ProjectTeamMinAggregateInputType
    _max?: ProjectTeamMaxAggregateInputType
  }

  export type ProjectTeamGroupByOutputType = {
    id: string
    studentId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectTeamCountAggregateOutputType | null
    _min: ProjectTeamMinAggregateOutputType | null
    _max: ProjectTeamMaxAggregateOutputType | null
  }

  type GetProjectTeamGroupByPayload<T extends ProjectTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTeamGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTeamGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    projects?: boolean | ProjectTeam$projectsArgs<ExtArgs>
    _count?: boolean | ProjectTeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTeam"]>

  export type ProjectTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTeam"]>

  export type ProjectTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectTeam"]>

  export type ProjectTeamSelectScalar = {
    id?: boolean
    studentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectTeam"]>
  export type ProjectTeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    projects?: boolean | ProjectTeam$projectsArgs<ExtArgs>
    _count?: boolean | ProjectTeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectTeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectTeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTeam"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectTeam"]>
    composites: {}
  }

  type ProjectTeamGetPayload<S extends boolean | null | undefined | ProjectTeamDefaultArgs> = $Result.GetResult<Prisma.$ProjectTeamPayload, S>

  type ProjectTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTeamCountAggregateInputType | true
    }

  export interface ProjectTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTeam'], meta: { name: 'ProjectTeam' } }
    /**
     * Find zero or one ProjectTeam that matches the filter.
     * @param {ProjectTeamFindUniqueArgs} args - Arguments to find a ProjectTeam
     * @example
     * // Get one ProjectTeam
     * const projectTeam = await prisma.projectTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTeamFindUniqueArgs>(args: SelectSubset<T, ProjectTeamFindUniqueArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTeamFindUniqueOrThrowArgs} args - Arguments to find a ProjectTeam
     * @example
     * // Get one ProjectTeam
     * const projectTeam = await prisma.projectTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTeamFindFirstArgs} args - Arguments to find a ProjectTeam
     * @example
     * // Get one ProjectTeam
     * const projectTeam = await prisma.projectTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTeamFindFirstArgs>(args?: SelectSubset<T, ProjectTeamFindFirstArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTeamFindFirstOrThrowArgs} args - Arguments to find a ProjectTeam
     * @example
     * // Get one ProjectTeam
     * const projectTeam = await prisma.projectTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTeams
     * const projectTeams = await prisma.projectTeam.findMany()
     * 
     * // Get first 10 ProjectTeams
     * const projectTeams = await prisma.projectTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTeamWithIdOnly = await prisma.projectTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTeamFindManyArgs>(args?: SelectSubset<T, ProjectTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTeam.
     * @param {ProjectTeamCreateArgs} args - Arguments to create a ProjectTeam.
     * @example
     * // Create one ProjectTeam
     * const ProjectTeam = await prisma.projectTeam.create({
     *   data: {
     *     // ... data to create a ProjectTeam
     *   }
     * })
     * 
     */
    create<T extends ProjectTeamCreateArgs>(args: SelectSubset<T, ProjectTeamCreateArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTeams.
     * @param {ProjectTeamCreateManyArgs} args - Arguments to create many ProjectTeams.
     * @example
     * // Create many ProjectTeams
     * const projectTeam = await prisma.projectTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTeamCreateManyArgs>(args?: SelectSubset<T, ProjectTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectTeams and returns the data saved in the database.
     * @param {ProjectTeamCreateManyAndReturnArgs} args - Arguments to create many ProjectTeams.
     * @example
     * // Create many ProjectTeams
     * const projectTeam = await prisma.projectTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectTeams and only return the `id`
     * const projectTeamWithIdOnly = await prisma.projectTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectTeam.
     * @param {ProjectTeamDeleteArgs} args - Arguments to delete one ProjectTeam.
     * @example
     * // Delete one ProjectTeam
     * const ProjectTeam = await prisma.projectTeam.delete({
     *   where: {
     *     // ... filter to delete one ProjectTeam
     *   }
     * })
     * 
     */
    delete<T extends ProjectTeamDeleteArgs>(args: SelectSubset<T, ProjectTeamDeleteArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTeam.
     * @param {ProjectTeamUpdateArgs} args - Arguments to update one ProjectTeam.
     * @example
     * // Update one ProjectTeam
     * const projectTeam = await prisma.projectTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTeamUpdateArgs>(args: SelectSubset<T, ProjectTeamUpdateArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTeams.
     * @param {ProjectTeamDeleteManyArgs} args - Arguments to filter ProjectTeams to delete.
     * @example
     * // Delete a few ProjectTeams
     * const { count } = await prisma.projectTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTeamDeleteManyArgs>(args?: SelectSubset<T, ProjectTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTeams
     * const projectTeam = await prisma.projectTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTeamUpdateManyArgs>(args: SelectSubset<T, ProjectTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTeams and returns the data updated in the database.
     * @param {ProjectTeamUpdateManyAndReturnArgs} args - Arguments to update many ProjectTeams.
     * @example
     * // Update many ProjectTeams
     * const projectTeam = await prisma.projectTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectTeams and only return the `id`
     * const projectTeamWithIdOnly = await prisma.projectTeam.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectTeam.
     * @param {ProjectTeamUpsertArgs} args - Arguments to update or create a ProjectTeam.
     * @example
     * // Update or create a ProjectTeam
     * const projectTeam = await prisma.projectTeam.upsert({
     *   create: {
     *     // ... data to create a ProjectTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTeam we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTeamUpsertArgs>(args: SelectSubset<T, ProjectTeamUpsertArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTeamCountArgs} args - Arguments to filter ProjectTeams to count.
     * @example
     * // Count the number of ProjectTeams
     * const count = await prisma.projectTeam.count({
     *   where: {
     *     // ... the filter for the ProjectTeams we want to count
     *   }
     * })
    **/
    count<T extends ProjectTeamCountArgs>(
      args?: Subset<T, ProjectTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectTeamAggregateArgs>(args: Subset<T, ProjectTeamAggregateArgs>): Prisma.PrismaPromise<GetProjectTeamAggregateType<T>>

    /**
     * Group by ProjectTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTeamGroupByArgs} args - Group by arguments.
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
      T extends ProjectTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTeamGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTeam model
   */
  readonly fields: ProjectTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends ProjectTeam$projectsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectTeam$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProjectTeam model
   */
  interface ProjectTeamFieldRefs {
    readonly id: FieldRef<"ProjectTeam", 'String'>
    readonly studentId: FieldRef<"ProjectTeam", 'String'>
    readonly createdAt: FieldRef<"ProjectTeam", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectTeam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTeam findUnique
   */
  export type ProjectTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTeam to fetch.
     */
    where: ProjectTeamWhereUniqueInput
  }

  /**
   * ProjectTeam findUniqueOrThrow
   */
  export type ProjectTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTeam to fetch.
     */
    where: ProjectTeamWhereUniqueInput
  }

  /**
   * ProjectTeam findFirst
   */
  export type ProjectTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTeam to fetch.
     */
    where?: ProjectTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeams to fetch.
     */
    orderBy?: ProjectTeamOrderByWithRelationInput | ProjectTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTeams.
     */
    cursor?: ProjectTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTeams.
     */
    distinct?: ProjectTeamScalarFieldEnum | ProjectTeamScalarFieldEnum[]
  }

  /**
   * ProjectTeam findFirstOrThrow
   */
  export type ProjectTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTeam to fetch.
     */
    where?: ProjectTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeams to fetch.
     */
    orderBy?: ProjectTeamOrderByWithRelationInput | ProjectTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTeams.
     */
    cursor?: ProjectTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTeams.
     */
    distinct?: ProjectTeamScalarFieldEnum | ProjectTeamScalarFieldEnum[]
  }

  /**
   * ProjectTeam findMany
   */
  export type ProjectTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTeams to fetch.
     */
    where?: ProjectTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTeams to fetch.
     */
    orderBy?: ProjectTeamOrderByWithRelationInput | ProjectTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTeams.
     */
    cursor?: ProjectTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTeams.
     */
    skip?: number
    distinct?: ProjectTeamScalarFieldEnum | ProjectTeamScalarFieldEnum[]
  }

  /**
   * ProjectTeam create
   */
  export type ProjectTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectTeam.
     */
    data: XOR<ProjectTeamCreateInput, ProjectTeamUncheckedCreateInput>
  }

  /**
   * ProjectTeam createMany
   */
  export type ProjectTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTeams.
     */
    data: ProjectTeamCreateManyInput | ProjectTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTeam createManyAndReturn
   */
  export type ProjectTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectTeams.
     */
    data: ProjectTeamCreateManyInput | ProjectTeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTeam update
   */
  export type ProjectTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectTeam.
     */
    data: XOR<ProjectTeamUpdateInput, ProjectTeamUncheckedUpdateInput>
    /**
     * Choose, which ProjectTeam to update.
     */
    where: ProjectTeamWhereUniqueInput
  }

  /**
   * ProjectTeam updateMany
   */
  export type ProjectTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTeams.
     */
    data: XOR<ProjectTeamUpdateManyMutationInput, ProjectTeamUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTeams to update
     */
    where?: ProjectTeamWhereInput
    /**
     * Limit how many ProjectTeams to update.
     */
    limit?: number
  }

  /**
   * ProjectTeam updateManyAndReturn
   */
  export type ProjectTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * The data used to update ProjectTeams.
     */
    data: XOR<ProjectTeamUpdateManyMutationInput, ProjectTeamUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTeams to update
     */
    where?: ProjectTeamWhereInput
    /**
     * Limit how many ProjectTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectTeam upsert
   */
  export type ProjectTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectTeam to update in case it exists.
     */
    where: ProjectTeamWhereUniqueInput
    /**
     * In case the ProjectTeam found by the `where` argument doesn't exist, create a new ProjectTeam with this data.
     */
    create: XOR<ProjectTeamCreateInput, ProjectTeamUncheckedCreateInput>
    /**
     * In case the ProjectTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTeamUpdateInput, ProjectTeamUncheckedUpdateInput>
  }

  /**
   * ProjectTeam delete
   */
  export type ProjectTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
    /**
     * Filter which ProjectTeam to delete.
     */
    where: ProjectTeamWhereUniqueInput
  }

  /**
   * ProjectTeam deleteMany
   */
  export type ProjectTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTeams to delete
     */
    where?: ProjectTeamWhereInput
    /**
     * Limit how many ProjectTeams to delete.
     */
    limit?: number
  }

  /**
   * ProjectTeam.projects
   */
  export type ProjectTeam$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * ProjectTeam without action
   */
  export type ProjectTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTeam
     */
    select?: ProjectTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTeam
     */
    omit?: ProjectTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTeamInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    descriptions: string | null
    status: $Enums.PROJECTSTATUS | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    descriptions: string | null
    status: $Enums.PROJECTSTATUS | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    descriptions: number
    status: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    descriptions?: true
    status?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    descriptions?: true
    status?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    descriptions?: true
    status?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    descriptions: string
    status: $Enums.PROJECTSTATUS
    teamId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptions?: boolean
    status?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | ProjectTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptions?: boolean
    status?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | ProjectTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptions?: boolean
    status?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | ProjectTeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    descriptions?: boolean
    status?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "descriptions" | "status" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | ProjectTeamDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | ProjectTeamDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | ProjectTeamDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      team: Prisma.$ProjectTeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      descriptions: string
      status: $Enums.PROJECTSTATUS
      teamId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends ProjectTeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectTeamDefaultArgs<ExtArgs>>): Prisma__ProjectTeamClient<$Result.GetResult<Prisma.$ProjectTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly descriptions: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'PROJECTSTATUS'>
    readonly teamId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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


  export const UniversityOfRwandaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UniversityOfRwandaScalarFieldEnum = (typeof UniversityOfRwandaScalarFieldEnum)[keyof typeof UniversityOfRwandaScalarFieldEnum]


  export const CollegeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    universityId: 'universityId',
    dean: 'dean',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollegeScalarFieldEnum = (typeof CollegeScalarFieldEnum)[keyof typeof CollegeScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    collegeId: 'collegeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    schoolId: 'schoolId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    name: 'name',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    reg_no: 'reg_no',
    gender: 'gender',
    password: 'password',
    role: 'role',
    status: 'status',
    roleInTeam: 'roleInTeam',
    programId: 'programId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    otp: 'otp',
    userId: 'userId',
    createdAt: 'createdAt',
    expiredDate: 'expiredDate'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const ProjectTeamScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectTeamScalarFieldEnum = (typeof ProjectTeamScalarFieldEnum)[keyof typeof ProjectTeamScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descriptions: 'descriptions',
    status: 'status',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


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
   * Reference to a field of type 'ROLES'
   */
  export type EnumROLESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLES'>
    


  /**
   * Reference to a field of type 'ROLES[]'
   */
  export type ListEnumROLESFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLES[]'>
    


  /**
   * Reference to a field of type 'STATUS'
   */
  export type EnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS'>
    


  /**
   * Reference to a field of type 'STATUS[]'
   */
  export type ListEnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS[]'>
    


  /**
   * Reference to a field of type 'ROLETEAM'
   */
  export type EnumROLETEAMFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLETEAM'>
    


  /**
   * Reference to a field of type 'ROLETEAM[]'
   */
  export type ListEnumROLETEAMFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLETEAM[]'>
    


  /**
   * Reference to a field of type 'PROJECTSTATUS'
   */
  export type EnumPROJECTSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PROJECTSTATUS'>
    


  /**
   * Reference to a field of type 'PROJECTSTATUS[]'
   */
  export type ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PROJECTSTATUS[]'>
    


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


  export type UniversityOfRwandaWhereInput = {
    AND?: UniversityOfRwandaWhereInput | UniversityOfRwandaWhereInput[]
    OR?: UniversityOfRwandaWhereInput[]
    NOT?: UniversityOfRwandaWhereInput | UniversityOfRwandaWhereInput[]
    id?: StringFilter<"UniversityOfRwanda"> | string
    createdAt?: DateTimeFilter<"UniversityOfRwanda"> | Date | string
    updatedAt?: DateTimeFilter<"UniversityOfRwanda"> | Date | string
    college?: CollegeListRelationFilter
  }

  export type UniversityOfRwandaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    college?: CollegeOrderByRelationAggregateInput
  }

  export type UniversityOfRwandaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UniversityOfRwandaWhereInput | UniversityOfRwandaWhereInput[]
    OR?: UniversityOfRwandaWhereInput[]
    NOT?: UniversityOfRwandaWhereInput | UniversityOfRwandaWhereInput[]
    createdAt?: DateTimeFilter<"UniversityOfRwanda"> | Date | string
    updatedAt?: DateTimeFilter<"UniversityOfRwanda"> | Date | string
    college?: CollegeListRelationFilter
  }, "id">

  export type UniversityOfRwandaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UniversityOfRwandaCountOrderByAggregateInput
    _max?: UniversityOfRwandaMaxOrderByAggregateInput
    _min?: UniversityOfRwandaMinOrderByAggregateInput
  }

  export type UniversityOfRwandaScalarWhereWithAggregatesInput = {
    AND?: UniversityOfRwandaScalarWhereWithAggregatesInput | UniversityOfRwandaScalarWhereWithAggregatesInput[]
    OR?: UniversityOfRwandaScalarWhereWithAggregatesInput[]
    NOT?: UniversityOfRwandaScalarWhereWithAggregatesInput | UniversityOfRwandaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UniversityOfRwanda"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UniversityOfRwanda"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UniversityOfRwanda"> | Date | string
  }

  export type CollegeWhereInput = {
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    id?: StringFilter<"College"> | string
    name?: StringFilter<"College"> | string
    universityId?: StringFilter<"College"> | string
    dean?: StringFilter<"College"> | string
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
    university?: XOR<UniversityOfRwandaScalarRelationFilter, UniversityOfRwandaWhereInput>
    school?: SchoolListRelationFilter
  }

  export type CollegeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    universityId?: SortOrder
    dean?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    university?: UniversityOfRwandaOrderByWithRelationInput
    school?: SchoolOrderByRelationAggregateInput
  }

  export type CollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    universityId?: StringFilter<"College"> | string
    dean?: StringFilter<"College"> | string
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
    university?: XOR<UniversityOfRwandaScalarRelationFilter, UniversityOfRwandaWhereInput>
    school?: SchoolListRelationFilter
  }, "id" | "name">

  export type CollegeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    universityId?: SortOrder
    dean?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollegeCountOrderByAggregateInput
    _max?: CollegeMaxOrderByAggregateInput
    _min?: CollegeMinOrderByAggregateInput
  }

  export type CollegeScalarWhereWithAggregatesInput = {
    AND?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    OR?: CollegeScalarWhereWithAggregatesInput[]
    NOT?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"College"> | string
    name?: StringWithAggregatesFilter<"College"> | string
    universityId?: StringWithAggregatesFilter<"College"> | string
    dean?: StringWithAggregatesFilter<"College"> | string
    createdAt?: DateTimeWithAggregatesFilter<"College"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"College"> | Date | string
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    collegeId?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    department?: DepartmentsListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    college?: CollegeOrderByWithRelationInput
    department?: DepartmentsOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    collegeId?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    department?: DepartmentsListRelationFilter
  }, "id" | "name">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    collegeId?: StringWithAggregatesFilter<"School"> | string
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type DepartmentsWhereInput = {
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    id?: StringFilter<"Departments"> | string
    name?: StringFilter<"Departments"> | string
    schoolId?: StringFilter<"Departments"> | string
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    programs?: ProgramListRelationFilter
  }

  export type DepartmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    programs?: ProgramOrderByRelationAggregateInput
  }

  export type DepartmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    schoolId?: StringFilter<"Departments"> | string
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    programs?: ProgramListRelationFilter
  }, "id" | "name">

  export type DepartmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentsCountOrderByAggregateInput
    _max?: DepartmentsMaxOrderByAggregateInput
    _min?: DepartmentsMinOrderByAggregateInput
  }

  export type DepartmentsScalarWhereWithAggregatesInput = {
    AND?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    OR?: DepartmentsScalarWhereWithAggregatesInput[]
    NOT?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Departments"> | string
    name?: StringWithAggregatesFilter<"Departments"> | string
    schoolId?: StringWithAggregatesFilter<"Departments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: StringFilter<"Program"> | string
    name?: StringFilter<"Program"> | string
    departmentId?: StringFilter<"Program"> | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    department?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
    students?: UserListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: DepartmentsOrderByWithRelationInput
    students?: UserOrderByRelationAggregateInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    name?: StringFilter<"Program"> | string
    departmentId?: StringFilter<"Program"> | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    department?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
    students?: UserListRelationFilter
  }, "id">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Program"> | string
    name?: StringWithAggregatesFilter<"Program"> | string
    departmentId?: StringWithAggregatesFilter<"Program"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    reg_no?: IntFilter<"User"> | number
    gender?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumROLESFilter<"User"> | $Enums.ROLES
    status?: EnumSTATUSFilter<"User"> | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFilter<"User"> | $Enums.ROLETEAM
    programId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otp?: XOR<OtpNullableScalarRelationFilter, OtpWhereInput> | null
    program?: XOR<ProgramNullableScalarRelationFilter, ProgramWhereInput> | null
    projectTeam?: XOR<ProjectTeamNullableScalarRelationFilter, ProjectTeamWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    reg_no?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    roleInTeam?: SortOrder
    programId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otp?: OtpOrderByWithRelationInput
    program?: ProgramOrderByWithRelationInput
    projectTeam?: ProjectTeamOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    reg_no?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumROLESFilter<"User"> | $Enums.ROLES
    status?: EnumSTATUSFilter<"User"> | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFilter<"User"> | $Enums.ROLETEAM
    programId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otp?: XOR<OtpNullableScalarRelationFilter, OtpWhereInput> | null
    program?: XOR<ProgramNullableScalarRelationFilter, ProgramWhereInput> | null
    projectTeam?: XOR<ProjectTeamNullableScalarRelationFilter, ProjectTeamWhereInput> | null
  }, "id" | "email" | "reg_no">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    reg_no?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    roleInTeam?: SortOrder
    programId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    reg_no?: IntWithAggregatesFilter<"User"> | number
    gender?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumROLESWithAggregatesFilter<"User"> | $Enums.ROLES
    status?: EnumSTATUSWithAggregatesFilter<"User"> | $Enums.STATUS
    roleInTeam?: EnumROLETEAMWithAggregatesFilter<"User"> | $Enums.ROLETEAM
    programId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    userId?: StringFilter<"Otp"> | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    expiredDate?: DateTimeFilter<"Otp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiredDate?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    otp?: StringFilter<"Otp"> | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    expiredDate?: DateTimeFilter<"Otp"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiredDate?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    userId?: StringWithAggregatesFilter<"Otp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    expiredDate?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type ProjectTeamWhereInput = {
    AND?: ProjectTeamWhereInput | ProjectTeamWhereInput[]
    OR?: ProjectTeamWhereInput[]
    NOT?: ProjectTeamWhereInput | ProjectTeamWhereInput[]
    id?: StringFilter<"ProjectTeam"> | string
    studentId?: StringFilter<"ProjectTeam"> | string
    createdAt?: DateTimeFilter<"ProjectTeam"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTeam"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    projects?: ProjectListRelationFilter
  }

  export type ProjectTeamOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: UserOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type ProjectTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: ProjectTeamWhereInput | ProjectTeamWhereInput[]
    OR?: ProjectTeamWhereInput[]
    NOT?: ProjectTeamWhereInput | ProjectTeamWhereInput[]
    createdAt?: DateTimeFilter<"ProjectTeam"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTeam"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    projects?: ProjectListRelationFilter
  }, "id" | "studentId">

  export type ProjectTeamOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectTeamCountOrderByAggregateInput
    _max?: ProjectTeamMaxOrderByAggregateInput
    _min?: ProjectTeamMinOrderByAggregateInput
  }

  export type ProjectTeamScalarWhereWithAggregatesInput = {
    AND?: ProjectTeamScalarWhereWithAggregatesInput | ProjectTeamScalarWhereWithAggregatesInput[]
    OR?: ProjectTeamScalarWhereWithAggregatesInput[]
    NOT?: ProjectTeamScalarWhereWithAggregatesInput | ProjectTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectTeam"> | string
    studentId?: StringWithAggregatesFilter<"ProjectTeam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectTeam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectTeam"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    descriptions?: StringFilter<"Project"> | string
    status?: EnumPROJECTSTATUSFilter<"Project"> | $Enums.PROJECTSTATUS
    teamId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    team?: XOR<ProjectTeamScalarRelationFilter, ProjectTeamWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: ProjectTeamOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    descriptions?: StringFilter<"Project"> | string
    status?: EnumPROJECTSTATUSFilter<"Project"> | $Enums.PROJECTSTATUS
    teamId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    team?: XOR<ProjectTeamScalarRelationFilter, ProjectTeamWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    descriptions?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumPROJECTSTATUSWithAggregatesFilter<"Project"> | $Enums.PROJECTSTATUS
    teamId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type UniversityOfRwandaCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    college?: CollegeCreateNestedManyWithoutUniversityInput
  }

  export type UniversityOfRwandaUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    college?: CollegeUncheckedCreateNestedManyWithoutUniversityInput
  }

  export type UniversityOfRwandaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityOfRwandaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUncheckedUpdateManyWithoutUniversityNestedInput
  }

  export type UniversityOfRwandaCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityOfRwandaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityOfRwandaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeCreateInput = {
    id?: string
    name: string
    dean: string
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityOfRwandaCreateNestedOneWithoutCollegeInput
    school?: SchoolCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateInput = {
    id?: string
    name: string
    universityId: string
    dean: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityOfRwandaUpdateOneRequiredWithoutCollegeNestedInput
    school?: SchoolUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateManyInput = {
    id?: string
    name: string
    universityId: string
    dean: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollegeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    college: CollegeCreateNestedOneWithoutSchoolInput
    department?: DepartmentsCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    collegeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentsUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneRequiredWithoutSchoolNestedInput
    department?: DepartmentsUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentsUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
    collegeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutDepartmentInput
    programs?: ProgramCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateInput = {
    id?: string
    name: string
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutDepartmentNestedInput
    programs?: ProgramUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsCreateManyInput = {
    id?: string
    name: string
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentsCreateNestedOneWithoutProgramsInput
    students?: UserCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: string
    name: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentsUpdateOneRequiredWithoutProgramsNestedInput
    students?: UserUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: string
    name: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: OtpCreateNestedOneWithoutUserInput
    program?: ProgramCreateNestedOneWithoutStudentsInput
    projectTeam?: ProjectTeamCreateNestedOneWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    programId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: OtpUncheckedCreateNestedOneWithoutUserInput
    projectTeam?: ProjectTeamUncheckedCreateNestedOneWithoutStudentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: OtpUpdateOneWithoutUserNestedInput
    program?: ProgramUpdateOneWithoutStudentsNestedInput
    projectTeam?: ProjectTeamUpdateOneWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: OtpUncheckedUpdateOneWithoutUserNestedInput
    projectTeam?: ProjectTeamUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    programId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateInput = {
    id?: string
    otp: string
    createdAt?: Date | string
    expiredDate: Date | string
    user: UserCreateNestedOneWithoutOtpInput
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    otp: string
    userId: string
    createdAt?: Date | string
    expiredDate: Date | string
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpNestedInput
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    otp: string
    userId: string
    createdAt?: Date | string
    expiredDate: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTeamCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutProjectTeamInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
  }

  export type ProjectTeamUncheckedCreateInput = {
    id?: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
  }

  export type ProjectTeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutProjectTeamNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
  }

  export type ProjectTeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type ProjectTeamCreateManyInput = {
    id?: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    descriptions: string
    status?: $Enums.PROJECTSTATUS
    createdAt?: Date | string
    updatedAt?: Date | string
    team: ProjectTeamCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    descriptions: string
    status?: $Enums.PROJECTSTATUS
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    status?: EnumPROJECTSTATUSFieldUpdateOperationsInput | $Enums.PROJECTSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: ProjectTeamUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    status?: EnumPROJECTSTATUSFieldUpdateOperationsInput | $Enums.PROJECTSTATUS
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    descriptions: string
    status?: $Enums.PROJECTSTATUS
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    status?: EnumPROJECTSTATUSFieldUpdateOperationsInput | $Enums.PROJECTSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    status?: EnumPROJECTSTATUSFieldUpdateOperationsInput | $Enums.PROJECTSTATUS
    teamId?: StringFieldUpdateOperationsInput | string
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

  export type CollegeListRelationFilter = {
    every?: CollegeWhereInput
    some?: CollegeWhereInput
    none?: CollegeWhereInput
  }

  export type CollegeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UniversityOfRwandaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityOfRwandaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UniversityOfRwandaMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type UniversityOfRwandaScalarRelationFilter = {
    is?: UniversityOfRwandaWhereInput
    isNot?: UniversityOfRwandaWhereInput
  }

  export type SchoolListRelationFilter = {
    every?: SchoolWhereInput
    some?: SchoolWhereInput
    none?: SchoolWhereInput
  }

  export type SchoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollegeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    universityId?: SortOrder
    dean?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    universityId?: SortOrder
    dean?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollegeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    universityId?: SortOrder
    dean?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollegeScalarRelationFilter = {
    is?: CollegeWhereInput
    isNot?: CollegeWhereInput
  }

  export type DepartmentsListRelationFilter = {
    every?: DepartmentsWhereInput
    some?: DepartmentsWhereInput
    none?: DepartmentsWhereInput
  }

  export type DepartmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type ProgramListRelationFilter = {
    every?: ProgramWhereInput
    some?: ProgramWhereInput
    none?: ProgramWhereInput
  }

  export type ProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentsScalarRelationFilter = {
    is?: DepartmentsWhereInput
    isNot?: DepartmentsWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumROLESFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLES | EnumROLESFieldRefInput<$PrismaModel>
    in?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    not?: NestedEnumROLESFilter<$PrismaModel> | $Enums.ROLES
  }

  export type EnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type EnumROLETEAMFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLETEAM | EnumROLETEAMFieldRefInput<$PrismaModel>
    in?: $Enums.ROLETEAM[] | ListEnumROLETEAMFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLETEAM[] | ListEnumROLETEAMFieldRefInput<$PrismaModel>
    not?: NestedEnumROLETEAMFilter<$PrismaModel> | $Enums.ROLETEAM
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

  export type OtpNullableScalarRelationFilter = {
    is?: OtpWhereInput | null
    isNot?: OtpWhereInput | null
  }

  export type ProgramNullableScalarRelationFilter = {
    is?: ProgramWhereInput | null
    isNot?: ProgramWhereInput | null
  }

  export type ProjectTeamNullableScalarRelationFilter = {
    is?: ProjectTeamWhereInput | null
    isNot?: ProjectTeamWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    reg_no?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    roleInTeam?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    reg_no?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    reg_no?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    roleInTeam?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    reg_no?: SortOrder
    gender?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    roleInTeam?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    reg_no?: SortOrder
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

  export type EnumROLESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLES | EnumROLESFieldRefInput<$PrismaModel>
    in?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    not?: NestedEnumROLESWithAggregatesFilter<$PrismaModel> | $Enums.ROLES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLESFilter<$PrismaModel>
    _max?: NestedEnumROLESFilter<$PrismaModel>
  }

  export type EnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type EnumROLETEAMWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLETEAM | EnumROLETEAMFieldRefInput<$PrismaModel>
    in?: $Enums.ROLETEAM[] | ListEnumROLETEAMFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLETEAM[] | ListEnumROLETEAMFieldRefInput<$PrismaModel>
    not?: NestedEnumROLETEAMWithAggregatesFilter<$PrismaModel> | $Enums.ROLETEAM
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLETEAMFilter<$PrismaModel>
    _max?: NestedEnumROLETEAMFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiredDate?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiredDate?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    otp?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiredDate?: SortOrder
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectTeamCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTeamMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPROJECTSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PROJECTSTATUS | EnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PROJECTSTATUS[] | ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PROJECTSTATUS[] | ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPROJECTSTATUSFilter<$PrismaModel> | $Enums.PROJECTSTATUS
  }

  export type ProjectTeamScalarRelationFilter = {
    is?: ProjectTeamWhereInput
    isNot?: ProjectTeamWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    status?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPROJECTSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PROJECTSTATUS | EnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PROJECTSTATUS[] | ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PROJECTSTATUS[] | ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPROJECTSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.PROJECTSTATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPROJECTSTATUSFilter<$PrismaModel>
    _max?: NestedEnumPROJECTSTATUSFilter<$PrismaModel>
  }

  export type CollegeCreateNestedManyWithoutUniversityInput = {
    create?: XOR<CollegeCreateWithoutUniversityInput, CollegeUncheckedCreateWithoutUniversityInput> | CollegeCreateWithoutUniversityInput[] | CollegeUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: CollegeCreateOrConnectWithoutUniversityInput | CollegeCreateOrConnectWithoutUniversityInput[]
    createMany?: CollegeCreateManyUniversityInputEnvelope
    connect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
  }

  export type CollegeUncheckedCreateNestedManyWithoutUniversityInput = {
    create?: XOR<CollegeCreateWithoutUniversityInput, CollegeUncheckedCreateWithoutUniversityInput> | CollegeCreateWithoutUniversityInput[] | CollegeUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: CollegeCreateOrConnectWithoutUniversityInput | CollegeCreateOrConnectWithoutUniversityInput[]
    createMany?: CollegeCreateManyUniversityInputEnvelope
    connect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CollegeUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<CollegeCreateWithoutUniversityInput, CollegeUncheckedCreateWithoutUniversityInput> | CollegeCreateWithoutUniversityInput[] | CollegeUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: CollegeCreateOrConnectWithoutUniversityInput | CollegeCreateOrConnectWithoutUniversityInput[]
    upsert?: CollegeUpsertWithWhereUniqueWithoutUniversityInput | CollegeUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: CollegeCreateManyUniversityInputEnvelope
    set?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    disconnect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    delete?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    connect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    update?: CollegeUpdateWithWhereUniqueWithoutUniversityInput | CollegeUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: CollegeUpdateManyWithWhereWithoutUniversityInput | CollegeUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: CollegeScalarWhereInput | CollegeScalarWhereInput[]
  }

  export type CollegeUncheckedUpdateManyWithoutUniversityNestedInput = {
    create?: XOR<CollegeCreateWithoutUniversityInput, CollegeUncheckedCreateWithoutUniversityInput> | CollegeCreateWithoutUniversityInput[] | CollegeUncheckedCreateWithoutUniversityInput[]
    connectOrCreate?: CollegeCreateOrConnectWithoutUniversityInput | CollegeCreateOrConnectWithoutUniversityInput[]
    upsert?: CollegeUpsertWithWhereUniqueWithoutUniversityInput | CollegeUpsertWithWhereUniqueWithoutUniversityInput[]
    createMany?: CollegeCreateManyUniversityInputEnvelope
    set?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    disconnect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    delete?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    connect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    update?: CollegeUpdateWithWhereUniqueWithoutUniversityInput | CollegeUpdateWithWhereUniqueWithoutUniversityInput[]
    updateMany?: CollegeUpdateManyWithWhereWithoutUniversityInput | CollegeUpdateManyWithWhereWithoutUniversityInput[]
    deleteMany?: CollegeScalarWhereInput | CollegeScalarWhereInput[]
  }

  export type UniversityOfRwandaCreateNestedOneWithoutCollegeInput = {
    create?: XOR<UniversityOfRwandaCreateWithoutCollegeInput, UniversityOfRwandaUncheckedCreateWithoutCollegeInput>
    connectOrCreate?: UniversityOfRwandaCreateOrConnectWithoutCollegeInput
    connect?: UniversityOfRwandaWhereUniqueInput
  }

  export type SchoolCreateNestedManyWithoutCollegeInput = {
    create?: XOR<SchoolCreateWithoutCollegeInput, SchoolUncheckedCreateWithoutCollegeInput> | SchoolCreateWithoutCollegeInput[] | SchoolUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutCollegeInput | SchoolCreateOrConnectWithoutCollegeInput[]
    createMany?: SchoolCreateManyCollegeInputEnvelope
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type SchoolUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<SchoolCreateWithoutCollegeInput, SchoolUncheckedCreateWithoutCollegeInput> | SchoolCreateWithoutCollegeInput[] | SchoolUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutCollegeInput | SchoolCreateOrConnectWithoutCollegeInput[]
    createMany?: SchoolCreateManyCollegeInputEnvelope
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
  }

  export type UniversityOfRwandaUpdateOneRequiredWithoutCollegeNestedInput = {
    create?: XOR<UniversityOfRwandaCreateWithoutCollegeInput, UniversityOfRwandaUncheckedCreateWithoutCollegeInput>
    connectOrCreate?: UniversityOfRwandaCreateOrConnectWithoutCollegeInput
    upsert?: UniversityOfRwandaUpsertWithoutCollegeInput
    connect?: UniversityOfRwandaWhereUniqueInput
    update?: XOR<XOR<UniversityOfRwandaUpdateToOneWithWhereWithoutCollegeInput, UniversityOfRwandaUpdateWithoutCollegeInput>, UniversityOfRwandaUncheckedUpdateWithoutCollegeInput>
  }

  export type SchoolUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<SchoolCreateWithoutCollegeInput, SchoolUncheckedCreateWithoutCollegeInput> | SchoolCreateWithoutCollegeInput[] | SchoolUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutCollegeInput | SchoolCreateOrConnectWithoutCollegeInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutCollegeInput | SchoolUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: SchoolCreateManyCollegeInputEnvelope
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutCollegeInput | SchoolUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutCollegeInput | SchoolUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type SchoolUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<SchoolCreateWithoutCollegeInput, SchoolUncheckedCreateWithoutCollegeInput> | SchoolCreateWithoutCollegeInput[] | SchoolUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: SchoolCreateOrConnectWithoutCollegeInput | SchoolCreateOrConnectWithoutCollegeInput[]
    upsert?: SchoolUpsertWithWhereUniqueWithoutCollegeInput | SchoolUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: SchoolCreateManyCollegeInputEnvelope
    set?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    disconnect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    delete?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    connect?: SchoolWhereUniqueInput | SchoolWhereUniqueInput[]
    update?: SchoolUpdateWithWhereUniqueWithoutCollegeInput | SchoolUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: SchoolUpdateManyWithWhereWithoutCollegeInput | SchoolUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
  }

  export type CollegeCreateNestedOneWithoutSchoolInput = {
    create?: XOR<CollegeCreateWithoutSchoolInput, CollegeUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutSchoolInput
    connect?: CollegeWhereUniqueInput
  }

  export type DepartmentsCreateNestedManyWithoutSchoolInput = {
    create?: XOR<DepartmentsCreateWithoutSchoolInput, DepartmentsUncheckedCreateWithoutSchoolInput> | DepartmentsCreateWithoutSchoolInput[] | DepartmentsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DepartmentsCreateOrConnectWithoutSchoolInput | DepartmentsCreateOrConnectWithoutSchoolInput[]
    createMany?: DepartmentsCreateManySchoolInputEnvelope
    connect?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
  }

  export type DepartmentsUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<DepartmentsCreateWithoutSchoolInput, DepartmentsUncheckedCreateWithoutSchoolInput> | DepartmentsCreateWithoutSchoolInput[] | DepartmentsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DepartmentsCreateOrConnectWithoutSchoolInput | DepartmentsCreateOrConnectWithoutSchoolInput[]
    createMany?: DepartmentsCreateManySchoolInputEnvelope
    connect?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
  }

  export type CollegeUpdateOneRequiredWithoutSchoolNestedInput = {
    create?: XOR<CollegeCreateWithoutSchoolInput, CollegeUncheckedCreateWithoutSchoolInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutSchoolInput
    upsert?: CollegeUpsertWithoutSchoolInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutSchoolInput, CollegeUpdateWithoutSchoolInput>, CollegeUncheckedUpdateWithoutSchoolInput>
  }

  export type DepartmentsUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<DepartmentsCreateWithoutSchoolInput, DepartmentsUncheckedCreateWithoutSchoolInput> | DepartmentsCreateWithoutSchoolInput[] | DepartmentsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DepartmentsCreateOrConnectWithoutSchoolInput | DepartmentsCreateOrConnectWithoutSchoolInput[]
    upsert?: DepartmentsUpsertWithWhereUniqueWithoutSchoolInput | DepartmentsUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: DepartmentsCreateManySchoolInputEnvelope
    set?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
    disconnect?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
    delete?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
    connect?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
    update?: DepartmentsUpdateWithWhereUniqueWithoutSchoolInput | DepartmentsUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: DepartmentsUpdateManyWithWhereWithoutSchoolInput | DepartmentsUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: DepartmentsScalarWhereInput | DepartmentsScalarWhereInput[]
  }

  export type DepartmentsUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<DepartmentsCreateWithoutSchoolInput, DepartmentsUncheckedCreateWithoutSchoolInput> | DepartmentsCreateWithoutSchoolInput[] | DepartmentsUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: DepartmentsCreateOrConnectWithoutSchoolInput | DepartmentsCreateOrConnectWithoutSchoolInput[]
    upsert?: DepartmentsUpsertWithWhereUniqueWithoutSchoolInput | DepartmentsUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: DepartmentsCreateManySchoolInputEnvelope
    set?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
    disconnect?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
    delete?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
    connect?: DepartmentsWhereUniqueInput | DepartmentsWhereUniqueInput[]
    update?: DepartmentsUpdateWithWhereUniqueWithoutSchoolInput | DepartmentsUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: DepartmentsUpdateManyWithWhereWithoutSchoolInput | DepartmentsUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: DepartmentsScalarWhereInput | DepartmentsScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutDepartmentInput = {
    create?: XOR<SchoolCreateWithoutDepartmentInput, SchoolUncheckedCreateWithoutDepartmentInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutDepartmentInput
    connect?: SchoolWhereUniqueInput
  }

  export type ProgramCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ProgramCreateWithoutDepartmentInput, ProgramUncheckedCreateWithoutDepartmentInput> | ProgramCreateWithoutDepartmentInput[] | ProgramUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutDepartmentInput | ProgramCreateOrConnectWithoutDepartmentInput[]
    createMany?: ProgramCreateManyDepartmentInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ProgramCreateWithoutDepartmentInput, ProgramUncheckedCreateWithoutDepartmentInput> | ProgramCreateWithoutDepartmentInput[] | ProgramUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutDepartmentInput | ProgramCreateOrConnectWithoutDepartmentInput[]
    createMany?: ProgramCreateManyDepartmentInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type SchoolUpdateOneRequiredWithoutDepartmentNestedInput = {
    create?: XOR<SchoolCreateWithoutDepartmentInput, SchoolUncheckedCreateWithoutDepartmentInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutDepartmentInput
    upsert?: SchoolUpsertWithoutDepartmentInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutDepartmentInput, SchoolUpdateWithoutDepartmentInput>, SchoolUncheckedUpdateWithoutDepartmentInput>
  }

  export type ProgramUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ProgramCreateWithoutDepartmentInput, ProgramUncheckedCreateWithoutDepartmentInput> | ProgramCreateWithoutDepartmentInput[] | ProgramUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutDepartmentInput | ProgramCreateOrConnectWithoutDepartmentInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutDepartmentInput | ProgramUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ProgramCreateManyDepartmentInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutDepartmentInput | ProgramUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutDepartmentInput | ProgramUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ProgramCreateWithoutDepartmentInput, ProgramUncheckedCreateWithoutDepartmentInput> | ProgramCreateWithoutDepartmentInput[] | ProgramUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutDepartmentInput | ProgramCreateOrConnectWithoutDepartmentInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutDepartmentInput | ProgramUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ProgramCreateManyDepartmentInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutDepartmentInput | ProgramUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutDepartmentInput | ProgramUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type DepartmentsCreateNestedOneWithoutProgramsInput = {
    create?: XOR<DepartmentsCreateWithoutProgramsInput, DepartmentsUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutProgramsInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutProgramInput = {
    create?: XOR<UserCreateWithoutProgramInput, UserUncheckedCreateWithoutProgramInput> | UserCreateWithoutProgramInput[] | UserUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProgramInput | UserCreateOrConnectWithoutProgramInput[]
    createMany?: UserCreateManyProgramInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<UserCreateWithoutProgramInput, UserUncheckedCreateWithoutProgramInput> | UserCreateWithoutProgramInput[] | UserUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProgramInput | UserCreateOrConnectWithoutProgramInput[]
    createMany?: UserCreateManyProgramInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentsUpdateOneRequiredWithoutProgramsNestedInput = {
    create?: XOR<DepartmentsCreateWithoutProgramsInput, DepartmentsUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutProgramsInput
    upsert?: DepartmentsUpsertWithoutProgramsInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutProgramsInput, DepartmentsUpdateWithoutProgramsInput>, DepartmentsUncheckedUpdateWithoutProgramsInput>
  }

  export type UserUpdateManyWithoutProgramNestedInput = {
    create?: XOR<UserCreateWithoutProgramInput, UserUncheckedCreateWithoutProgramInput> | UserCreateWithoutProgramInput[] | UserUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProgramInput | UserCreateOrConnectWithoutProgramInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProgramInput | UserUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: UserCreateManyProgramInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProgramInput | UserUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProgramInput | UserUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<UserCreateWithoutProgramInput, UserUncheckedCreateWithoutProgramInput> | UserCreateWithoutProgramInput[] | UserUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProgramInput | UserCreateOrConnectWithoutProgramInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProgramInput | UserUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: UserCreateManyProgramInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProgramInput | UserUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProgramInput | UserUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OtpCreateNestedOneWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput
    connect?: OtpWhereUniqueInput
  }

  export type ProgramCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ProgramCreateWithoutStudentsInput, ProgramUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutStudentsInput
    connect?: ProgramWhereUniqueInput
  }

  export type ProjectTeamCreateNestedOneWithoutStudentInput = {
    create?: XOR<ProjectTeamCreateWithoutStudentInput, ProjectTeamUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ProjectTeamCreateOrConnectWithoutStudentInput
    connect?: ProjectTeamWhereUniqueInput
  }

  export type OtpUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput
    connect?: OtpWhereUniqueInput
  }

  export type ProjectTeamUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<ProjectTeamCreateWithoutStudentInput, ProjectTeamUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ProjectTeamCreateOrConnectWithoutStudentInput
    connect?: ProjectTeamWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumROLESFieldUpdateOperationsInput = {
    set?: $Enums.ROLES
  }

  export type EnumSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.STATUS
  }

  export type EnumROLETEAMFieldUpdateOperationsInput = {
    set?: $Enums.ROLETEAM
  }

  export type OtpUpdateOneWithoutUserNestedInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput
    upsert?: OtpUpsertWithoutUserInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutUserInput, OtpUpdateWithoutUserInput>, OtpUncheckedUpdateWithoutUserInput>
  }

  export type ProgramUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<ProgramCreateWithoutStudentsInput, ProgramUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutStudentsInput
    upsert?: ProgramUpsertWithoutStudentsInput
    disconnect?: ProgramWhereInput | boolean
    delete?: ProgramWhereInput | boolean
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutStudentsInput, ProgramUpdateWithoutStudentsInput>, ProgramUncheckedUpdateWithoutStudentsInput>
  }

  export type ProjectTeamUpdateOneWithoutStudentNestedInput = {
    create?: XOR<ProjectTeamCreateWithoutStudentInput, ProjectTeamUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ProjectTeamCreateOrConnectWithoutStudentInput
    upsert?: ProjectTeamUpsertWithoutStudentInput
    disconnect?: ProjectTeamWhereInput | boolean
    delete?: ProjectTeamWhereInput | boolean
    connect?: ProjectTeamWhereUniqueInput
    update?: XOR<XOR<ProjectTeamUpdateToOneWithWhereWithoutStudentInput, ProjectTeamUpdateWithoutStudentInput>, ProjectTeamUncheckedUpdateWithoutStudentInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OtpUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput
    upsert?: OtpUpsertWithoutUserInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutUserInput, OtpUpdateWithoutUserInput>, OtpUncheckedUpdateWithoutUserInput>
  }

  export type ProjectTeamUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<ProjectTeamCreateWithoutStudentInput, ProjectTeamUncheckedCreateWithoutStudentInput>
    connectOrCreate?: ProjectTeamCreateOrConnectWithoutStudentInput
    upsert?: ProjectTeamUpsertWithoutStudentInput
    disconnect?: ProjectTeamWhereInput | boolean
    delete?: ProjectTeamWhereInput | boolean
    connect?: ProjectTeamWhereUniqueInput
    update?: XOR<XOR<ProjectTeamUpdateToOneWithWhereWithoutStudentInput, ProjectTeamUpdateWithoutStudentInput>, ProjectTeamUncheckedUpdateWithoutStudentInput>
  }

  export type UserCreateNestedOneWithoutOtpInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOtpNestedInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    upsert?: UserUpsertWithoutOtpInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpInput, UserUpdateWithoutOtpInput>, UserUncheckedUpdateWithoutOtpInput>
  }

  export type UserCreateNestedOneWithoutProjectTeamInput = {
    create?: XOR<UserCreateWithoutProjectTeamInput, UserUncheckedCreateWithoutProjectTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectTeamInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectTeamNestedInput = {
    create?: XOR<UserCreateWithoutProjectTeamInput, UserUncheckedCreateWithoutProjectTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectTeamInput
    upsert?: UserUpsertWithoutProjectTeamInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectTeamInput, UserUpdateWithoutProjectTeamInput>, UserUncheckedUpdateWithoutProjectTeamInput>
  }

  export type ProjectUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectTeamCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ProjectTeamCreateWithoutProjectsInput, ProjectTeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectTeamCreateOrConnectWithoutProjectsInput
    connect?: ProjectTeamWhereUniqueInput
  }

  export type EnumPROJECTSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.PROJECTSTATUS
  }

  export type ProjectTeamUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ProjectTeamCreateWithoutProjectsInput, ProjectTeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProjectTeamCreateOrConnectWithoutProjectsInput
    upsert?: ProjectTeamUpsertWithoutProjectsInput
    connect?: ProjectTeamWhereUniqueInput
    update?: XOR<XOR<ProjectTeamUpdateToOneWithWhereWithoutProjectsInput, ProjectTeamUpdateWithoutProjectsInput>, ProjectTeamUncheckedUpdateWithoutProjectsInput>
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

  export type NestedEnumROLESFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLES | EnumROLESFieldRefInput<$PrismaModel>
    in?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    not?: NestedEnumROLESFilter<$PrismaModel> | $Enums.ROLES
  }

  export type NestedEnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type NestedEnumROLETEAMFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLETEAM | EnumROLETEAMFieldRefInput<$PrismaModel>
    in?: $Enums.ROLETEAM[] | ListEnumROLETEAMFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLETEAM[] | ListEnumROLETEAMFieldRefInput<$PrismaModel>
    not?: NestedEnumROLETEAMFilter<$PrismaModel> | $Enums.ROLETEAM
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

  export type NestedEnumROLESWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLES | EnumROLESFieldRefInput<$PrismaModel>
    in?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLES[] | ListEnumROLESFieldRefInput<$PrismaModel>
    not?: NestedEnumROLESWithAggregatesFilter<$PrismaModel> | $Enums.ROLES
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLESFilter<$PrismaModel>
    _max?: NestedEnumROLESFilter<$PrismaModel>
  }

  export type NestedEnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type NestedEnumROLETEAMWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLETEAM | EnumROLETEAMFieldRefInput<$PrismaModel>
    in?: $Enums.ROLETEAM[] | ListEnumROLETEAMFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLETEAM[] | ListEnumROLETEAMFieldRefInput<$PrismaModel>
    not?: NestedEnumROLETEAMWithAggregatesFilter<$PrismaModel> | $Enums.ROLETEAM
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLETEAMFilter<$PrismaModel>
    _max?: NestedEnumROLETEAMFilter<$PrismaModel>
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

  export type NestedEnumPROJECTSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PROJECTSTATUS | EnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PROJECTSTATUS[] | ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PROJECTSTATUS[] | ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPROJECTSTATUSFilter<$PrismaModel> | $Enums.PROJECTSTATUS
  }

  export type NestedEnumPROJECTSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PROJECTSTATUS | EnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PROJECTSTATUS[] | ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PROJECTSTATUS[] | ListEnumPROJECTSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPROJECTSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.PROJECTSTATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPROJECTSTATUSFilter<$PrismaModel>
    _max?: NestedEnumPROJECTSTATUSFilter<$PrismaModel>
  }

  export type CollegeCreateWithoutUniversityInput = {
    id?: string
    name: string
    dean: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutUniversityInput = {
    id?: string
    name: string
    dean: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school?: SchoolUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutUniversityInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutUniversityInput, CollegeUncheckedCreateWithoutUniversityInput>
  }

  export type CollegeCreateManyUniversityInputEnvelope = {
    data: CollegeCreateManyUniversityInput | CollegeCreateManyUniversityInput[]
    skipDuplicates?: boolean
  }

  export type CollegeUpsertWithWhereUniqueWithoutUniversityInput = {
    where: CollegeWhereUniqueInput
    update: XOR<CollegeUpdateWithoutUniversityInput, CollegeUncheckedUpdateWithoutUniversityInput>
    create: XOR<CollegeCreateWithoutUniversityInput, CollegeUncheckedCreateWithoutUniversityInput>
  }

  export type CollegeUpdateWithWhereUniqueWithoutUniversityInput = {
    where: CollegeWhereUniqueInput
    data: XOR<CollegeUpdateWithoutUniversityInput, CollegeUncheckedUpdateWithoutUniversityInput>
  }

  export type CollegeUpdateManyWithWhereWithoutUniversityInput = {
    where: CollegeScalarWhereInput
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyWithoutUniversityInput>
  }

  export type CollegeScalarWhereInput = {
    AND?: CollegeScalarWhereInput | CollegeScalarWhereInput[]
    OR?: CollegeScalarWhereInput[]
    NOT?: CollegeScalarWhereInput | CollegeScalarWhereInput[]
    id?: StringFilter<"College"> | string
    name?: StringFilter<"College"> | string
    universityId?: StringFilter<"College"> | string
    dean?: StringFilter<"College"> | string
    createdAt?: DateTimeFilter<"College"> | Date | string
    updatedAt?: DateTimeFilter<"College"> | Date | string
  }

  export type UniversityOfRwandaCreateWithoutCollegeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityOfRwandaUncheckedCreateWithoutCollegeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UniversityOfRwandaCreateOrConnectWithoutCollegeInput = {
    where: UniversityOfRwandaWhereUniqueInput
    create: XOR<UniversityOfRwandaCreateWithoutCollegeInput, UniversityOfRwandaUncheckedCreateWithoutCollegeInput>
  }

  export type SchoolCreateWithoutCollegeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentsCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutCollegeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentsUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutCollegeInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutCollegeInput, SchoolUncheckedCreateWithoutCollegeInput>
  }

  export type SchoolCreateManyCollegeInputEnvelope = {
    data: SchoolCreateManyCollegeInput | SchoolCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type UniversityOfRwandaUpsertWithoutCollegeInput = {
    update: XOR<UniversityOfRwandaUpdateWithoutCollegeInput, UniversityOfRwandaUncheckedUpdateWithoutCollegeInput>
    create: XOR<UniversityOfRwandaCreateWithoutCollegeInput, UniversityOfRwandaUncheckedCreateWithoutCollegeInput>
    where?: UniversityOfRwandaWhereInput
  }

  export type UniversityOfRwandaUpdateToOneWithWhereWithoutCollegeInput = {
    where?: UniversityOfRwandaWhereInput
    data: XOR<UniversityOfRwandaUpdateWithoutCollegeInput, UniversityOfRwandaUncheckedUpdateWithoutCollegeInput>
  }

  export type UniversityOfRwandaUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityOfRwandaUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUpsertWithWhereUniqueWithoutCollegeInput = {
    where: SchoolWhereUniqueInput
    update: XOR<SchoolUpdateWithoutCollegeInput, SchoolUncheckedUpdateWithoutCollegeInput>
    create: XOR<SchoolCreateWithoutCollegeInput, SchoolUncheckedCreateWithoutCollegeInput>
  }

  export type SchoolUpdateWithWhereUniqueWithoutCollegeInput = {
    where: SchoolWhereUniqueInput
    data: XOR<SchoolUpdateWithoutCollegeInput, SchoolUncheckedUpdateWithoutCollegeInput>
  }

  export type SchoolUpdateManyWithWhereWithoutCollegeInput = {
    where: SchoolScalarWhereInput
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyWithoutCollegeInput>
  }

  export type SchoolScalarWhereInput = {
    AND?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    OR?: SchoolScalarWhereInput[]
    NOT?: SchoolScalarWhereInput | SchoolScalarWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    collegeId?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
  }

  export type CollegeCreateWithoutSchoolInput = {
    id?: string
    name: string
    dean: string
    createdAt?: Date | string
    updatedAt?: Date | string
    university: UniversityOfRwandaCreateNestedOneWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    universityId: string
    dean: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollegeCreateOrConnectWithoutSchoolInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutSchoolInput, CollegeUncheckedCreateWithoutSchoolInput>
  }

  export type DepartmentsCreateWithoutSchoolInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentsCreateOrConnectWithoutSchoolInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutSchoolInput, DepartmentsUncheckedCreateWithoutSchoolInput>
  }

  export type DepartmentsCreateManySchoolInputEnvelope = {
    data: DepartmentsCreateManySchoolInput | DepartmentsCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type CollegeUpsertWithoutSchoolInput = {
    update: XOR<CollegeUpdateWithoutSchoolInput, CollegeUncheckedUpdateWithoutSchoolInput>
    create: XOR<CollegeCreateWithoutSchoolInput, CollegeUncheckedCreateWithoutSchoolInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutSchoolInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutSchoolInput, CollegeUncheckedUpdateWithoutSchoolInput>
  }

  export type CollegeUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    university?: UniversityOfRwandaUpdateOneRequiredWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    universityId?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsUpsertWithWhereUniqueWithoutSchoolInput = {
    where: DepartmentsWhereUniqueInput
    update: XOR<DepartmentsUpdateWithoutSchoolInput, DepartmentsUncheckedUpdateWithoutSchoolInput>
    create: XOR<DepartmentsCreateWithoutSchoolInput, DepartmentsUncheckedCreateWithoutSchoolInput>
  }

  export type DepartmentsUpdateWithWhereUniqueWithoutSchoolInput = {
    where: DepartmentsWhereUniqueInput
    data: XOR<DepartmentsUpdateWithoutSchoolInput, DepartmentsUncheckedUpdateWithoutSchoolInput>
  }

  export type DepartmentsUpdateManyWithWhereWithoutSchoolInput = {
    where: DepartmentsScalarWhereInput
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyWithoutSchoolInput>
  }

  export type DepartmentsScalarWhereInput = {
    AND?: DepartmentsScalarWhereInput | DepartmentsScalarWhereInput[]
    OR?: DepartmentsScalarWhereInput[]
    NOT?: DepartmentsScalarWhereInput | DepartmentsScalarWhereInput[]
    id?: StringFilter<"Departments"> | string
    name?: StringFilter<"Departments"> | string
    schoolId?: StringFilter<"Departments"> | string
    createdAt?: DateTimeFilter<"Departments"> | Date | string
    updatedAt?: DateTimeFilter<"Departments"> | Date | string
  }

  export type SchoolCreateWithoutDepartmentInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    college: CollegeCreateNestedOneWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    collegeId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolCreateOrConnectWithoutDepartmentInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutDepartmentInput, SchoolUncheckedCreateWithoutDepartmentInput>
  }

  export type ProgramCreateWithoutDepartmentInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: UserCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutDepartmentInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutDepartmentInput, ProgramUncheckedCreateWithoutDepartmentInput>
  }

  export type ProgramCreateManyDepartmentInputEnvelope = {
    data: ProgramCreateManyDepartmentInput | ProgramCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutDepartmentInput = {
    update: XOR<SchoolUpdateWithoutDepartmentInput, SchoolUncheckedUpdateWithoutDepartmentInput>
    create: XOR<SchoolCreateWithoutDepartmentInput, SchoolUncheckedCreateWithoutDepartmentInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutDepartmentInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutDepartmentInput, SchoolUncheckedUpdateWithoutDepartmentInput>
  }

  export type SchoolUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    college?: CollegeUpdateOneRequiredWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutDepartmentInput, ProgramUncheckedUpdateWithoutDepartmentInput>
    create: XOR<ProgramCreateWithoutDepartmentInput, ProgramUncheckedCreateWithoutDepartmentInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutDepartmentInput, ProgramUncheckedUpdateWithoutDepartmentInput>
  }

  export type ProgramUpdateManyWithWhereWithoutDepartmentInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type ProgramScalarWhereInput = {
    AND?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    OR?: ProgramScalarWhereInput[]
    NOT?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    id?: StringFilter<"Program"> | string
    name?: StringFilter<"Program"> | string
    departmentId?: StringFilter<"Program"> | string
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
  }

  export type DepartmentsCreateWithoutProgramsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutDepartmentInput
  }

  export type DepartmentsUncheckedCreateWithoutProgramsInput = {
    id?: string
    name: string
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentsCreateOrConnectWithoutProgramsInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutProgramsInput, DepartmentsUncheckedCreateWithoutProgramsInput>
  }

  export type UserCreateWithoutProgramInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: OtpCreateNestedOneWithoutUserInput
    projectTeam?: ProjectTeamCreateNestedOneWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutProgramInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: OtpUncheckedCreateNestedOneWithoutUserInput
    projectTeam?: ProjectTeamUncheckedCreateNestedOneWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutProgramInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgramInput, UserUncheckedCreateWithoutProgramInput>
  }

  export type UserCreateManyProgramInputEnvelope = {
    data: UserCreateManyProgramInput | UserCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentsUpsertWithoutProgramsInput = {
    update: XOR<DepartmentsUpdateWithoutProgramsInput, DepartmentsUncheckedUpdateWithoutProgramsInput>
    create: XOR<DepartmentsCreateWithoutProgramsInput, DepartmentsUncheckedCreateWithoutProgramsInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutProgramsInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutProgramsInput, DepartmentsUncheckedUpdateWithoutProgramsInput>
  }

  export type DepartmentsUpdateWithoutProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutProgramsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutProgramInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProgramInput, UserUncheckedUpdateWithoutProgramInput>
    create: XOR<UserCreateWithoutProgramInput, UserUncheckedCreateWithoutProgramInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProgramInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProgramInput, UserUncheckedUpdateWithoutProgramInput>
  }

  export type UserUpdateManyWithWhereWithoutProgramInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProgramInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    reg_no?: IntFilter<"User"> | number
    gender?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumROLESFilter<"User"> | $Enums.ROLES
    status?: EnumSTATUSFilter<"User"> | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFilter<"User"> | $Enums.ROLETEAM
    programId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type OtpCreateWithoutUserInput = {
    id?: string
    otp: string
    createdAt?: Date | string
    expiredDate: Date | string
  }

  export type OtpUncheckedCreateWithoutUserInput = {
    id?: string
    otp: string
    createdAt?: Date | string
    expiredDate: Date | string
  }

  export type OtpCreateOrConnectWithoutUserInput = {
    where: OtpWhereUniqueInput
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
  }

  export type ProgramCreateWithoutStudentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentsCreateNestedOneWithoutProgramsInput
  }

  export type ProgramUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramCreateOrConnectWithoutStudentsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutStudentsInput, ProgramUncheckedCreateWithoutStudentsInput>
  }

  export type ProjectTeamCreateWithoutStudentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutTeamInput
  }

  export type ProjectTeamUncheckedCreateWithoutStudentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
  }

  export type ProjectTeamCreateOrConnectWithoutStudentInput = {
    where: ProjectTeamWhereUniqueInput
    create: XOR<ProjectTeamCreateWithoutStudentInput, ProjectTeamUncheckedCreateWithoutStudentInput>
  }

  export type OtpUpsertWithoutUserInput = {
    update: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    where?: OtpWhereInput
  }

  export type OtpUpdateToOneWithWhereWithoutUserInput = {
    where?: OtpWhereInput
    data: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>
  }

  export type OtpUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUpsertWithoutStudentsInput = {
    update: XOR<ProgramUpdateWithoutStudentsInput, ProgramUncheckedUpdateWithoutStudentsInput>
    create: XOR<ProgramCreateWithoutStudentsInput, ProgramUncheckedCreateWithoutStudentsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutStudentsInput, ProgramUncheckedUpdateWithoutStudentsInput>
  }

  export type ProgramUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentsUpdateOneRequiredWithoutProgramsNestedInput
  }

  export type ProgramUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTeamUpsertWithoutStudentInput = {
    update: XOR<ProjectTeamUpdateWithoutStudentInput, ProjectTeamUncheckedUpdateWithoutStudentInput>
    create: XOR<ProjectTeamCreateWithoutStudentInput, ProjectTeamUncheckedCreateWithoutStudentInput>
    where?: ProjectTeamWhereInput
  }

  export type ProjectTeamUpdateToOneWithWhereWithoutStudentInput = {
    where?: ProjectTeamWhereInput
    data: XOR<ProjectTeamUpdateWithoutStudentInput, ProjectTeamUncheckedUpdateWithoutStudentInput>
  }

  export type ProjectTeamUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutTeamNestedInput
  }

  export type ProjectTeamUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutOtpInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    createdAt?: Date | string
    updatedAt?: Date | string
    program?: ProgramCreateNestedOneWithoutStudentsInput
    projectTeam?: ProjectTeamCreateNestedOneWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutOtpInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    programId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectTeam?: ProjectTeamUncheckedCreateNestedOneWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutOtpInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
  }

  export type UserUpsertWithoutOtpInput = {
    update: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
  }

  export type UserUpdateWithoutOtpInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneWithoutStudentsNestedInput
    projectTeam?: ProjectTeamUpdateOneWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectTeam?: ProjectTeamUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type UserCreateWithoutProjectTeamInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: OtpCreateNestedOneWithoutUserInput
    program?: ProgramCreateNestedOneWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutProjectTeamInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    programId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    otp?: OtpUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectTeamInput, UserUncheckedCreateWithoutProjectTeamInput>
  }

  export type ProjectCreateWithoutTeamInput = {
    id?: string
    title: string
    descriptions: string
    status?: $Enums.PROJECTSTATUS
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutTeamInput = {
    id?: string
    title: string
    descriptions: string
    status?: $Enums.PROJECTSTATUS
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectCreateManyTeamInputEnvelope = {
    data: ProjectCreateManyTeamInput | ProjectCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectTeamInput = {
    update: XOR<UserUpdateWithoutProjectTeamInput, UserUncheckedUpdateWithoutProjectTeamInput>
    create: XOR<UserCreateWithoutProjectTeamInput, UserUncheckedCreateWithoutProjectTeamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectTeamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectTeamInput, UserUncheckedUpdateWithoutProjectTeamInput>
  }

  export type UserUpdateWithoutProjectTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: OtpUpdateOneWithoutUserNestedInput
    program?: ProgramUpdateOneWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: OtpUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTeamInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTeamInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    descriptions?: StringFilter<"Project"> | string
    status?: EnumPROJECTSTATUSFilter<"Project"> | $Enums.PROJECTSTATUS
    teamId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectTeamCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutProjectTeamInput
  }

  export type ProjectTeamUncheckedCreateWithoutProjectsInput = {
    id?: string
    studentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTeamCreateOrConnectWithoutProjectsInput = {
    where: ProjectTeamWhereUniqueInput
    create: XOR<ProjectTeamCreateWithoutProjectsInput, ProjectTeamUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectTeamUpsertWithoutProjectsInput = {
    update: XOR<ProjectTeamUpdateWithoutProjectsInput, ProjectTeamUncheckedUpdateWithoutProjectsInput>
    create: XOR<ProjectTeamCreateWithoutProjectsInput, ProjectTeamUncheckedCreateWithoutProjectsInput>
    where?: ProjectTeamWhereInput
  }

  export type ProjectTeamUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ProjectTeamWhereInput
    data: XOR<ProjectTeamUpdateWithoutProjectsInput, ProjectTeamUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectTeamUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutProjectTeamNestedInput
  }

  export type ProjectTeamUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeCreateManyUniversityInput = {
    id?: string
    name: string
    dean: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollegeUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateManyWithoutUniversityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dean?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolCreateManyCollegeInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentsUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentsUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateManyWithoutCollegeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsCreateManySchoolInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentsUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentsUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateManyDepartmentInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyProgramInput = {
    id?: string
    name: string
    email: string
    reg_no: number
    gender: string
    password: string
    role?: $Enums.ROLES
    status?: $Enums.STATUS
    roleInTeam?: $Enums.ROLETEAM
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: OtpUpdateOneWithoutUserNestedInput
    projectTeam?: ProjectTeamUpdateOneWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otp?: OtpUncheckedUpdateOneWithoutUserNestedInput
    projectTeam?: ProjectTeamUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    reg_no?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLESFieldUpdateOperationsInput | $Enums.ROLES
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    roleInTeam?: EnumROLETEAMFieldUpdateOperationsInput | $Enums.ROLETEAM
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyTeamInput = {
    id?: string
    title: string
    descriptions: string
    status?: $Enums.PROJECTSTATUS
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    status?: EnumPROJECTSTATUSFieldUpdateOperationsInput | $Enums.PROJECTSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    status?: EnumPROJECTSTATUSFieldUpdateOperationsInput | $Enums.PROJECTSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    status?: EnumPROJECTSTATUSFieldUpdateOperationsInput | $Enums.PROJECTSTATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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