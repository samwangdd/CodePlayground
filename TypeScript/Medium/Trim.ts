type trimed = Trim<'  Hello World  '>; // expected to be 'Hello World'

type WS = ' ' | '\t' | '\n';

type TrimLeft<T extends string> = T extends `${WS}${infer R}` ? TrimLeft<R> : T;

type TrimRight<T extends string> = T extends `${infer R}${WS}`
  ? TrimRight<R>
  : T;

type Trim<T extends string> = TrimLeft<TrimRight<T>>;
