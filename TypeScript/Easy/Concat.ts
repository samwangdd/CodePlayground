type Concat<T extends any[], P extends any[]> = [...T, ...P];
type Result = Concat<[1], [2]>; // expected to be [1, 2]
