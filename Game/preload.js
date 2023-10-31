let mainFont;
let alienFont;
let arcadeFont;
let menuFont;
let pixelFont;

let imageAlien1;
let imageAlien2;
let imageAlien3;
let imageAlien4;
let imageAlien5;
let imageBoss;
let imagePow;
let imageSpaceshipAnimation;
let imagePlayer;
let imageBackground;
let imageLaser;
let imageHint1;

let soundLaser;
let soundDeathAlien;

function preload(){
  
  // Fonts
  mainFont = loadFont('Fonts/SPACEBAR.ttf');
  alienFont = loadFont('Fonts/aliens.ttf');
  arcadeFont = loadFont('Fonts/arcade.TTF');
  menuFont = loadFont('Fonts/Menu.ttf');
  pixelFont = loadFont('Fonts/pixel.ttf');
  
  // Images
  imageAlien1 = loadImage('Images/alien_1.png');
  imageAlien2 = loadImage('Images/alien_2.png');
  imageAlien3 = loadImage('Images/alien_3.png');
  imageAlien4 = loadImage('Images/alien_4.png');
  imageAlien5 = loadImage('Images/alien_5.png');
  imageBoss = loadImage('Images/boss.png')
  imagePow = loadImage('Images/pow.png');
  imageSpaceshipAnimation = loadImage('Images/Spaceship_Animation.png')
  imagePlayer = loadImage('Images/Spaceship.png');
  imageBackground = loadImage('Images/background.png');
  imageLaser = loadImage('Images/laser.png');
  imageHint1 = loadImage('Images/directionals keys.png')
  
  // Sounds
  soundLaser = loadSound('Sounds/Laser.mp3');
  soundDeathAlien = loadSound('Sounds/Death_Alien.mp3');
}