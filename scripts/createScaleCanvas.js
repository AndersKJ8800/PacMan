let scaleX;
let scaleY;
let scaling;
function createScaleCanvas() {
  //Find højeste x og y skalering der kan passe i vinduet.
  for (scaleX = 1; resX*(scaleX) <= windowWidth; scaleX++);
  for (scaleY = 1; resY*(scaleY) <= windowHeight+1; scaleY++);
  //Lås x og y skaleringen til den mindste.
  if (scaleX > scaleY) {
    scaleY += -1;
    scaling = scaleY;
  } else {
    scaleX += -1;
    scaling = scaleX;
  }
  createCanvas(resX * scaling, resY * scaling);
}
