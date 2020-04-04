class Square {
  constructor(posX, posY, type) {
    this.posX = posX;
    this.posY = posY;
    this.type = type;
    this.sprite;
    this.changeType();
  }

  update() {
    this.changeType();
    this.display();
  }

  changeType() {
    switch (this.type) {
      case "dot":
        this.sprite = sprite.dot;
        break;
      case "power pellet":
        this.sprite = animated_sprite.power_pellet;
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
    this.changeType();
    if (this.sprite != null) {
      image(this.sprite, this.posX * 8, this.posY * 8);
    }

  }

}
