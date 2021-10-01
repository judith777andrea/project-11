var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var bomb,bomb_1,bomb_2;
var bombImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png")
  bombImg = loadAnimation("bomb.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.06;
boy.addAnimation("JakeRunning",boyImg);
  
bomb=createSprite(200,0,10,10);
bomb.scale=0.1
bomb.addAnimation("falling bomb",bombImg)
bomb.velocityY= 3;

bomb_1=createSprite(100,0,10,10);
bomb_1.scale=0.1;
bomb_1.addAnimation("falling bomb",bombImg);
bomb_1. velocityY=8;

bomb_2=createSprite(300,0,10,10);
bomb_2.scale=0.1;
bomb_2.addAnimation("falling bomb",bombImg);
bomb_2. velocityY=6;

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){

    path.y = height/2;
    
  }

  if(boy.collide( bomb_2,bomb)){

    path.velocityY= 0
    bomb.velocityY= 0
    bomb_1.velocityY= 0
    bomb_2.velocityY= 0

  }

  if(boy.collide( bomb_1,bomb)){

    path.velocityY= 0
    bomb.velocityY= 0
    bomb_1.velocityY= 0
    bomb_2.velocityY= 0


  }


  if(bomb_1.y>410){

    bomb_1.y = 0
  }

  
  if(bomb_2.y>410){

    bomb_2.y = 0
  }
 
  if(bomb.y>410){

    bomb.y = 0
 
  }

  
 console.log(path.y)
  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
