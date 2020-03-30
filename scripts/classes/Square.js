class Square {
  constructor(posX, posY, type) {
    this.posX = posX;
    this.posY = posY + 3;
    this.type = type;
    this.sprite;
    this.changeType();
  }

  changeType() {
    switch (this.type) {
      case "dot":
        this.sprite = sprite.dot;
        break;
      case "power pellet":
        this.sprite = sprite.power_pellet;
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

      switch (this.type) {

        case "power pellet":
          if (powerPelletDisplay === true) {
            image(this.sprite, this.posX * 8, this.posY * 8);
          }
          break;
        default:
          image(this.sprite, this.posX * 8, this.posY * 8);
          break;
      }

    }

  }

}
