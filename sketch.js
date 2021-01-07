
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 
var world,engine,tree,treeImg;
var stone, stoneImg, ground, boy, sling;
var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10;

function preload()
{
	treeImg = loadImage("Tree.png");
}

function setup() {
	createCanvas(1500, 600);
    
	engine = Engine.create();
  world = engine.world;

  m1 = new Mango(1100, 320, 40);
  m2 = new Mango(1000, 250, 30);
  m3 = new Mango(1330, 290, 40);
  m4 = new Mango(1260, 210, 40);
  m5 = new Mango(1150, 220, 25);
  m6 = new Mango(1050, 180, 25);
  m7 = new Mango(1210, 100, 35);
  m8 = new Mango(1350, 150, 35);
  m9 = new Mango(1210, 310, 30);
  m10 = new Mango(1430, 230, 35);

  tree = createSprite(1200, 350);
  tree.addImage(treeImg);
  tree.scale = 0.8
  stone = new Stone(400,300,20);
  ground = new Ground(750,600,1500,5);
 
	//Create the Bodies Here.
  boy = new Boy(80, 270);
  sling = new Sling(stone.body, {x:170, y:270})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  Engine.update(engine);
  drawSprites();

  detectCollision(stone, m1);
  detectCollision(stone, m2);
  detectCollision(stone, m3);
  detectCollision(stone, m4);
  detectCollision(stone, m5);
  detectCollision(stone, m6);
  detectCollision(stone, m7);
  detectCollision(stone, m8);
  detectCollision(stone, m9);
  detectCollision(stone, m10);

  ground.display();
  boy.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode == 32){
    Matter.Body.setPosition(stone.body, {x:170, y:270});
    sling.attach(stone.body);
  }

}

function detectCollision(objectA, objectB){
  var stonepos = objectA.body.position;
  var mangopos = objectB.body.position;


  //ma'am is dist() a pre-defined function?
  var distance = dist(stonepos.x, stonepos.y,  mangopos.x, mangopos.y);

  //and what does .r stand for here?
  if(distance <= objectA.radius + objectB.radius){
  Matter.Body.setStatic(objectB.body, false);
  }
}

