var canvas, backgroundImage;
var gameState=1;
var pittie;
var gram;
var dia;
var truck;
var purse;
var bg,bg2;
var nxt;
var but;
var ground1;

function preload(){
dia= loadImage("dia.png");
nxt= loadImage("nxt.png");
gramANI=loadAnimation("grammy.png");
gram=loadAnimation("gram.png");
pittie=loadAnimation("dog.png");
pittieANI=loadAnimation("doggy2.png","doggy5.png","doggy1.png","doggy4.png","doggy3.png");
truck=loadImage("truck.png");
purse=loadImage("purse.png");
bg=loadImage("bg1.png");
ground=loadImage("grounds.png");
road=loadImage("jbg.png");
bgs=loadAnimation("jbg.png","jbg1.png");


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);


   bg1 = createSprite(width/4,height/2,width,2);
   bg1.addImage(road);
   bg1.velocityX = 8;
   //bg1.x=width/4;
  bg1.scale=4.6;
   
  
 
  


 gram1=createSprite(1400,400);
 gram1.addAnimation("grammy",gram);
 gram1.addAnimation("gram",gramANI);
 gram1.changeAnimation("gram");
 gram1.scale=2.7;
 
 purse1=createSprite(100,560);
 purse1.addImage(purse);
 purse1.scale=0.8
 purse1.visible=false;

 nxt1=createSprite(1400,150);
 nxt1.addImage(nxt);
 nxt1.scale=0.3

 pittie1=createSprite(100,460);
 pittie1.addAnimation("dog",pittie);
 pittie1.addAnimation("pittieA",pittieANI);
 pittie1.changeAnimation("dog");
 pittie1.scale=1.5;

 dia1=createSprite(700,200);
 dia1.addImage(dia);
 dia1.scale=0.5;
}

function mouseClicked(nxt1){

  gameState = 2;
  console.log(gameState);
 

}

function draw(){
 
  background(0);

  if(gameState===2){
    
  
  pittie1.x=1200;
  pittie1.y=670
  pittie1.changeAnimation("pittieA");
  bg1.visible=true;
  gram1.changeAnimation("grammmy");
  dia1.destroy();
  
  


if(keyDown(UP_ARROW)) {
  
  pittie1.y = pittie1.y-40;
}

if(keyDown(DOWN_ARROW)) {
  
  pittie1.y = pittie1.y+40;
}



if(keyWentUp("up")||keyWentUp("down")){
 pittie1.y=pittie.y;
}

} 

if (bg1.x > 500 ){

  bg1.x = 450;
  
  console.log(bg1.x);
}

 if(gameState===1){
   background(bg);
   bg1.visible=false;
  
 }


if(gameState===3){
  game.End();
  purse1.visible=true;
}


text(mouseX+","+mouseY,mouseX,mouseY);
drawSprites();
}
