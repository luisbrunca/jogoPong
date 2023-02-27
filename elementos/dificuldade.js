let dificuldade = "normal";
let erroMinimo = 5;
let erroMaximo = 9;
var chanceDeErrar = velocidadePadrao;

function calculaDificuldade() {

    if (umJogador) {
        if (dificuldade == "easy") {
            erroMinimo = 5;
            erroMaximo = 7;
        } else if (dificuldade == "normal") {
            erroMinimo = 6;
            erroMaximo = 7;
        } else if (dificuldade == "hard") {
            erroMinimo = 5;
            erroMaximo = 9;
        }
    } else {
        erroMinimo = 5;
        erroMaximo = 9;
    }
}

function calculaChanceDeErrar(min, max) {

    if (umJogador) {
        if (pontosJogador1 <= pontosJogador2) {
            chanceDeErrar = Math.floor(Math.random() * (max - min + 1)) + min;
        } else {
            chanceDeErrar = velocidadePadrao;
        }
    } else {
        chanceDeErrar = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
