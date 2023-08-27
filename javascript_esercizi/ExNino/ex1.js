// Dato un messaggio, utilizza un loop forof per determinare quante volte appare una lettera specifica (ad esempio, 'a') nel messaggio.

// const messaggio = "Questo è un esempio di messaggio contenente lettere.";
// const letteraDaContare = 'e';
// let conteggio = 0;

// for (const carattere of messaggio){
//     if(letteraDaContare === carattere){
//         conteggio ++;
//     }
    
// }

// console.log(conteggio)

// Dato un array di numeri, utilizza un loop for...of per calcolare la somma di tutti gli elementi.

// const numeri = [10, 5, 8, 3, 6];
// let somma = 0;

// for (const i of numeri) {
//     somma += i
// console.log(somma)
// }

const numeri = [2,3,5,8]

for (let i = 0; i < numeri.length; i++){
    if(i % numeri.length[i] == 0){
        console.log("questo è un numero pari")
    } else (console.log("questo numero è dispari"))
}