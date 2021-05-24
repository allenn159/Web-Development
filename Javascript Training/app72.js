// This is the parent or super class
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}

// use the extends keyword to extend the functionality with other classes.
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    // the super keyword will call from the parent class
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWW!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOF";
  }
  // this will call the eat in the Dog class instead of the Pet class because it comes first.
  eat() {
    return `${this.name} scarfs his food`;
  }
}
