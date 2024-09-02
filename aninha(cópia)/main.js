const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternaticas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const titulo = document.querySelector(".titulo");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

const resultado1 = document.querySelector(".caixa-resultado1");

const perguntas = [
    {
        enunciado: "A festa junina é um evento relacionado ao folclore?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: ["Está comemoração que está presente todos os anos em escolas brasileiras é considerado parte do folclore",
                "jamal angolano"
            ]
            },
            {
                texto: "Não",
                afirmacao: "Está comemoração não está relacionada ao folclore."
            }
        ]
    },
    {
        enunciado: "A escola possui eventos festivos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Sim a escola possui eventos festivos, já que, além de preparar o aluno para o mercado de trabalho também o ajuda no ambto social, tais como a festa junina"
            },
            {
                texto: "Não",
                afirmacao: "Escola é para se obter conhecimento e preparar o aluno para o mercado de trabalho."
            }
        ]
    },
    {
        enunciado: "Qual a origem da mandioca produzida pela industria, seguindo o folclore brasileiro?",
        alternativas: [
            {
                texto: "Bebê morto.",
                afirmacao: "Segundo o folclore brasileiro, que você provavelmente ja ouviu na escola, a mandioca vem de uma lenda sobre um bebê que após sua morte foi enterrado e regado, dando origem a mandioca"
            },
            {
                texto: "Muda de mandioca.",
                afirmacao: "Seguindo os ensinamentos das escolas brasileiras a mandioca vem de uma muda, sem ter exatamente uma ligação com o folclore."
            }
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
}

mostraPergunta();