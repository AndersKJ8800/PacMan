let sprite;
let img;

function preload() {

  img = {
    defines: loadImage('resources/images/map_defines.png'),
    background: loadImage('resources/images/background.png')
  }

  sprite = {

    pac_man: [
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png'),
      loadImage('resources/images/placeholder.png')
    ],

    big_pac_man: [
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
    power_pellet: loadImage('resources/images/power_pellet.png'),
    gate: loadImage('resources/images/gate.png'),

    ghost_body: [
      loadImage('resources/images/ghost_body_0.png'),
      loadImage('resources/images/ghost_body_1.png')
    ],

    ghost_eyes: [
      loadImage('resources/images/ghost_eyes_left.png'),
      loadImage('resources/images/ghost_eyes_up.png'),
      loadImage('resources/images/ghost_eyes_right.png'),
      loadImage('resources/images/ghost_eyes_down.png')
    ],

    ghost_score: [
      loadImage('resources/images/score_200.png'),
      loadImage('resources/images/score_400.png'),
      loadImage('resources/images/score_800.png'),
      loadImage('resources/images/score_1600.png')
    ],

    fruit_score: [
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

}
