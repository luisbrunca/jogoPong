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
    chanceDeErrar = Math.floor(Math.random() * (max - min + 1)) + min;
}
