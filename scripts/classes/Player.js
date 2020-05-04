class Player extends Entity {
    constructor() {
      super();
      this.posX = 113;
      this.posY = 188;
      this.prevPosX;
      this.prevPosY;
      this.dir = 4;
      this.isMoving;
      this.sprite = sprite.pacMan[0];
      this.spriteOffsetX = 15;
      this.spriteOffsetY = 15;
      this.playNom0 = true;

    }

    update()
    {
      this.updateSquares();
      this.changeDirection();
      this.updateDirection();
      //hvis pacmans nuværende firkant ikke er den samme som i sidste frame
      if (this.squarePrev !== this.squareCurrent && (this.squareCurrent.type === "dot" || this.squareCurrent.type === "power pellet")) {
        if (this.squareCurrent.type === "power pellet")
        {
          lethalNomming = true;
          lethalNommingTimer = 6000;
        }
        this.eat();
      }
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

    eat()
    {
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
            this.spriteOffsetX = 15;
            this.spriteOffsetY = 0;
            break;
          case 2:
            this.spriteOffsetX = 0;
            this.spriteOffsetY = 0;
            break;
          case 3:
            this.spriteOffsetX = 0;
            this.spriteOffsetY = 15;
            break;
          case 4:
            this.spriteOffsetX = 15;
            this.spriteOffsetY = 15;
            break;
        }
        //opdaterer position ud fra retning
        if ((this.squareNext.posX === 0 || this.squareNext.posX === 27) && this.squareCurrent.type === "bridge")
        {
            this.posX += velocity * -(this.dir - 3);
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

    display() {
      //roterer alt omkring spilleren baseret på spillerens retning og tegner spriten
      //dette gøres, da man ikke bare lige kan rotere et billede for sig selv
      translate(ceil(this.posX - 8), ceil(this.posY - 8));
      rotate((this.dir-2)*90);

      image(this.sprite, 0 - this.spriteOffsetX, 0 - this.spriteOffsetY);

      //roterer alt tilbage igen
      rotate(-(this.dir-2)*90);
      translate(-ceil(this.posX - 8), -ceil(this.posY - 8));
    }
}
