//Posição e tamanho da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  verificaBolinha();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaBolinha();
  mostraRaquete();
  
  
  circle(xBolinha, yBolinha, diametro);
 xBolinha += velocidadeXBolinha;
 yBolinha += velocidadeYBolinha;
}
   function verificaBolinha(){
 if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
   }

  function mostraRaquete(){
    rect(xRaquete, yRaquete, raqueteLargura, raqueteAltura, 20);
  }

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }

}
  if (xBolinha > width || xBolinha < 0){
    velocidadeXBolinha *= -1;
 }
 function verificaBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  }
  
  function mostraRaquete(){
    rect(xRaquete, yRaquete, raqueteLargura, raqueteAltura, 20);
  }

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaoBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
  
  function mostraRaquete(){
    rect(xRaquete, yRaquete, raqueteLargura, raqueteAltura, 20);
  }

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

  if(xBolinha - raio < xRaquete  + 
raquetelargura && yBolinha - raio <
yraquete +raqueteAltura && yBolinha + raio > 
yRquete)
    velocidadeXBolinha *= -1;
}


