function completeLevel()
{
  for (let i = 0; i < squares.length; i++)
  {
    if (squares[i].type === "dot" || squares[i].type === "power pellet")
    {
      squares[i].type = "clear";
    }
  }
}
