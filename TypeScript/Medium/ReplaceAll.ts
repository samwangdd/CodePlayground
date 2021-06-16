// type ReplaceAll<S extends string, From extends string, To extends string> =
//   S extends `${infer L}${From}${infer R}`
//     ? ReplaceAll<`${L}${To}${R}`, From, To>
//     : S;

type ReplaceAll<S extends string, From extends string, To extends string> =
  S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${ReplaceAll<`${R}`, From, To>}`
    : S;

type replace = ReplaceAll<'abcabc', 'a', 'd'>;
type replaceAll = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
