type Diff<O, O1> = {
  [P in Exclude<keyof O1, keyof O>]: O1[P];
};

type O = { a: 1 };
type O1 = { a: 2; b: 3 };
type diff = Diff<O, O1>;
