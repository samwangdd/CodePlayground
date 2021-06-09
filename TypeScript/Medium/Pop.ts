type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Shift<arr2>; // expected to be [3, 2]
type re3 = Unshift<arr2, 4>; // expected to be [4, 3, 2, 1]
type re4 = Push<arr2, 0>; // expected to be [3, 2, 1, 0]

// 出堆
type Pop<T> = T extends [...infer R, any] ? R : never;
// 去掉第一个元素
type Shift<T> = T extends [any, ...infer L] ? L : never;
// 首部插入元素
type Unshift<T extends any[], V> = V extends any[] ? [...V, ...T] : [V, ...T];
// 尾部插入元素
type Push<T extends any[], V> = V extends any[] ? [...T, ...V] : [...T, V];
