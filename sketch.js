const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var count=0;
var gameState="play";
var particle;
function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);
ground= new Ground(240,690,480,20);



for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinkos(j,75));
}
for(var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinkos(j,175));
}
for(var j=30;j<=width-15;j=j+50){
  plinkos.push(new Plinkos(j,265));
}
for(var j=30;j<=width-10;j=j+60){
  plinkos.push(new Plinkos(j,350));
}
for(var k=0;k<=width;k=k+80){
divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}



}

function draw() {
  background(0); 
  textSize(30);
  text("score:"+score,200,50);
  Engine.update(engine);
  ground.display();
  
 
// if(frameCount%60===0){
 // particles.push(new Particle(random(0,400),10,10));
//}
  for(var j=0;j<plinkos.length;j++){

    plinkos[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var a=0;a<particles.length;a++){
    particles[a].display();
  }
  if(particle!=null){
   
    particle.display();
    if(particle.body.position.y>650){
      if(particle.body.position.x>200){
        score=score+500;
        particle=null;
       
      }
    } 
    
    if(count>=5){
      gameState="end";
    }
  }

 // drawSprites();
}
function keyPressed(){
  if(keyCode===32){
  if(gameState!=="end"){
    count=count+1
    particle=new Particle(random(0,400),10,10)
  }
}
}
