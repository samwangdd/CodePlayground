// https://github.com/type-challenges/type-challenges/issues/614
type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

// FIXME: 没看懂
// union 范型怎么表示？
type PermuteItem<
  Union,
  Item,
  Rest = Exclude<Union, Item>
> = IsNever<Rest> extends true ? [Item] : [Item, ...Permutation<Rest>];

type Permutation<Union, Item = Union> = Item extends Item
  ? PermuteItem<Union, Item>
  : never;
