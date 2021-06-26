const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7,rubber8,rubber9,rubber10,rubber11;
var iron1,iron2;
var stone;

function setup(){
    console.log(windowWidth)
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
rubber=new Rubber(50,height-100,30);
rubber1=new Rubber(100,height-100,30);
rubber2=new Rubber(150,height-100,30);
rubber3=new Rubber(200,height-100,30);
rubber4=new Rubber(250,height-100,30);
rubber5=new Rubber(300,height-100,30);
rubber6=new Rubber(350,height-100,30);
rubber7=new Rubber(400,height-100,30);
rubber8=new Rubber(450,height-100,30);
rubber9=new Rubber(500,height-100,30);
rubber10=new Rubber(550,height-100,30);
rubber11=new Rubber(600,height-100,30);
iron1=new Iron(600,height-200,100);
iron2=new Iron(200,height-200,150);

stone=new Stone(200,height-700,150);
}


function draw(){
    background(random(0,255),random(0,255),random(0,255));
    Engine.update(engine);


    plane.display();
    hammer.display();
rubber.display();
rubber1.display();
rubber2.display();
rubber3.display();
rubber4.display();
rubber5.display();
rubber6.display();
rubber7.display();
rubber8.display();
rubber9.display();
rubber10.display();
rubber11.display();   

iron1.display();
iron2.display(); 
stone.display();

}