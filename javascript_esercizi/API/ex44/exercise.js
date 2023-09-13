const user = {
  id: 1,
  name: "John",
  age: 25,
};

//Funzione per salvare l'oggetto user
function save(user) {
  try{

    //Convertimento dell'oggetto user in una stringa
    const userJson = JSON.stringify(user);

    //Salva la stringa Json nel localStorage con con la chiave "user"
    localStorage.setItem("user", userJson);
    console.log('User object saved to localStorage.');
  } catch {
    (error) => console.error(error)
  }
}

save(user)