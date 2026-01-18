// Static keyword ka use class ke aise methods ya properties banane ke liye hota hai jo class ke sath associated hote hain.
// Ye members object ke through access nahi hote, sirf class name se access kiye jate hain.

/* ex..1 */

class Fun {
  constructor(name) {
    this.name = name;
  }

  static calling(name) {
    console.log(`we calling mr ${name}`);
  }
}

let val = new Fun("shahrukh");
fun.calling("shahrukh"); // we calling mr shahrukh
// val.calling(); // TypeError: val.calling is not a function
// object static ko access nhi kar sakta class he kar sakta hey.

/* ex..2 */

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//   }

//   static equal(a, b) {
//     return a.width * a.height == b.width * b.height;
//   }

//   static is_equal_dimension(width, height) {
//     return width == height;
//   }
// }

// let val1 = new Square(8);
// let val2 = new Square(8);
// console.log(square.equal(val1, val2));
// console.log(square.is_equal_dimension(7, 6));
// console.log(val1);