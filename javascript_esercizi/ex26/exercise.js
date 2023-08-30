// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum(...numeri) {
    let risultato = 0;
    for(const num of numeri){
        risultato += num;
    }
    return risultato;
}

console.log(sum(1, 2, 3, 4, 5));