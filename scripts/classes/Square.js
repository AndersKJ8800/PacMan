class Square {
  constructor(posX, posY, img) {
    this.posX = posX;
    this.posY = posY;
    this.img = img;

  }

  draw() {
    image(this.img, this.posX * 8, this.posY * 8);
  }

}
