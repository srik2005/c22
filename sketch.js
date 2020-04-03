var engine,world,bodies,b1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world

var op1 = {

restitution: 1, 
friction: 3,
density: 0.2


}

  bodies = Bodies.circle(100,100,25,op1)

var op = {
isStatic: true

}

  b1 = Bodies.rectangle(200,350,400,10,op)

  World.add(world,bodies)

  World.add(world,b1)
  console.log(bodies.position.x)
}

function draw() {
  background("yellow");  
  //rect(200,200,50,50)
Engine.update(engine);
rectMode(CENTER);
circle(bodies.position.x,bodies.position.y,25)
rect(b1.position.x,b1.position.y,400,10)
  drawSprites();
}