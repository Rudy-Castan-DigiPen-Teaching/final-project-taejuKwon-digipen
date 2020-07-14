//권태주
//Prototype
//CS099
//Spring 2020

class PlayScene {
  constructor() {
    this.circle_objects = []
    this.rect_objects = []
    this.array = array
    this.array_OB = this.array[round(random(0, 2))]
    this.array_OB2 = this.array[round(random(0, 2))]
    this.Score = 0
    this.player = new Player(300, 500);
    this.timer = 0;
  }

  Draw() {
    push()
    stroke(100, 149, 237)
    line(100, 0, 100, height)
    line(300, 0, 300, height)
    line(500, 0, 500, height)
    pop()


    strokeWeight(7)
    textSize(20)
    text('Score = ' + this.Score,45, 30)

    this.timer += 1 / 250

    if (this.timer > 1) {
      this.circle_objects.push(new Object1(this.array_OB, 0));
      this.rect_objects.push(new Object2(this.array_OB2, 0));
      this.timer = 0;
    }

    this.player.draw();
    this.player.update();

    for (let i = 0; i < this.circle_objects.length; ++i) {
      this.circle_objects[i].draw()
      this.circle_objects[i].update()
    }
    for (let i = 0; i < this.rect_objects.length; ++i) {
      this.rect_objects[i].draw()
      this.rect_objects[i].update()
    }

  }

  Update() {
    for (let i = 0; i < this.circle_objects.length; ++i) {
      if (this.circle_objects[i].x == this.player.x &&
        (this.circle_objects[i].y <= this.player.y + this.player.height / 2 &&
          this.circle_objects[i].y >= this.player.y - this.player.height / 2
        )) {
        this.Score = this.Score + 1
        this.circle_objects.splice(i, 1);
        if (this.Score == 10) {
          CurrentScene = WIN
        }
      }
    }
    for (let i = 0; i < this.circle_objects.length; ++i) {
      if (this.circle_objects[i].y > height) {
        this.circle_objects.splice(i, 1)
      }
    }
    for (let j = 0; j < this.rect_objects.length; ++j) {
      if (this.rect_objects[j].x == this.player.x &&
        (this.rect_objects[j].y <= this.player.y + this.player.height / 2 &&
          this.rect_objects[j].y >= this.player.y - this.player.height / 2
        )) {
        CurrentScene = LOSE
      }
    }
    for (let j = 0; j < this.rect_objects.length; ++j) {
      if (this.rect_objects[j].y > height) {
        this.rect_objects.splice(j, 1)
      }
    }
  }


  Reset() {
    this.circle_objects.splice(0, this.circle_objects.length);
    this.rect_objects.splice(0, this.rect_objects.length);
    this.Score = 0
    this.player = new Player(300, 500);
  }
}