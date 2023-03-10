const larguraRaquete = 15;
const alturaRaquete = 100;

let colidiuRaquete = false;

function mostraRaquete(x, y) {
    rect(x, y, larguraRaquete, alturaRaquete);
}

function colisaoRaqueteBiblioteca(x, y) {
    colidiuRaquete = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);

    if (colidiuRaquete) {
        velocidadeXBolinha *= -1;

        if (xBolinha < width / 2) {
            xBolinha = 0 + larguraBordaVertical + larguraRaquete + raioBolinha;
            calculaChanceDeErrar(erroMinimo, erroMaximo);
        } else {
            xBolinha = width - larguraBordaVertical - larguraRaquete - raioBolinha;
        }
        somRaquetada.play();
    }
}
