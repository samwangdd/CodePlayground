type Test2 = -100;
type Result2 = Absolute<Test2>; // expected to be "100"

type Absolute<A extends string | number | bigint> = `${A}` extends `-${infer R}`
  ? R
  : `${A}`;
