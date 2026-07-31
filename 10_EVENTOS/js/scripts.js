// 1 - ADICIONANDO EVENTOS
const btn = document.querySelector("#my-button")
btn.addEventListener("click", function() {
    console.log("Click aqui")
});

// 2 - REMOVENDO EVENTOS
const secondBtn = document.querySelector("#btn")

function inprimirMensagem(){
    console.log("Teste")
}

secondBtn.addEventListener("click", inprimirMensagem);

const thirBtun = document.querySelector("#other-btn");
thirBtun.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", inprimirMensagem);
});

// 3 - ARGUMENTO DO EVENTO
const myTitle = document.querySelector("#my-title");
myTitle.addEventListener("click",(event) => {
    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
} )

// 4 - PROPAGAÇÃO
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})
btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2")
})

// 5 - REMOVENDO EVENTO PADRÃO
const a = document.querySelector("a");
a.addEventListener("click" , (e) => {

    e.preventDefault()
    console.log("Não Alterou a pagina")

})

// 6 - EVENTOS DE TECLA
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla: ${e.key}`)
})
document.addEventListener("keydown", (e) => {
    console.log(`Soltou a tecla: ${e.key}`)
})

// 7 - EVENTOS DE MOUSE
const mouseEvents = document.querySelector("#mouse")
mouseEvents.addEventListener("mousedown", () => {
    console.log("Prescionou botão")
});
mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou botão")
});

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo")
})

// // 8 - MOVIMENTO DO MOUSE
// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo X: ${e.x}`)
//     console.log(`No eixo Y: ${e.y}`)
// })

// 9 - EVENTO SCROLL
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200px")
    }
})

// 10 - EVENTO FOCUS/BLUR
const input = document.querySelector("#my-input")
input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})
input.addEventListener("blur", (e) => {
    console.log("Saiu do input")
})

// 11 - EVENTO DE CARREGAMENTO
window.addEventListener("load", () => {
    console.log("A pagina carregou!")
})

// window.addEventListener("beforeunload", (e) => {
//     e.preventDefault();
// })

// 12 - debounce
const debounce = (f, delay) => {
    let timeout

    return(...arguments) => {
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }

}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
}, 400)
)




