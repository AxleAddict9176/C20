var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 50);
  fixedRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "orange";

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
}

function draw() {
  background("grey");
  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  /* isTouching Function Logic
  if (
    movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 
    ) {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "orange";
  }
  */

  // BounceOff Function Logic
  if (movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2)
    {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = movingRect.velocityX * (-1);
    }
  if (movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2) {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = movingRect.velocityY * (-1);
  }
  drawSprites();
}