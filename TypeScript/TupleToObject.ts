const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly any[]> = { [P in T[number]]: P };

const result: TupleToObject<typeof tuple> = {
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y',
};
