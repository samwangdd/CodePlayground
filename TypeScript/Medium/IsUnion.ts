type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

// type IsUnion<T extends any> = T extends keyof T ? true : false;
type IsUnion<T extends any, B = T> = T extends T
  ? B[] extends T[]
    ? false
    : true
  : never;

type F<E> = E extends E ? true : false;
