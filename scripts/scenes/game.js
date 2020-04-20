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

  let ghost1 = new Ghost("red", 20, 50, 1);
  ghost1.display();
  let ghost2 = new Ghost("orange", 50, 50, 2);
  ghost2.display();
  let ghost3 = new Ghost("cyan", 80, 50, 3);
  ghost3.display();
  let ghost4 = new Ghost("pink", 110, 50, 4);
  ghost4.display();

}
