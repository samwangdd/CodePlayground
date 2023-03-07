// class Rectangle {
//   constructor(length, width) {
//     console.log(new.target === Rectangle);
//     this.length = length;
//     this.width = width;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//   }
// }

// // new.target is Rectangle
// var obj1 = new Rectangle(3, 4); // Outputs true
// // new.target is Square
// var obj2 = new Square(3); // Outputs false

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('This class cannot be instantiated directly.');
    }
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
}

var x = new Shape(); // Throws an error
var y = new Rectangle(3, 4); // OK
console.log(y instanceof Shape); // true
