// for-bar-baz -> forBarBaz
type foo = CamelCase2<'for-bar-baz'>;
type CamelCase1<T extends string> = T extends `${infer L}-${infer R}`
  ? `${L}${CamelCase1<Capitalize<R>>}`
  : T;

type CamelCase2<S> = S extends `${infer L}-${infer R}`
  ? R extends Capitalize<R> // 确定首字母为大写
    ? `${L}-${CamelCase2<R>}`
    : `${L}${CamelCase2<Capitalize<R>>}` // 先转为大写，然后分隔
  : S;
