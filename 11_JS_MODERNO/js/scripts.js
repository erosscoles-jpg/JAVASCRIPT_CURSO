// 1 - LET,CONST E VAR
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}

console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}

console.log(a);

function logName() {
  const name = "Pedro";
  console.log(name);
}

const name = "Matheus";

logName();

// ARROW FUNCTIONS
const sum = function(a,b){
    return a + b;
}

const arrowSum = (a,b) => a + b
console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name){
        return `HELLO ${name}`;
    }
    else{
        return "HELLO";
    }
};

console.log(greeting("Mateus"));
console.log(greeting());

const user = {
    name: "Theo",
    sayUserName(){
        setTimeout(function(){
            console.log(this);
            console.log(`Username: ${this.name}`);

        },1000)
    },
    sayUserNameArrow(){
        setTimeout(()=>{
            console.log(this);
            console.log(`Username: ${this.name}`);
        },2000)
    }
}

user.sayUserName()
user.sayUserNameArrow()

// 3 - FILTER
const arr = [1,2,,4,5,6]

const highNumbers = arr.filter((n) => {
    if (n >= 3){
        return n
    }
});

console.log(highNumbers)

const users = [
  { name: "Matheus", available: true },
  { name: "Pedro", available: false },
  { name: "Marcos", available: true },
  { name: "Josias", available: false },
];

const avaliableUsers = users.filter((user) => user.available)
console.log(avaliableUsers)

// 4 - MAP
const products = [
  { name: "Camisa", price: 10.99, category: "Roupa" },
  { name: "Chaleira elétrica", price: 150, category: "Eletro" },
  { name: "Fogão", price: 499, category: "Eletro" },
  { name: "Calça jeans", price: 49.99, category: "Roupa" },
];

products.map((products) => {
    if (products.category === "Roupa"){
        products.onSale = true
    }
})

console.log(products)

// 5 - TEMPLETE LITERALS

const userName = "Matheus";
const age = 30;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos!`);

// 6 - DESTRUCTURING

const fruits = ["maçã", "mamão", "laranja"]

const [f1,f2,f3] = fruits

console.log(f1,f3)

const productDetails = {
    name: "Mouse",
    price: 39.90,
    category: "Periferico",
    color: "Cinza"
}

const {name: productName,price,category,color} = productDetails

console.log(`O nome do produto é ${productName}, ele custa R$${price} e é da cor ${color}`)

// 7 - SPREAD OPERATOR

const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1,...a2]
console.log(a3)

const a4  = [0,...a3,7]
console.log(a4)

const carName = {name: "gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 1000,price:400}

const car = {...carName,...carBrand,...otherInfos}
console.log(car)

// 8 - CLASSES
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discout){
        return this.price * ((100-discout)/100)
    }
}

const shirt = new Product("Camisa gola V", 20);
console.log(shirt)
console.log(shirt.productWithDiscount(10))

// 9 - HERANÇA
class productWithAttributes extends Product{
    constructor(name,price,color){
        super(name,price)
        this.color =  color;
    }

    showColor(){
        console.log("As cores são")
        this.color.forEach((color) => {
            console.log(color)
        });
    }
}

const hat = new productWithAttributes("Chapeu",29.99,["preto", "Amarelo", "Verde"])

console.log(hat)
console.log(hat.name)






