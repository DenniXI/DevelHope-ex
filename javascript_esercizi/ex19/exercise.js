class Person {
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set Nome(newValName) {
    if(newValName == Number){
      this.firstName = "";
    } else {
      this.firstName = newValName;
    }
  }

  // get Nome(){
  //   return this.firstName;
  // }

  set Cognome(newValSurname) {
    if(newValSurname == Number){
      this.lastName = "";
    } else {
      this.lastName = newValSurname;
    }
  }
  // get Cognome(){
  //   return this.lastName
  // }

  set Età(newVal) {
    if(newVal < 1){
      this.age = 1;
    } else if (newVal > 110){
      this.age = 110;
    } else {
      this.age = newVal;
    }
  }

  // get Età(){
  //   return this.age;
  // }

  get fullName(){
    return this.firstName + " " + this.lastName + " " + this.age;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
