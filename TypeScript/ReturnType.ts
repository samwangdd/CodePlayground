// 获取函数返回值类型
type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : T;

// demo 1
const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // 应推导出 "1 | 2"

// demo 2
interface User {
  name: string;
  age: number;
}

type Func = () => User;

type Test = MyReturnType<Func>; // Test = User
