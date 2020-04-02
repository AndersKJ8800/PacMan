let resX = 224;
let resY = 288;
let currentScene = 'game';
let downKey = {
  up: false,
  down: false,
  left: false,
  right: false
};
let pressedKey = {
  confirm: false,
  cancel: false
}

function setup() {
  frameRate(60);
  angleMode(DEGREES);
  createScaleCanvas();
  initializeSquares();
}

function windowResized() { createScaleCanvas(); }

function draw() {
  noSmooth(); //sørger for at billeder ikke bliver opskaleret sløret
  scale(scaling); //skalerer alt
  background(0);
  updateAnimationFrame(); //opdaterer animerede sprites

  //tjek om nogle af regningstasterne er nede
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
    downKey.up = true;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
    downKey.down = true;
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
    downKey.left = true;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    downKey.right = true;
  }

  //gør nogle forskellige ting angøende hvilken scene er aktiv
  switch (currentScene) {
    case 'game':
      game();
      break;
  }

  //default tilbage taster til false
  downKey = {
    up: false,
    down: false,
    left: false,
    right: false
  };
  pressedKey = {
    confirm: false,
    cancel: false
  }

}

//tjek om confirm og cancel tasterne er blevet trykket
function keyPressed() {
  if (keyCode === 32) {
    pressedKey.confirm = true;
  }
  if (keyCode === 27) {
    pressedKey.cancel = true;
  }
}
