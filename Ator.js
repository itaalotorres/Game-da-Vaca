//variaveis ator
let yAtor = 370;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
  
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 4;
  }
    if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 4; 
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 4; 
  }
    if(keyIsDown(RIGHT_ARROW)){
    xAtor += 4; 
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarrosCima.length; i = i + 1){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor,   yAtor, 15)
        if (colisao){
          voltaAtorParaPosiaoInicial();
          somDaColisao.play();
          if (pontosMaiorQueZero()){
          meusPontos -= 1;
          
          }
    } 
  }
  
}

function voltaAtorParaPosiaoInicial(){
    yAtor = 366;
}

function verificaColisaoBaixo(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imagemCarrosBaixo.length; i = i + 1){
      colisao = collideRectCircle(xCarrosBaixo[i], yCarrosBaixo[i], comprimentoCarroBaixo, alturaCarroBaixo, xAtor, yAtor, 15)
        if (colisao){
          voltaAtorParaPosiaoInicial();  
          somDaColisao.play();
          if (pontosMaiorQueZero()){
          meusPontos -= 1;
          }
    } 
  }
  
}

function voltaAtorParaPosiaoInicial(){
    yAtor = 390;
}


function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color ("Yellow"))
  text(meusPontos, width / 5, 27);
  
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDosPontos.play();
    voltaAtorParaPosiaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
  
}

function podeSeMover(){
  return yAtor < 370 ;
  
}
