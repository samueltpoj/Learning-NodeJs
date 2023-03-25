class Person {
  constructor(name) {
    this.name = name;
  }
  SayMyName() {
    return `My name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};
