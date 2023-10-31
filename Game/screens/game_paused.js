// Functions of pause menu ##

function textPauseMenu(){
  textAlign(CENTER);
  fill(255);
  textFont(pixelFont);
  textSize(80);
  text('PAUSED!', 345, 400);
  textSize(25);
  text('PRESS ENTER TO RESUME', 345, 450);
  text('PRESS SPACEBAR TO MAIN MENU', 345, 500);
  
  if (keyIsDown(13)){
    screen = 'level';
  } else if (keyIsDown(32)){
    screen = 'main menu';
  }
}

