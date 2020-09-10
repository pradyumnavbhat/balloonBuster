  var bg,bgimage;
var redballoon, redballoonimage;
var blueballoon, blueballoonimage;
var greenballoon, greenballoonimage;
var pinkballoon,pinkballoonimage;
var bow, bowimage, score;
var edges, arrow, arrowimage, arrow1; 
var redB, pinkB, greenB ,blueB ,arrowGroup;

function preload(){
 //load your images here 
  bgimage= loadImage("background0.png");
  redballoonimage= loadImage("red_balloon0.png");
 blueballoonimage= loadImage("blue_balloon0.png");
  greenballoonimage= loadImage("green_balloon0.png");
  pinkballoonimage= loadImage("pink_balloon0.png");
  bowimage = loadImage("bow0.png");
  arrowimage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  bg = createSprite(0,0,600,600);
  bg.addImage(bgimage);
  bg.scale = 3  ;
  
    //creating bow 
  bow = createSprite(530,250,20,20);
  bow.addImage(bowimage);
  edges= createEdgeSprites();  
  
  redB = new Group();
  pinkB = new Group();
  greenB = new Group();
  blueB = new Group();
  arrowGroup = new Group();
  
  score=0;
}

function draw() {
  background("white");
    
  
  
  
  //background position and velocity
    if(bg.x<0){
      bg.x = bg.width/2; 
    }
    bg.velocityX = -3;
  
  //spawing the balloons
  var selectballoon = Math.round(random(1,4));
  
  if(frameCount % 60 == 0){
    if(selectballoon == 1) {
      redBalloon(); 
    }
   else if(selectballoon == 2) {
     blueBalloon(); 
   }
   else if(selectballoon == 3) {
      greenBalloon(); 
   }
    else {
     pinkBalloon(); 
   }    
   } 

  //adding baloon and arrow destroying commands
  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  //movement of bow
  bow.y = mouseY;
  
  
  //arrows
  if(keyDown("space"))  {
       arrow1 = createarrows();
       arrow1.y = bow.y
  }

  //displaying the objects
  drawSprites();
   
 //printing score on screen
  textSize(20);
  text("Score: "+score,500,50);
}

function createarrows() {
   arrow = createSprite(530,250,20,20);
   arrow.addImage(arrowimage);
   arrow.scale = 0.4 ;  
   arrow.velocityX=-6;
   arrowGroup.add(arrow);
   return arrow;
  }

  //red balloon
function redBalloon(){
  redballoon = createSprite(50,Math.round(random(30,590),20,20));
  redballoon.addImage(  redballoonimage);
  redballoon.velocityY = -3;
  redballoon.scale = 0.1;
  redballoon.lifetime = 120;
  redB.add(redballoon);
}   
  
  //blue balloon
function blueBalloon(){
  blueballoon = createSprite(110,Math.round(random(30,590)),20,20);
  blueballoon.addImage(blueballoonimage);
  blueballoon.velocityY = -2;
  blueballoon.lifetime = 120;
  blueballoon.scale = 0.1
  blueB.add(blueballoon);
}
   
  //green balloon
function greenBalloon(){
  greenballoon = createSprite(170,Math.round(random(30,590)),20,20);
  greenballoon.addImage( greenballoonimage);
  greenballoon.velocityY = -2;
  greenballoon.lifetime = 120;
  greenballoon.scale = 0.1
  greenB.add(greenballoon);

}
  
  //pink balloon
function pinkBalloon(){
  pinkballoon = createSprite(200,Math.round(random(30,590)),20,20);
  pinkballoon.addImage(pinkballoonimage);
  pinkballoon.velocityY = -2;
  pinkballoon.lifetime = 120;
  pinkballoon.scale = 1.5
  pinkB.add(pinkballoon);

}

