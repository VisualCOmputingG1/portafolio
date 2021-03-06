let angle = 0

function setup() {
    createCanvas(400, 400);
//    canvas.parent('simple-sketch-holder');

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

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}