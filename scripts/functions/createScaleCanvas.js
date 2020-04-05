let scaling;
function createScaleCanvas() {
  let scaleX;
  let scaleY;
  //Find højeste x og y skalering af spillets opløsning der kan passe i vinduet.
  for (scaleX = 1; resX*(scaleX) <= windowWidth; scaleX++);
  for (scaleY = 1; resY*(scaleY) <= windowHeight+1; scaleY++);
  //Lås x og y skaleringen til den mindste af dem.
  if (scaleX > scaleY) {
    scaleY += -1;
    scaling = scaleY;
  } else {
    scaleX += -1;
    scaling = scaleX;
  }
  createCanvas(resX * scaling, resY * scaling);
}
