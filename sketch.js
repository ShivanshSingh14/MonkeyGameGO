
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0; 
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(500,500)
    
monkey=createSprite(80,315,20,20)  
monkey.addAnimation("running",monkey_running) ; 
monkey.scale=0.1;

ground=createSprite(500,350,1000,10)  
ground.velocityX=-4;
console.log(ground.x)  
  
  
  
  
  
  
}


function draw() {
 background("white");
  
 stroke("white"); 
 textSize(20); 
 fill("black"); 
 text("Score = "+score,500,50) ;
  
  
 stroke("white"); 
 textSize(20); 
 fill("black"); 
 text("Survival Time = "+survivaltime,100,50) ;
 survivaltime=Math.ceil(frameCount/frameRate()) ;  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  if(keyDown("space")&&monkey.y>150){
    monkey.velocityY=-12
  }
  
monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(ground);
  
 
  
  
  
  
  
  
  
  
  
  
  
spawnobstacle();
 spawnbanana() ;
drawSprites();
  
}

function spawnbanana (){
if (frameCount%80===0) {
var banana=createSprite(450,400,20,20)  ;
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;   
  banana.lifetime = 250; 
  
  banana.depth=monkey.depth;
  monkey.depth=monkey.depth+2;
  
} 
  
  
 
  
}

function spawnobstacle (){
if (frameCount%300===0) {
var obstacle=createSprite(450,315,20,20)  ;
  obstacle.x = Math.round(random(450,500));
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.2 ;
  obstacle.velocityX = -3;   
  obstacle.lifetime = 250; 
  
    
  
} 

}
