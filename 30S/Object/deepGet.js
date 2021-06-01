const deepGet = (obj, keys) => keys.reduce((acc, cur) => (acc && acc[cur] ? acc[cur] : null), obj);

let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c'],
    },
  },
};

console.log('1 :>> ', deepGet(data, ['foo', 'foz', index]));
console.log('2 :>> ', deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']));
