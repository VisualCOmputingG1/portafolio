var x = 0;
var xspeed = 1;
var i = 0;
var bars = true;

function setup() {
  createCanvas(640, 640);
}

function draw() {
  background(color(0, 0, 0));
  if (x + 100 > width || x < 0) {
    xspeed = -xspeed;
  }
  x = x + xspeed;
  createBars();
  fill(0, 0, 255);
  rect(x + 25, 200, 125, 50);
  fill(255, 255, 0);
  rect(x, 400, 125, 50);
  if (bars) {
    createBars();
  }
}

function createBars() {
  var len = 20;
  for (var i = 0; i < width / len; i++) {
    fill("white");
    if (i % 2 == 0) rect(i * len, height, len, -height);
  }
}

function mousePressed() {
  bars = !bars;
}

function keyPressed() {
  bars = !bars;
}