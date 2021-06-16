type Fn = (a: number, b: string) => number;

type Results = AppendArgument<Fn, boolean>;
// 期望是 (a: number, b: string, x: boolean) => number
// TODO: 实际获得 (args_0: number, args_1: string, args_2: boolean) => number
type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R
  ? (...args: [...P, A]) => R
  : never;
