// 1 - VARIAVEIS
// let -> pode ser alterada
// Const -> Não pode ser alterada
// let nome = "Mateus";
// console.log(nome);

// nome = "Mateus Batsita";
// console.log(nome);

// const idade = 31;
// console.log(idade);

// console.log(typeof nome);
// console.log(typeof idade);

// // 2 - MAIS SOBRE VARIAVEIS
// // let 2teste = "invalido";
// // let @teste = "invalido";

// let a = 10, b = 20, c = 30;

// console.log(a,b,c);

// const nomecompleto = "Mateus Lopez";
// const nomeCompleto = "Mateus Freitas";

// console.log(nomeCompleto);
// console.log(nomecompleto);

// let _teste = "ok";
// let $teste = "ok";

// console.log(_teste, $teste);

// // 3 - PROMPT
// // const age = prompt("Digite sua idade: ");
// // console.log(`Você tem ${age} anos`);

// // 4 - ALERT
// // alert("testeando");

// // const z = 10;
// // alert(`O numeor é ${z}`);

// // 5 - MATH
// console.log(Math.max(5,2,3,6,5,4,8,9));
// console.log(Math.floor(5.45))
// console.log(Math.ceil(5.45))

// // 6 - CONSOLE
// console.log("Teste!");
// console.error("Erro!");
// console.warn("Aviso");

// // 7 - IF
// const m = 10;
// if (m > 5){
//     console.log("M é maior que 5!")
// }

// const user = "João";
// if(user === "João"){
//     console.log(`Seu nome é ${user}`);
// }
// else{
//     console.log(`Sai daqui seu vagabundo`)
// }

// // 8 - ELSE
// const loggedId = false;
// if(loggedId){
//     console.log("Esta altenticado")
// }
// else{
//     console.log("Não esta autenticado")
// }

// const q = 10;
// const w = 15;

// if (q > 5 && w > 20){
//     console.log("Numeros mais altos")
// }
// else{
//     console.log("Os numeros não são mais altos")
// }

// // 9 - ELSE IF
// if ( 1 > 2){
//     console.log("Teste")
// }
// else if (2 > 3){
//     console.log("Teste 2")
// }
// else if (5 > 1){
//     console.log("Agora sim")
// }

// const userName = "Mateus";
// const userAge = 31;

// if (userName === "Jose"){
//     console.log("Bem vindo José")
// }
// else if (userName === "Mateus" && userAge === 31){
//     console.log(`Ola ${userName}, você tem ${userAge}`)
// }

// 10 - WHILE

// let p = 0;

// while (p < 5){
//     console.log(`repetindo ${p}`);
//     p++;
// }

// // 11 - DO WHILE
// let o = 10;

// do{
//     console.log(`valor do o: ${o}`);
//     o--;
// }while (o > 1)

// // 12 - FOR
// for(let t = 0; t < 10; t++){
//     console.log("Repetindo algo...");
// }

// 13 - identaçao
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("deu 0!");
    }
  }
}

// 14 - BREAK
for(let g = 20; g > 10; g--){
    console.log(`Valor de g: ${g}`);

    if(g === 15){
        console.log("O g é 15")
        break
    }
}

// 15 - CONTINUE
for(let s = 0; s < 10; s++){
    // operador de resto = %
    if(s % 2 === 0){
        console.log("Numero par!");
        continue
    }

    console.log(s);
}

// 16 - SWITCH
const job = "Advogado";

switch(job){
    case "Progamador":
        console.log("Você é um progamador!")
        break
    case "Advogado":
        console.log("Você é um Advogado!")
        break
    case "Engeinheiro":
        console.log("Você é um Engeinheiro!")
        break
    default:
        console.log("Porfissão invalida");
}
// SWITCH ERRADO

const l = 100;

switch (l) {
  case 200:
    console.log("L é 200!");
  case 100:
    console.log("L é 100!");
  case 10:
    console.log("L é 10!");
  default:
    console.log("L não foi encontrado");
}
