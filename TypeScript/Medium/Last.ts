type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'd'
type tail2 = Last<arr2>; // expected to be 1

// type Last<T extends any[]> = [any, ...T][T['length']];
type Last<T> = T extends [...any, infer L] ? L : never;
