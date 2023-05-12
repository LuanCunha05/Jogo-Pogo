//variaveis criadas para a bolinha

let xBola = 300;
let yBola = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bola

let velocidadeXbola = 6;
let velocidadeYbola= 6;

//variaveis da barra

let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let xraqueteOP = 685;
let yraqueteOP = 150;
let velocidadeYop;

//sons do jogo

let raqueteSom;
let Ponto;
let Trilha;

let hit = false;

//placar do jogo

let meuspontos = 0;
let pontosOP = 0;

function preload(){
  Trilha = loadSound("halogen-u-got-that-10-sec.mp3");
  Ponto = loadSound("wow-incredible-meme-with-sound.mp3");
  raqueteSom = loadSound("skullsound2.mp3");                 
}

function setup() {
  createCanvas(700, 600);
  Trilha.loop();
}

function draw() {
  background(0);
  movimento ();
  colisaoBorda();
  Bola();
  raquete(xRaquete, yRaquete);
  raquetemov();
  hitraquetebible(xRaquete, yRaquete);
  raquete(xraqueteOP, yraqueteOP);
  movRaqueteOp();
  hitraquetebible(xraqueteOP, yraqueteOP);
  Placar();
  marcar();
  bolinhaNaoFicaPresa();
}

  
function raquete(x, y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movRaqueteOp(){
 if(keyIsDown(87)){
    yraqueteOP -= 10;
  }
  if (keyIsDown(83)){
    yraqueteOP += 10;
  }
  
}

function Bola(){
  circle(xBola,yBola,diametro);
}

 
function movimento(){
  xBola += velocidadeXbola;
  yBola += velocidadeYbola;
}

function colisaoBorda(){
  
  if (xBola + raio > width || xBola - raio < 0 ){
    velocidadeXbola *= -1;
  }
  if (yBola + raio > height || yBola - raio < 0){
    velocidadeYbola *= -1
  }
}

function raquetemov(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function hitraquetebible(x, y){
  hit = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBola, yBola, raio);
  if(hit){
    velocidadeXbola *= -1;
    raqueteSom.play();
  }
}

function hitraquetebible(x, y){
  hit = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBola, yBola, raio);
  if(hit){
    velocidadeXbola *= -1;
    raqueteSom.play();
  }
}

function Placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meuspontos, 170, 26);
  fill(255, 140, 0);
  rect(550, 10, 40, 20);
  fill(255);
  text(pontosOP, 570, 26);
}

function marcar(){
  if(xBola > 690){
    meuspontos += 1
    Ponto.play();
  }
  if(xBola < 10){
    pontosOP += 1;
    Ponto.play();
  }
}


function bolinhaNaoFicaPresa(){
    if (xBola - raio < 0){
    xBola = 23
    }
}



