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


function preload() {
  hogwarts = loadImage("./assets/background.gif");
  enrolados = loadImage("./assets/tower.png");
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
  }
}

function estaleiro () {
  if (cruzeiro.length > 0) {

    if (cruzeiro[cruzeiro.length-1] === undefined || cruzeiro[cruzeiro.length-1].body.position.x<width-300){
      var positions = [-40, -60, -70, -20];
      var position = random (positions);
      var perolanegra = new PerolaNegra(width, height-100, 170, 170, position);
      cruzeiro.push (perolanegra);
    }
    for (var i = 0; i<cruzeiro.length; i++) {
    if (cruzeiro[i])  {
    Matter.Body.setVelocity(cruzeiro[i].body, {x: -0.9, y: 0});
    cruzeiro[i].luneta();
  } 
   } 
  }
  else {
  var perolanegra = new PerolaNegra(width, height-60, 170, 170, -80);
  cruzeiro.push (perolanegra);
  }
}

