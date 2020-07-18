const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = []; 

var divisionHeight = 300;

function setup() {
  canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 760, 480, 10);
  for (var k = 0; k <= width; k += 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 75, 10));
  }
  for (var j = 15; j <= width - 10; j += 50) {
    plinkos.push(new Plinko(j, 175, 10));
  }
  for (var j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 275, 10));
  }
  for (var j = 15; j <= width - 10; j += 50) {
    plinkos.push(new Plinko(j, 375, 10));
  }
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  for(var k = 0; k<divisions.length;k++) {    
    divisions[k].display(); 
  }
  for(var j = 0; j<plinkos.length;j++) {    
    plinkos[j].display(); 
  }
  if(frameCount%60 === 0) {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }
  for(var i = 0; i<particles.length;i++) {    
    particles[i].display(); 
  }
}