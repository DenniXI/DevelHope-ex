
const numbers = [134, 149, 194,178, 189,  152, 167, 200]
//map
const mapped = numbers.map((el) => el + 10) //riporta un nuovo array 
// console.log(mapped)
// console.log(numbers)

//filter
const filtred = numbers.filter((el) => {
   return el > 150
})
// console.log(filtred)

//sort
const simpleNumbers = [10,2,33,4,5,68,7,8]
const unsortedStrings = ["banana", "grape", "cherry", "apple", "date"]
let sorted = unsortedStrings.sort()
// console.log(sorted)
//reduce
const reduced = simpleNumbers.reduce((acc, curr) => acc + curr, 0)
// console.log(reduced)
//forEach

simpleNumbers.forEach((el) => console.log(el))
//push - pop - shift - unshift - splice - join - slice - includes


