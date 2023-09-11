const number = 15;

let myPromise = new Promise((resolve, reject) => {
    if(number > 10){
        resolve(console.log("accepted"))
    } else reject(console.error("rejected"))
})