// Polymorphism ka matlab hota hai same method name ka different behavior hona.
// JavaScript me ye different objects ke liye same method ka alag output dene ki capability deta hai.

class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  hello() {
    console.log(`hello i am user my name is ${this._name}`);
  }
}

class Admin extends User {
  constructor(name, age, id) {
    super(name, age);
    this._id = id;
  }
  hello() {
    super.hello();
    // console.log(`hello this is admin ${this._name}`);
  }
}

let user1 = new User("shahurkh", 20);
let admin1 = new Admin("salman", 30, 1002);
user1.hello(); // hello i am user my name is shahrukh
admin1.hello(); // hello i am user my name is salman
