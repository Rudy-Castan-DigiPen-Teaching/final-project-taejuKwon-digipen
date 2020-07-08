

class Object2 {
  constructor(x, y = 0) {
    this.y = y
    this.x = x
  }

  draw() {
    push()
    rectMode(CENTER)
    rect(this.x, this.y, 30,30)
    pop()
  }

  update() {
    {
      this.y++
      
      if ( this.y == 600){
        this.x = random(array)
        this.y = 0
      }
    }
  }  
}