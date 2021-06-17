type s = 'honmery';
type len = LengthOfString<s>;
// type Length<S extends string> = S['length'];

type StringToArray<S extends string> = S extends `${infer C}${infer R}`
  ? [C, ...StringToArray<R>]
  : [];
type LengthOfString<S extends string> = StringToArray<S>['length'];
