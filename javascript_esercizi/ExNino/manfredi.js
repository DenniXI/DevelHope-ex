//crea una funzione che restituisca la somma dei numeri


// function myFunction (number){
//     const numbers = Array.from(number.toString(), Number);
//     const sum = numbers.reduce((acc, num) => acc + num, 0);

//     return sum;
//   }

//   const result = myFunction(233);
//   console.log(result);

//crea una funzione che somma i numeri da 1 a 10

// function sum(){
//     let somma = 0;
//     for (let i = 1; i <= 10; i++) {
//         somma += i
//     } return somma
// }
// const result = sum()


// console.log(result)

//stampa i numeri da 1 a 10

// let num = 10
// for(i = 0; i <= 10; i++){
//     console.log(i)
// }

//Calcola la somma dei primi 10 numeri interi

// let somma = 0
// for(i = 0; i <=10; i++){
//     somma += i
//     console.log(somma)
// }

//Stampa i numeri pari da 1 a 20

// for (let i = 0; i <= 20; i++) {
//     if(i%2 === 0){
//         console.log(i)
//     }
// }

//oppure si puo semplificare cosi:

// for(let i = 2; i <= 20; i+= 2){
//     console.log(i)
// }

//conta quante volte appare una lettera in una stringa
// const testo = 'Questo è un esempio di testo';
// const letteraDaContare = 'e';
// let conteggio = 0;

// for(i = 0; i < testo.length; i++){
//     if(testo[i] === letteraDaContare){
//         conteggio++;
//     }

// }console.log(conteggio)

//stampa tutti gli elementi di un array
// const frutta = ['Mela', 'Banana', 'Ciliegia', 'Arancia'];
// let fruttaCostosa = frutta.filter((el) => el === "Ciliegia")
// console.log(fruttaCostosa)

//Filtra i numeri maggiori di 5
// const numeri = [2, 7, 4, 9, 1, 6, 8, 3, 5];
// let moreThanFive = numeri.filter((el) => el > 5)
// console.log(moreThanFive)

// Utilizza il metodo .filter() per creare un nuovo array contenente solo gli studenti che hanno superato l'esame (punteggio >= 60).
// const studenti = [
//     { nome: 'Alice', punteggio: 85 },
//     { nome: 'Bob', punteggio: 43 },
//     { nome: 'Charlie', punteggio: 72 },
//     { nome: 'David', punteggio: 59 },
//     { nome: 'Eve', punteggio: 90 },
// ];

// let studentiPromossi = studenti.filter((el) => el.punteggio >= 60)
// console.log(studentiPromossi)

// let nomiPromossi = studentiPromossi.map((el) => el.nome)
// console.log(nomiPromossi)



// Somma di tutti gli elementi
// const numeri = [1, 2, 3, 4, 5];

// let numeriSommati = numeri.reduce((acc, curr) => acc + curr)
// console.log(numeriSommati)

// //Concatena stringhe con il reduce
// const parole = ['Ciao', 'come', 'stai', '?'];

// const frase = parole.reduce((acc, curr) => acc + " " + curr)
// console.log(frase)

// Trovare il valore massimo o minimo: Puoi utilizzare .reduce() per trovare il valore massimo o minimo in un array.

// const numeri = [12, 45, 7, 23, 56, 89];

// const massimo = numeri.reduce(function(acc, numero) {
//     return Math.max(acc, numero);
// }, -Infinity);

// const massimoN = numeri.reduce((acc, curr) => Math.max(acc,curr))

// const minimo = numeri.reduce(function(acc, numero) {
//     return Math.min(acc, numero);
// }, Infinity)

// console.log(massimoN)
// console.log(minimo)

//Crea una copia di un oggetto e cambiane il nome solo nella copia

// const personaOriginale = {
//     nome: 'Alice',
//     età: 30,
//     professione: 'Ingegnere'
// };

// const copiaPersona = Object.assign({},personaOriginale);

// copiaPersona.nome = "Paolo"


// console.log(copiaPersona.nome)

// const obj = {
//     nome: 'Alice',
//     età: 30,
//     professione: 'Ingegnere'
// };

// function changeValue(obj, key, val){
//     let copy = Object.assign({}, obj);
//     copy[key] = val;
//     return copy
// }

// let output = changeValue(obj, "nome", "paolo")
// console.log(obj.nome)
// console.log(output.nome)

//Esercitazioni con getter e setter

// class Person {
//     constructor(name, age, genre, hobby) {
//         this.name = name;
//         this.age = age;
//         this.genre = genre;
//         this.hobby = hobby;
//     }
// }

// class Teacher extends Person {
//     #subject = "";
//     constructor(name, age, genre, hobby, subject) {
//         super(name, age, genre, hobby);
//         this.#subject = subject;
//     }

//     set subject(newVal) {
//         this.#subject = newVal;
//     }

//     get subject() {
//         return this.#subject;
//     }


// }

// let Nino = new Teacher("Nino", "25", "Maschio", ["Netflix", "Cook"], "Programming")

// console.log(Nino.subject)

//Ottieni pokemon

// async function getPokemon(name) {
//     const fetchpokemon = await fetch(`https://pokeapi.co/v2/pokemon/${name}`)
//     const response = await fetchpokemon.json()
// }

// async function tenPokemon(){
//     const fetchTenPokemon = await fetch(`https://pokeapi.co/v2/pokemon/?limit=10&`)
// }
