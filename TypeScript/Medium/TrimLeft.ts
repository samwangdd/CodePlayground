// 去除字符串左侧空格
type trimed = TrimLeft<'  Hello World  '>; // expected to be 'Hello World  '

type TrimLeft<T extends string> = T extends `${' ' | '\n' | '\t'}${infer R}`
  ? TrimLeft<R>
  : T;
