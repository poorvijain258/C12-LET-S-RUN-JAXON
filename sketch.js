var runner , bomb, path;
var path, power , coin;
var pathImg , poweImg , coinImg;
var runnerImg, bombImg , energyDrinkImg ;
var coinscore ;

function preload(){
  //pre-load images
runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
powerImg = loadImage("power.png");
coinImg = loadImage("coin.png");
pathImg= loadImage("path.png");
bombImg = loadImage("bomb.png");
energyDrinkImg = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale =1.2;
  path.y = height/2;

  runner = createSprite(100,350,10,20);
  runner.addAnimation("running" , runnerImg);
  runner.scale = 0.1;

   
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
           
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
 
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;

  power=createSprite(200,90,20,20);
  power.addImage(powerImg);
  power.scale=0.5
 
  left_boundary=createSprite(23,300,100,600);
  left_boundary.visible=false;

  right_boundary=createSprite(390,300,80,60)
  right_boundary.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin Score',4, 300);
  textSize(10);
  text('runner', 20,230);
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400) {
  path.y=height/2 ;
  if(runner.isTouching(coin)) {
  coinscore = coinscore+1;
 }
  
}
runner.collide(left_boundary);
runner.collide(right_boundary);
edges=createEdgeSprites();
runner.collide(edges);
drawSprites();
}


