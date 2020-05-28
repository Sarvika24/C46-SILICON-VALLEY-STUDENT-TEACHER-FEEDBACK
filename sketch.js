var bg ; 
var r  ; 
var road  ; 
var girl  ;
var girl_walk ; 
var girl_backwalk ; 
var girl_idle ;

function preload(){
 bg = loadImage("bg1.jpg");
 r = loadImage("road.jpeg");
 girl_walk = loadAnimation("walk1.png" , "walk2.png" , "walk3.png") ;
 girl_backwalk = loadAnimation("walk1 copy.png" , "walk2 copy.png" , "walk3 copy.png") ;

girl_idle = loadAnimation("walk2.png") ; 


}
 

function setup() {
  createCanvas(displayWidth , 600);
  road = createSprite(displayWidth/2 , 550 , displayWidth , 300 );

  road.addImage("road" , r) ; 
  girl = createSprite(displayWidth-50 , 450);
  girl.addAnimation("girl1" , girl_idle) ; 
  girl.addAnimation("girl2" , girl_walk) ; 
  girl.addAnimation("girl3" , girl_backwalk) ; 

  girl.scale = 2 ; 

}
function draw() {
  background(bg); 
  //if left arrow clicked girl walks
  if(keyDown(LEFT_ARROW)){
    girl.changeAnimation("girl2",girl_walk);
     girl.x -= 10;
   }else if(keyDown(RIGHT_ARROW) === false){
     girl.changeAnimation("girl1",girl_idle);
   } 

   if(keyDown(RIGHT_ARROW)){
    girl.changeAnimation("girl3",girl_backwalk);
     girl.x += 10;
   }
   else if(keyDown(RIGHT_ARROW) === false){
     girl.changeAnimation("girl1",girl_idle);
   } 
  drawSprites();
}