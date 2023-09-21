class User {
    name = "";
    email = "";
    phone = "";
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

let array = []

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (response.ok) {
            let data = await response.json();
            console.log(data)


            data.forEach((el) => {
                const user = new User(el.name, el.email, el.phone)
                array = [...array, user]
            })

            console.log(array)

            const wrapper = document.querySelector(".wrapper");

            array.forEach((item) => {
                const container = document.createElement("div");
                const h2 = document.createElement("h2");
                const pEmail = document.createElement("p");
                const pPhone = document.createElement("p");

                container.classList.add("card")

                h2.textContent = item.name;
                pEmail.textContent = item.email;
                pPhone.textContent = item.phone;
                container.append(h2, pEmail, pPhone);
                wrapper.append(container);
            })
        } else {
            console.error(response.status)
        }

    } catch (err) {
        console.error(err)
    }

}


fetchData()


