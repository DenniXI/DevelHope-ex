function repeatHello(callback){
   let int = setInterval(callback,1000);
   setTimeout(() => clearInterval(int), 1000);
}

const funcCallback = () => console.log("Hello")

repeatHello(funcCallback)