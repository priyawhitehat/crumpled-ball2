
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var bin1,bin2,bin3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,height,800,20);

	bin1 = new Box(580,520,150,150);
	
	ball = new Paper(100,520,50);

	Engine.run(engine);
  
}


function draw() {

  background("white");
  ground1.display();
  bin1.display();
  ball.display();
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		 Matter.Body.setStatic(ball.body,false);
         Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-80})
	}
}

