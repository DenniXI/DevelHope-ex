const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon"
// Entrambi puntano allo stesso oggetto quindi cambiando uno cambia anche l'altro.

console.log(person1);
console.log(person2);
