//crea una funzione che restituisca la somma dei numeri


// function myFunction (number){
//     const numbers = Array.from(number.toString(), Number);
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
    
//     return sum;
//   }
  
//   const result = myFunction(233);
//   console.log(result);

//crea una funzione che somma i numeri da 1 a 10

function sum(){
    let somma = 0;
    for (let i = 1; i <= 10; i++) {
        somma += i
    } return somma
}
const result = sum()


console.log(result)