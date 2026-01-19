// Class ek blueprint / template hoti hai jiske through hum objects create karte hain.
// Class me properties (data) aur methods (functions) define hote hain, jisse code organized aur reusable banta hai.

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  get_area() {
    return this.width * this.height;
  }
  print_description() {
    console.log(
      `I am rectangle of ${this.width} x ${this.height} result is ${this.width * this.height} and i am ${this.color} `,
    );
  }
}

let my_rectangle1 = new Rectangle(5, 5, "red");
let my_rectangle2 = new Rectangle(10, 5, "blue");
console.log(my_rectangle1.get_area()); // 25
console.log(my_rectangle2.get_area()); // 50
my_rectangle2.print_description(); // I am rectangle of 10 x 5 result is 50 and i am blue
