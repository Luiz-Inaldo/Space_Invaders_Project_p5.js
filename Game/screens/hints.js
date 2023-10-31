function textHowToPlay(){
  
  textFont(alienFont);
  textSize(45);
  textAlign(CENTER);
  fill(255, 0, 0);
  stroke(255);
  strokeWeight(6);
  text('H', 100, 100);
  
  textFont(pixelFont);
  textSize(60);
  textAlign(CENTER);
  noStroke();
  fill(255);
  text('HOW TO PLAY', 405, 100);
  
  image(imageHint1, 50, 200);
  
  
  // back to menu
  if (keyIsDown(27)){
    screen = 'main menu';
  }
  
}