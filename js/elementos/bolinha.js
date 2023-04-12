var xBolinha = 400;
var yBolinha = 300;
const diametroBolinha = 20;
const raioBolinha = diametroBolinha / 2;

var velocidadeXBolinha = velocidadePadrao;
var velocidadeYBolinha = velocidadePadrao;

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

console.log(velocidadeXBolinha);
