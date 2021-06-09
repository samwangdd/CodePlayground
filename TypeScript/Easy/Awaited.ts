// 获得 Promise 参数的类型
type Awaited<T extends Promise<any>> = T extends Promise<infer R> ? R : never;

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type ResultX = Awaited<X>; // ResultX type equals string
type ResultY = Awaited<Y>; // Res
