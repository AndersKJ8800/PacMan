let powerPelletTimer = 0;
let powerPelletDisplay = true;

function updateAnimationFrame() {
  powerPelletTimer += deltaTime;
  if (powerPelletTimer > 167) {
    powerPelletTimer -= 167;
    if (powerPelletTimer > 20) {
      powerPelletTimer = 0;
    }
    powerPelletDisplay = !powerPelletDisplay;
  }


}
