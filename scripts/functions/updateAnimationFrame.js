let thirtyPerSecondTimer = 0;
let tally =
{
    pacMan: 0,
    powerPellet: 0,
    ghostBody: 0
}
let spriteCycle =
{
    pacMan: 0,
    powerPellet: true,
    ghostBody: 0
}

function updateAnimationFrame()
{
  print(tally.powerPellet);
    //pac man updaterer hver tredivedel af et sekund
    let playerIsMoving = false;
    if (player !== null) {
        playerIsMoving = player.isMoving;
    }

    if (tally.pacMan === 1)
    {
        tally.pacMan = 0;
        if (playerIsMoving)
        {
            if (spriteCycle.pacMan < 3)
            {
                spriteCycle.pacMan++;
            }
            else
            {
                spriteCycle.pacMan = 0;
            }
        }
        else if (spriteCycle.pacMan === 0)
        {
            spriteCycle.pacMan = 1;
        }
        animatedSprite.pacMan = sprite.pacMan[spriteCycle.pacMan];
        tally.pacMan = 0;
    }

    //power pelelts opdaterer hver sjettedel af et sekund
    if (tally.powerPellet === 5)
    {
        spriteCycle.powerPellet = !spriteCycle.powerPellet;
        if (spriteCycle.powerPellet)
        {
            animatedSprite.powerPellet = sprite.powerPellet;
        }
        else
        {
            animatedSprite.powerPellet = null;
        }
        tally.powerPellet = 0
    }

    //spøgelser opdaterer hvert 7,5-del af et sekund
    if (tally.ghostBody === 4)
    {
        spriteCycle.ghostBody++;
        if (spriteCycle.ghostBody > 1)
        {
            spriteCycle.ghostBody = 0;
        }
        animatedSprite.ghostBody = sprite.ghostBody[spriteCycle.ghostBody];
        tally.ghostBody = 0;
    }

    //timer der opdaterer hver tredivedel af et sekund og forøger optællings variabler
    thirtyPerSecondTimer += deltaTime;
    if (thirtyPerSecondTimer > 1/30*1000)
    {
        thirtyPerSecondTimer = 0;
        tally.pacMan++;
        if (currentScene === "game")
        {
            tally.powerPellet++;
        }
        else
        {
          animatedSprite.powerPellet = sprite.powerPellet;
        }
        tally.ghostBody++;
    }

}
