let jump = 0;
let count = 0;

p5.setup = function() {
    p5.createCanvas(380, 380);
    p5.frameRate(7);
};

function drawBlurCircles(x, y, r) {
    p5.push();
    p5.noStroke();
    var opc = 0.4;
    var step = 3.0/r;

    for (var i = r; i > 0; i-=1.5) {
        if (opc < 5) {
            opc += step;
            p5.fill(255, 20, 180, opc);
        }
        p5.ellipse(x, y, i, i);
    }
    p5.pop();
};

p5.draw = function() {
    p5.background(200);
    var numCircles = 12;
    var stepAngle = 360.0/numCircles;
    p5.push();
    p5.translate(p5.width/2.0, p5.height/2.0);
    for (var i = 0; i < 360; i = i + stepAngle) {
        if (i != jump) {
            p5.push();
            p5.rotate(p5.radians(i));
            drawBlurCircles(120, 0, 60);
            p5.pop();
        }
    }
    if( !p5.mouseIsPressed ) {
        jump = (jump + stepAngle)%360;
    }
    p5.push();
    p5.strokeWeight(1.5);
    p5.line(-7, 0, 7, 0);
    p5.line(0, -7, 0, 7);
    p5.pop();
    p5.pop();
}