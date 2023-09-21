let body = document.documentElement.children[1];

console.log(body)
//Move downward in DOM

let ul = body.children[1];

console.log("questo è il secondo figlio di body: " + ul)
//Move upward in DOM

let html = body.parentElement;

console.log("questo è l'elemento genitore di body: " + html)
//Move traversal (same level of nidification)

let head = body.previousElementSibling;

console.log("questo è l'elemento precedente a body ma sullo stesso livello di nidificazione" + head)