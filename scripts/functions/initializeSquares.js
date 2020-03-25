let squares = [];
function initializeSquares() {

  for (let i = 0; i < resX / 8; i++) {
    for (let j = 0; j < resY / 8; j++) {
      squares[i+(resX/8)*j] = new Square(i, j, texture.pellet);
    }
  }
}
