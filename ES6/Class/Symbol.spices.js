class MyClass {

  static get [Symbol.species]() {
    return this;
  }

  constructor(value) {
    this.value = value
  }

  clone() {
    return new this.constructor[Symbol.species](this.value)
  }
}

class MyDerivedClass1 extends MyClass {
  // empty
}

class MyDerivedClass2 extends MyClass {
  static get [Symbol.species]() {
    return MyClass;
  }
}

let instance1 = new MyDerivedClass1("foo");
let clone1 = instance1.clone();
let instance2 = new MyDerivedClass2("bar");
let clone2 = instance2.clone();

console.log(clone1 instanceof MyClass); // true
console.log(clone1 instanceof MyDerivedClass1); // true
console.log(clone2 instanceof MyClass); // true
console.log(clone2 instanceof MyDerivedClass2); // false