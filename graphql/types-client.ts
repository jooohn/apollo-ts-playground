// ====================================================
// Documents
// ====================================================

export namespace GetEntry {
  export type Variables = {
    readonly entryId: string;
  };

  export type Query = {
    readonly __typename?: "Query";

    readonly entry: Entry | null;
  };

  export type Entry = {
    readonly __typename?: "Entry";

    readonly id: string | null;
  };
}
