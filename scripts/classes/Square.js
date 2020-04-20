class Square {
  constructor(posX, posY, type) {
    this.posX = posX;
    this.posY = posY;
    this.type = type;
    this.sprite;
    this.changeSprite();
  }

  update() {
    this.display();
    this.changeSprite();
  }

  changeSprite() {
    switch (this.type) {
      case "dot":
        this.sprite = sprite.dot;
        break;
      case "power pellet":
        this.sprite = animatedSprite.powerPellet;
        break;
      case "gate":
        this.sprite = sprite.gate;
        break;
      default:
        this.sprite = null;
        break;
    }
  }

  display() {
    if (this.sprite != null) {
      image(this.sprite, this.posX * 8, this.posY * 8);
    }

  }

}
