class LoseScene {
  constructor() {
    const center_x = width / 2;
    this.mainmenu = new Button(center_x + 100, height - 50, "Main Menu");
    this.re = new Button(center_x - 100, height - 50, "restart");
    this.check = 0;
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
    } else if (this.re.DidClickButton()) {
      play.Reset()
      CurrentScene = PLAY;
    }
    
  }

  Draw() {
    DrawTitle("Lose");
    this.mainmenu.DrawButton();
    this.re.DrawButton();
  }
}