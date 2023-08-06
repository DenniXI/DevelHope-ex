function printName() {
    let HelloName = "Hello Jhon"
    function inner() {
        return HelloName
    }
    return inner
    
    
}
    setTimeout(() => {
    console.log(printName()())        
        }, 1000);
