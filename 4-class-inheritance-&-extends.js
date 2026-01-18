// Inheritance ek process hai jisme ek class dusri class ki properties aur methods ko inherit karti hai.
// Isse code reuse hota hai, duplication kam hoti hai aur program maintain karna easy ho jata hai.

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  name() {
    console.log(`hello my name is ${this._name}`);
  }
  age() {
    console.log(`my age is ${this._age}`);
  }
}

let user1 = new person("shahrukh");
user1.name();

class Admin extends Person {
  constructor(name, age, id) {
    super(name, age);
    this._id = id;
  }

  hiadmin() {
    console.log(`hi i am admin my id is ${this._id}`);
  }
}

let admin1 = new Admin("salman", 20, 2220);
admin1.hiadmin();
admin1.name();
admin1.age();
