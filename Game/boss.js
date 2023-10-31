let bossX = 200;
let bossY = 90;
let bossSpeedX = 4;
let bossSpeedY = 0.9;
let initBossX = 200;
let initBossY = 90;
let bossHP = 500;
let bossAlive = true;
let collideB = false;

function bossOnScreen(){
  if (bossAlive){
    image(imageBoss, bossX, bossY);
    fill(255, 0, 0);
    text('HP: '+ bossHP, 590, 110);
  }
}

function moveBoss(){
  if (bossAlive){
    bossX += bossSpeedX;
    bossY += bossSpeedY;
  
    if (bossX + 300 > 695 || bossX < 5){
      bossSpeedX *= -1;
    } else if (bossY+ 120 > yPlayer){
      lifes -= 1;
      screen = 'level'+ level + '_start'
      backBossToInit();
    }
  }
}

function laserCollisionBoss(){
  for (let laser of laserPositions){
    if (bossAlive){
      collideB = collideRectRect(laser.x, laser.y, 8, 30, bossX, bossY, 300, 120);
      
      if (collideB && bossHP > 0){
        soundDeathAlien.play();
        bossHP -= 10;
        laser.y = -50;
      } else if (collideB && bossHP === 0){
        soundDeathAlien.play();
        bossAlive = false;
        laser.y = -50;
        score += 5000;
        aliens -= 1;
        textSize(45);
        text('POW!', bossX + 150, bossY + 60);
        screen = 'win';
      }
    }
  }
}

function backBossToInit(){
  bossX = initBossX;
  bossY = initBossY;
}
  
function displayBoss(){
  bossOnScreen();
  laserCollisionBoss();
  moveBoss();
}true