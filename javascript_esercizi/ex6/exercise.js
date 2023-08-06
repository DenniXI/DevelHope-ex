function printName() {
    let HelloName = "Hello Jhon"
    function inner() {
        return HelloName
    }
    return inner
}

console.log(printName()())