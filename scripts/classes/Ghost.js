class Ghost extends Entity
{
    constructor(color, posX, posY, dir)
    {
      super();
      this.color = color;
      this.posX = posX;
      this.posY = posY;
      this.dir = dir;
      this.retrieving = false;
    }

    update()
    {
      if (this.squareNext.type === "wall")
      {
        this.dir = random([1,2,3,4]);
      }
      this.updateSquares();
      this.move();
    }

    display()
    {
      translate(ceil(this.posX - 7), ceil(this.posY - 7));
      if (!this.retrieving)
      {
        if (lethalNomming)
        {
          //skifter mellem blå og hvid hvert 1/5 sek, hvis timeren er under to sek
          if (lethalNommingTimer > 2000 || !(abs(ceil(((lethalNommingTimer) / 200))) % 2))
          {
            tint(33,33,255);
            image(animatedSprite.ghostBody, 0, 0);
            noTint();
          }
          else
          {
            tint(222,222,255);
            image(animatedSprite.ghostBody, 0, 0);
            tint(255,0,0);
          }
          image(sprite.ghostFaceBlue, 0, 0);
          noTint();
        }
        else
        {
          switch (this.color)
          {
            case "red":
            tint(255,0,0);
            break;
            case "orange":
            tint(255,184,81);
            break;
            case "cyan":
            tint(0,255,255);
            break;
            case "pink":
            tint(255,184,255);
            break;
          }
          image(animatedSprite.ghostBody, 0, 0);
          noTint();
          image(sprite.ghostEyes[this.dir-1], 0, 0);
        }
      }
      else
      {
        image(sprite.ghostEyes[this.dir-1], 0, 0);
      }
      translate(-ceil(this.posX - 7), -ceil(this.posY - 7));
    }
}
