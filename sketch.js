const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6;
var box21,box22,box23,box24,box25,box26;
var box31,box32,box33,box34,box35,box36,box37,box37;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);

  box21 = new Box(700, 100, 70, 70);
  box22 = new Box(700, 100, 70, 70);
  box23 = new Box(700, 100, 70, 70);
  box24 = new Box(700, 100, 70, 70);
  box25 = new Box(700, 100, 70, 70);
  box26 = new Box(700, 100, 70, 70);

  box31 = new Box(800, 100, 70, 70);
  box32 = new Box(800, 100, 70, 70);
  box33 = new Box(800, 100, 70, 70);
  box34 = new Box(800, 100, 70, 70);
  box35 = new Box(800, 100, 70, 70);
  box36 = new Box(800, 100, 70, 70);
  box37 = new Box(800, 100, 70, 70);
  box38 = new Box(800, 100, 70, 70);

  box41 = new Box(900, 100, 70, 70);
  box42 = new Box(900, 100, 70, 70);
  box43 = new Box(900, 100, 70, 70);
  box44 = new Box(900, 100, 70, 70);
  box45 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();


  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX,y:mouseY});
}