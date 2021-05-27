type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

interface Todos {
  title: string;
  description: string;
}

const todos: MyReadonly<Todos> = {
  title: 'Hey',
  description: 'foobar',
};

// todos.title = 'hello';
// todos.description = 'world';
