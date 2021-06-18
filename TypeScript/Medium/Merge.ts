type t1 = {
  name: string;
};

type t2 = {
  age: number;
};

type res = Merge<t1, t2>;

type Merge<T, P> = {
  [K in keyof T | keyof P]: K extends keyof P
    ? P[K]
    : K extends keyof T
    ? T[K]
    : never;
};
