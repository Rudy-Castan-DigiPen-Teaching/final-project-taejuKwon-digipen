class MainMenu {
  constructor() {
    const center_x = width / 2;
    this.play = new Button(center_x, height * 2 / 5, "Play");
    this.htp = new Button(center_x, height * 3 / 5, "How To Play");
    this.credits = new Button(center_x, height * 4 / 5, "Credits");
  }

  Update() {
    textSize(15)
    if (this.play.DidClickButton()) {
      console.log("Play!");
      CurrentScene = PLAY;
    } else if (this.htp.DidClickButton()) {
      console.log("How to Play");
      CurrentScene = HTP_SCREEN;
    } else if (this.credits.DidClickButton()) {
      console.log("Credits!");
      CurrentScene = CREDITS_SCREEN;
    }
  }

  Draw() {
    DrawTitle("Dream of Polly");
    this.play.DrawButton();
    this.htp.DrawButton();
    this.credits.DrawButton();
  }
}