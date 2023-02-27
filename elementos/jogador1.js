let xRaqueteJogador1 = 0;
let yRaqueteJogador1 = 300 - alturaRaquete / 2;
let velocidadeYJogador1;

function movimentaRaqueteJogador1() {
  
    if (umJogador) {

        //jogador1 jogando
        if (keyIsDown(87)) {
            if (yRaqueteJogador1 >= 20) {
                yRaqueteJogador1 -= 10;
            }
        }        
        if (keyIsDown(83)) {
            if (yRaqueteJogador1 <= height - alturaRaquete - 20) {
                yRaqueteJogador1 += 10;
            }
        }

    } else {

        //máquina jogando como jogador1
        if (velocidadeXBolinha < 0 && xBolinha <= width / 2) {

            if (yRaqueteJogador1 < yBolinha && yRaqueteJogador1 + alturaRaquete > yBolinha) {
                velocidadeYJogador1 = velocidadeYBolinha;
            } else {
                if (yBolinha < yRaqueteJogador1) {
                    velocidadeYJogador1 = chanceDeErrar * -1;
                }
                if (yBolinha > yRaqueteJogador1 + alturaRaquete) {
                    velocidadeYJogador1 = chanceDeErrar;
                }
            }

            yRaqueteJogador1 += velocidadeYJogador1;
        }
    }
}
