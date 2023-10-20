let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let xRaquete = 10;
let yRaquete = 170;
let larguraRaquete = 10;
let alturaRaquete = 100;
let velocidadeRaquete = 10;
let xriarRaqueteInimigo = 580
let yriarRaqueteInimigo = 200

let colisao = false;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
 criarBolinha();
 movimentaBolinha();
 encostaNaBorda();
  criaRaquete(xRaquete, yRaquete)
 criarRaquete(xRaqueteIimigo, yRaqueteInimigo)
  movimentaMinhaRaquete();
mivimentaRaqueteInimigo()
  colideRaqueteBolinha(xRaquete, yRaquete)
 colideRaqueteBolinha(xRaqueteInimigo, yRaqueteInimigo)
   
 
}

function criarBolinha() {
 circle(xBolinha, yBolinha, diametro)
 
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
 
}

function encostaNaBorda(){
 
 if(xBolinha + raio > width || xBolinha - raio < 0){
   velocidadeXBolinha *= -1
   }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1  
  }  

}

  function criaRaquete(xRaquete, yRaquete)
     rect ( xRaquete, yRaquete, larguraRaquete, alturaRaquete, velocidadeRaquete )
   
  }

function movimentaMinhaRaquete(){

  if(keyIsDown(UP_ARROW)) {yRaquete -= velocidadeRaquete}
  if (keyIsDown(DOWN_ARROW)) {yRaquete += velocidadeRaquete}
   
   
}
   
function colideRaqueteBolinha(x , y)
 hit = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
if (colisao){
 
 velocidadeXBolinha *= -1
 
}

function movimentaRaqueteInimigo({
  if(keyIsDown(87)){
  ifraqueteInimigo -= velocidadeRaquete
}
  if(keyIsDown(83)) += velocidadeRaquete}
    

})








}
  