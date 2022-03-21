
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  amplitude = 10
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  mostraCarroBaixo();
  movimentaCarro();
  movimentaCarroBaixo();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  voltaPosicaoInicialDoCarroBaixo();
  verificaColisaoBaixo();
  incluiPontos();
  marcaPonto();
  
}
 











