// @ FEATURES OF LASER
// @ FUNCTION OF SHOOT LASERS W/ KEY IS IN GAME_MENU.JS

let laserPositions = [];
let laserSpeed = 7;


function createLasers(){
  for (let laser of laserPositions){
    image(imageLaser, laser.x, laser.y); // 10x30
  }
}

function moveLasers(){
  for (let laser of laserPositions){
    laser.y -= laserSpeed;
    if (laser.y < 70){
      laser.y = -50;
    }
  }
}

function shoot(){
  createLasers();
  moveLasers();
}

