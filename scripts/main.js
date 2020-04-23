let resX = 224;
let resY = 288;
let currentScene = "game intro";
let currentFrameRate = 60;
let downKey = {
  up: false,
  down: false,
  left: false,
  right: false,
  latest: "",
  noOf: 0
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
  masterVolume(0.1);
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
    downKey.noOf++;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
    downKey.down = true;
    downKey.noOf++;
  }
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
    downKey.left = true;
    downKey.noOf++;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    downKey.right = true;
    downKey.noOf++;
  }

  //kører en funktion angående hvilken scene er aktiv
  switch (currentScene) {
    case "game":
    case "game intro":
        game();
        break;
  }

  //default taster tilbage til false
  downKey = {
    up: false,
    down: false,
    left: false,
    right: false,
    latest: downKey.latest,
    noOf: 0
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

//tjek om confirm og cancel tasterne er blevet trykket samt hvilken af de andre taster er blevet trykket sidst
function keyPressed() {
  if (keyCode === 32) {
    pressedKey.confirm = true;
  }
  if (keyCode === 27) {
    pressedKey.cancel = true;
  }
  if (keyCode === 87 || keyIsDown(UP_ARROW)) {
    downKey.latest = "up";
  }
  if (keyCode === 83 || keyIsDown(DOWN_ARROW)) {
    downKey.latest = "down";
  }
  if (keyCode === 65 || keyIsDown(LEFT_ARROW)) {
    downKey.latest = "left";
  }
  if (keyCode === 68 || keyIsDown(RIGHT_ARROW)) {
    downKey.latest = "right";
  }
}
