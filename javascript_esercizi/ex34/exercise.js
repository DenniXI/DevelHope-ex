
// function printAsyncName(callback, name){
//     name = "Mario";
//     setTimeout(function() {
//         callback();
//     },1000)
//     setTimeout(function(){
//         console.log(name)
//     },2000)
// }

// function printHello(){
//     console.log("Hello")
// }

// printAsyncName(printHello)

function printAsyncName(callback, name){
    setTimeout(callback, 1000)
    let interval = setInterval(() => console.log(name),2000);
    setTimeout(() => clearInterval (interval), 2000)
}

const printHello = () => console.log("Hello")


printAsyncName(printHello, "Mario")