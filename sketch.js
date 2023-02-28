let jogando = false;
const velocidadePadrao = 7;

function preload() {
    trilhaSonora = loadSound("./sons/somTrilhaSonora.mp3")
    somPonto = loadSound("./sons/somPonto.mp3")
    somRaquetada = loadSound("./sons/somRaquetada.mp3")
}

function setup() {
    createCanvas(800, 600);
}

function draw() {

    background(0);

    mostraBolinha();
    mostraRaquete(xRaqueteJogador1, yRaqueteJogador1);
    mostraRaquete(xRaqueteJogador2, yRaqueteJogador2);
    mostraPlacar();
    mostraCampo();

    habilitaOpcoes();

    if (jogando) {
        desabilitaOpcoes();

        movimentaBolinha();
        movimentaRaqueteJogador1();
        movimentaRaqueteJogador2();

        verificaColisaoBorda();
        colisaoRaqueteBiblioteca(xRaqueteJogador1, yRaqueteJogador1);
        colisaoRaqueteBiblioteca(xRaqueteJogador2, yRaqueteJogador2);
        colisaoBordaBiblioteca(xBordaEsquerda, yBordaVertical);
        colisaoBordaBiblioteca(xBordaDireita, yBordaVertical);

    } else {
        escolheModoDeJogo();
        escolheDificuldade();
    }
}

function keyPressed() {
    if (keyCode === 13) {
        
        if (jogando == false) {
            jogando = true;
            trilhaSonora.loop();
            
            calculaDificuldade()
            calculaChanceDeErrar(erroMinimo, erroMaximo);
        }            

    } else if (keyCode === 80) {

        if (jogando == true) {
            jogando = false;
            trilhaSonora.stop();
        }
    }
}
