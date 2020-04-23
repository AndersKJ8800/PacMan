let currentSiren = 0;
let playSiren = false;
function sirenSound()
{
    playSiren = true;
    switch (pelletsRemaining)
    {
        case 246:
            currentSiren = 0;
            break;
        case 149:
            currentSiren = 1;
            break;
        case 89:
            currentSiren = 2;
            break;
        case 54:
            currentSiren = 3;
            break;
        case 32:
            currentSiren = 4;
            break;
        case 0:
            currentSiren = 0;
            playSiren = false;
            break;
    }

    if (!sound.siren[currentSiren].isPlaying() && playSiren)
    {
        sound.siren[0].stop();
        sound.siren[1].stop();
        sound.siren[2].stop();
        sound.siren[3].stop();
        sound.siren[4].stop();
        sound.siren[currentSiren].loop();
    }
    if (!playSiren)
    {
        sound.siren[0].stop();
        sound.siren[1].stop();
        sound.siren[2].stop();
        sound.siren[3].stop();
        sound.siren[4].stop();
    }
}