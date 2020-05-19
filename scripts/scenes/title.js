function title()
{
  let x = 0;
  let y = 0;

  //Bogstaver bliver tegnet som billeder i stedet for som text med en font, da fonts kan se sløre ud, ikke altid skalerer korrekt, mm.

  // PUSH SPACE BUTTON
  tint(255,184,81);
  x = 5;
  y = 14;
  image(symbol.letter[15], x*8, y*8); x += 1;
  image(symbol.letter[17], x*8, y*8); x += 1;
  image(symbol.letter[4], x*8, y*8); x += 1;
  image(symbol.letter[18], x*8, y*8); x += 1;
  image(symbol.letter[18], x*8, y*8); x += 2;
  if (ceil(millis()/350) % 2)
  {
    image(symbol.letter[18], x*8, y*8); x += 1;
    image(symbol.letter[15], x*8, y*8); x += 1;
    image(symbol.letter[0], x*8, y*8); x += 1;
    image(symbol.letter[2], x*8, y*8); x += 1;
    image(symbol.letter[4], x*8, y*8); x += 2;
  }
  else
  {
    x += 6;
  }
  image(symbol.letter[1], x*8, y*8); x += 1;
  image(symbol.letter[20], x*8, y*8); x += 1;
  image(symbol.letter[19], x*8, y*8); x += 1;
  image(symbol.letter[19], x*8, y*8); x += 1;
  image(symbol.letter[14], x*8, y*8); x += 1;
  image(symbol.letter[13], x*8, y*8); x += 1;

  // BONUS PAC-MAN FOR 10000 pts
  tint(255,184,174);
  x = 1.5;
  y = 18;
  image(symbol.letter[1], x*8, y*8); x += 1;
  image(symbol.letter[14], x*8, y*8); x += 1;
  image(symbol.letter[13], x*8, y*8); x += 1;
  image(symbol.letter[20], x*8, y*8); x += 1;
  image(symbol.letter[18], x*8, y*8); x += 2;
  image(symbol.letter[15], x*8, y*8); x += 1;
  image(symbol.letter[0], x*8, y*8); x += 1;
  image(symbol.letter[2], x*8, y*8); x += 1;
  image(symbol.dash, x*8, y*8); x += 1;
  image(symbol.letter[12], x*8, y*8); x += 1;
  image(symbol.letter[0], x*8, y*8); x += 1;
  image(symbol.letter[13], x*8, y*8); x += 2;
  image(symbol.letter[5], x*8, y*8); x += 1;
  image(symbol.letter[14], x*8, y*8); x += 1;
  image(symbol.letter[17], x*8, y*8); x += 2;
  image(symbol.number[1], x*8, y*8); x += 1;
  image(symbol.number[0], x*8, y*8); x += 1;
  image(symbol.number[0], x*8, y*8); x += 1;
  image(symbol.number[0], x*8, y*8); x += 1;
  image(symbol.number[0], x*8, y*8); x += 1;
  image(symbol.pts, x*8, y*8); x += 1;

  // © 1980 MIDWAY MFG. CO.
  tint(255,184,255);
  x = 3.5;
  y = 22;
  image(symbol.copyright, x*8, y*8); x += 2;
  image(symbol.number[1], x*8, y*8); x += 1;
  image(symbol.number[9], x*8, y*8); x += 1;
  image(symbol.number[8], x*8, y*8); x += 1;
  image(symbol.number[0], x*8, y*8); x += 2;
  image(symbol.letter[12], x*8, y*8); x += 1;
  image(symbol.letter[8], x*8, y*8); x += 1;
  image(symbol.letter[3], x*8, y*8); x += 1;
  image(symbol.letter[22], x*8, y*8); x += 1;
  image(symbol.letter[0], x*8, y*8); x += 1;
  image(symbol.letter[24], x*8, y*8); x += 2;
  image(symbol.letter[12], x*8, y*8); x += 1;
  image(symbol.letter[5], x*8, y*8); x += 1;
  image(symbol.letter[6], x*8, y*8); x += 1;
  image(symbol.dot, x*8, y*8); x += 1;
  image(symbol.letter[2], x*8, y*8); x += 1;
  image(symbol.letter[14], x*8, y*8); x += 1;
  image(symbol.dot, x*8, y*8); x += 1;

  // ANDERS K. JENSBY
  tint(81,184,81);
  x = 7;
  y = 27;
  image(symbol.letter[0], x*8, y*8); x += 1;
  image(symbol.letter[13], x*8, y*8); x += 1;
  image(symbol.letter[3], x*8, y*8); x += 1;
  image(symbol.letter[4], x*8, y*8); x += 1;
  image(symbol.letter[17], x*8, y*8); x += 1;
  image(symbol.letter[18], x*8, y*8); x += 2;
  image(symbol.letter[10], x*8, y*8); x += 1;
  image(symbol.dot, x*8, y*8); x += 1;
  image(symbol.letter[9], x*8, y*8); x += 1;
  image(symbol.letter[4], x*8, y*8); x += 1;
  image(symbol.letter[13], x*8, y*8); x += 1;
  image(symbol.letter[18], x*8, y*8); x += 1;
  image(symbol.letter[1], x*8, y*8); x += 1;
  image(symbol.letter[24], x*8, y*8); x += 1;

  // THOR B. NIELSEN
  x = 7.5;
  y = 29;
  image(symbol.letter[19], x*8, y*8); x += 1;
  image(symbol.letter[7], x*8, y*8); x += 1;
  image(symbol.letter[14], x*8, y*8); x += 1;
  image(symbol.letter[17], x*8, y*8); x += 2;
  image(symbol.letter[1], x*8, y*8); x += 1;
  image(symbol.dot, x*8, y*8); x += 1;
  image(symbol.letter[13], x*8, y*8); x += 1;
  image(symbol.letter[8], x*8, y*8); x += 1;
  image(symbol.letter[4], x*8, y*8); x += 1;
  image(symbol.letter[11], x*8, y*8); x += 1;
  image(symbol.letter[18], x*8, y*8); x += 1;
  image(symbol.letter[4], x*8, y*8); x += 1;
  image(symbol.letter[13], x*8, y*8); x += 1;

  // 2.X
  x = 12.5;
  y = 31;
  image(symbol.number[2], x*8, y*8); x += 1;
  image(symbol.dot, x*8, y*8); x += 1;
  image(symbol.letter[23], x*8, y*8); x += 1;

  // PROGRAMMERING C HTX
  x = 4.5;
  y = 33;
  image(symbol.letter[15], x*8, y*8); x += 1;
  image(symbol.letter[17], x*8, y*8); x += 1;
  image(symbol.letter[14], x*8, y*8); x += 1;
  image(symbol.letter[6], x*8, y*8); x += 1;
  image(symbol.letter[17], x*8, y*8); x += 1;
  image(symbol.letter[0], x*8, y*8); x += 1;
  image(symbol.letter[12], x*8, y*8); x += 1;
  image(symbol.letter[12], x*8, y*8); x += 1;
  image(symbol.letter[4], x*8, y*8); x += 1;
  image(symbol.letter[17], x*8, y*8); x += 1;
  image(symbol.letter[8], x*8, y*8); x += 1;
  image(symbol.letter[13], x*8, y*8); x += 1;
  image(symbol.letter[6], x*8, y*8); x += 2;
  image(symbol.letter[2], x*8, y*8); x += 2;
  image(symbol.letter[7], x*8, y*8); x += 1;
  image(symbol.letter[19], x*8, y*8); x += 1;
  image(symbol.letter[23], x*8, y*8); x += 1;


  noTint();

}
