//logic of istouching

var trex,ground;
function setup() {
  createCanvas(800,400);
  trex=createSprite(400, 200, 50, 50);
  ground=createSprite(200,200,20,20);
}

function draw() {
  background(0); 
  console.log(trex.x-ground.x) ;
  console.log(trex.width/2+ground.width/2);
  trex.x=World.mouseX;
  trex.y=World.mouseY;
  if(trex.x-ground.x<=trex.width/2+ground.width/2&&ground.x-trex.x<=ground.width/2+trex.width/2)
  {
    trex.shapeColor="red";
    ground.shapeColor="red";
  }
  else
  {
    trex.shapeColor="green";
    ground.shapeColor="green";
  }
  drawSprites();
}