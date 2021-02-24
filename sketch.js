var bullet , wall , speed , weigth , thick;
function setup() {
  createCanvas(1600,400);

  bullet= createSprite(100,200,100,50);
  bullet.shapeColor="white";
  
  thick= random(22,83);
  wall=createSprite(1200,200,thick,height/2);
  wall.shapeColor= color(80,80,80);
  
  speed =random(223,321);
  weight=random(30,52);
  
  bullet.velocityX=speed;
}

function draw() {
  background("lightblue");
   
    if(hasColided(bullet,wall))
  {
    bullet.velocityX=0;
 
     var damage= 0.5*weight*speed*speed/(thick*thick*thick);
    if(damage>10)
    {
     wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
     wall.shapeColor=color(0,255,0);
    }

  }

  drawSprites();
}