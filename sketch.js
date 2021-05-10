
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperimg, dustbinimg
function preload()
{ paperimg=loadImage("paper.png")
dustbinimg=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options={
		isStatic:true
	}
 ground=Matter.Bodies.rectangle(width/2,600,800,20,options)
	//Create the Bodies Here.
  bin1=Matter.Bodies.rectangle(600,550,20,80,options)
bin2=Matter.Bodies.rectangle(650,590,120,20,options)
bin3=Matter.Bodies.rectangle(700,550,20,80,options)
World.add(world,ground)
World.add(world,bin1)
World.add(world,bin2)
World.add(world,bin3)
paper=new Paper()
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background("blue");
  rect(ground.position.x,ground.position.y,800,20)
  rect(bin1.position.x,bin1.position.y,20,80)
  rect(bin2.position.x,bin2.position.y,120,20)
  rect(bin3.position.x,bin3.position.y,20,80)
  
image(dustbinimg,580,400,150,200)
  drawSprites();
 paper.display();

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:62,y:-62})
	}
}





