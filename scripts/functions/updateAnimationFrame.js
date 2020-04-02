let spriteTimer = {
  powerPellet: 0,
  pacMan: 0
}

let spriteCycle = {
  powerPellet: true,
  pacMan: 0
}

function updateAnimationFrame() {

  //power pellets opdateres ca. hvert 1/6 sekund
  spriteTimer.powerPellet += deltaTime;
  if (spriteTimer.powerPellet > 167) {
    spriteTimer.powerPellet = 0;
    //skifter mellem at vise den normale sprite og ingenting.
    spriteCycle.powerPellet = !spriteCycle.powerPellet;
    if (spriteCycle.powerPellet === true) {
      animated_sprite.power_pellet = sprite.power_pellet;
    } else {
      animated_sprite.power_pellet = null;
    }
  }

  //opdater pac man
  if (/* player is moving */ true) {
    //pac man opdaterer hvert 1/30 sekund mellem tre sprites
    spriteTimer.pacMan += deltaTime;
    if (spriteTimer.pacMan > 1/30*1000) {
      spriteTimer.pacMan = 0;
      if (spriteCycle.pacMan < 2) {
        spriteCycle.pacMan++;
      } else {
        spriteCycle.pacMan = 0;
      }
      animated_sprite.pac_man = sprite.pac_man[spriteCycle.pacMan];
    }



  }


}
