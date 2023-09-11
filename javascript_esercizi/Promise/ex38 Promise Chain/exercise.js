const isLogged = true;

function promiseOne(){
    return new Promise((resolve, reject) => {
        if(isLogged){
            resolve(Math.random())
        } else reject("error");
    })
}

function promiseTwo(numRand) {
    return new Promise ((resolve, reject) => {
        if(numRand > 0.5){
            resolve(`{name: "John", age: 24}`)
        } else reject("error number");
    })
}

promiseOne()
.then((random) => {
    console.log(random)
    return promiseTwo(random)
})
.then((result) => console.log(result))
.catch((error) => console.error(error))