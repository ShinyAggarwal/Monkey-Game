
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(600,200);
  monkey=createSprite(30,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(300,350,600,10);
  ground.velocityX=-3;
  FoodGroup=new Group();
  obstacleGroup=new Group();
  score=0;
}


function draw() {
  background("white");
  
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  
  if(ground.x<ground.width/2){
    ground.x=ground.width/2;
  }
  
  monkey.collide(ground);
  spawnfood();
  spawnObstacles();
  
  score=Math.ceil(frameCount/frameRate()) ;
  text("Survival Time: "+ score,100,50)
  
   if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);  
    }
    drawSprites();
}

function spawnfood(){
  if(frameCount%80===0){
    banana=createSprite(600,250,20,20);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.velocityX=-3;
    banana.scale=0.1;
    banana.lifetime=300;
    FoodGroup.add(banana);
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(600,330,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-3;
    obstacle.scale=0.18;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
  }
}



