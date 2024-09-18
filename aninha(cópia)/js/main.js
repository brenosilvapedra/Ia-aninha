import { perguntas } from './perguntas.js'

//Menu
const menu = document.querySelector(".menu")
const menu_title = document.querySelector(".menu_title")
const menu_btn = document.querySelector(".iniciar")

//IA
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternaticas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const titulo = document.querySelector(".titulo");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const restart = document.querySelector(".btn")
const ia_main = document.querySelector(".ia_main")

const resultado1 = document.querySelector(".caixa-resultado1");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

//func Menu

function Menu_func() {
    menu_title.textContent = "Você decide o futuro da IA"

    menu_btn.addEventListener('click', () => {
        menu.classList.add("esconder")
        ia_main.classList.remove("esconder")

        mostraPergunta()
    })
}


//Func Ia

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    titulo.textContent = "Quiz";
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternaticas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternaticas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {

    titulo.textContent = "Resposta";
    caixaPerguntas.textContent = "Segundo Jamal";
    textoResultado.textContent = historiaFinal;
    caixaAlternaticas.textContent = "";

    restart.classList.remove("esconder")

    restart.addEventListener('click', () => {
        restart_func()
    })
}

function restart_func (){
    atual = 0
    historiaFinal = ""
    textoResultado.textContent = ""

    restart.classList.add("esconder")
    mostraPergunta()
}

Menu_func()