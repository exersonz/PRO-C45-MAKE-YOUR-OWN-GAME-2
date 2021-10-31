function handleElementsStage0()
{
  //none for now 
}

function handleStage0()
{
  textSize(30);
  text("There's a treasure chest up ahead, but you would have",80,80);
  text("to pass these 5 stages to obtain the treasure chest.",80,110);
  text("Just a little heads up, there will be obstacles along the way.",80,140);
  text("Good luck, and avoid the obstacles!!",80,170);

  text("Press space to jump",600,300);
  text("Use the up, left, and", 600,330);
  text("right keys to move",600,360)

  ditto.collide(ground);

  if(ditto.collide(next))
  {
    stage = 1;
    ditto.x = 100;
    ditto.y = 560;
    firstTimeEnterStage = true;
  }
}
