class HTPScreen {
  constructor() {
    const center_x = width / 2;
    this.mainmenu = new Button(center_x, height - 50, "Main Menu");
  }

  Update() {
    textAlign(CENTER)
    textSize(20)
    text("Please help baby Polarbear! \n If your score is more than 10, \n his mother will be comeback!\n But if he eat trash only once, he will be die.\n Be careful!", width / 2, height / 2)
    
    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    DrawTitle("How To Play");
    this.mainmenu.DrawButton();
  }
}