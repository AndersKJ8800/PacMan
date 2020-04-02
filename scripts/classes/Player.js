class Player {
    constructor() {
      this.posX = 105;
      this.posY = 205;
      this.dir = 4;
      this.velocity = 1;
      this.sprite;
      this.spriteOffsetX = 0;
      this.spriteOffsetY = 0;
    }

    update() {
      this.changeDirection();
      this.updatePos();
      this.display();
    }

    changeDirection() {
      if (downKey.up) {
        this.dir = 1;
      }
      if (downKey.right) {
        this.dir = 2;
      }
      if (downKey.down) {
        this.dir = 3;
      }
      if (downKey.left) {
        this.dir = 4;
      }
    }

    updatePos() {
        //opdaterer koordinater ud fra dir: 1 = op, 2 = højre, 3 = ned, 4 = venstre
        switch (this.dir) {
          case 1:
            this.posY = this.posY-this.velocity;
            this.spriteOffsetX = 15;
            this.spriteOffsetY = 0;
            break;
          case 2:
            this.posX = this.posX+this.velocity;
            this.spriteOffsetX = 0;
            this.spriteOffsetY = 0;
            break;
          case 3:
            this.posY = this.posY+this.velocity;
            this.spriteOffsetX = 0;
            this.spriteOffsetY = 15;
            break;
          case 4:
            this.posX = this.posX-this.velocity;
            this.spriteOffsetX = 15;
            this.spriteOffsetY = 15;
            break;
        }
        //opdaterer sprite
        this.sprite = animated_sprite.pac_man;
    }

    display() {
      //roterer alt omkring spilleren baseret på spillerens retning og tegner spriten
      //dette gøres, da man ikke bare lige kan rotere et billede for sig selv
      translate(this.posX, this.posY);
      rotate((this.dir-2)*90);

      image(this.sprite, 0 - this.spriteOffsetX, 0 - this.spriteOffsetY);

      //roterer alt tilbage igen
      rotate(-(this.dir-2)*90);
      translate(-this.posX, -this.posY);
    }
}
