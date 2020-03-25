let resX = 224;
let resY = 288;

function setup() {
  frameRate(60);
  createScaleCanvas();
  initializeSquares();
}

function windowResized() { createScaleCanvas(); }

function draw() {
  noSmooth();
  scale(scaling);
  background(0);

  for (let i = 0; i < resX / 8; i++) {
    for (let j = 0; j < resY / 8; j++) {
      squares[i+(resX/8)*j].draw();
    }
  }

}
