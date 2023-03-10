let xRaqueteJogador2 = 800 - larguraRaquete;
let yRaqueteJogador2 = 300 - alturaRaquete / 2;
let velocidadeYJogador2;

function movimentaRaqueteJogador2() {
    if (doisJogadores) {
        //jogador2 jogando
        if (keyIsDown(73)) {
            if (yRaqueteJogador2 >= 20) {
                yRaqueteJogador2 -= 10;
            }
        }

        if (keyIsDown(75)) {
            if (yRaqueteJogador2 <= height - alturaRaquete - 20) {
                yRaqueteJogador2 += 10;
            }
        }
    } else {
        //máquina jogando como jogador2
        if (velocidadeXBolinha > 0 && xBolinha >= width / 2) {
            if (yRaqueteJogador2 < yBolinha && yRaqueteJogador2 + alturaRaquete > yBolinha) {
                velocidadeYJogador2 = velocidadeYBolinha;
            } else {
                if (yBolinha < yRaqueteJogador2) {
                    velocidadeYJogador2 = chanceDeErrar * -1;
                }
                if (yBolinha > yRaqueteJogador2 + alturaRaquete) {
                    velocidadeYJogador2 = chanceDeErrar;
                }
            }

            yRaqueteJogador2 += velocidadeYJogador2;
        }
    }
}
