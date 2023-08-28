class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(object){
    return new Person(object.firstName, object.lastName)
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const dennis = {
  firstName: "Dennis",
  lastName: "Glorioso",
};
const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);

