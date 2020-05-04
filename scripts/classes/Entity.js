class Entity
{
    constructor()
    {
        this.squareCurrent = {posX: null, posY: null, type: null};
        this.squareNext = {posX: null, posY: null, type: null};
        this.squareUp = {posX: null, posY: null, type: null};
        this.squareRight = {posX: null, posY: null, type: null};
        this.squareDown = {posX: null, posY: null, type: null};
        this.squareLeft = {posX: null, posY: null, type: null};
        this.squarePrev = {posX: null, posY: null, type: null};
        this.spriteOffsetX = 0;
        this.spriteOffsetY = 0;
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

      switch(this.dir)
      {
        case 1:
          this.squareNext = this.squareUp;
          break;
        case 2:
          this.squareNext = this.squareRight;
          break;
        case 3:
          this.squareNext = this.squareDown;
          break;
        case 4:
          this.squareNext = this.squareLeft;
          break;
      }

    }

    moveToSquare(which) {
      let squareToMoveTo;
      if (which === "next") {
        squareToMoveTo = this.squareNext;
      } else if (which === "current") {
        squareToMoveTo = this.squareCurrent;
      }
      if (this.posX < squareToMoveTo.posX * 8 + 3) {
        this.posX += velocity;
      } else if (this.posX > squareToMoveTo.posX * 8 + 4) {
        this.posX -= velocity;
      }
      if (this.posY < squareToMoveTo.posY * 8 + 3) {
        this.posY += velocity;
      } else if (this.posY > squareToMoveTo.posY * 8 + 4) {
        this.posY -= velocity;
      }
    }

}
