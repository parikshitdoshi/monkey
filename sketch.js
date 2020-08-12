//Global Variables
var monkey, banana, obstacle, jungle,backImage,monkeyImage,
    bananaImage,obstacleImage,ground;
var score = 0;
var obstacleGroup,fruitGroup;

function preload(){
  
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backImage = loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  
}


function setup() {
  createCanvas(400,400);
  
  jungle = createSprite(200,200,400,400);
  jungle.addImage(backImage);
  jungle.velocityX = -3;
 // jungle.x = background.width/2;
  
  monkey = createSprite(100,337,20,20);
  monkey.addAnimation("running",monkeyImage);
  
  
  ground = createSprite(200,390,400,10);
  ground.velocityX = -3;
  
  
  ground.visible = false;
  
  
  monkey.scale = 0.07;
  
  
  
  obstacleGroup = new Group();
  fruitGroup = new Group();
  
}


function draw(){
  
  background(255); 
  
  monkey.collide(ground);
  

  
  
  if(jungle.x<0){
    
    
    jungle.x = jungle.width/2;


  }
  if(ground.x<0){
    
    ground.x = ground.width/2;

     }
  
  if(keyDown("space")){
    
    monkey.velocityY = -10;


  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(fruitGroup.isTouching(monkey)){
    
    score = score+2;
    fruitGroup.destroyEach();

     }
  
  
 switch(score){
     
  case 10:monkey.scale = 0.09;
          break;
  case 20:monkey.scale = 0.1;
          break;
  case 30:monkey.scale = 0.2;
          break;
  case 40:monkey.scale = 0.3 ;
          break;
  default:break;

        }
  
  if(obstacleGroup.isTouching(monkey)){
    
    monkey.scale = 0.07;


     }
                      
    
    drawSprites();
  monkeyFood();
  stone();
  
  text("score:"+score,334,22);
  

}
 

function monkeyFood(){
  
 
  if(frameCount%60===0){
    
    
    banana = createSprite(200,200,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    banana.velocityX = -2;
    fruitGroup.add(banana);
    banana.y = random(250,100);
    
    
                      
    
    


     }
  
  
  


  }

function stone(){
  
   if(frameCount%200===0) {
    
    obstacle = createSprite(200,390,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -2;
  obstacle.lifetime = 150;
  obstacleGroup.add(obstacle);
   }
  
}