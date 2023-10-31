// @ FEATURES OF ALIENS

let speedx = 1.5;
let speedy = 0.1;
let collideE = false;

let enemies = [
  {row:1, x:40, y:90, alive: true, xInit: 40, yInit: 90, speedx: speedx, speedy: speedy}, 
  {row:1, x:110, y:90, alive: true, xInit: 110, yInit: 90, speedx: speedx, speedy: speedy},
  {row:1, x:180, y:90, alive: true, xInit: 180, yInit: 90, speedx: speedx, speedy: speedy},
  {row:1, x:250, y:90, alive: true, xInit: 250, yInit: 90, speedx: speedx, speedy: speedy},
  {row:1, x:320, y:90, alive: true, xInit: 320, yInit: 90, speedx: speedx, speedy: speedy},
  {row:1, x:390, y:90, alive: true, xInit: 390, yInit: 90, speedx: speedx, speedy: speedy},
  {row:1, x:460, y:90, alive: true, xInit: 460, yInit: 90, speedx: speedx, speedy: speedy},
  {row:1, x:530, y:90, alive: true, xInit: 530, yInit: 90, speedx: speedx, speedy: speedy},
  {row:1, x:600, y:90, alive: true, xInit: 600, yInit: 90, speedx: speedx, speedy: speedy},
               
  {row:2, x:40, y:140, alive: true, xInit: 40, yInit: 140, speedx: speedx, speedy: speedy},
  {row:2, x:110, y:140, alive: true, xInit: 110, yInit: 140, speedx: speedx, speedy: speedy},
  {row:2, x:180, y:140, alive: true, xInit: 180, yInit: 140, speedx: speedx, speedy: speedy},
  {row:2, x:250, y:140, alive: true, xInit: 250, yInit: 140, speedx: speedx, speedy: speedy},
  {row:2, x:320, y:140, alive: true, xInit: 320, yInit: 140, speedx: speedx, speedy: speedy},
  {row:2, x:390, y:140, alive: true, xInit: 390, yInit: 140, speedx: speedx, speedy: speedy},
  {row:2, x:460, y:140, alive: true, xInit: 460, yInit: 140, speedx: speedx, speedy: speedy},
  {row:2, x:530, y:140, alive: true, xInit: 530, yInit: 140, speedx: speedx, speedy: speedy},
  {row:2, x:600, y:140, alive: true, xInit: 600, yInit: 140, speedx: speedx, speedy: speedy},
               
  {row:3, x:40, y:190, alive: true, xInit: 40, yInit: 190, speedx: speedx, speedy: speedy},
  {row:3, x:110, y:190, alive: true, xInit: 110, yInit: 190, speedx: speedx, speedy: speedy},
  {row:3, x:180, y:190, alive: true, xInit: 180, yInit: 190, speedx: speedx, speedy: speedy},
  {row:3, x:250, y:190, alive: true, xInit: 250, yInit: 190, speedx: speedx, speedy: speedy},
  {row:3, x:320, y:190, alive: true, xInit: 320, yInit: 190, speedx: speedx, speedy: speedy},
  {row:3, x:390, y:190, alive: true, xInit: 390, yInit: 190, speedx: speedx, speedy: speedy},
  {row:3, x:460, y:190, alive: true, xInit: 460, yInit: 190, speedx: speedx, speedy: speedy},
  {row:3, x:530, y:190, alive: true, xInit: 530, yInit: 190, speedx: speedx, speedy: speedy},
  {row:3, x:600, y:190, alive: true, xInit: 600, yInit: 190, speedx: speedx, speedy: speedy},
  
  {row:4, x:40, y:240, alive: true, xInit: 40, yInit: 240, speedx: speedx, speedy: speedy},
  {row:4, x:110, y:240, alive: true, xInit: 110, yInit: 240, speedx: speedx, speedy: speedy},
  {row:4, x:180, y:240, alive: true, xInit: 180, yInit: 240, speedx: speedx, speedy: speedy},
  {row:4, x:250, y:240, alive: true, xInit: 250, yInit: 240, speedx: speedx, speedy: speedy},
  {row:4, x:320, y:240, alive: true, xInit: 320, yInit: 240, speedx: speedx, speedy: speedy},
  {row:4, x:390, y:240, alive: true, xInit: 390, yInit: 240, speedx: speedx, speedy: speedy},
  {row:4, x:460, y:240, alive: true, xInit: 460, yInit: 240, speedx: speedx, speedy: speedy},
  {row:4, x:530, y:240, alive: true, xInit: 530, yInit: 240, speedx: speedx, speedy: speedy},
  {row:4, x:600, y:240, alive: true, xInit: 600, yInit: 240, speedx: speedx, speedy: speedy},
  
  {row:5, x:40, y:295, alive: true, xInit: 40, yInit: 295, speedx: speedx, speedy: speedy},
  {row:5, x:110, y:295, alive: true, xInit: 110, yInit: 295, speedx: speedx, speedy: speedy},
  {row:5, x:180, y:295, alive: true, xInit: 180, yInit: 295, speedx: speedx, speedy: speedy},
  {row:5, x:250, y:295, alive: true, xInit: 250, yInit: 295, speedx: speedx, speedy: speedy},
  {row:5, x:320, y:295, alive: true, xInit: 320, yInit: 295, speedx: speedx, speedy: speedy},
  {row:5, x:390, y:295, alive: true, xInit: 390, yInit: 295, speedx: speedx, speedy: speedy},
  {row:5, x:460, y:295, alive: true, xInit: 460, yInit: 295, speedx: speedx, speedy: speedy},
  {row:5, x:530, y:295, alive: true, xInit: 530, yInit: 295, speedx: speedx, speedy: speedy},
  {row:5, x:600, y:295, alive: true, xInit: 600, yInit: 295, speedx: speedx, speedy: speedy}
];
let aliens = enemies.length;

function enemiesOnScreen(){
    for (let alien of enemies){
      if (alien.alive === true && alien.row === 1){
        image(imageAlien1, alien.x, alien.y); // 60x50
      }else if (alien.alive === true && alien.row === 2){
        image(imageAlien2, alien.x, alien.y); // 60x50
      }else if (alien.alive === true && alien.row === 3){
        image(imageAlien3, alien.x, alien.y); // 60x50
      }else if (alien.alive === true && alien.row === 4){
        image(imageAlien4, alien.x, alien.y); // 60x50
      }else if (alien.alive === true && alien.row === 5){
        image(imageAlien5, alien.x, alien.y); // 60x50
      } 
    }
}

function moveEnemies(){
  for (let alien of enemies){
    alien.x += alien.speedx;
    alien.y += alien.speedy;
    
    if (alien.x + 60 > width || alien.x < 0){
      alien.speedx *= -1;
    } else if (alien.y + 50 > height && alien.alive === true){
      lifes -= 1;
      screen = 'level'+ level + '_start'
      backEnemiesToInit();
    }
    
    if (alien.x > alien.xInit + 30 || alien.x < alien.xInit - 30){
      alien.speedx *= -1;
    }
  }
}

function laserCollisionAlien(){
  for (let laser of laserPositions){
    for (let alien of enemies){
      if (alien.alive === true){
        collideE = collideRectRect(laser.x, laser.y, 8, 30, alien.x, alien.y, 60, 50);
      
        if (collideE){
          soundDeathAlien.play();
          alien.alive = false;
          laser.y = -50;
          score += 10;
          eliminated += 1;
          aliens -= 1;
          text('POW!', alien.x + 30, alien.y + 25);
        }
      }
    }
  }
}

function backEnemiesToInit(){
  for (let alien of enemies){
    alien.x = alien.xInit;
    alien.y = alien.yInit;
  }
}


// FINAL FUNCTION

function displayEnemies(){
  enemiesOnScreen();
  moveEnemies();
  laserCollisionAlien();
}