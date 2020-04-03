let resX = 224;
let resY = 288;
let currentScene = 'game';
let currentFrameRate = 60;
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

  //kører en funktion angående hvilken scene er aktiv
  switch (currentScene) {
    case 'game':
      game();
      break;
  }

  //default taster tilbage til false
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

  //opdaterer nuværende frame rate, bliver brugt til at definere tid i spillet ud fra tid i stedet for frame rate.
  //dette gøres, da selvom man sætter frame rate til 60 fps, bliver den fx. i stedet 72 fps på en 144 hz skærm.
  if (frameRate() !== 0) {
    currentFrameRate = frameRate();
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
