var car, wall;

var speed, weight;






function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(400, 200, 50, 50);
  car.velocityX=speed;

  wall = createSprite(1550, 200, 60 height/2);
}

function draw() {
  background("black");  
  if(wall.x-car.x < (car.width+wall.width)/2);
  {
    car.velocityX=0;
    var deformation=0.5* weight* speed* speed/22500;
    if(deformation>100);
  }
  {
    car.shapeColor=("yellow");
    wall.shapeColor=("white");
  }
 if(deformation<180 && deformation>100);
 {
   car.shapeColor=("green");
   wall.shapeColor=("white");
 }
 if(deformation<100);
 {
   car.shapeColor=("red");
   wall.shapeColor=("white");
 }

  drawSprites();
}