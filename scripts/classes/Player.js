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
      this.dying = false;
      this.dyingTimer = 0;
      this.squareX = ceil(this.posX/8);
      this.squareY = ceil(this.posY/8);
    }

    update()
    {
      this.updateSquares();
      this.changeDirection();
      this.updateDirection();
      this.move();
      //hvis pacmans nuværende firkant ikke er den samme som i sidste frame
      if (this.squarePrev !== this.squareCurrent && (this.squareCurrent.type === "dot" || this.squareCurrent.type === "power pellet")) {
        if (this.squareCurrent.type === "power pellet")
        {
          lethalNomming = true;
          lethalNommingTimer = 6000;
          currentScore += 50;
        }
        else
        {
          currentScore += 10;
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
      //kollision
      for (let i = 0; i < 4; i++)
      {
        if (
          abs(this.posX - ghost[i].posX) < 2
          &&
          abs(this.posY - ghost[i].posY) < 2
        )
        {
          if (!ghost[i].retrieving)
          {
            if (lethalNomming)
            {
              pauseTimer = 1000;
              ghost[i].justEaten = true;
              ghost[i].retrieving = true;
              sound.eatGhost.play();
              successiveGhostsEaten++;
              switch (successiveGhostsEaten)
              {
                case 1:
                  ghostScore.number = 200;
                  currentScore += 200;
                  break;
                case 2:
                  ghostScore.number = 400;
                  currentScore += 400;
                  break;
                case 3:
                  ghostScore.number = 800;
                  currentScore += 800;
                  break;
                case 4:
                  ghostScore.number = 1600;
                  currentScore += 1600;
                  break;
              }
              ghostScore.posX = this.posX - 6;
              ghostScore.posY = this.posY - 3;
              ghostScore.display = true;
            }
            else
            {
              this.dying = true;
              if (lives === 1)
              {
                pauseTimer = 6500;
              }
            }
          }
        }
      }
      this.squareX = ceil(this.posX/8)-1;
      this.squareY = ceil(this.posY/8)-1;
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

        //opdaterer sprite
        this.sprite = animatedSprite.pacMan;
    }

    display() {
      if (currentScene !== "game over")
      {
        if (this.dying === true)
        {
          if (ceil((this.dyingTimer-2000)/136) > 0)
          {
            if (!sound.death.isPlaying())
            {
              sound.death.play();
            }
            this.sprite = sprite.pacManDying[ceil((this.dyingTimer-2000)/136)];
          }
          else if (this.dyingTimer <= 2000)
          {
            this.sprite = sprite.pacMan[1];
          }
          else
          {
            this.sprite = null;
          }
          this.dyingTimer += deltaTime;
        }
        if (this.dyingTimer > 3500) {
          this.dyingTimer = 0;
          this.dying = false;
          lives--;
          initializeEntities();
          if (lives > 0)
          {
            currentScene = "respawn";
          }
          else
          {
            currentScene = "game over";
          }
        }

        if (this.sprite != null)
        {
          translate(ceil(this.posX - 8), ceil(this.posY - 8));
          if (this.dyingTimer < 2000 || this.dying === false)
          {
            //roterer alt omkring spilleren baseret på spillerens retning og tegner spriten
            //dette gøres, da man ikke bare lige kan rotere et billede for sig selv
            rotate((this.dir-2)*90);

            image(this.sprite, 0 - this.spriteOffsetX, 0 - this.spriteOffsetY);

            //roterer alt tilbage igen
            rotate(-(this.dir-2)*90);
          }
          else
          {
            image(this.sprite, 0, 0);
          }
          translate(-ceil(this.posX - 8), -ceil(this.posY - 8));
        }
      }
    }

}
