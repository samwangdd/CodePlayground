type Tumple = 'a' | 'b' | 'c';

type Arr2 = myExclude<Tumple, 'a' | 'b'>;

// type myExclude<T, P extends keyof T> = [];
type myExclude<T, P> = T extends P ? never : T;
