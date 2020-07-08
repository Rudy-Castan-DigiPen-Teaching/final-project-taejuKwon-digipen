class Player {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.height = 200
  }

  draw() {
    push()
    imageMode(CENTER)
    image(PLAYER, this.x, this.y, 200, this.height)
    pop()
  }

  update() {
    if (this.x >= 600) {
      this.x = 100
    }
    if (this.x < 100) {
      this.x = 500
    }
    if (this.y >= 600) {
      this.y = 0
    }
    if (this.y <= -120) {
      this.y = 600
    }
  }

  key_is_down() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 3;
    }
  }
  
  key_is_pressed() {
    if (keyCode == 39) {
      this.x += 200
    }
    if (keyCode == 37) {
      this.x -= 200
    }
  }
}