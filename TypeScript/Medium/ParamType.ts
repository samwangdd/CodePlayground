// 获取函数 param 参数
interface User {
  name: string;
  age: number;
}

type Fun = (user: User) => void;
type Param = MyParamType<Fun>; // Param = User

type MyParamType<T> = T extends (...args: infer P) => any ? P : T;
