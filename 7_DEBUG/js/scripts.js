// 1 - STRICT
"use strict";

// opa = "teste"
const opa = "teste";
// const undefined = 10;
// delete [].length;

// 2 - CONSOLE.LOG
let a = 1
let b = 2

if (a == 1){
    a = b + 2
}
console.log(a)

for(let i = 0; i < b; i++){
    a = a + 2
    console.log(a)
}
console.log(a)

if (a > 25){
    a = 25
}
console.log(a)

// 3 - DEBUGGER
let c = 1
let d = 2

if(c == 1){
    c = d + 2
}

// debugger

for (let i = 0; i < d; i++){
    c = c + 2
}
console.log("Executou o loop")

// debugger

if (c > 5){
    c = 25;
}

// 4 - TRATAMENTO DE DADOS POR FUNÇÃO
function checkNumber(n){
    const result = Number(n)

    if(Number.isNaN(result)){
        console.log("Valor incorreto");
        return;
    }

    console.log("Valo correto");
    return result;
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("teste   ")

// 5 - EXCEPTIONS
let x = 10

if (x != 11){
    // throw new Error("O valor de x não pode ser diferente de 11!")
}

// 6 - TRY CATCH
try{
    const soma = x + y
}catch(error){
    console.log(`Erro no programa: ${error}`)
}

//  7 - FINALLY
try{
    const value = checkNumber("asd")

    if (!value){
        throw new Error("Valores invalidos")
    }
}
catch(error){
    console.log(`Opa, aconteceu um problema: ${error}`)
}
finally{
    console.log("O codigo foi executado!")
}

// 8 - ASSERTIONS
function checkArry(arr){
    if (arr.length == 0){
        throw new Error("O array precisa ter elementos")
    }else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}

// checkArry([])
checkArry([1,2,3])








