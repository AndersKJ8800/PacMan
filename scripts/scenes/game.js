let player = null;
let ghost1 = null;
let ghost2 = null;
let ghost3 = null;
let ghost4 = null;
let velocity = 1;
let pelletsRemaining = 0;
let introMusicHasPlayed = false;
let displayEntities = false;
let lethalNomming = false;
let lethalNommingTimer = 0;

function game()
{
    if (player === null)
    {
        player = new Player();
        ghost1 = new Ghost("red", 112, 92, 4);
        ghost2 = new Ghost("cyan", 96, 116, 1);
        ghost3 = new Ghost("pink", 112, 116, 3);
        ghost4 = new Ghost("orange", 128, 116, 1);
    }
    //flyt spillet en smule ned
    translate(0, 24);
    //tegn bagrunds labyrint
    image(img.background, 0, 0);
    //farv den blå
    blendMode(DARKEST);
    fill(33,33,255);
    noStroke();
    rect(0, 0, resX, 31 * 8);
    blendMode(BLEND);

    velocity = 60 / currentFrameRate;

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

    //opdatér alle firkanter og tæl hvor pellets mange der er tilbage
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
        player.display();
        ghost1.display();
        ghost2.display();
        ghost3.display();
        ghost4.display();

    }

    if (currentScene === "game")
    {
        player.update();
        ghost1.update();
        ghost2.update();
        ghost3.update();
        ghost4.update();
        sirenSound();
    }
    else
    {
        if (!sound.start.isPlaying() && !introMusicHasPlayed)
        {
            sound.start.play();
            introMusicHasPlayed = true;
        }
        if (sound.start.currentTime() > 2)
        {
            displayEntities = true;
        }
        if (!sound.start.isPlaying() && introMusicHasPlayed)
        {
            currentScene = "game";
        }
    }
}
