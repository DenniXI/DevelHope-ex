function repeatHello(callback){
    let int = setInterval(callback,1000);
    setTimeout(() => clearInterval(int), 5000);
 }
 
 const funcCallback = () => console.log("Hello")
 
 repeatHello(funcCallback)
