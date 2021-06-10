interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type MyDog = LookUp<Cat | Dog, 'dog'>; // expected to be `Dog`

type GetType<U> = U extends { type: infer R } ? R : never;
// type LookUp<T, P> = {P extends T[K in keyof T]};
type LookUp<T, P extends GetType<T>> = T extends { type: P } ? T : never;
