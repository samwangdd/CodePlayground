type NodeA = {
  type: 'A';
  name: string;
  flag: number;
};

type NodeB = {
  type: 'B';
  id: number;
  flag: number;
};

type NodeC = {
  type: 'C';
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplaceKeys<
  Nodes,
  'name' | 'flag',
  { name: number; flag: string }
>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

// type ReplaceKeys<T, S, O> = {
//   [K in keyof T]: K extends S ? (K extends keyof O ? O[K] : never) : T[K];
// };

// REVIEW:
type ReplaceKeys<T, U, R> = T extends T
  ? {
      [K in keyof T]: K extends Extract<K, U> ? R[Extract<K, keyof R>] : T[K];
    }
  : never;
