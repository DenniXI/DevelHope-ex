//Crea una funzione che prenda un array di numeri da 1 a 100 e se
//il numero è divisibile per 3 scriviamo fizz
//il numero è divisibile per 5 scriviamo buzz
//il numero è divisibile per 15 scriviamo fizz-buzz
//altrimenti scriviamo solo il numero

function arrayNum(array) {
    let numeri = []
    for (let i = 0; i <= 100; i++) {
        // numeri.push(i);
        if (i % 15 === 0) {
            numeri.push( i + " fizz-buzz")
        } else if (i % 5 === 0) {
            numeri.push(i + " buzz")
        } else if (i % 3 === 0) {
            numeri.push(i + " fizz")
       }   else(numeri.push(i))
    }
    console.log(numeri)
}

    arrayNum()


// let numeri = []
// function arrayNum(numeri) {
    
//     for (let i = 0; i <= 100; i++) {
//         // numeri.push(i);
//         if (i % 3 === 0) {
//             console.log( i + " fizz")
//         } else if (i % 5 === 0) {
//             console.log(i + " buzz")
//         } else if (i % 15 === 0) {
//             console.log(i + " fizz-buzz")
//        }   else(console.log(i))
    // }
    // console.log(numeri)
// }

//     arrayNum()