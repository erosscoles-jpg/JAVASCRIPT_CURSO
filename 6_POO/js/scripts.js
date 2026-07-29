
// 1 - MÉTODOS
const animal = {
    nome:"bob",
    latir: function()  {
        console.log("Au Au!")
    }
}

console.log(animal.nome);
animal.latir();

// 2 - APROFUNDANDO METODOS
const pessoa = {
    nome: "Adalberto",

    getNome: function () {
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    }
};

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Joaquim")
console.log(pessoa.getNome());

// 3 - PROTOTYPE
const text = "asd";
console.log(Object.getPrototypeOf(text))

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr))

// 4 - MAIS SOBRE PROTOTYPE
const myObjetc = {
    a: "b"
}
console.log(Object.getPrototypeOf(myObjetc))
console.log(Object.getPrototypeOf(myObjetc) === Object.prototype)

const mySecondObject = Object.create(myObjetc)
console.log(mySecondObject);
console.log(mySecondObject.a);
console.log(Object.getPrototypeOf(mySecondObject) === myObjetc)

// 5 - CLASSES BASICAS
const cahcorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cahcorro)
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cahcorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// 6 - FUNÇÕES COM CLASSES
function criarCachorro(nome,raca){
    const cachorro = Object.create({})

    cachorro.name = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("bob", "Vira lata")
console.log(bob)

const jack = criarCachorro("Jack", "Poodle")
console.log(jack)
console.log(Object.getPrototypeOf(jack))

// 7 - FUNÇÕES CONSTRUTORAS
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")
console.log(husky)

// 8 - METODOS NA FUNÇÃ OCONSTRUTORA
Cachorro.prototype.uivar = function(){
    console.log("Auuuuuu")
}

console.log(husky.prototype)
husky.uivar()

// 9 - CLASSES ES6
class CachorroClass{
    constructor(nome,raca){
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClass("Jeff", "Labrador")
console.log(jeff)
console.log(Object.getPrototypeOf(jeff))

// 10 - MAIS SOBRE CLASSES
class Caminhao {
    constructor(eixos, cor){
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhão(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, "Vermelha")
scania.descreverCaminhão()

Caminhao.motor = 4.0;

const c2 = new Caminhao(4, "Preta");

// Motor é undefined
console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

// 11 - OVERRIDE
class Humano{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
}

const matheus = new Humano("Matheus", 31)
console.log(matheus)

Humano.prototype.idade = "Não definida";
console.log(matheus.idade)
console.log(Humano.prototype.idade)

// 12 - SYMBOLS EM CLASSES
class Aviao  {
    constructor(marca,turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }

}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2
Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing", 10)
console.log(boeing)
console.log(boeing[asas])
console.log(boeing[pilotos])

// 13 - GETTERS E SETTERS
class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo(){
        return `Voce esta lendo: ${this.titulo}`
    }

    set adcionarTags(tags){
        const tagsArrays = tags.split(", ")
        this.tags = tagsArrays
    }
}

const myPost = new Post("Algum Post", "É um post sobre progamação");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adcionarTags = "Progamação , Javascript, js"
console.log(myPost)

// 14 - HERANÇA
class Mamifero {
    constructor(patas){
        this.patas = patas
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome){
        super(patas, patas)
        this.nome = nome
    }
}

const shark = new Lobo(4, "Shark")
console.log(shark)
console.log(shark.patas)

// 15 - INSTANCEOF
console.log(shark instanceof Lobo)

console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "Teste") instanceof Mamifero)

console.log(new Post("a","b") instanceof Cachorro)




