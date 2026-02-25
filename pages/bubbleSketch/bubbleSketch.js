let x, y;
let speedX = 3;
let speedY = 2;

function setup() {
  createCanvas(640, 480);
  x = width / 2;
  y = height / 2;
  background(255);
}

function draw() {
  background(255);

  fill(255, 100, 100);
  noStroke();
  ellipse(x, y, 50, 50);

  x += speedX;
  y += speedY;

  if (x > width - 25 || x < 25) speedX *= -1;
  if (y > height - 25 || y < 25) speedY *= -1;
}

function goHome() {
  window.location.href = "index.html";
}
