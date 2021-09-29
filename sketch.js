const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var backgroundImg,food,buxbunny



function preload(){
 buxbunny=loadImage("rabbit-01.png")
 food=loadImage("melon.png")

   backgroundImg=loadImage("background.png")


}







function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
bunny=createSprite(250,650,100,100);
bunny.addImage(buxbunny)
bunny.scale=0.2
  rectMode(CENTER);
  imageMode(CENTER)
  ellipseMode(RADIUS);
  textSize(50)
  button=createImg('cut_button.png')
  button.position(220,30)
button.size(50,50)
button.mouseClicked(drope)
}

function draw() 
{
  background(51);
  image(backgroundImg,width/2,height/2,500,700)
  
  
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,30,30);
  Engine.update(engine);
  ground.show();

  image(food,fruit.position.x,fruit.position.y,60,60)
  
  drawSprites() 
}
function drope(){
  rope.break()
  fruit_con.detach()
  fruit_con.null()
}