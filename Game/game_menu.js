// * all functionalities of main menu * \\

function keyPressed(){
  if (keyCode === UP_ARROW && screen === 'main menu'){
    menuSelection = 1
  } else if (keyCode === DOWN_ARROW && screen === 'main menu'){
    menuSelection = 2
  } else if (keyCode === 90 && bullets > 0 && isPlayerAlive){
    laserPositions.push(createVector(xPlayer + 20, yPlayer - 32));
    soundLaser.play();
    bullets -= 1;
  } 
}

function textMainMenu(){
  textAlign(CENTER);
    selec.buttonDisplay();
    showAliensOfAnimation();
    
    // spaceship
    image(imagePlayer, 35, 180, 60, 80);
    
    // aliens
    textFont(alienFont);
    textSize(60);
    stroke(255);
    strokeWeight(6);
    fill(128,0,0);
    text('B', 430, 150);
    fill(0,128,0);
    text('F', 520, 150);
    fill(0,0,139);
    text('D', 600, 150);
    
    // title
    textFont(mainFont);
    textSize(80);
    fill(72,61,139);
    stroke(255);
    strokeWeight(6);
    text('SPACE', 200, 150);
    fill(255,140,0);
    text('INVADERS', 400, 250);
    
    // option 1
    if (menuSelection === 1){
      if (keyIsDown(13)){
        screen = 'level1_start';
      }
    }
    
    textFont(menuFont);
    textSize(30);
    noStroke();
    text('start', 345, 600);
    
    // option 2
    if (menuSelection === 2){
      if (keyIsDown(13)){
        screen = 'how_to_play';
      }
    }
  
    textSize(30);
    noStroke();
    text('how to play', 345, 650);
  
    // about creator
    textSize(20);
    text('by luiz inaldo', 630, 680);
}

class ChooseButtonMain{
  constructor(){
    this.xCircle1 = 280
    this.yCircle1 = 593
    this.xCircle2 = 240
    this.yCircle2 = 643
    this.diameter = 15
  }
  
  buttonDisplay(){
    if(menuSelection === 1){
      circle(this.xCircle1, this.yCircle1, this.diameter);
    } else if (menuSelection === 2){
      circle(this.xCircle2, this.yCircle2, this.diameter);
    }
  }
  
}

let selec = new ChooseButtonMain();


// @ ANIMATION OF MAIN MENU

class Animation {
  constructor(){
    // about alien1
    this.xAlien1 = -100
    this.yAlien1 = 400
    this.sXAlien = 5
    this.sYAlien = 2
    
    // about spaceship
    this.xSpaceship = -300
    this.ySpaceship = 400
    this.sXSpaceship = 5
  }
  
  display(){
    image(imageAlien1, this.xAlien1, this.yAlien1, 50, 50)
    image(imageSpaceshipAnimation, this.xSpaceship, this.ySpaceship, 80, 60)
  }
  
  move(){
    this.xAlien1 += this.sXAlien
    this.yAlien1 += this.sYAlien
    
    this.xSpaceship += this.sXSpaceship
  }
  
  limitsAlienY(){
    if (this.yAlien1 > 450 || this.yAlien1 < 350){
      this.sYAlien *= -1
    }
  }
  
  back(){
    if (this.xAlien1 > 890){
      this.xAlien1 = -40
    } else if (this.xSpaceship > 730){
      this.xSpaceship = -200
    }
  }

}

let a1 = new Animation();

function showAliensOfAnimation(){
  a1.display();
  a1.move();
  a1.limitsAlienY();
  a1.back();
}

