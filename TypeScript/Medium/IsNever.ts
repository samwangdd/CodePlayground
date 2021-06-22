type IsNever<T> = T[] extends never[] ? true : false;

type C = IsNever<never>; // expected to be true
type D = IsNever<[]>; // expected to be false
type E = IsNever<number>; // expected to be false
