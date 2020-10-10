const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  createSprite(400, 200, 50, 50);
  ground= new Ground(300,800,800,30)
  division= new Division(500,636,10,300)
  division2= new Division(450,636,10,300)
  division3= new Division(400,636,10,300)
  division4= new Division(350,636,10,300)
  division5= new Division(300,636,10,300)
  division6= new Division(250,636,10,300)
  division7 = new Division(200,636,10,300)
  division8 = new Division(150,636,10,300)
  Plinko= new plinko(200,200,10)

}

function draw() {
  background(0,0,0);
  Engine.update(engine);  
  ground.display();
  division.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  Plink.display();
  drawSprites();
}