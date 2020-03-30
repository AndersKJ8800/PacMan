let texture;
let sprite;
let img;

function preload() {

  img = {
    defines: loadImage('assets/map_defines.png'),
    background: loadImage('assets/background.png')
  }

  sprite = {

    pac_man: [
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png')
    ],

    big_pac_man: [
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png'),
      loadImage('assets/placeholder.png')
    ],

    fruit: [
      loadImage('assets/cherry.png'),
      loadImage('assets/strawberry.png'),
      loadImage('assets/orange.png'),
      loadImage('assets/apple.png'),
      loadImage('assets/melon.png'),
      loadImage('assets/galaxian.png'),
      loadImage('assets/bell.png'),
      loadImage('assets/key.png')
    ],

    dot: loadImage('assets/dot.png'),
    power_pellet: loadImage('assets/power_pellet.png'),
    gate: loadImage('assets/gate.png'),

    ghost_body: [
      loadImage('assets/ghost_body_0.png'),
      loadImage('assets/ghost_body_1.png')
    ],

    ghost_eyes: [
      loadImage('assets/ghost_eyes_left.png'),
      loadImage('assets/ghost_eyes_up.png'),
      loadImage('assets/ghost_eyes_right.png'),
      loadImage('assets/ghost_eyes_down.png')
    ],

    ghost_score: [
      loadImage('assets/score_200.png'),
      loadImage('assets/score_400.png'),
      loadImage('assets/score_800.png'),
      loadImage('assets/score_1600.png')
    ],

    fruit_score: [
      loadImage('assets/score_100.png'),
      loadImage('assets/score_300.png'),
      loadImage('assets/score_500.png'),
      loadImage('assets/score_700.png'),
      loadImage('assets/score_1000.png'),
      loadImage('assets/score_2000.png'),
      loadImage('assets/score_3000.png'),
      loadImage('assets/score_5000.png')
    ]

  }

}
