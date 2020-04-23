let sprite;
let img;
let sound;

function preload() {

  img = {
    defines: loadImage('resources/images/map_defines.png'),
    background: loadImage('resources/images/background.png')
  }

  sprite = {

    pacMan: [
      loadImage('resources/images/pac_man_0.png'),
      loadImage('resources/images/pac_man_1.png'),
      loadImage('resources/images/pac_man_2.png'),
      loadImage('resources/images/pac_man_1.png')
    ],

    bigPacMan: [
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png')
    ],

    fruit: [
      loadImage('resources/images/cherry.png'),
      loadImage('resources/images/strawberry.png'),
      loadImage('resources/images/orange.png'),
      loadImage('resources/images/apple.png'),
      loadImage('resources/images/melon.png'),
      loadImage('resources/images/galaxian.png'),
      loadImage('resources/images/bell.png'),
      loadImage('resources/images/key.png')
    ],

    dot: loadImage('resources/images/dot.png'),
    powerPellet: loadImage('resources/images/power_pellet.png'),
    gate: loadImage('resources/images/gate.png'),

    ghostBody: [
      loadImage('resources/images/ghost_body_0.png'),
      loadImage('resources/images/ghost_body_1.png')
    ],

    ghostEyes: [
      loadImage('resources/images/ghost_eyes_left.png'),
      loadImage('resources/images/ghost_eyes_up.png'),
      loadImage('resources/images/ghost_eyes_right.png'),
      loadImage('resources/images/ghost_eyes_down.png')
    ],

    ghostScore: [
      loadImage('resources/images/score_200.png'),
      loadImage('resources/images/score_400.png'),
      loadImage('resources/images/score_800.png'),
      loadImage('resources/images/score_1600.png')
    ],

    fruitScore: [
      loadImage('resources/images/score_100.png'),
      loadImage('resources/images/score_300.png'),
      loadImage('resources/images/score_500.png'),
      loadImage('resources/images/score_700.png'),
      loadImage('resources/images/score_1000.png'),
      loadImage('resources/images/score_2000.png'),
      loadImage('resources/images/score_3000.png'),
      loadImage('resources/images/score_5000.png')
    ]

  }

  animatedSprite = {
    pacMan: sprite.pacMan[0],
    powerPellet: sprite.powerPellet,
    ghostBody: sprite.ghostBody[0]
  }

  sound = {
    credit: loadSound('resources/sound/credit.ogg'),
    death: loadSound('resources/sound/death.ogg'),
    eatFruit: loadSound('resources/sound/eat_fruit.ogg'),
    eatGhost: loadSound('resources/sound/eat_ghost.ogg'),
    intermission: loadSound('resources/sound/intermission.ogg'),
    lethalNomming: loadSound('resources/sound/lethal_nomming.ogg'),
    nom0: loadSound('resources/sound/nom_0.ogg'),
    nom1: loadSound('resources/sound/nom_1.ogg'),
    oneup: loadSound('resources/sound/oneup.ogg'),
    retreat: loadSound('resources/sound/retreat.ogg'),
    siren: [
        loadSound('resources/sound/siren_0.ogg'),
        loadSound('resources/sound/siren_1.ogg'),
        loadSound('resources/sound/siren_2.ogg'),
        loadSound('resources/sound/siren_3.ogg'),
        loadSound('resources/sound/siren_4.ogg'),
    ],
    start: loadSound('resources/sound/start.ogg')
  }

}
