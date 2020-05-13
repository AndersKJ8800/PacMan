let sprite;
let img;
let sound;

function preload() {

  img = {
    defines: loadImage('resources/images/map_defines.png'),
    background: loadImage('resources/images/background.png')
  }

  symbol = {
    letter: [
      loadImage('resources/images/symbols/A.png'),
      loadImage('resources/images/symbols/B.png'),
      loadImage('resources/images/symbols/C.png'),
      loadImage('resources/images/symbols/D.png'),
      loadImage('resources/images/symbols/E.png'),
      loadImage('resources/images/symbols/F.png'),
      loadImage('resources/images/symbols/G.png'),
      loadImage('resources/images/symbols/H.png'),
      loadImage('resources/images/symbols/I.png'),
      loadImage('resources/images/symbols/J.png'),
      loadImage('resources/images/symbols/K.png'),
      loadImage('resources/images/symbols/L.png'),
      loadImage('resources/images/symbols/M.png'),
      loadImage('resources/images/symbols/N.png'),
      loadImage('resources/images/symbols/O.png'),
      loadImage('resources/images/symbols/P.png'),
      loadImage('resources/images/symbols/Q.png'),
      loadImage('resources/images/symbols/R.png'),
      loadImage('resources/images/symbols/S.png'),
      loadImage('resources/images/symbols/T.png'),
      loadImage('resources/images/symbols/U.png'),
      loadImage('resources/images/symbols/V.png'),
      loadImage('resources/images/symbols/W.png'),
      loadImage('resources/images/symbols/X.png'),
      loadImage('resources/images/symbols/Y.png'),
      loadImage('resources/images/symbols/Z.png')
    ],
    number: [
      loadImage('resources/images/symbols/0.png'),
      loadImage('resources/images/symbols/1.png'),
      loadImage('resources/images/symbols/2.png'),
      loadImage('resources/images/symbols/3.png'),
      loadImage('resources/images/symbols/4.png'),
      loadImage('resources/images/symbols/5.png'),
      loadImage('resources/images/symbols/6.png'),
      loadImage('resources/images/symbols/7.png'),
      loadImage('resources/images/symbols/8.png'),
      loadImage('resources/images/symbols/9.png')
    ],
    exclamation: loadImage('resources/images/symbols/!.png')
  }

  sprite = {

    pacMan: [
      loadImage('resources/images/pac_man_0.png'),
      loadImage('resources/images/pac_man_1.png'),
      loadImage('resources/images/pac_man_2.png'),
      loadImage('resources/images/pac_man_1.png')
    ],

    pacManDying: [
      loadImage('resources/images/pac_man_dying_0.png'),
      loadImage('resources/images/pac_man_dying_1.png'),
      loadImage('resources/images/pac_man_dying_2.png'),
      loadImage('resources/images/pac_man_dying_3.png'),
      loadImage('resources/images/pac_man_dying_4.png'),
      loadImage('resources/images/pac_man_dying_5.png'),
      loadImage('resources/images/pac_man_dying_6.png'),
      loadImage('resources/images/pac_man_dying_7.png'),
      loadImage('resources/images/pac_man_dying_8.png'),
      loadImage('resources/images/pac_man_dying_9.png'),
      loadImage('resources/images/pac_man_dying_10.png')
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
      loadImage('resources/images/ghost_eyes_up.png'),
      loadImage('resources/images/ghost_eyes_right.png'),
      loadImage('resources/images/ghost_eyes_down.png'),
      loadImage('resources/images/ghost_eyes_left.png')
    ],

    ghostFaceBlue: loadImage('resources/images/ghost_face_blue.png'),

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
    ],

    life: loadImage('resources/images/life.png')

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
