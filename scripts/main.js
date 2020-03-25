let resX = 224;
let resY = 288;

function setup() {
  createScaleCanvas();
  frameRate(60);
}

function windowResized() { createScaleCanvas(); }

function draw() {
  scale(scaling);
  background(0);
}
