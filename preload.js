let texture;
let sprite;
let img;

function preload() {

  img = {
    defines: loadImage('resources/assets/map_defines.png'),
    background: loadImage('resources/assets/background.png')
  }

  sprite = {

    pac_man: [
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png')
    ],

    big_pac_man: [
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png'),
      loadImage('resources/assets/placeholder.png')
    ],

    fruit: [
      loadImage('resources/assets/cherry.png'),
      loadImage('resources/assets/strawberry.png'),
      loadImage('resources/assets/orange.png'),
      loadImage('resources/assets/apple.png'),
      loadImage('resources/assets/melon.png'),
      loadImage('resources/assets/galaxian.png'),
      loadImage('resources/assets/bell.png'),
      loadImage('resources/assets/key.png')
    ],

    dot: loadImage('resources/assets/dot.png'),
    power_pellet: loadImage('resources/assets/power_pellet.png'),
    gate: loadImage('resources/assets/gate.png'),

    ghost_body: [
      loadImage('resources/assets/ghost_body_0.png'),
      loadImage('resources/assets/ghost_body_1.png')
    ],

    ghost_eyes: [
      loadImage('resources/assets/ghost_eyes_left.png'),
      loadImage('resources/assets/ghost_eyes_up.png'),
      loadImage('resources/assets/ghost_eyes_right.png'),
      loadImage('resources/assets/ghost_eyes_down.png')
    ],

    ghost_score: [
      loadImage('resources/assets/score_200.png'),
      loadImage('resources/assets/score_400.png'),
      loadImage('resources/assets/score_800.png'),
      loadImage('resources/assets/score_1600.png')
    ],

    fruit_score: [
      loadImage('resources/assets/score_100.png'),
      loadImage('resources/assets/score_300.png'),
      loadImage('resources/assets/score_500.png'),
      loadImage('resources/assets/score_700.png'),
      loadImage('resources/assets/score_1000.png'),
      loadImage('resources/assets/score_2000.png'),
      loadImage('resources/assets/score_3000.png'),
      loadImage('resources/assets/score_5000.png')
    ]

  }

}
