let xPlayer = 345;
let yPlayer = 620;
let playerSpeed = 5;
let isPlayerAlive = true;
let collideP = false;

function displayPlayer(){
  if (isPlayerAlive){
    image(imagePlayer, xPlayer, yPlayer); // 50x60
  }
}

function movePlayer(){
  if (keyIsDown(RIGHT_ARROW) && xPlayer + 45 < width && isPlayerAlive){
      xPlayer += playerSpeed;
    } else if (keyIsDown(LEFT_ARROW) && xPlayer > 0 && isPlayerAlive){
      xPlayer -= playerSpeed;
    }
}

function collidePlayerEnemy(){
  for (let alien of enemies){
    if (isPlayerAlive && alien.alive === true){
      collideP = collideRectRect(xPlayer, yPlayer, 50, 60, alien.x, alien.y, 60, 50);
    
      if (collideP){
        lifes -= 1;
        screen = 'level'+ level + '_start'
        backEnemiesToInit();
      }
    }
  }
}

function gameOver(){
  if (lifes === 0){
    screen = 'game over'
  }
}

function loadPlayer(){
  displayPlayer();
  movePlayer();
  collidePlayerEnemy();
  gameOver();
}