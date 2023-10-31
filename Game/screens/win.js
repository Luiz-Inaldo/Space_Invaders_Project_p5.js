function textWin(){
  textAlign(CENTER);
  fill(255);
  textFont(pixelFont);
  textSize(80);
  text('YOU WIN!', 345, 250);
  textSize(25);
  text('PRESS SPACEBAR TO BACK TO MAIN MENU', 345, 300);
  
  if (keyIsDown(32)){
    screen = 'main menu';
    lifes = 4;
    level = 1;
    bullets = 55;
  }
}