//권태주
//Prototype
//CS099
//Spring 2020

class CreditsScreen {
  constructor() {
    this.mainmenu = new Button(width / 2, height - 50, "Main Menu");
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      console.log("Main Menu!");
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {

    DrawTitle("Credits");
    textAlign(CENTER)
    text("Made by \n Taeju Kwon", width / 2, height / 3);

    this.mainmenu.DrawButton();
  }
}  