var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
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
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
    

  leftBoundary=createSprite(0,0,100,800);

  // leftBoundary.invisible = false;
  invisibleleftBoundary=createSprite(0,0,100,800);
  invisibleleftBoundary.visible=false;

  // leftBoundary.visible = true;
  visibleleftBoundary=createSprite(0,0,100,800);
  visibleleftBoundary.visible=true;

  // leftBoundary.invisible = true;
  invisibleleftBoundary=createSprite(0,0,100,800);
  invisibleleftBoundary.visible=true;

  // leftBoundary.visible = false;
  visibleleftBoundary=createSprite(0,0,100,800);
  visibleleftBoundary.visible=false;


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
      
  drawSprites();
}
