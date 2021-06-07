type Arr = ['1', '2', '3'];

const a: TupleToUnion<Arr> = '1'; // expected to be '1' | '2' | '3'

// T[number] 产生联合类型
type TupleToUnion<T extends any[]> = T[number];
