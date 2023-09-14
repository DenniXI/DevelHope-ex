const user = {
  id: 1,
  name: "John",
  age: 25,
};



function getData() {
  try{

    //Convertimento dell'oggetto user in una stringa
    const userJson = localStorage.getItem("user");
    console.log(userJson)
    //Salva la stringa Json nel localStorage con con la chiave "user"
    
    
  } catch {
    (error) => console.error(error)
  }
}
getData()