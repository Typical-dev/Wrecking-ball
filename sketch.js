const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, box, box2, box3, box4, box5, box6, box7, box8;
var ground, rope;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,380,400,20);
  box = new Box(200,200,50,50);
  box2 = new Box(220,250,50,50);
  box3 = new Box(220,300,50,50);
  box4 = new Box(220,350,50,50);
  box5 = new Box(195,200,50,50);
  box6 = new Box(195,250,50,50);
  box7 = new Box(195,300,50,50);
  box8 = new Box(195,350,50,50);
  ball = new Ball(100,200,50,50);
  rope = new Rope(ball.body,{x:50, y:50});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  ball.display();
  rope.display();
}

function keyPressed(){
if(keyCode===32){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100});
}
}