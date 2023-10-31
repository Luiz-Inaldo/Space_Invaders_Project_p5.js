// @ TOP BAR, where display the points, level, and lifes of player.

let score = 0;
let eliminated = 0;
let lifes = 4;
let level = 1;
let bullets = 55;

class TopBar{
  constructor(){
    
    // features of main bar
    this.xBar = -3
    this.yBar = -3
    this.widthBar = 705
    this.heightBar = 70
    
  }
  
  displayMain(){
    fill('rgba(65,105,225, 0.95)')
    /*stroke(0, 0, 205)
    strokeWeight(4)*/
    rect(this.xBar, this.yBar, this.widthBar, this.heightBar)
  }
  
  displayOthers(){
    
    textFont(pixelFont)
    textAlign(LEFT)
    textSize(20)
    fill(255)
    
    // display score
    text('SCORE:', 20, 25)
    text(score, 110, 25)
    
    // display e. monsters
    text('ELIMINATED:', 20, 50)
    text(eliminated, 185, 50)
    
    // display lifes
    text('LIFES:', 250, 25)
    text(lifes, 340, 25)
    
    // display aliens
    text('ALIENS:', 285, 50)
    text(aliens, 390, 50)
    
    // display bullets
    text('BULLETS:', 415, 25)
    text(bullets, 535, 25)
    
    // display level
    text('LEVEL:', 600, 25)
    textAlign(CENTER)
    textSize(40)
    text(level, 640, 55)
  }
}

let mainTopBar = new TopBar();

function displayTopBar(){
  mainTopBar.displayMain();
  mainTopBar.displayOthers();
}