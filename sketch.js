var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);


  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;


  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1=createSprite(200,100,30,50);
  gameObject1.shapeColor="pink";

  gameObject2=createSprite(300,100,30,50);
  gameObject2.shapeColor="pink";

  gameObject3=createSprite(400,100,30,50);
  gameObject3.shapeColor="pink";

  gameObject4=createSprite(500,100,30,50);
  gameObject4.shapeColor="pink";

}

function draw() {
  background(0,0,0);  
 movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouchings(movingRect,gameObject1)){
  gameObject1.shapeColor = "purple";
  movingRect.shapeColor = "purple";
 }
 else{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "pink";

 }
  drawSprites();
}

