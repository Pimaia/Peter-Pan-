//Revisão de Matrizes
//Matriz com números
var matriz1 = [1,5,78,21,25];
console.log(matriz1);
//Matriz com diferentes tipos de dados
var matriz2 = ["Melissa", 25, true];
//console.log(matriz2);
//Matriz de matrizes
var matriz3 = [matriz1, matriz2];
//console.log(matriz3);
//Acessando os elementos de acordo com o índice
//console.log(matriz1[3]);
//console.log(matriz2[1]);
//console.log(matriz3[0][2]);
//Adicionando e retirando elementos da matriz
matriz1.push(125),
//console.log(matriz1);
matriz1.pop();
//console.log(matriz1);

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var hogwarts;
var rapunzel;
var enrolados;
var bomba; 
var agudo;
var sid; 
var perolanegra;

var nerf = [];
var cruzeiro = [];
var cruzeiroAnimation = [];
var cruzeiroDados, cruzeiroSpritesheet;
var titanic = [];
var titanicDados, titanicSpritesheet;
var ocean = [];
var oceanDados, oceanSpritesheet;




function preload() {
  hogwarts = loadImage("./assets/background.gif");
  enrolados = loadImage("./assets/tower.png");
  cruzeiroDados = loadJSON("./assets/boat/boat.json");
  cruzeiroSpritesheet = loadImage("./assets/boat/boat.png");
  titanicDados = loadJSON ("./assets/boat/brokenBoat.json");
  titanicSpritesheet = loadImage ("./assets/boat/brokenBoat.png");
  oceanDados = loadJSON ("./assets/waterSplash/waterSplash.json");
  oceanSpritesheet = loadImage ("./assets/waterSplash/waterSplash.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 rapunzel = Bodies.rectangle(160, 350, 160, 310, options);
 World.add(world,rapunzel);
 
 angleMode(DEGREES);
 agudo = 20;

 bomba = new EraDoGelo (180, 110, 130, 100, agudo);

 var cruzeiroFrames = cruzeiroDados.frames;
 for(var i = 0; i < cruzeiroFrames.length; i++){
  var pos = cruzeiroFrames[i].position;
  var img = cruzeiroSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  cruzeiroAnimation.push(img);
 }

 var titanicFrames = titanicDados.frames;
 for(var i = 0; i < titanicFrames.length; i++){
  var pos = titanicFrames[i].position;
  var img = titanicSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  titanic.push(img);
 }

 var oceanFrames = oceanDados.frames;
 for(var i = 0; i < oceanFrames.length; i++){
  var pos = oceanFrames[i].position;
  var img = oceanSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
  ocean.push(img);
 }

}

function draw() {
  background(189);
  image(hogwarts, 0, 0, 1200, 600);

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(enrolados,rapunzel.position.x, rapunzel.position.y, 160, 310);
 pop();
  
 bomba.jack();
 
 for(var i=0; i < nerf.length; i++){
    nerfar(nerf[i], i);
    borracha(i);
 }
 
 estaleiro ();
}

function keyReleased(){
    if(keyCode === DOWN_ARROW){
      nerf[nerf.length -1].dorminhoco();
    }
}

function keyPressed () {
  if (keyCode === DOWN_ARROW){
    var sid = new Sid (bomba.posX, bomba.posY);
    nerf.push(sid);
  }
}
 
function nerfar (sid, i) {
  if (sid){
    sid.preguica();
    sid.pixer();
    if (sid.body.position.x >= width || sid.body.position.y >= height-50){
      sid.bomba(i);
    }
  }
}

function estaleiro () {
  if (cruzeiro.length > 0) {

    if (cruzeiro[cruzeiro.length-1] === undefined || cruzeiro[cruzeiro.length-1].body.position.x<width-300){
      var positions = [-40, -60, -70, -20];
      var position = random (positions);
      var perolanegra = new PerolaNegra(width, height-100, 170, 170, position, cruzeiroAnimation);
      cruzeiro.push (perolanegra);
    }
    for (var i = 0; i<cruzeiro.length; i++) {
    if (cruzeiro[i])  {
    Matter.Body.setVelocity(cruzeiro[i].body, {x: -0.9, y: 0});
    cruzeiro[i].luneta();
    cruzeiro[i].pixer();
  } 
   } 
  }
  else {
  var perolanegra = new PerolaNegra(width, height-60, 170, 170, -80, cruzeiroAnimation);
  cruzeiro.push (perolanegra);
  }
}


function borracha (index){
  for (var i = 0; i<cruzeiro.length; i++) {
    if (nerf[index] !== undefined && cruzeiro[i] !== undefined){
    var pavio = Matter.SAT.collides (nerf[index].body, cruzeiro[i].body);  
    if (pavio.collided){
      cruzeiro[i].bomba(i); 
      Matter.World.remove (world, nerf[index].body);
      delete nerf[index];
    }
    }
  }
}