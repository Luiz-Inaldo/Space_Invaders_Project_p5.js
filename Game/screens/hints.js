function textHowToPlay(){
  
  // Alien
  textFont(alienFont);
  textSize(45);
  textAlign(CENTER);
  fill(255, 0, 0);
  stroke(255);
  strokeWeight(6);
  text('H', 100, 100);
  
  // Head
  textFont(menuFont);
  textSize(70);
  textAlign(CENTER);
  noStroke();
  fill(255);
  text('how to play', 405, 100);
  
  // img directional
  image(imageHint1, 30, 200);

  // hint 1
  textSize(20);
  textAlign(LEFT);
  noStroke();
  text('use right and left keys to move the spaceship.', 165, 230);

  // hint 2
  textAlign(LEFT);
  noStroke();
  text('press z key to shot.', 165, 350);

  // Hint 3
  textAlign(LEFT);
  noStroke();
  text('destroy all enemies to proceed to next level!', 165, 450);

  // exit
  textSize(30);
  textAlign(CENTER);
  noStroke();
  text('press esc to back.', 345, 650);
  
  
  // back to menu
  if (keyIsDown(27)){
    screen = 'main menu';
  }
  
}