
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var iron;
var sand1,sand2,sand3,sand4,sand5,sand6;


function setup() {
	createCanvas(900, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer(500,400);
	plane=new Plane(450,680,900,30);
	stone=new Stone(200,630,70,60);
	rubber=new Rubber(400,600);
	iron=new Iron(500,610,40,40);
	sand1=new Sand(600,580);
	sand2=new Sand(550,590);
	sand3=new Sand(450,610);
	sand4=new Sand(370,610);
	sand5=new Sand(250,620);
	sand6=new Sand(110,600);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);

  
  plane.display();
  stone.display();
  rubber.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  hammer.display();
}



