const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;

var ball, ground;


function setup() {
  createCanvas(400,400);
   engine= Engine.create();
   world= engine.world;

   var ball_options={
    restitution :2

   }



   ball = Bodies.circle(200, 200,60,ball_options);
   World.add(world,ball);
   console.log(ball.position.x);


 var ground_options={

  isStatic: true
 }

  ground= Bodies.rectangle(200, 380, 400,15, ground_options);
  World.add(world,ground);



}

function draw() {
  background(0);  
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,25) ;

 Engine.update(engine)
 ellipseMode(RADIUS)
 ellipse(ball.position.x, ball.position.y, 30,30)
}