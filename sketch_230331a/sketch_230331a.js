// By Joshua Bourne 
// Teacher Pascal Huynh
//502-A22-LA - Web and FX: from Theory to Practice
// Ball Vs. Square 
//https://openprocessing.org/sketch/1885327
//Move the circle with the arrow keys, avoid the square and walls, oh and watch out the circle speeds up 
// the story is just, have fun and compete with your freinds to get the highest score


// Global variables
let gameCount = 0;
let highScore = 0;
let totalScore = 0;
let averageScore=0;
let playerX = 50;
let playerY = 50;
let enemyX = 250;
let enemyY = 250;
let enemySpeed = 5;
let playerSpeed = 5;
let isGameOver = false;
let score = 0;
let lastIncrease = 0;
let isMainMenu = true;


const startVals = {
  playerX: 50,
  playerY: 50,
  enemyX :250,
  enemyY :250,
  enemySpeed: 5,
  playerSpeed : 5,
  isGameOver:  false,
  score : 0,
  lastIncrease :0
}
function setStartVals() {
  totalScore=score+totalScore;
  averageScore=totalScore/gameCount;
  gameCount++
  playerX=startVals.playerX
  playerY=startVals.playerY
  enemyX=startVals.enemyX
  enemyY=startVals.enemyY
  enemySpeed=startVals.enemySpeed
  playerSpeed=startVals.playerSpeed 
  isGameOver=startVals.isGameOver
  score=startVals.score 
  lastIncrease=startVals.lastIncrease
}

function setup() {
  setStartVals();
  averageScore=0;
  createCanvas(500, 500);
}

function draw() {
  // console.log(isMainMenu)
  
  //Player Moment 
  if (isGameOver===true) return;
  if (keyCode === LEFT_ARROW) {
    playerX -= playerSpeed;
  } 
  if (keyCode === RIGHT_ARROW) {
    playerX += playerSpeed;
  }
  if (keyCode === UP_ARROW) {
    playerY -= playerSpeed;
  } 
  if (keyCode === DOWN_ARROW) {
    playerY += playerSpeed;
  }
  
    // Draw the game screen
  background(255, 153, 51);
  fill(153, 255, 51);
  ellipse(playerX, playerY, 50, 50);
  fill(255, 0, 0);
  rect(enemyX, enemyY, 50, 50);
  textAlign(LEFT)
  textSize(32);
  text(`Game: ${gameCount}, High: ${highScore}, Avg: ${Math.round(averageScore)}`, 10, 40);
  text(`Score: ${score}`, 10, 80);
  
  if (isMainMenu) {
    background(255, 153, 51);
    textAlign(CENTER);
    textSize(64)
    fill(0,0,0)
    text(" VS. ", width/2, height/2 - 180,-34);
    textSize(64);
    
    fill (153, 255, 51)
    text("Ball", width/2, height/2 - 100,-250);
    textSize(64);
    fill(255, 0, 0);
    text(" Square", width/2, height/2 - 100, 250);
    fill(0,0,0)
    textSize(32);
    text("Press any key to start", width/2, height/2 + 50);
    textSize(20);
    text("Don't get tuched by the sqare or the walls", width/2, height/2 + 100);
    }
  
  if ((score-lastIncrease)>100) {
    lastIncrease = score;
    playerSpeed*=1.1;
  }
  
  // Check for collision
  const xCompare = (playerX - enemyX)
  const yCompare = (playerY - enemyY)
  
  if (xCompare>=-25 && xCompare<=75 && yCompare>=-25 && yCompare<=75) {
    isGameOver=true;
  }
  
  if (playerX>width || playerX<0) {
    isGameOver=true;
  }
  if (playerY>height || playerY<0) {
    isGameOver=true;
  }
  

    // Move the enemy
  enemyX += enemySpeed;
  if (enemyX > width || enemyX < 0) {
    enemySpeed *= -1;
  }
  
  // Check if game over
  if (isGameOver) {
    textSize(64);
    if (highScore<score) highScore=score;
    text("GAME OVER", 50, height / 2);
  } else {
    score++;
  }
}

// if key press during main menu and game over screen
function keyPressed(Right_click) {
  if (isMainMenu) {
    // Start the game when the user presses any key
    isMainMenu = false;
  }
  if (isGameOver) {
    setStartVals();
  }
}
