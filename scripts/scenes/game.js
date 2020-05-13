let player = null;
let ghost = [null, null, null, null];
let baseVelocity = 1;
let pelletsRemaining = 0;
let introMusicHasPlayed = false;
let displayEntities = false;
let lethalNomming = false;
let lethalNommingTimer = 0;
let currentScore = 0;
let highScore = 42069;
let lives = 3;
let respawnTimer = 0;
let pauseTimer = 0;

function game()
{
    if (player == null)
    {
      initializeEntities();
    }

    // flyt spillet en smule ned
    translate(0, 24);
    // tegn bagrunds labyrint og farv den blå
    tint(33,33,255);
    image(img.background, 0, 0);
    noTint();

    if (pauseTimer > 0)
    {
      pauseTimer -= deltaTime;
    }
    if (pauseTimer < 0)
    {
      pauseTimer = 0;
    }

    baseVelocity = 60 / currentFrameRate;

    if (pauseTimer <= 0)
    {
      if (lethalNommingTimer > 0)
      {
        lethalNommingTimer -= deltaTime;
        lethalNomming = true;
      }
      if (lethalNommingTimer <= 0)
      {
        lethalNommingTimer = 0;
        lethalNomming = false;
      }
    }

    // opdatér alle firkanter og tæl hvor pellets mange der er tilbage
    pelletsRemaining = 0;
    for (let i = 0; i < squares.length; i++) {
      squares[i].update();
      if (squares[i].type === "dot" || squares[i].type === "power pellet")
      {
          pelletsRemaining++;
      }
    }

    if (displayEntities)
    {
      if (!player.dying || (player.dying && player.dyingTimer < 2000))
      {
        for (let i = 0; i < 4; i++)
        {
          if (!ghost[i].justEaten)
          {
            ghost[i].display();
          }
        }
      }
      player.display();
    }

    if (currentScene === "game" && !player.dying)
    {
      if (pauseTimer === 0)
      {
        for (let i = 0; i < 4; i++)
        {
          ghost[i].justEaten = false;
        }
        player.update();
        sirenSound();
      }
      for (let i = 0; i < 4; i++)
      {
        if ((ghost[i].retrieving === true && !ghost[i].justEaten) || pauseTimer === 0)
        {
          ghost[i].update();
        }
      }
    }
    else
    {
      switch (currentScene)
      {
        case "respawn":
        respawnTimer += deltaTime;
        if (respawnTimer > 2000)
        {
          respawnTimer = 0;
          currentScene = "game";
        }
        break;
        case "game intro":
        if (!sound.start.isPlaying())
        {
          if (introMusicHasPlayed)
          {
            currentScene = "game";
          }
          else
          {
            sound.start.play();
            introMusicHasPlayed = true;
          }
        }

        if (sound.start.currentTime() > 2)
        {
          displayEntities = true;
        }
        break;
        case "game over":
        displayEntities = false;
        tint(255,0,0);
        image(symbol.letter[6], 72, 136);
        image(symbol.letter[0], 80, 136);
        image(symbol.letter[12], 88, 136);
        image(symbol.letter[4], 96, 136);
        image(symbol.letter[14], 120, 136);
        image(symbol.letter[21], 128, 136);
        image(symbol.letter[4], 136, 136);
        image(symbol.letter[17], 144, 136);
        noTint();
        break;

      }
      if (currentScene === "respawn" || currentScene === "game intro")
      {
        tint(255,255,0);
        image(symbol.letter[17],90,136);  //R
        image(symbol.letter[4],98,136);   //E
        image(symbol.letter[0],106,136);  //A
        image(symbol.letter[3],114,136);  //D
        image(symbol.letter[24],122,136); //Y
        image(symbol.exclamation,130,136);//!
        noTint();
      }
    }



    if (currentScore > highScore)
    {
      highScore = currentScore;
    }


}

function initializeEntities()
{
  player = new Player();
  ghost[0] = new Ghost("red", 112, 92 + 3*8, 4);
  ghost[1] = new Ghost("cyan", 96, 116 + 3*8, 1);
  ghost[2] = new Ghost("pink", 112, 116 + 3*8, 3);
  ghost[3] = new Ghost("orange", 128, 116 + 3*8, 1);
}
