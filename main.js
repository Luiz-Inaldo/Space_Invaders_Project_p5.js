let screen = 'main menu';
let menuSelection = 1;
let soundPrincipal = 'on';

function setup() {
  createCanvas(700, 700);
  /*for(let i = 0; i < 30; i++){
    enemies.push(new Alien())
  }*/
}

function draw() {
  //console.log(menuPauseSelection)
  // main menu
  if (screen === 'main menu'){
    background(0);
    textMainMenu();
  }
  
  // game running
  if (screen === 'level1_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level2_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level3_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level4_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level5_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level6_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level7_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level8_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level9_start'){
    background(imageBackground);
    displayTopBar();
    textLevelStart();
  } else if (screen === 'level10_start'){
    background(imageBackground);
    displayTopBar();
    textBossStart();
  } else if (screen === 'win'){
    background(imageBackground);
    displayTopBar();
    textWin();
  }
  
  
  
  if (screen === 'level'){
    background(imageBackground);
    displayTopBar();
    loadPlayer();
    shoot();
    displayEnemies();
    gameOver();
    changeLevel();
    if (keyIsDown(27)){
      screen = 'pause_menu';
    }
  } else if (screen === 'boss_level'){
    background(imageBackground);
    displayTopBar();
    loadPlayer();
    shoot();
    displayBoss();
    gameOver();
    changeLevel();
  }
  
  // paused game
  if (screen === 'pause_menu'){
    background(imageBackground);
    displayTopBar();
    textPauseMenu();
  }
  
  // options menu
  if (screen === 'how_to_play'){
    background(0);
    textHowToPlay();
  }
  
  // game over
  if (screen === 'game over'){
    background(imageBackground);
    displayTopBar();
    textGameOver();
  }
  
}