const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    var Stop = {
        isStatic:true
    }
    engine = Engine.create();
    world = engine.world;
    ground = Bodies.rectangle(200,350,400,100,Stop);
    World.add(world,ground);
    box1 = new Box(200,200,100,100);
    box2 = new Box(255,50,20,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display("Green");
    box2.display("Blue");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,100);
}