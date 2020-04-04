let player = new Player();

function game() {

  //flyt spillet en smule ned
  translate(0, 24);

  //tegn bagrunds labyrint
  image(img.background, 0, 0);
  //farv den blå
  blendMode(DARKEST);
  fill(0,0,255);
  noStroke();
  rect(0, 0, resX, 31 * 8);
  blendMode(BLEND);

  //opdatèr alle dots
  for (let i = 0; i < squares.length; i++) {
    squares[i].update();
  }

  player.update();

}
