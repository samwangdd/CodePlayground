type MyOmit<T, P extends keyof T> = { [K in Exclude<keyof T, P>]: T[K] };

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreviews = MyOmit<Todo, 'description' | 'title'>;

const todos: TodoPreviews = {
  completed: false,
};
