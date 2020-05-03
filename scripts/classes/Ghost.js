class Ghost extends Entity
{
    constructor(color, posX, posY, dir)
    {
      super();
      this.color = color;
      this.posX = posX;
      this.posY = posY;
      this.dir = dir;
    }

    update()
    {

    }

    display()
    {
      if (lethalNomming)
      {
        tint(33,33,255);
        image(animatedSprite.ghostBody, this.posX, this.posY);
        noTint();
        image(sprite.ghostFaceBlue, this.posX, this.posY);
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
        image(animatedSprite.ghostBody, this.posX, this.posY);
        noTint();
        image(sprite.ghostEyes[this.dir-1], this.posX, this.posY);
      }
    }
}
