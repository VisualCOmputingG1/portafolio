---
title: invisible contours
subtitle: when the figure makes a sqare or a triangle we can see how they are being developed
summary: this is a fanomenum that makes us feel as there were a real sqare or triangle but actually there is just a 
authors:
- Santiago
tags: []
categories: []
date: "2021-11-04T00:00:00Z"
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  caption: 'Image credit: [**rafasalgado**](https://rafasalgado.github.io/personal/projects/ilusionoptica/ilusion.html)'
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

---

{{< p5-global-iframe id="ilusion" sketch=contournsIlusion.js width="400" height="400" >}}
let angle = 0
let HALF_PI = 1.7
let PI = 3.4
function setup() {
var canvas = createCanvas(400, 400);
canvas.parent('simple-sketch-holder');

}

function draw() {
background(240);

//First
fill(255, 0, 0)
stroke('yellow')
strokeWeight(2)

push()
translate(50, 150)
rotate(HALF_PI + angle)
arc(0, 0, 80, 80, PI, HALF_PI)
pop()

push()
strokeWeight(2)
translate(150, 150)
rotate(HALF_PI * 2 - angle)
arc(0, 0, 80, 80, PI, HALF_PI)
pop()

push()
strokeWeight(2)
translate(150, 250)
rotate(HALF_PI * 3 + angle)
arc(0, 0, 80, 80, PI, HALF_PI)
pop()

push()
strokeWeight(2)
translate(50, 250)
rotate(HALF_PI * 4 - angle)
arc(0, 0, 80, 80, PI, HALF_PI)
pop()


//Second
fill('blue')
stroke('yellow')
strokeWeight(2)

push()
strokeWeight(2)
translate(250, 150)
rotate(HALF_PI * 3 - angle)
arc(0, 0, 80, 80, PI, HALF_PI)
pop()

push()
strokeWeight(2)
translate(350, 150)
rotate(HALF_PI * 4 + angle)
arc(0, 0, 80, 80, PI, HALF_PI)
pop()

push()
strokeWeight(2)
translate(250, 250)
rotate(HALF_PI * 2 + angle)
arc(0, 0, 80, 80, PI, HALF_PI)
pop()

push()
strokeWeight(2)
translate(350, 250)
rotate(HALF_PI - angle)
arc(0, 0, 80, 80, PI, HALF_PI)
pop()


angle += 0.003
}
{{< /p5-global-iframe >}}

{{< details title="code to the solution" open=false >}}
```js
let angle = 0

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('simple-sketch-holder');

}

function draw() {
  background(240);

  //First
  fill(255, 0, 0)
  stroke('yellow')
  strokeWeight(2)

  push()
  translate(50, 150)
  rotate(HALF_PI + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(150, 150)
  rotate(HALF_PI * 2 - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(150, 250)
  rotate(HALF_PI * 3 + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(50, 250)
  rotate(HALF_PI * 4 - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()


  //Second
  fill('blue')
  stroke('yellow')
  strokeWeight(2)

  push()
  strokeWeight(2)
  translate(250, 150)
  rotate(HALF_PI * 3 - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(350, 150)
  rotate(HALF_PI * 4 + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(250, 250)
  rotate(HALF_PI * 2 + angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()

  push()
  strokeWeight(2)
  translate(350, 250)
  rotate(HALF_PI - angle)
  arc(0, 0, 80, 80, PI, HALF_PI)
  pop()


  angle += 0.003
}

```
{{< /details >}}



{{< p5-global-iframe id="breath" width="400" height="400" >}}
let angle = 0;
let speed = 0.06;

function setup() {
createCanvas(400, 400);
}

function draw() {
background(255, 255, 255);
rotateSquare();
if (!mouseIsPressed) {
strokeWeight(0);
stroke(0);
fill(255, 140, 0);
rect(0, 0, 180, 180);
rect(200, 0, 180, 180);
rect(0, 200, 180, 180);
rect(200, 200, 180, 180);
}
}

function rotateSquare() {
push();
angle += speed;
strokeWeight(0);
stroke(0);
fill(0, 0, 255);
translate(width / 2, height / 2);
rotate(angle);
rect(-140.5, -140.5, 275, 275);
pop();
}

{{< /p5-global-iframe >}}

