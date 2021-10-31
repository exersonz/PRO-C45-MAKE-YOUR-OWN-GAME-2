var stage0_bg, stage1_bg, stage2_bg, stage3_bg;
var ground;
var fire;
var ditto, dittoImg;
var next_arrow, arrow;
var stage = 0;
var stone, stoneImg;
var spike1, spikeImg, spike2, spike3;
var safeGround;
var step1, step2, step3;
var stepDown1, stepDown2, stepDown3;

function preload()
{
  stoneImg = loadImage("assets/stone.png");
  stage0_bg = loadImage("assets/stage0.jpg");
  stage1_bg = loadImage("assets/stage1.jpg");
  stage2_bg = loadImage("assets/stage2.jpg");
  dittoImg = loadImage("assets/ditto.png");
  next_arrow = loadImage("assets/next.png");
  spikeImg = loadImage("assets/triangle.png");
  fire = loadImage("assets/fire.png");
}

function setup() 
{
  createCanvas(1000,600);
  ground = createSprite(500,590,1000,30);

  ditto = createSprite(100,560,50,50);
  ditto.addImage(dittoImg);
  ditto.scale = 0.35;

  next = createSprite(950,550,50,50);
  next.addImage(next_arrow);
  next.scale = 0.2;

  spike1 = createSprite(355,372,50,50);
  spike1.addImage(spikeImg);
  spike1.scale = 0.35;
  spike1.visible = false;

  spike2 = createSprite(540,223,50,50);
  spike2.addImage(spikeImg);
  spike2.scale = 0.35;
  spike2.visible = false;

  spike3 = createSprite(780,133,50,50);
  spike3.addImage(spikeImg);
  spike3.scale = 0.35;
  spike3.visible = false;

  safeGround = createSprite(120,590,270,20);
  safeGround.visible = false;

  step1 = createSprite(300,400,150,15);
  step1.visible = false;
  step2 = createSprite(500,250,150,15);
  step2.visible = false;
  step3 = createSprite(760,160,200,15);
  step3.visible = false;
}

function draw() 
{
  switch(stage)
  {
    case 0:
      background(stage0_bg);
      handleStage0();
      handleDittoMovement();
      break;
    
    case 1:
      background(stage1_bg);
      handleStage1();
      handleDittoMovement();
      break;

    case 2:
      handleStage2();
      background(stage2_bg);
      textSize(50);
      text("Under Construction", 270,300);
      handleDittoMovement();
      break;
/*
    case 3:
      handleStage3();
      handleDittoMovement();
      break;
*/
    default:
      break;
  }
  handleDittoLimitation();
  drawSprites();
}

function handleDittoMovement()
{
  if(keyDown("space") && ditto.y > 0)
  {
    ditto.velocityY = -20;
  }

  if(ditto.velocityY < -10)
  {
    ditto.velocityY = -10;
  }

  ditto.velocityY += 0.95;

  if(keyDown(RIGHT_ARROW))
  {
    ditto.x += 10;
  }

  if(keyDown(LEFT_ARROW))
  {
    ditto.x -= 10;
  }
}

function handleDittoLimitation()
{
  if(ditto.x < 10)
    ditto.x = 10;

  if(ditto.x > 990)
    ditto.x = 990;

  if(ditto.y < 10)
    ditto.y = 10;

  if(ditto.y > 590)
    ditto.y = 590;
}