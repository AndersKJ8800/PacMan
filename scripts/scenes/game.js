let playerMode = 1;
let player = null;
let ghost = [null, null, null, null];
let baseVelocity = 1;
let pelletsRemaining = 0;
let introMusicHasPlayed = false;
let displayEntities = false;
let lethalNomming = false;
let lethalNommingTimer = 0;
let currentScore = 0;
let highScore = 0;
let lives = 3;
let respawnTimer = 0;
let pauseTimer = 0;
let currentLevel = 1;
let easyGhostModeTimings = [7,20,7,20,5,20,5];
let mediumGhostModeTimings = [7,20,7,20,5,17,1];
let hardGhostModeTimings = [5,20,5,20,5,14,1];
let currentGhostModeTimings;
let currentGhostModeNo = 0;
let ghostModeTimer = 0;
let ghostModeIsChase = false;
let displayGhostTargets = true;
let levelIcons = [0,1,2,2,3,3,4,4,5,5,6,6,7];

function gameStart()
{
  score = 0;
  lives = 3;
  player = null;
  ghost = [null, null, null, null];
  introMusicHasPlayed = false;
  initializeSquares();
  currentScene = "game intro";
}

function initializeEntities()
{
  player = new Player();
  ghost[0] = new Ghost("red", 112, 92, 4, 0);
  ghost[1] = new Ghost("cyan", 96, 116, 1, 5000);
  ghost[2] = new Ghost("pink", 112, 116, 3, 10000);
  ghost[3] = new Ghost("orange", 128, 116, 1, 15000);
}

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

    if (currentLevel === 1)
    {
      currentGhostModeTimings = easyGhostModeTimings;
    }
    else if (currentLevel <= 4)
    {
      currentGhostModeTimings = mediumGhostModeTimings;
    }
    else
    {
      currentGhostModeTimings = hardGhostModeTimings;
    }

    if (currentScene === "game" && !player.dying && pauseTimer === 0 && !lethalNomming)
    {
      if (ghostModeTimer/1000 > currentGhostModeTimings[currentGhostModeNo] && currentGhostModeNo !== 7)
      {
        ghostModeIsChase = !ghostModeIsChase;
        ghostModeTimer = 0;
        currentGhostModeNo++;
        for (let i = 0; i < 1; i++)
        {
          //ghost[i].updateTarget();
          //ghost[i].updateDirection();
        }
      }
      ghostModeTimer += deltaTime;
    }

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
      if (currentScene === "game intro")
      {
        tint(0,255,255);
        image(symbol.letter[15],8*9,8*11);
        image(symbol.letter[11],8*10,8*11);
        image(symbol.letter[0],8*11,8*11);
        image(symbol.letter[24],8*12,8*11);
        image(symbol.letter[4],8*13,8*11);
        image(symbol.letter[17],8*14,8*11);
        image(symbol.letter[14],8*16,8*11);
        image(symbol.letter[13],8*17,8*11);
        image(symbol.letter[4],8*18,8*11);
        noTint();
      }
    }

    if (displayEntities)
    {
      if (currentScene !== "game over")
      {
        player.display();
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
      }
    }

    if (currentScore > highScore)
    {
      highScore = currentScore;
    }

    for (let i = 0; i < lives; i++)
    {
      image(sprite.life, i * 16 + 19, 250);
    }

    if (lives === 0)
    {
      if (pauseTimer === 0)
      {
        currentScene = "title";
      }
      sound.siren[0].stop();
      sound.siren[1].stop();
      sound.siren[2].stop();
      sound.siren[3].stop();
      sound.siren[4].stop();
      sound.lethalNomming.stop();
    }


}
