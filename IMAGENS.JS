let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro1;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoCarro4;
let imagemDoCarro5;
let imagemDoCarro6;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDosPontos;



function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemDoCarro1 = loadImage("imagens/carro-1.png");
    imagemDoCarro2 = loadImage("imagens/carro-2.png");
    imagemDoCarro3 = loadImage("imagens/carro-3.png");
    imagemDoCarro4 = loadImage("imagens/carro-1.1.png");
    imagemDoCarro5 = loadImage("imagens/carro-2.1.png");
    imagemDoCarro6 = loadImage("imagens/carro-3.1.png");
    imagemCarrosCima = [imagemDoCarro1, imagemDoCarro2, imagemDoCarro3]
    imagemCarrosBaixo = [imagemDoCarro4, imagemDoCarro5, imagemDoCarro6]
  //sons do game
    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaTrilha.setVolume(0.05);
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDosPontos = loadSound("sons/pontos.wav");
}