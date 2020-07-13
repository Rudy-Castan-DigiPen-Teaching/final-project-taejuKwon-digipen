//권태주
//Final project
//CS099
//Spring 2020

class Object1 {
  constructor(x, y, radius = 40) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.degree_angle_of_pupil = 0;
  }

  draw() {
    push()
    let eye_radius = this.radius/4
    let left_eye_x = this.x - this.radius / 4;
    let right_eye_x = this.x + this.radius / 4;
    
    strokeWeight(1)
    circle(this.x, this.y, this.radius)//face
    circle(left_eye_x, this.y, eye_radius)//left_eye
    circle(right_eye_x, this.y, eye_radius)//right eye
    
    let pupil_radius = eye_radius / 4
    let left_pupil_x = left_eye_x + pupil_radius * cos(this.degree_angle_of_pupil)
    let left_pupil_y = this.y + pupil_radius * sin(this.degree_angle_of_pupil)
    let right_pupil_x = right_eye_x + pupil_radius * cos(this.degree_angle_of_pupil)
    let right_pupil_y = this.y + pupil_radius * sin(this.degree_angle_of_pupil)
    
    fill(0)
    circle(left_pupil_x, left_pupil_y, pupil_radius)
    circle(right_pupil_x, right_pupil_y, pupil_radius)
    pop()
  }
  
  update() {
    this.degree_angle_of_pupil += noise(0)/5;
    this.y += 2;
  }
}
