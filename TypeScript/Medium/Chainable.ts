// https://github.com/type-challenges/type-challenges/blob/master/questions/12-medium-chainable-options/README.zh-CN.md
// 可串联构造器
declare const config: Chainable;

const results = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get();

// 期望 result 的类型是：
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

type Chainable<T = {}> = {
  // option();
  // option(): Chainable<T>;
  // option<K extends string, V extends unknown>(): Chainable<T>;
  option<K extends string, V extends unknown>(key: K, value: V): Chainable<T & { [key in K]: V }>;
  get(): T;
};
