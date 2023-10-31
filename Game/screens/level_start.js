function textLevelStart(){
  textAlign(CENTER);
  textSize(80);
  text('LEVEL '+ level, 345, 350);
  textSize(35);
  text('PRESS SPACEBAR TO START', 345, 400);
  text('LIFES: ' + lifes, 345, 520);
  
  if (keyIsDown(32)){
    screen = 'level';
  }
}

function textBossStart(){
  textAlign(CENTER);
  textSize(80);
  text('LEVEL '+ level, 345, 350);
  text('BOSS BATTLE!', 345, 470);
  textSize(35);
  text('PRESS SPACEBAR TO START', 345, 400);
  text('LIFES: ' + lifes, 345, 520);
  
  if (keyIsDown(32)){
    screen = 'boss_level';
  }
}

function changeLevel(){
  if (level === 1 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = enemies.length;
    screen = 'level2_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 2 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = enemies.length;
    screen = 'level3_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 3 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = enemies.length;
    screen = 'level4_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 4 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = enemies.length;
    screen = 'level5_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 5 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = enemies.length;
    screen = 'level6_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 6 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = enemies.length;
    screen = 'level7_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 7 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = enemies.length;
    screen = 'level8_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 8 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = enemies.length;
    screen = 'level9_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 9 && aliens === 0){
    
    for (let laser of laserPositions){
      laser.y = -55;
    }
    for (let alien of enemies){
      alien.alive = true;
      alien.speedy += 0.1;
    }
    bullets = 55;
    aliens = 1
    screen = 'level10_start';
    backEnemiesToInit();
    level += 1;
    xPlayer = 345;
    yPlayer = 620;
    textLevelStart();
    
  } else if (level === 10 && aliens === 0){

    for (let laser of laserPositions){
      laser.y = -55;
    }
    screen = 'win';
    
  }
}