let squares = [];
function initializeSquares() {

  //finder farven på de forskellige typer af firkanter ud fra map_defines.png
  let color = {
    ghost_enclosure: img.defines.get(11, 13).toString(),
    gate: img.defines.get(13, 12).toString(),
    clear: img.defines.get(12, 10).toString(),
    power_pellet: img.defines.get(1, 3).toString(),
    dot: img.defines.get(1, 1).toString(),
    wall: img.defines.get(0, 0).toString(),
    bridge: img.defines.get(0, 14).toString()
  };

  //definerer alle firkanterne
  for (let i = 0; i < 28; i++) {
    for (let j = 0; j < 31; j++) {
      let type;

      //definerer typen af firkanten ud fra hvilken farve den tilsvarende pixel har som matcher definitionerne før loopet.
      //dette kunne gøres ved at hardcode farveværdierne ind, men da firefox, i modsætning til chrome,
      //ikke når frem til de præcist rigtige farver, bliver det nødt til at blive defineret på denne måde.
      //fx. for farven i pixel 0, 0 som er 255, 0, 255 får firefox farven til i stedet at være 247, 26, 250.
      let c = img.defines.get(i, j).toString();
      switch (c) {
        case color.ghost_enclosure:
          type = "ghost enclosure";
          break;

        case color.gate:
          type = "gate";
          break;

        case color.clear:
          type = "clear";
          break;

        case color.power_pellet:
          type = "power pellet";
          break;

        case color.dot:
          type = "dot";
          break;

        case color.wall:
          type = "wall";
          break;

        case color.bridge:
          type = "bridge";
          break;
      }
      //firkantens objekt skabes ud fra i, j og dens type
      squares[i+28*j] = new Square(i, j, type);

    }
  }

}
