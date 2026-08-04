// SELEÇÃO DE ELEMNETOS
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span");




// FUNÇÕES
const createTable = (number,multiplicatorNumeber) => {
    multiplicationTable.innerHTML= "";

    for(let i = 1; i <= multiplicatorNumeber; i++){
        const result = number * i;

        const template = `
            <div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }
    multiplicationTitle.innerText = number;
}

// EVENTOS
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumeber = +numberInput.value;
    const multiplicatorNumeber = +multiplicationInput.value;

    if (!multiplicatorNumeber || !multiplicationNumeber) return;

    createTable(multiplicationNumeber,multiplicatorNumeber);

})


