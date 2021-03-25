
var trex,ground;
function setup() {
  createCanvas(800,400);
  trex=createSprite(400, 200, 50, 50);
  ground=createSprite(200,200,20,20);
  ground.velocityX=2;
  trex.velocityX=-2
}

function draw() {
  background(0); 
  console.log(trex.x-ground.x) ;
  console.log(trex.width/2+ground.width/2);
  
  if(trex.x-ground.x<=trex.width/2+ground.width/2&&ground.x-trex.x<=ground.width/2+trex.width/2)
  {
    trex.velocityX=trex.velocityX*(-1);
    ground.velocityX=ground.velocityX*(-1);
  }
 if(trex.y-ground.y<=trex.height/2+ground.height/2&&ground.y-trex.y<=ground.height/2+trex.height/2)
 {

 }
  
