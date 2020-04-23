let player = null;
let ghost1 = null;
let ghost2 = null;
let ghost3 = null;
let ghost4 = null;
let pelletsRemaining = 0;
let introMusicHasPlayed = false;
let displayEntities = false;

function game()
{
    if (player === null)
    {
        player = new Player();
        ghost1 = new Ghost("red", 20, 50, 1);
        ghost2 = new Ghost("orange", 50, 50, 2);
        ghost3 = new Ghost("cyan", 80, 50, 3);
        ghost4 = new Ghost("pink", 110, 50, 4);
    }
    //flyt spillet en smule ned
    translate(0, 24);

    //tegn bagrunds labyrint
    image(img.background, 0, 0);
    //farv den blå
    blendMode(DARKEST);
    fill(0,0,255);
    noStroke();
    rect(0, 0, resX, 31 * 8);
    blendMode(BLEND);

    //opdatèr alle firkanter og tæl hvor pellets mange der er tilbage
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
