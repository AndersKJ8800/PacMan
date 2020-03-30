let squares = [];
function initializeSquares() {

  for (let i = 0; i < 28; i++) {
    for (let j = 0; j < 31; j++) {
      let type;
      let color = img.defines.get(i, j);
      fill(color);
      switch (color[0]) {
        case 19:
          type = "dot";
          break;
        case 247:
          type = "wall";
          break;
        case 68:
          type = "power pellet";
          break;
        case 246:
          type = "ghost home";
          break;
        case 254:
          type = "gate";
          break
        default:
          type = "nothing";
          break;
      }
      squares[i+28*j] = new Square(i, j, type);
    }
  }

}
