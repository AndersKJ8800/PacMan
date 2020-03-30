function game() {

  image(img.background, 0, 24);

  blendMode(DARKEST);
  fill(0,0,255);
  noStroke();
  rect(0, 24, resX, 31 * 8);
  blendMode(BLEND);


  for (let i = 0; i < squares.length; i++) {
    squares[i].changeType();
    squares[i].display();
  }


}
