var somRaquetada;
let somPonto;
var trilhaSonora;

var umJogador = true;
var doisJogadores = false;

const larguraBordaVertical = 5;
const alturaBordaVertical = 600;
const larguraBordaHorizontal = 800;
const alturaBordaHorizontal = 5;

const xBordaEsquerda = 0;
const xBordaDireita = 795;
const yBordaVertical = 0;

const yBordaCima = 0;
const yBordaBaixo = 595;
const xBordaHorizontal = 0;

var pontosJogador1 = 0;
var pontosJogador2 = 0;

let colidiuBorda = false;

const radioFacil = document.getElementById("dificuldade_facil");
const radioNormal = document.getElementById("dificuldade_normal");
const radioDificil = document.getElementById("dificuldade_dificil");

const radioUmJogador = document.getElementById("modoDeJogo_umJogador");
const radioDoisJogadores = document.getElementById("modoDeJogo_doisJogadores");
const radioSomenteMaquinas = document.getElementById("modoDeJogo_somenteMaquinas");

function mostraPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);

    fill(color(255, 140, 0));
    rect(180, 15, 40, 22);
    rect(580, 15, 40, 22);

    fill(255);
    text(pontosJogador1, 200, 31);
    text(pontosJogador2, 600, 31);
}

function marcaPonto() {
    if (xBolinha > 400) {
        pontosJogador1 += 1;
        somPonto.play();
    }

    if (xBolinha < 400) {
        pontosJogador2 += 1;
        somPonto.play();
    }
    calculaChanceDeErrar(erroMinimo, erroMaximo);
}

function verificaColisaoBorda() {
    if (yBolinha + raioBolinha > height - 5 || yBolinha - raioBolinha < 0 + 5) {
        velocidadeYBolinha *= -1;
    }
}

function colisaoBordaBiblioteca(x, y) {
    colidiuBorda = collideRectCircle(x, y, larguraBordaVertical, alturaBordaVertical, xBolinha, yBolinha, raioBolinha);

    if (colidiuBorda) {
        velocidadeXBolinha *= -1;

        if (xBolinha < width / 2) {
            xBolinha = 0 + larguraBordaVertical + raioBolinha;
        } else {
            xBolinha = width - larguraBordaVertical - raioBolinha;
        }
        marcaPonto();
    }
}

function mostraCampo() {
    rect(xBordaEsquerda, yBordaVertical, larguraBordaVertical, alturaBordaVertical);
    rect(xBordaDireita, yBordaVertical, larguraBordaVertical, alturaBordaVertical);

    rect(xBordaHorizontal, yBordaCima, larguraBordaHorizontal, alturaBordaHorizontal);
    rect(xBordaHorizontal, yBordaBaixo, larguraBordaHorizontal, alturaBordaHorizontal);

    for (let altura = 12; altura < height; altura += 40) {
        rect(400 - 1, altura, 2, 18);
    }
}

function desabilitaOpcoes() {
    radioFacil.disabled = true;
    radioNormal.disabled = true;
    radioDificil.disabled = true;

    radioUmJogador.disabled = true;
    radioDoisJogadores.disabled = true;
    radioSomenteMaquinas.disabled = true;
}

function habilitaOpcoes() {
    if (umJogador === true && doisJogadores === false) {
        radioFacil.disabled = false;
        radioNormal.disabled = false;
        radioDificil.disabled = false;
    }

    radioUmJogador.disabled = false;
    radioDoisJogadores.disabled = false;
    radioSomenteMaquinas.disabled = false;
}

function escolheDificuldade() {
    radioFacil.onclick = function () {
        dificuldade = "easy";
    };
    radioNormal.onclick = function () {
        dificuldade = "normal";
    };
    radioDificil.onclick = function () {
        dificuldade = "hard";
    };
}

function escolheModoDeJogo() {
    radioUmJogador.onclick = function () {
        umJogador = true;
        doisJogadores = false;
        desabilitaOpcoes();
        habilitaOpcoes();
    };
    radioDoisJogadores.onclick = function () {
        umJogador = true;
        doisJogadores = true;
        desabilitaOpcoes();
        habilitaOpcoes();
    };
    radioSomenteMaquinas.onclick = function () {
        umJogador = false;
        doisJogadores = false;
        desabilitaOpcoes();
        habilitaOpcoes();
    };

    calculaDificuldade();
}
