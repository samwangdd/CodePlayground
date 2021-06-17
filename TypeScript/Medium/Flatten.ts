type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : T;
