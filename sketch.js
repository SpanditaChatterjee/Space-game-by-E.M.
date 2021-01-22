//Global variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var canvas, backgroundImg;
var boy,boyImg,boyjump;
var groundgroup, bulletgroup,ob2group;
var backgroundImg;
var bulletImg;
var groundImg1,groundImg2;
var ground2,ground2Img;
var jumpSound;
var count = 0;



/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/

function preload()
{
	boyImg=loadAnimation("a4.png","a5.png","a3.png","a6.png");
	boyjump=loadAnimation("b1.png");
	groundImg1=loadImage("Junk1.png");
	groundImg2=loadImage("Junk2.png");
	bulletImg=loadImage("meteor.png");
	backgroundImg=loadImage("Background6.jpg");
	ground2Img=loadImage("Background5.gif");
	jumpSound=loadSound("jump.mp3");


}

function setup() {
	canvas = createCanvas(displayWidth, displayHeight-110);
	console.log(canvas);


	/*engine = Engine.create();
	world = engine.world*/

	//Background
	Mars=createSprite(displayWidth/2,displayHeight/2-55);
	Mars.addImage("back",backgroundImg);
	Mars.scale=3.2;
	

	//Ground2
	fill(0,0,0);
	ground2=createSprite(displayWidth/2,displayHeight-100,displayWidth,displayHeight/10);
	//ground2.addImage("floor",ground2Img);	1
    //ground2.scale=0.8;

	//Create the Bodies Here.
	boy=createSprite(displayWidth/10,displayHeight/2);
	boy.addAnimation("walking",boyImg);
	boy.addAnimation("jump",boyjump);
	boy.scale=1.1;

	groundgroup = new Group();
	bulletgroup = new Group();
	ob2group = new Group();
	//Engine.run(engine);

	
}
	

 
	
function draw() {
  rectMode(CENTER);
  background(0);
  textSize(32);
  //textColor('violet')

  //scoring
	count = count + Math.round(World.frameRate/60);
	//display score
	
    

  if(gameState === PLAY){

	spawnground();
	spawnbullets();
	spawnobstacle2();
  }
  
  
   /*Mars.velocityX=-10;
   if (Mars.x <400){
   Mars.x = Mars.width/2;
}*/
   //fill(255,0,0);


   if(boy.x > 1000){

	boy.x = displayWidth/10;
	groundgroup.destroyEach();

   }

   

  if(keyDown("space") && boy.y >= 210){
	boy.changeAnimation("jump",boyjump);
	boy.velocityY = -14 ;
	boy.velocityX = 0.2;
	jumpSound.play();
	console.log(boy);
  }

  if(keyDown("RIGHT_ARROW") && boy.y >= 210){
	boy.velocityY = 0 ;
	boy.velocityX = 5;
	console.log(boy);
  }

  if(keyDown("LEFT_ARROW") && boy.y >= 210){
	boy.velocityY = 0 ;
	boy.velocityX = -1;
	console.log(boy);
  }

  if(keyDown("DOWN_ARROW") && boy.y >= 110){
	boy.velocityY = 7 ;
	boy.velocityX = 0;
	console.log(boy);
  }

	boy.velocityY = boy.velocityY + 0.8;
	//boy.velocityX=2;

    
		

	boy.collide(groundgroup);
	boy.collide(ground2);
	boy.collide(bulletgroup);
	boy.collide(ob2group);
	
	text

	drawSprites();

	fill(0,0,0)
	textFont("Georgia");
	text("Score: "+ count, 900, 100);

	if(boy.x < displayWidth-displayWidth-100){

		text("Game over",displayWidth/2-55,displayHeight/2);
		groundgroup.destroyEach();
		bulletgroup.destroyEach();
		ob2group.destroyEach();
		count=0;
		//displayImage("Background1.jpg");
	
	
	   }
}

function spawnground (){
  
	if (frameCount % 40 === 0) {
	 //fill(255);
	 var ground=createSprite(1700,320,700,20);
	 ground.y=Math.round(random(200,900));
	 
	 ground.addImage(groundImg1);
	 ground.scale=Math.round(random(1.7,3.7));
	 ground.displayWidth=10;
	 ground.velocityX = -10;
	 ground.lifetime = 200;
	 
	 //adjust the depth
	 /*ground.depth = boy.depth;
	 boy.depth = boy.depth + 1;*/
	 
	 groundgroup.add(ground);
   }
 }

 function spawnobstacle2 (){
  
	if (frameCount % 100 === 0) {
	 //fill(255);
	 var ob2=createSprite(1700,320,700,20);
	 ob2.y=Math.round(random(200,900));
	 
	 ob2.addImage(groundImg2);
	 ob2.scale=Math.round(random(0.6,1.7));
	 ob2.displayWidth=10;
	 ob2.velocityX = -14;
	 ob2.lifetime = 200;
	 
	 //adjust the depth
	 /*ground.depth = boy.depth;
	 boy.depth = boy.depth + 1;*/
	 
	 ob2group.add(ob2);
   }
 }

 function spawnbullets (){
  
	if (frameCount % 30 === 0) {
	 //fill(255);
	 var bullet=createSprite(1700,100,20,20);
	 bullet.y=Math.round(random(boy.y-100,boy.y+100));
	 //bullet.x = boy.x-50;
	 bullet.addImage(bulletImg);
	 bullet.scale=random(0.2,0.7);
	 //bullet.scale=1;
	 bullet.velocityX = -25;
	 //bullet.velocityY = 7;
	 bullet.lifetime = 234;
	 //bullet.velocityY = bullet.velocityY+8;
	 //adjust the depth
	 /*ground.depth = boy.depth;
	 boy.depth = boy.depth + 1;*/
	 
	 bulletgroup.add(bullet);
   }
 }
 



