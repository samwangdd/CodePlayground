// 指定部分属性 readonly
type MyReadonly2<T, P extends keyof T = keyof T> = { readonly [K in P]: T[K] } &
  { [K in Exclude<keyof T, P>]: T[K] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todoss: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todoss.title = 'Hello'; // Error: cannot reassign a readonly property
todoss.description = 'barFoo'; // Error: cannot reassign a readonly property
todoss.completed = true; // OK
