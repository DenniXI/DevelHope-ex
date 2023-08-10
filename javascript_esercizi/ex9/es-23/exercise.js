const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const keys = Object.keys(person)
for (const i of keys) {
  console.log(i +": " + person[i])
}

// console.log(Object.keys(person))
// console.log(Object.values(person))

// Print values of person using Object.keys