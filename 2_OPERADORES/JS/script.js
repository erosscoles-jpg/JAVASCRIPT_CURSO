//  1 - NUMBER
console.log(typeof 2);
console.log(typeof 3.2);
console.log(typeof -5);

// 2 - OPERAÇÕES ARITIMETICAS
console.log(2 + 4);
console.log(2 - 3);
console.log(2 / 3);
console.log(2 * 3);

console.log(5 + (4 * 2));

// 3 - SPECIAL NUMBER
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(typeof 12 * "asd");

console.log(typeof NaN);

// 4 - STRING
console.log("UM texto");
console.log('mais um texto');
console.log(`Outro texto`)

console.log(typeof "UM texto");
console.log(typeof 'mais um texto');
console.log(typeof `Outro texto`)

// 5 - SIMBOLOS ESPECIASI EM STRING
console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");

// 6 - CONCATENAÇÃO
console.log("Oi, " + "tudo" + " bem?");
console.log(`Testando ` + `com ` + `Crase`);

// 7 - INTERPOLAÇÃO ou TEMPLETE STRINGS
console.log(`a soma de 2 + 2 = ${2 + 2}`);
console.log(`Podemos exeucater qualquer coisa aqui ${console.log("Teste")}`)

// 8 - BOOLEANS
console.log(true);
console.log(typeof false);
console.log(5 < 10);
console.log(30 < 10);

// 9 - COMPARAÇÕES
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - IDENTICO
console.log(9 == "9");
console.log(9 === "9")
console.log(9 != "9");
console.log(9 !== "9");

// 11 - OPERAÇÕES LOGICOS
console.log(true && true);
console.log(true && false);
console.log( 5 > 2 && 2 < 10);
console.log( 5 > 2 && "mateus" === 1);
console.log( 5 > 2 || "mateus" === 1);
console.log(5 < 2 || 5 > 100);
console.log(!true)

// 12 - EMPTY VALUES
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - MUDANÇA DE TIPO
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);