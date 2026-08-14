// 1 - INSTALÇÃO
console.log(axios);

// 2 - PRIMEIRO REQUEST
const getData = async() => {
    try{
        const response = await postsFetch.get(
            "/users",
            // 4 - DEFININDO HEADERS
            {
                headers: {
                    "Content-type": "application/json",
                    custom: "header",
                },
            }

        );
        console.log(response);
        return response.data
    }
    catch (error){
        console.log(error)
    }
}

getData();

// 3 - EXIBIR DADOS NA TELA

const container = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();

    data.forEach((user) => {
        
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");
        const emailElement = document.createElement("p")

        nameElement.textContent = user.name;
        emailElement.textContent = user.email;
        div.appendChild(nameElement);
        div.appendChild(emailElement)

        container.appendChild(div);
    });
};

printData();

// 5 - POST
const form = document.querySelector("#post-form") 
const titleInput = document.querySelector("#title") 
const bodyInput = document.querySelector("#body") 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("/posts", {
        title: titleInput.value,
        body:bodyInput.value,
        userId: 1
    })
});


// 8 - 












