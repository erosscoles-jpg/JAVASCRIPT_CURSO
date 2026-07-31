// 1 -MOVENDO-SE PELO DOM
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - SELECIONANDO POR TAGS
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// 3 - SELECIONANDO POR ID
const title = document.getElementById("title");

console.log(title)

// 4 - SELECIONANDO POR CLASSE
const products = document.getElementsByClassName("product");
console.log(products)

// 5 - ELEMENTOS POR CSS
const productsQuery = document.querySelectorAll(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// 6 - InsertBefore
const p = document.createElement("p");
const header = title.parentElement;

header.insertBefore(p, title)

// 7 - appendedChild
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
navLinks.appendChild(li)

// 8 - replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Meu novo titulo"

header.replaceChild(h2,title)

// 9 - createTexNode
const myText = document.createTextNode("Agora vamos colocar mais um titulo")
console.log(myText)

const h3 = document.createElement("h3")
h3.appendChild(myText)
console.log(h3)

mainContainer.appendChild(h3)

// 10 - TRABALHANDO ATRIBUTO
const firstLink = navLinks.querySelector("a")
firstLink.setAttribute("href", "http://www.google.com")

console.log(firstLink.getAttribute("href"))
firstLink.setAttribute("target", "_blank")

// 11 - ALTURA E LARGURA
const footer = document.querySelector("footer")
console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

console.log(footer.clientHeight)
console.log(footer.clientWidth)

// 12 - POSIÇÃO DO ELEMENTO
const product1 = products[0];

console.log(product1.getBoundingClientRect());

// 13 - ESTILOS COM JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "2px";

// 14 - HTMLCollection
for (const li of listItens) {
    li.style.backgroundColor = "red";
}







