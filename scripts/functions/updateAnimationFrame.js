let powerPelletTimer = 0;
let powerPelletDisplay = true;

function updateAnimationFrame() {
  powerPelletTimer += deltaTime;
  if (powerPelletTimer > 167) {
    powerPelletTimer -= 167;
    powerPelletDisplay = !powerPelletDisplay;
  }


}
