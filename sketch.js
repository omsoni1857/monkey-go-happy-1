var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,350)
  
  monkey = createSprite(50,300,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.13;
  
  ground = createSprite(400,350,900,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
 
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background(240);
  
  
     monkey.collide(ground);
  
   if(keyDown("space") && monkey.y >= 245) {
      monkey.velocityY = -17;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  spawnBananas();
  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:", +score, 400, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);


  drawSprites();
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 250;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    bananaGroup.add(banana);
  }
  
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(350,318,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    obstacle.depth = ground.depth;
    ground.depth = ground.depth + 1;
    
    obstacleGroup.add(obstacle);
  }
  
}







