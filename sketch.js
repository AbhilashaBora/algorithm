var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=+5;
 
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=-5;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="purple";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="purple";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor="purple";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor="purple";
}

function draw() {
  background(0,0,0);  
 

  bounceOff(movingRect,fixedRect);
  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";

  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor= "green";

  }
  
  drawSprites();
}


