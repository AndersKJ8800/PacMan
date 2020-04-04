class Player {
    constructor() {
      this.posX = 74;
      this.posY = 174;
      this.dir = 4;
      this.velocity = 1;
      this.sprite;
      this.spriteOffsetX = 0;
      this.spriteOffsetY = 0;
      this.squareCurrent = {posX: null, posY: null, type: null};
      this.squareUp = {posX: null, posY: null, type: null};
      this.squareRight = {posX: null, posY: null, type: null};
      this.squareDown = {posX: null, posY: null, type: null};
      this.squareLeft = {posX: null, posY: null, type: null};

    }

    update() {
      this.updateSquares();
      this.changeDirection();
      this.updatePos();
      this.display();
      this.velocity = 60 / currentFrameRate;
    }

    updateSquares() {
      let middlePosX = ceil(this.posX -7);
      let middlePosY = ceil(this.posY -7);
      let currentSquareX = ceil(middlePosX / 8);
      let currentSquareY = ceil(middlePosY / 8);

      for (let i = 0; i < squares.length; i++) {

        if (currentSquareX === squares[i].posX) {
          switch (currentSquareY - squares[i].posY) {
            case -1:
              this.squareDown = {
                posX: squares[i].posX,
                posY: squares[i].posY,
                type: squares[i].type,
              }
              break;
            case 1:
              this.squareUp = {
                posX: squares[i].posX,
                posY: squares[i].posY,
                type: squares[i].type,
              }
              break;
          }
        }

        if (currentSquareY === squares[i].posY) {
          switch (currentSquareX - squares[i].posX) {
            case -1:
              this.squareRight = {
                posX: squares[i].posX,
                posY: squares[i].posY,
                type: squares[i].type,
              }
              break;
            case 1:
              this.squareLeft = {
                posX: squares[i].posX,
                posY: squares[i].posY,
                type: squares[i].type,
              }
              break;
          }
        }

        if (currentSquareX === squares[i].posX && currentSquareY === squares[i].posY) {
          this.squareCurrent.posX = squares[i].posX;
          this.squareCurrent.posY = squares[i].posY;
          this.squareCurrent.type = squares[i].type;
        }

      }

    }

    changeDirection() {
      if (downKey.up) {
        if (this.squareUp.type !== "wall") {
          this.dir = 1;
          this.posX = this.squareUp.posX * 8 + 4;
        }
      }
      if (downKey.right) {
        if (this.squareRight.type !== "wall") {
          this.dir = 2;
          this.posY = this.squareRight.posY * 8 + 4;
        }
      }
      if (downKey.down) {
        if (this.squareDown.type !== "wall") {
          this.dir = 3;
          this.posX = this.squareDown.posX * 8 + 4;
        }
      }
      if (downKey.left) {
        if (this.squareLeft.type !== "wall") {
          this.dir = 4;
          this.posY = this.squareLeft.posY * 8 + 4;
        }
      }
    }

    updatePos() {
        //opdaterer koordinater ud fra dir: 1 = op, 2 = højre, 3 = ned, 4 = venstre
        switch (this.dir) {
          case 1:
            if (this.squareUp.type !== "wall") {
              this.posY = this.posY-this.velocity;
            }
            this.spriteOffsetX = 15;
            this.spriteOffsetY = 0;
            break;
          case 2:
            if (this.squareRight.type !== "wall") {
              this.posX = this.posX+this.velocity;
            }
            this.spriteOffsetX = 0;
            this.spriteOffsetY = 0;
            break;
          case 3:
            if (this.squareDown.type !== "wall") {
              this.posY = this.posY+this.velocity;
            }
            this.spriteOffsetX = 0;
            this.spriteOffsetY = 15;
            break;
          case 4:
            if (this.squareLeft.type !== "wall") {
              this.posX = this.posX-this.velocity;
            }
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
      translate(ceil(this.posX - 7), ceil(this.posY - 7));
      rotate((this.dir-2)*90);

      image(this.sprite, 0 - this.spriteOffsetX, 0 - this.spriteOffsetY);

      //roterer alt tilbage igen
      rotate(-(this.dir-2)*90);
      translate(-ceil(this.posX - 7), -ceil(this.posY - 7));

    }
}
