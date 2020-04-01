let resX = 224;
let resY = 288;
let currentScene = 'game';

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
  updateAnimationFrame();

  switch (currentScene) {
    case 'game':
      game();
      break;
  }

}
