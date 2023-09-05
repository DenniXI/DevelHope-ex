class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    const developer = JSON.parse(json);
    return new Person(developer.id, developer.firstName, developer.lastName, developer.age)
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);