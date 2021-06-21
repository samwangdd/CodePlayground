type bar = KebabCase<'FooBarBaz'>;
type KebabCase<T extends string> = T extends `${infer L}${infer R}`
  ? R extends Uncapitalize<R> // 确定字符为小写
    ? `${Uncapitalize<L>}${KebabCase<R>}`
    : `${Uncapitalize<L>}-${KebabCase<R>}`
  : T;
