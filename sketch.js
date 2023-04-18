let soldier,
    fig,
    grape,
    bullet; // Declare a variable to hold the image

let bulletStartX = 700;
let bulletStartY = 247;

let bulletAngle;

let bullets = []; // Array to store bullets
// let bullet;
let gravity = 0.15; // Gravity value
let bulletWidth = 10; // Width of the bullet
let bulletHeight = 5; // Height of the bullet

var frame = 0;

function mousePressed() {
  // Create a new bullet at the mouse position
  bullets.push(new Bullet(bulletStartX, bulletStartY));
  
  // bullets.push(bullet);
}

// function mouseIsPressed() {
//   bullets.push(new Bullet(bulletStartX, bulletStartY));

// }

class Bullet {
  constructor(x, y) {
    this.position = createVector(x, y);
    // this.velocity = createVector(20*cos(60), 20*sin(-30));
    this.velocity = createVector(-8, 0); // Initial velocity of the bullet
    this.acceleration = createVector(0, gravity); // Acceleration due to gravity
    this.width = bulletWidth;
    this.height = bulletHeight;
  }

  update() {
    // Update velocity and position based on acceleration
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  display() {
    // Draw the bullet as a rectangle
    fill(255);
    stroke(255);
    rect(this.position.x, this.position.y, this.width, this.height);
  }

  isOffscreen() {
    // Check if the bullet is offscreen
    return (this.position.x < -this.width || this.position.y > height + this.height);
  }
}

function preload() {
  // Load the image
  soldier = loadImage(`assets/soldier.png`);
  fig = loadImage(`assets/fig.png`);
  grape = loadImage(`assets/grape.png`);
  // img = loadImage('image.png'); // Replace 'image.png' with the actual file path or URL of your image
}


function setup() {
  createCanvas(1000, 700);
}

function draw() {
  frame++;
  if (mouseIsPressed && frame%10 === 0) {
    mousePressed();
  }

  background(0);
  image(grape, 680, 210, 100, 100);
  image(soldier, 700, 200, 100, 100);
  image(fig, 740, 180, 100, 100);

  moveSoldier();
  // shoot();

  for (let bullet of bullets) {
    if (bullet) {
      bullet.update();
      bullet.display();

      // Remove bullets that are offscreen
      if (bullet.isOffscreen()) {
        bullet = null;
      }
    }
  }

}

function moveSoldier() {
  
}

// function shoot() {
//   if (mouseIsPressed) {
//     fill(255);
//     rect(100, 100, 20, 20);
    
    
//   }
// }