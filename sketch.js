//권태주
//Final project
//CS099
//Spring 2020

let CurrentScene;
let MainMenuScene;
let CreditsScene;
let HTPScene;
let play
let win
let lose

var array = [ 100,300,500]


function preload() {
  BG = loadImage('Image/BG.png') //배경
  PLAYER = loadImage('Image/IceBear.png')
  BGS = loadSound('Sound/Bg.mp3')
}

function setup() {
  createCanvas(600, 600);
  frameRate(60)
  
  BGS.setVolume(0.1)
  BGS.loop()
  BGS.play()

  CurrentScene = MAIN_MENU
  MainMenuScene = new MainMenu();
  CreditsScene = new CreditsScreen();
  HTPScene = new HTPScreen();
  play = new PlayScene();
  win = new WinScene()
  lose = new LoseScene()
}

function draw() {
  background(BG);

  switch (CurrentScene) {
    case MAIN_MENU:
      MainMenuScene.Update();
      MainMenuScene.Draw();
      break;
    case CREDITS_SCREEN:
      CreditsScene.Update();
      CreditsScene.Draw();
      break;
    case HTP_SCREEN:
      HTPScene.Update();
      HTPScene.Draw();
      break;
    case PLAY:
      play.Update();
      play.Draw();
      break;
    case WIN:
      win.Update();
      win.Draw();
      break;
    case LOSE:
      lose.Update();
      lose.Draw();
      break;
  }
  play.player.key_is_down();
}

function keyPressed() {
  play.player.key_is_pressed();
}
