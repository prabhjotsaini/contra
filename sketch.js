var m;
var bgImage,playerimages



function preload(){
  bgImage=loadImage("Images/level1.png");
  playerimages=loadImage("Images/player.png");
}
function setup() {
  createCanvas(displayWidth-2,displayHeight-2);
  

   main =createSprite(70,300,30,30);
   main.addImage("player",playerimages)
  main.scale=0.1

  platform=createSprite(130,460,100,15)
platform.shapeColor="red";
   
}

function draw() {
  background(bgImage); 

if (keyDown("left")){
  main.velocityX=-3
main.velocityY=0;
}
if (keyIsDown(RIGHT_ARROW)){
  main.velocityX=5
main.velocityY=0;
}
if (keyIsDown(UP_ARROW)){
  main.velocityX=0
main.velocityY=-5;

if (keyDown(DOWN_ARROW)){
  main.velocityX=0
main.velocityY=5;

}

main.collide(platform);

//main.velocityY=main.velocityY-0.5;



}
  drawSprites();
}

