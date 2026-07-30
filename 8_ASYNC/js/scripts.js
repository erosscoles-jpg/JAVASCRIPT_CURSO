// 1 - SETTIMEOUT

console.log("Ainda não executou")

setTimeout(function(){
    console.log("Requisição assicrona")
},2000)

console.log("Ainda não executou2")

// 2 - SETINTERVAL
console.log("Ainda não executou")

// setInterval(function(){
//     console.log("Intervalo Assicrono")
// }, 3000)

console.log("Ainda não executou2")

// 3 - PROMISE
const promessa = Promise.resolve(5 + 5)
console.log("Algum codigo")

promessa
    .then(value => {
        console.log(`A soma é: ${value}`)
        return value;   
    })
    .then((value) => value - 1)
    .then((value) => console.log(`Agora é ${value}`))

//  4 - ERROR PROMISSES
Promise.resolve(4 * "asd")
.then((n) => {
    if (Number.isNaN(n)){
        throw new Error("Valores invalidos")
    }
})
.catch((err) => console.log(`Um erro ocorreu: ${err}`))

// 5 - REJEITANDO PROMISES
function checkNumber(n){
    return new Promise((resolve,reject) => {
        if (n > 10){
            resolve(`O numero é maior que 10`)
        }
        else{
            reject(new Error("Numero muito baixo"))
        }
    })
}

const a = checkNumber(20)
const b = checkNumber(10)
a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`));
b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 6 - RESOLVENDO VARIAS PROMISES
const p1 = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve(10)
    }, 3000)
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise( (resolve,reject) => {
    if (30 > 10){
        resolve(30)
    }
    else{
        reject("Error")
    }
});

Promise.all([p1,p2,p3]).then((value) => console.log(value));

// 7 - ASYNC FUNCTIONS
async function somaComDelay(a,b) {
    return a + b
}

somaComDelay(2,4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
});

// 8 - AWAIT
function resolveComDelay(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Resolveu")
        }, 2000);
    });
}

async function chamadaAsync() {
    console.log("Chamado a Promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()

// 9 - GENERATORS
function* generator(){
    yield 1
    yield 2
    yield 3
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)







