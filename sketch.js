var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);



  // division objects
  for (var k = 0; k <=width; k = k + 70) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  // 1st row of plinko objects
  for (var j = 65; j <=width; j=j+40) { 
    plinkos.push(new Plinko(j,75));
  }

  // 2nd row of plinko objects
  for (var j = 40; j <=width-10; j=j+40) 
  {
    plinkos.push(new Plinko(j,175));
  }

  // 3rd row of plinko objects
  for (var j = 65; j <=width; j=j+40) { 
    plinkos.push(new Plinko(j,275));
  }

  // 4th row of plinko objects

  for (var j = 40; j <=width; j=j+40) { 
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects  
  for (var p = 40; p <=width; p=p+40) { 
    particles.push(new Particle(375,10,5));
  }
}
 


function draw() {
  background("black");
  textSize(20)
 
  
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10),random(width/2+10),10,10))
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var p = 0; p < particles.length; p++) {
    particles[p].display();   
  }

}