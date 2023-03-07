// class MyClass {
//   *createIterator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }

// let instance = new MyClass();
// let iterator = instance.createIterator();

// for (const i of iterator) {
//   console.log(i);
// }

class Collection {
  constructor() {
    this.items = [];
  }

  *[Symbol.iterator]() {
    yield* this.items.values();
  }
}

var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (const x of collection) {
  console.log(x);
}
