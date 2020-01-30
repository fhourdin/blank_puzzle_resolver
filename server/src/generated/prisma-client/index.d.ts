// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  connection: (where?: ConnectionWhereInput) => Promise<boolean>;
  piece: (where?: PieceWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  connection: (where: ConnectionWhereUniqueInput) => ConnectionNullablePromise;
  connections: (args?: {
    where?: ConnectionWhereInput;
    orderBy?: ConnectionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Connection>;
  connectionsConnection: (args?: {
    where?: ConnectionWhereInput;
    orderBy?: ConnectionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ConnectionConnectionPromise;
  piece: (where: PieceWhereUniqueInput) => PieceNullablePromise;
  pieces: (args?: {
    where?: PieceWhereInput;
    orderBy?: PieceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Piece>;
  piecesConnection: (args?: {
    where?: PieceWhereInput;
    orderBy?: PieceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PieceConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createConnection: (data: ConnectionCreateInput) => ConnectionPromise;
  updateConnection: (args: {
    data: ConnectionUpdateInput;
    where: ConnectionWhereUniqueInput;
  }) => ConnectionPromise;
  updateManyConnections: (args: {
    data: ConnectionUpdateManyMutationInput;
    where?: ConnectionWhereInput;
  }) => BatchPayloadPromise;
  upsertConnection: (args: {
    where: ConnectionWhereUniqueInput;
    create: ConnectionCreateInput;
    update: ConnectionUpdateInput;
  }) => ConnectionPromise;
  deleteConnection: (where: ConnectionWhereUniqueInput) => ConnectionPromise;
  deleteManyConnections: (where?: ConnectionWhereInput) => BatchPayloadPromise;
  createPiece: (data: PieceCreateInput) => PiecePromise;
  updatePiece: (args: {
    data: PieceUpdateInput;
    where: PieceWhereUniqueInput;
  }) => PiecePromise;
  updateManyPieces: (args: {
    data: PieceUpdateManyMutationInput;
    where?: PieceWhereInput;
  }) => BatchPayloadPromise;
  upsertPiece: (args: {
    where: PieceWhereUniqueInput;
    create: PieceCreateInput;
    update: PieceUpdateInput;
  }) => PiecePromise;
  deletePiece: (where: PieceWhereUniqueInput) => PiecePromise;
  deleteManyPieces: (where?: PieceWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  connection: (
    where?: ConnectionSubscriptionWhereInput
  ) => ConnectionSubscriptionPayloadSubscription;
  piece: (
    where?: PieceSubscriptionWhereInput
  ) => PieceSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Direction = "LEFT" | "CENTER" | "RIGHT";

export type ConnectionOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "index_ASC"
  | "index_DESC"
  | "male_ASC"
  | "male_DESC"
  | "shift_ASC"
  | "shift_DESC"
  | "inclination_ASC"
  | "inclination_DESC";

export type PieceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "index_ASC"
  | "index_DESC"
  | "placed_ASC"
  | "placed_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ConnectionWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ConnectionWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  index?: Maybe<Int>;
  index_not?: Maybe<Int>;
  index_in?: Maybe<Int[] | Int>;
  index_not_in?: Maybe<Int[] | Int>;
  index_lt?: Maybe<Int>;
  index_lte?: Maybe<Int>;
  index_gt?: Maybe<Int>;
  index_gte?: Maybe<Int>;
  piece?: Maybe<PieceWhereInput>;
  male?: Maybe<Boolean>;
  male_not?: Maybe<Boolean>;
  shift?: Maybe<Direction>;
  shift_not?: Maybe<Direction>;
  shift_in?: Maybe<Direction[] | Direction>;
  shift_not_in?: Maybe<Direction[] | Direction>;
  inclination?: Maybe<Direction>;
  inclination_not?: Maybe<Direction>;
  inclination_in?: Maybe<Direction[] | Direction>;
  inclination_not_in?: Maybe<Direction[] | Direction>;
  AND?: Maybe<ConnectionWhereInput[] | ConnectionWhereInput>;
  OR?: Maybe<ConnectionWhereInput[] | ConnectionWhereInput>;
  NOT?: Maybe<ConnectionWhereInput[] | ConnectionWhereInput>;
}

export interface PieceWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  index?: Maybe<Int>;
  index_not?: Maybe<Int>;
  index_in?: Maybe<Int[] | Int>;
  index_not_in?: Maybe<Int[] | Int>;
  index_lt?: Maybe<Int>;
  index_lte?: Maybe<Int>;
  index_gt?: Maybe<Int>;
  index_gte?: Maybe<Int>;
  placed?: Maybe<Boolean>;
  placed_not?: Maybe<Boolean>;
  connections_every?: Maybe<ConnectionWhereInput>;
  connections_some?: Maybe<ConnectionWhereInput>;
  connections_none?: Maybe<ConnectionWhereInput>;
  AND?: Maybe<PieceWhereInput[] | PieceWhereInput>;
  OR?: Maybe<PieceWhereInput[] | PieceWhereInput>;
  NOT?: Maybe<PieceWhereInput[] | PieceWhereInput>;
}

export type PieceWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  index?: Maybe<Int>;
}>;

export interface ConnectionCreateInput {
  id?: Maybe<ID_Input>;
  index: Int;
  piece: PieceCreateOneWithoutConnectionsInput;
  male: Boolean;
  shift: Direction;
  inclination: Direction;
}

export interface PieceCreateOneWithoutConnectionsInput {
  create?: Maybe<PieceCreateWithoutConnectionsInput>;
  connect?: Maybe<PieceWhereUniqueInput>;
}

export interface PieceCreateWithoutConnectionsInput {
  id?: Maybe<ID_Input>;
  index: Int;
  placed?: Maybe<Boolean>;
}

export interface ConnectionUpdateInput {
  index?: Maybe<Int>;
  piece?: Maybe<PieceUpdateOneRequiredWithoutConnectionsInput>;
  male?: Maybe<Boolean>;
  shift?: Maybe<Direction>;
  inclination?: Maybe<Direction>;
}

export interface PieceUpdateOneRequiredWithoutConnectionsInput {
  create?: Maybe<PieceCreateWithoutConnectionsInput>;
  update?: Maybe<PieceUpdateWithoutConnectionsDataInput>;
  upsert?: Maybe<PieceUpsertWithoutConnectionsInput>;
  connect?: Maybe<PieceWhereUniqueInput>;
}

export interface PieceUpdateWithoutConnectionsDataInput {
  index?: Maybe<Int>;
  placed?: Maybe<Boolean>;
}

export interface PieceUpsertWithoutConnectionsInput {
  update: PieceUpdateWithoutConnectionsDataInput;
  create: PieceCreateWithoutConnectionsInput;
}

export interface ConnectionUpdateManyMutationInput {
  index?: Maybe<Int>;
  male?: Maybe<Boolean>;
  shift?: Maybe<Direction>;
  inclination?: Maybe<Direction>;
}

export interface PieceCreateInput {
  id?: Maybe<ID_Input>;
  index: Int;
  placed?: Maybe<Boolean>;
  connections?: Maybe<ConnectionCreateManyWithoutPieceInput>;
}

export interface ConnectionCreateManyWithoutPieceInput {
  create?: Maybe<
    ConnectionCreateWithoutPieceInput[] | ConnectionCreateWithoutPieceInput
  >;
  connect?: Maybe<ConnectionWhereUniqueInput[] | ConnectionWhereUniqueInput>;
}

export interface ConnectionCreateWithoutPieceInput {
  id?: Maybe<ID_Input>;
  index: Int;
  male: Boolean;
  shift: Direction;
  inclination: Direction;
}

export interface PieceUpdateInput {
  index?: Maybe<Int>;
  placed?: Maybe<Boolean>;
  connections?: Maybe<ConnectionUpdateManyWithoutPieceInput>;
}

export interface ConnectionUpdateManyWithoutPieceInput {
  create?: Maybe<
    ConnectionCreateWithoutPieceInput[] | ConnectionCreateWithoutPieceInput
  >;
  delete?: Maybe<ConnectionWhereUniqueInput[] | ConnectionWhereUniqueInput>;
  connect?: Maybe<ConnectionWhereUniqueInput[] | ConnectionWhereUniqueInput>;
  set?: Maybe<ConnectionWhereUniqueInput[] | ConnectionWhereUniqueInput>;
  disconnect?: Maybe<ConnectionWhereUniqueInput[] | ConnectionWhereUniqueInput>;
  update?: Maybe<
    | ConnectionUpdateWithWhereUniqueWithoutPieceInput[]
    | ConnectionUpdateWithWhereUniqueWithoutPieceInput
  >;
  upsert?: Maybe<
    | ConnectionUpsertWithWhereUniqueWithoutPieceInput[]
    | ConnectionUpsertWithWhereUniqueWithoutPieceInput
  >;
  deleteMany?: Maybe<ConnectionScalarWhereInput[] | ConnectionScalarWhereInput>;
  updateMany?: Maybe<
    | ConnectionUpdateManyWithWhereNestedInput[]
    | ConnectionUpdateManyWithWhereNestedInput
  >;
}

export interface ConnectionUpdateWithWhereUniqueWithoutPieceInput {
  where: ConnectionWhereUniqueInput;
  data: ConnectionUpdateWithoutPieceDataInput;
}

export interface ConnectionUpdateWithoutPieceDataInput {
  index?: Maybe<Int>;
  male?: Maybe<Boolean>;
  shift?: Maybe<Direction>;
  inclination?: Maybe<Direction>;
}

export interface ConnectionUpsertWithWhereUniqueWithoutPieceInput {
  where: ConnectionWhereUniqueInput;
  update: ConnectionUpdateWithoutPieceDataInput;
  create: ConnectionCreateWithoutPieceInput;
}

export interface ConnectionScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  index?: Maybe<Int>;
  index_not?: Maybe<Int>;
  index_in?: Maybe<Int[] | Int>;
  index_not_in?: Maybe<Int[] | Int>;
  index_lt?: Maybe<Int>;
  index_lte?: Maybe<Int>;
  index_gt?: Maybe<Int>;
  index_gte?: Maybe<Int>;
  male?: Maybe<Boolean>;
  male_not?: Maybe<Boolean>;
  shift?: Maybe<Direction>;
  shift_not?: Maybe<Direction>;
  shift_in?: Maybe<Direction[] | Direction>;
  shift_not_in?: Maybe<Direction[] | Direction>;
  inclination?: Maybe<Direction>;
  inclination_not?: Maybe<Direction>;
  inclination_in?: Maybe<Direction[] | Direction>;
  inclination_not_in?: Maybe<Direction[] | Direction>;
  AND?: Maybe<ConnectionScalarWhereInput[] | ConnectionScalarWhereInput>;
  OR?: Maybe<ConnectionScalarWhereInput[] | ConnectionScalarWhereInput>;
  NOT?: Maybe<ConnectionScalarWhereInput[] | ConnectionScalarWhereInput>;
}

export interface ConnectionUpdateManyWithWhereNestedInput {
  where: ConnectionScalarWhereInput;
  data: ConnectionUpdateManyDataInput;
}

export interface ConnectionUpdateManyDataInput {
  index?: Maybe<Int>;
  male?: Maybe<Boolean>;
  shift?: Maybe<Direction>;
  inclination?: Maybe<Direction>;
}

export interface PieceUpdateManyMutationInput {
  index?: Maybe<Int>;
  placed?: Maybe<Boolean>;
}

export interface ConnectionSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ConnectionWhereInput>;
  AND?: Maybe<
    ConnectionSubscriptionWhereInput[] | ConnectionSubscriptionWhereInput
  >;
  OR?: Maybe<
    ConnectionSubscriptionWhereInput[] | ConnectionSubscriptionWhereInput
  >;
  NOT?: Maybe<
    ConnectionSubscriptionWhereInput[] | ConnectionSubscriptionWhereInput
  >;
}

export interface PieceSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PieceWhereInput>;
  AND?: Maybe<PieceSubscriptionWhereInput[] | PieceSubscriptionWhereInput>;
  OR?: Maybe<PieceSubscriptionWhereInput[] | PieceSubscriptionWhereInput>;
  NOT?: Maybe<PieceSubscriptionWhereInput[] | PieceSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Connection {
  id: ID_Output;
  index: Int;
  male: Boolean;
  shift: Direction;
  inclination: Direction;
}

export interface ConnectionPromise extends Promise<Connection>, Fragmentable {
  id: () => Promise<ID_Output>;
  index: () => Promise<Int>;
  piece: <T = PiecePromise>() => T;
  male: () => Promise<Boolean>;
  shift: () => Promise<Direction>;
  inclination: () => Promise<Direction>;
}

export interface ConnectionSubscription
  extends Promise<AsyncIterator<Connection>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  index: () => Promise<AsyncIterator<Int>>;
  piece: <T = PieceSubscription>() => T;
  male: () => Promise<AsyncIterator<Boolean>>;
  shift: () => Promise<AsyncIterator<Direction>>;
  inclination: () => Promise<AsyncIterator<Direction>>;
}

export interface ConnectionNullablePromise
  extends Promise<Connection | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  index: () => Promise<Int>;
  piece: <T = PiecePromise>() => T;
  male: () => Promise<Boolean>;
  shift: () => Promise<Direction>;
  inclination: () => Promise<Direction>;
}

export interface Piece {
  id: ID_Output;
  index: Int;
  placed: Boolean;
}

export interface PiecePromise extends Promise<Piece>, Fragmentable {
  id: () => Promise<ID_Output>;
  index: () => Promise<Int>;
  placed: () => Promise<Boolean>;
  connections: <T = FragmentableArray<Connection>>(args?: {
    where?: ConnectionWhereInput;
    orderBy?: ConnectionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PieceSubscription
  extends Promise<AsyncIterator<Piece>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  index: () => Promise<AsyncIterator<Int>>;
  placed: () => Promise<AsyncIterator<Boolean>>;
  connections: <T = Promise<AsyncIterator<ConnectionSubscription>>>(args?: {
    where?: ConnectionWhereInput;
    orderBy?: ConnectionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PieceNullablePromise
  extends Promise<Piece | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  index: () => Promise<Int>;
  placed: () => Promise<Boolean>;
  connections: <T = FragmentableArray<Connection>>(args?: {
    where?: ConnectionWhereInput;
    orderBy?: ConnectionOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ConnectionConnection {
  pageInfo: PageInfo;
  edges: ConnectionEdge[];
}

export interface ConnectionConnectionPromise
  extends Promise<ConnectionConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ConnectionEdge>>() => T;
  aggregate: <T = AggregateConnectionPromise>() => T;
}

export interface ConnectionConnectionSubscription
  extends Promise<AsyncIterator<ConnectionConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ConnectionEdgeSubscription>>>() => T;
  aggregate: <T = AggregateConnectionSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ConnectionEdge {
  node: Connection;
  cursor: String;
}

export interface ConnectionEdgePromise
  extends Promise<ConnectionEdge>,
    Fragmentable {
  node: <T = ConnectionPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ConnectionEdgeSubscription
  extends Promise<AsyncIterator<ConnectionEdge>>,
    Fragmentable {
  node: <T = ConnectionSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateConnection {
  count: Int;
}

export interface AggregateConnectionPromise
  extends Promise<AggregateConnection>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateConnectionSubscription
  extends Promise<AsyncIterator<AggregateConnection>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PieceConnection {
  pageInfo: PageInfo;
  edges: PieceEdge[];
}

export interface PieceConnectionPromise
  extends Promise<PieceConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PieceEdge>>() => T;
  aggregate: <T = AggregatePiecePromise>() => T;
}

export interface PieceConnectionSubscription
  extends Promise<AsyncIterator<PieceConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PieceEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePieceSubscription>() => T;
}

export interface PieceEdge {
  node: Piece;
  cursor: String;
}

export interface PieceEdgePromise extends Promise<PieceEdge>, Fragmentable {
  node: <T = PiecePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PieceEdgeSubscription
  extends Promise<AsyncIterator<PieceEdge>>,
    Fragmentable {
  node: <T = PieceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePiece {
  count: Int;
}

export interface AggregatePiecePromise
  extends Promise<AggregatePiece>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePieceSubscription
  extends Promise<AsyncIterator<AggregatePiece>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ConnectionSubscriptionPayload {
  mutation: MutationType;
  node: Connection;
  updatedFields: String[];
  previousValues: ConnectionPreviousValues;
}

export interface ConnectionSubscriptionPayloadPromise
  extends Promise<ConnectionSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ConnectionPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ConnectionPreviousValuesPromise>() => T;
}

export interface ConnectionSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ConnectionSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ConnectionSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ConnectionPreviousValuesSubscription>() => T;
}

export interface ConnectionPreviousValues {
  id: ID_Output;
  index: Int;
  male: Boolean;
  shift: Direction;
  inclination: Direction;
}

export interface ConnectionPreviousValuesPromise
  extends Promise<ConnectionPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  index: () => Promise<Int>;
  male: () => Promise<Boolean>;
  shift: () => Promise<Direction>;
  inclination: () => Promise<Direction>;
}

export interface ConnectionPreviousValuesSubscription
  extends Promise<AsyncIterator<ConnectionPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  index: () => Promise<AsyncIterator<Int>>;
  male: () => Promise<AsyncIterator<Boolean>>;
  shift: () => Promise<AsyncIterator<Direction>>;
  inclination: () => Promise<AsyncIterator<Direction>>;
}

export interface PieceSubscriptionPayload {
  mutation: MutationType;
  node: Piece;
  updatedFields: String[];
  previousValues: PiecePreviousValues;
}

export interface PieceSubscriptionPayloadPromise
  extends Promise<PieceSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PiecePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PiecePreviousValuesPromise>() => T;
}

export interface PieceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PieceSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PieceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PiecePreviousValuesSubscription>() => T;
}

export interface PiecePreviousValues {
  id: ID_Output;
  index: Int;
  placed: Boolean;
}

export interface PiecePreviousValuesPromise
  extends Promise<PiecePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  index: () => Promise<Int>;
  placed: () => Promise<Boolean>;
}

export interface PiecePreviousValuesSubscription
  extends Promise<AsyncIterator<PiecePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  index: () => Promise<AsyncIterator<Int>>;
  placed: () => Promise<AsyncIterator<Boolean>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Piece",
    embedded: false
  },
  {
    name: "Connection",
    embedded: false
  },
  {
    name: "Direction",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
