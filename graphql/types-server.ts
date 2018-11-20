// ====================================================
// Types
// ====================================================

export interface Query {
  readonly entry: Entry | null;

  readonly entrySnapshot: EntrySnapshot | null;

  readonly entrySnapshots: ReadonlyArray<EntrySnapshot | null> | null;

  readonly userProfiles: ReadonlyArray<UserProfile | null> | null;
}

export interface Entry {
  readonly id: string | null;

  readonly contentType: ContentType | null;
}

export interface ContentType {
  readonly id: string | null;
}

export interface EntrySnapshot {
  readonly entryId: string | null;
}

export interface UserProfile {
  readonly id: string | null;

  readonly email: string | null;
}

// ====================================================
// Arguments
// ====================================================

export interface EntryQueryArgs {
  id: string;
}
export interface EntrySnapshotQueryArgs {
  entryId: string;
}

import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    entry?: EntryResolver<Entry | null, TypeParent, Context>;

    entrySnapshot?: EntrySnapshotResolver<
      EntrySnapshot | null,
      TypeParent,
      Context
    >;

    entrySnapshots?: EntrySnapshotsResolver<
      ReadonlyArray<EntrySnapshot | null> | null,
      TypeParent,
      Context
    >;

    userProfiles?: UserProfilesResolver<
      ReadonlyArray<UserProfile | null> | null,
      TypeParent,
      Context
    >;
  }

  export type EntryResolver<
    R = Entry | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, EntryArgs>;
  export interface EntryArgs {
    id: string;
  }

  export type EntrySnapshotResolver<
    R = EntrySnapshot | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, EntrySnapshotArgs>;
  export interface EntrySnapshotArgs {
    entryId: string;
  }

  export type EntrySnapshotsResolver<
    R = ReadonlyArray<EntrySnapshot | null> | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UserProfilesResolver<
    R = ReadonlyArray<UserProfile | null> | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace EntryResolvers {
  export interface Resolvers<Context = {}, TypeParent = Entry> {
    id?: IdResolver<string | null, TypeParent, Context>;

    contentType?: ContentTypeResolver<ContentType | null, TypeParent, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = Entry,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ContentTypeResolver<
    R = ContentType | null,
    Parent = Entry,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ContentTypeResolvers {
  export interface Resolvers<Context = {}, TypeParent = ContentType> {
    id?: IdResolver<string | null, TypeParent, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = ContentType,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace EntrySnapshotResolvers {
  export interface Resolvers<Context = {}, TypeParent = EntrySnapshot> {
    entryId?: EntryIdResolver<string | null, TypeParent, Context>;
  }

  export type EntryIdResolver<
    R = string | null,
    Parent = EntrySnapshot,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace UserProfileResolvers {
  export interface Resolvers<Context = {}, TypeParent = UserProfile> {
    id?: IdResolver<string | null, TypeParent, Context>;

    email?: EmailResolver<string | null, TypeParent, Context>;
  }

  export type IdResolver<
    R = string | null,
    Parent = UserProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string | null,
    Parent = UserProfile,
    Context = {}
  > = Resolver<R, Parent, Context>;
}
