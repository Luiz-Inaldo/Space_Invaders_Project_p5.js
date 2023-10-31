//let enemies = [];
let collideE = false;
let aliens = 30

class Alien{
  constructor(){
    this.posX = random(3, 600)
    this.posY = random(69, 500)
    this.Xspeed = random(1, 2.2)
    this.Yspeed = random(1, 2.1)
    this.IsAlive = true  
  }
  
  display(){
    image(imageAlien1, this.posX, this.posY)
  }
  
  move(){
    this.posX += this.Xspeed
    this.posY += this.Yspeed
    
    if(this.posX + 63 > width || this.posX < 3){
      this.Xspeed *= -1
    } else if(this.posY + 60 > height || this.posY < 76){
      this.Yspeed *= -1;
    }
  }
  
  collisionLaser(){
    
  }
}

function laserCollisionAlien(){
  for (let laser of laserPositions){
    for (let alien of enemies){
      if (alien.IsAlive === true){
        collideE = collideRectRect(laser.x, laser.y, 8, 30, alien.posX, alien.posY, 60, 50);
      
        if (collideE){
          soundDeathAlien.play();
          alien.IsAlive = false;
          laser.y = -50;
          score += 10;
          eliminated += 1;
          aliens -= 1;
          text('POW!', alien.posX + 30, alien.posY + 25);
        }
      }
    }
  }
}

function theEnemies(){
  for(let i = 0;i < enemies.length; i++){
    if(enemies[i].IsAlive === true){
      enemies[i].display();
      enemies[i].move();
    }    
  }  
  laserCollisionAlien();
}