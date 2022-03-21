//Listas Variaveis Carros Cima
let xCarros = [600, 580, 620];
let yCarros = [40, 95, 150];
let velocidadeCarros = [11, 9.3, 10];
let comprimentoCarro = 50;
let alturaCarro = 40;

//Listas Variaveis Carros Baixo
let xCarrosBaixo = [-100, -80, -120];
let yCarrosBaixo = [210, 265, 315];
let velocidadeCarrosBaixo = [ 7, 7.5, 8 ];
let comprimentoCarroBaixo = 50;
let alturaCarroBaixo = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarrosCima.length; i = i + 1){
    image(imagemCarrosCima[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function mostraCarroBaixo(){
  for (let i = 0; i < imagemCarrosBaixo.length; i = i + 1){
    image(imagemCarrosBaixo[i], xCarrosBaixo[i], yCarrosBaixo[i], comprimentoCarroBaixo, alturaCarroBaixo);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarrosCima.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function movimentaCarroBaixo(){
  for (let i = 0; i < imagemCarrosBaixo.length; i = i + 1){
    xCarrosBaixo[i] += velocidadeCarrosBaixo[i];
  }
}


function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarrosCima.length; i = i + 1){
     if (passouTodaATela(xCarros[i])){
       xCarros[i] = 600
  }
 }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}

function voltaPosicaoInicialDoCarroBaixo(){
  for (let i = 0; i < imagemCarrosBaixo.length; i = i + 1){
     if (passouTodaATelaBaixo(xCarrosBaixo[i])){
       xCarrosBaixo[i] = -50
  }
 }
}

function passouTodaATelaBaixo(xCarrosBaixo){
  return xCarrosBaixo > 450;
}

  
  
  

