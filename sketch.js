
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy = loadImage("boy.png",100,350,20,20);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var b = createSprite(100,350,20,20);
	b.addImage(boy);

	//Create the Bodies Here.
     tre = new Tree(650,350);
     ground = new Ground(width/2,690,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tre.display();
  ground.display();
  drawSprites();
 
}



