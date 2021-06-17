type Test1 = { id: '1' };
type Result1 = AppendToObject<Test1, 'value', 4>; // expected to be { id: '1', value: 4 }

type AppendToObject<T, K extends string | number | symbol, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};
