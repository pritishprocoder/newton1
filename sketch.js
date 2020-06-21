var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ball1, ball2, ball3, ball4;
var rroof,rope;
function preload()
{
	
}

function setup() {
	
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ball=Bodies.circle(100,300,25);
	World.add(world,ball);
	ball1=Bodies.circle(130,300,25);
	World.add(world,ball1);
	ball2=Bodies.circle(160,300,25);
	World.add(world,ball2);
	ball3=Bodies.circle(190,300,25);
	World.add(world,ball3);
	ball4=Bodies.circle(220,300,25);
	World.add(world,ball4);


  rroof=new roof(150,100,200,20);


  rope=new Rope(ball1.body,rroof.body,-ball1diametre*2,0); 

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,25,25);
  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,25,25);
  ellipseMode(RADIUS);
  ellipse(ball3.position.x,ball3.position.y,25,25);
  ellipseMode(RADIUS);
  ellipse(ball4.position.x,ball4.position.y,25,25);
  drawSprites();
  rroof.display();
 
}



