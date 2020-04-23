class Player {
    constructor() {
      this.posX = 113;
      this.posY = 188;
      this.prevPosX;
      this.prevPosY;
      this.dir = 4;
      this.velocity = 1;
      this.isMoving;
      this.sprite = sprite.pacMan[0];
      this.spriteOffsetX = 15;
      this.spriteOffsetY = 15;
      this.squareCurrent = {posX: null, posY: null, type: null};
      this.squareUp = {posX: null, posY: null, type: null};
      this.squareRight = {posX: null, posY: null, type: null};
      this.squareDown = {posX: null, posY: null, type: null};
      this.squareLeft = {posX: null, posY: null, type: null};
      this.squareNext = {posX: null, posY: null, type: null};
      this.squarePrev = {posX: null, posY: null, type: null};
      this.playNom0 = true;

    }

    update() {
      this.updateSquares();
      this.changeDirection();
      this.updateDirection();
      //hvis pacmans nuværende firkant ikke er den samme som i sidste frame
      if (this.squarePrev !== this.squareCurrent && (this.squareCurrent.type === "dot" || this.squareCurrent.type === "power pellet")) {
        this.eat();
      }
      this.velocity = 60 / currentFrameRate;
      if (this.prevPosX === this.posX && this.prevPosY === this.posY) {
        this.isMoving = false;
      } else {
        this.isMoving = true;
      }
      this.squarePrev.posX = this.squareCurrent.posX;
      this.squarePrev.posY = this.squareCurrent.posY;
      this.prevPosX = this.posX;
      this.prevPosY = this.posY;
    }

    eat() {
      for (let i = 0; i < squares.length; i++) {
        if (this.squareCurrent.posX === squares[i].posX && this.squareCurrent.posY === squares[i].posY) {
          squares[i].type = "clear";
          if (this.playNom0) {
            sound.nom0.play();
            this.playNom0 = false;
          } else {
            sound.nom1.play();
            this.playNom0 = true;
          }
        }
      }


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

      //ændrer retning hvis den retningen for den tast man holder nede enten er den eneste der bliver holdt nede, eller hvis man holder flere taster nede, skal tasten være den senest trykkede.
      if ((downKey.up && downKey.noOf === 1 ) || (downKey.up && downKey.latest === "up")) {
        if (this.squareUp.type !== "wall" && this.squareUp.type !== "gate") {
          this.dir = 1;
        }
      }
      else if ((downKey.right && downKey.noOf === 1 ) || (downKey.right && downKey.latest === "right")) {
        if (this.squareRight.type !== "wall" && this.squareRight.type !== "gate") {
          this.dir = 2;
        }
      }
      else if ((downKey.down && downKey.noOf === 1 ) || (downKey.down && downKey.latest === "down")) {
        if (this.squareDown.type !== "wall" && this.squareDown.type !== "gate") {
          this.dir = 3;
        }
      }
      else if ((downKey.left && downKey.noOf === 1 ) || (downKey.left && downKey.latest === "left")) {
        if (this.squareLeft.type !== "wall" && this.squareLeft.type !== "gate") {
          this.dir = 4;
        }
      }

    }



    updateDirection() {
        //opdaterer sprite ud fra retning
        switch (this.dir) {
          case 1:
            this.squareNext = this.squareUp;
            this.spriteOffsetX = 15;
            this.spriteOffsetY = 0;
            break;
          case 2:
            this.squareNext = this.squareRight;
            this.spriteOffsetX = 0;
            this.spriteOffsetY = 0;
            break;
          case 3:
            this.squareNext = this.squareDown;
            this.spriteOffsetX = 0;
            this.spriteOffsetY = 15;
            break;
          case 4:
            this.squareNext = this.squareLeft;
            this.spriteOffsetX = 15;
            this.spriteOffsetY = 15;
            break;
        }
        //opdaterer position ud fra retning
        if ((this.squareNext.posX === 0 || this.squareNext.posX === 27) && this.squareCurrent.type === "bridge")
        {
            this.posX += this.velocity * -(this.dir - 3);
        }
        else if (this.squareNext.type !== "wall" && this.squareNext.type !== "gate")
        {
            this.moveToSquare("next");
        }
        else
        {
            this.moveToSquare("current");
        }

        if (this.posX < -4)
        {
            this.posX = 292;
        }
        else if (this.posX > 292)
        {
            this.posX = -4;
        }

        //opdaterer sprite
        this.sprite = animatedSprite.pacMan;
    }

    moveToSquare(which) {
      let squareToMoveTo;
      if (which === "next") {
        squareToMoveTo = this.squareNext;
      } else if (which === "current") {
        squareToMoveTo = this.squareCurrent;
      }
      if (this.posX < squareToMoveTo.posX * 8 + 3) {
        this.posX += this.velocity;
      } else if (this.posX > squareToMoveTo.posX * 8 + 4) {
        this.posX -= this.velocity;
      }
      if (this.posY < squareToMoveTo.posY * 8 + 3) {
        this.posY += this.velocity;
      } else if (this.posY > squareToMoveTo.posY * 8 + 4) {
        this.posY -= this.velocity;
      }
    }

    display() {
      //roterer alt omkring spilleren baseret på spillerens retning og tegner spriten
      //dette gøres, da man ikke bare lige kan rotere et billede for sig selv
      translate(ceil(this.posX - 8), ceil(this.posY - 8));
      rotate((this.dir-2)*90);

      image(this.sprite, 0 - this.spriteOffsetX, 0 - this.spriteOffsetY);

      //roterer alt tilbage igen
      rotate(-(this.dir-2)*90);
      translate(-ceil(this.posX - 7), -ceil(this.posY - 7));
    }
}
