let texture;
let sprite;

function preload() {

  texture = {
    inCorner1: loadImage('assets/placeholder.png'),
    inCorner2: loadImage('assets/placeholder.png'),
    inCorner3: loadImage('assets/placeholder.png'),
    inCorner4: loadImage('assets/placeholder.png'),
    outCorner1: loadImage('assets/placeholder.png'),
    outCorner2: loadImage('assets/placeholder.png'),
    outCorner3: loadImage('assets/placeholder.png'),
    outCorner4: loadImage('assets/placeholder.png'),
    verticalWall1: loadImage('assets/placeholder.png'),
    verticalWall2: loadImage('assets/placeholder.png'),
    horizontalWall1: loadImage('assets/placeholder.png'),
    horizontalWall2: loadImage('assets/placeholder.png'),
    pellet: loadImage('assets/pellet.png'),
    powerPellet: loadImage('assets/placeholder.png')
  }


  sprite = {
    pacMan: [
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png')
    ]
  }

}
