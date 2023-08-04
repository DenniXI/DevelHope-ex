function sumUntil(maxValue) {
  let vuoto = 0
  for (let i = 1; i <= maxValue; i++) {    
    vuoto += i
  }
  return vuoto
}

console.log(sumUntil(5));