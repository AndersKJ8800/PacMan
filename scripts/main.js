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

  // ui
  if (ceil(millis()/250) % 2 || currentScene === "main menu") // viser "1UP" halvdelen af tiden, skifter hvert 1/4 sekund
  {
    image(symbol.number[1], 24, 0);  //1
    image(symbol.letter[20], 32, 0); //U
    image(symbol.letter[15], 40, 0); //P
  }

  image(symbol.number[0], 40, 9); //0
  image(symbol.number[0], 48, 9); //0

  for (let i = 1; i <= currentScore.toString().length; i++)
  {
    let no = currentScore.toString()[currentScore.toString().length-i];
    image(symbol.number[no], -i*8+56, 9);
  }

  image(symbol.letter[7],72,0); // H
  image(symbol.letter[8],80,0); // I
  image(symbol.letter[6],88,0); // G
  image(symbol.letter[7],96,0); // H

  image(symbol.letter[18],112,0); // S
  image(symbol.letter[2],120,0);  // C
  image(symbol.letter[14],128,0); // O
  image(symbol.letter[17],136,0); // R
  image(symbol.letter[4],144,0);  // E

  if (highScore !== 0)
  {
    for (let i = 1; i <= highScore.toString().length; i++)
    {
      let no = highScore.toString()[highScore.toString().length-i];
      image(symbol.number[no], -i*8+136, 9);
    }
  }

  for (let i = 0; i < lives; i++)
  {
    image(sprite.life, i * 16 + 19, 274);
  }

  //kører en funktion angående hvilken scene er aktiv
  switch (currentScene) {
    case "game":
    case "game intro":
    case "respawn":
    case "game over":
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
