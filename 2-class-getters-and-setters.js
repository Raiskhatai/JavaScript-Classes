// Getter aur Setter special methods hote hain jo object ke data ko direct access ke bina read aur modify karne ka tareeqa dete hain.
// Getter value ko safely return karta hai aur Setter value set karte time rules ya validation laga sakta hai

// class Person {
//   constructor(name, score) {
//     this._name = name;
//     this.score = score;
//   }
//   //   value bahar se "set" karne ke liye "set" use kiya jata hey or "get" karne karne call karne bina () ke "get" use hoga.
//   // get keyword value get karega bina () use kiye.
//   get name() {
//     return `${this._name} is a name`;
//   }
//   //   set keyword value set karega property mey global mey with ().
//   set name(x) {
//     this._name = x;
//   }
// }

// let val = new Person("shahrukh");
// console.log(val);
// val.name = "salman";
// console.log(val);
// console.log(val.name);

/* example 2 */
class Square {
  constructor(_width) {
    // _width object ke width and parameter ki width diffrence karne ke liye _ lagaya hey.
    this.width = _width;
    this.height = _width;
  }
  get area() {
    return this.width * this.height;
  }
  set area(x) {
    // parameter mey area hey kyu area set hey to uske call karne ke liye () ki jararuat nhi to wah parameter mey call ho rha or value return aa rhi

    this.width = Math.sqrt(x); // wahi value ka sqaure root nikal kar width or height mey laga diye.
    this.height = this.width;
  }
}

let val = new Square(25);
console.log(val); // Square { width: 25, height: 25 }
console.log(val.area); // 625   //get use hua
val.area = 25; // yaha set use hua  // area ke parameter mey jo x hey usme 25 set ho gaya
console.log(val.height); // 5       // yeh constructer ke andar ki value set ho gyi hey.
console.log(val.width); // 5    // yeh constructer ke andar ki value set ho gyi hey.
console.log(val.area); // 25
