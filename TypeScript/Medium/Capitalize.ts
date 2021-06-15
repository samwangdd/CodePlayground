// 实现首字母大写
type capitalized = MyCapitalize<'hello world'>; // expected to be 'Hello world'

type MyCapitalize<T extends string> = T extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : T;
