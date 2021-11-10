---
title: Dual Axis Illusion
subtitle: Dobles ejes
summary: Ilusión óptica realizada con circulos que aparentan un movimiento ondultario entre ellos
authors:
- Nicolas
tags: []
categories: []
date: "2021-11-08T00:00:00Z"
featured: false
draft: 
share: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  caption: 'Image credit: [**rafasalgado**](https://rafasalgado.github.io/personal/projects/ilusionoptica/ilusion.html)'
  focal_point: ""
  preview_only: true

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

---

## Descripcion

Esta forma giratoria parece desafiar la lógica al girar alrededor del eje horizontal y vertical, al mismo tiempo. Para hacer las cosas aún más confusas, la dirección de rotación también es ambigua.
El autor, Frank Force, menciona que la idea de crear Dual Axis surgió en la mente de Force mientras experimentaba con las curvas de Lissajous (un sistema de ecuaciones que genera una acción armónica compleja). Force creía que, con la mezcla adecuada de concentración y dedicación, podría hacer que el sistema girara alrededor de cualquier eje. 

## Usabilidad

Son útiles para comprender mejor las limitaciones del sentido visual del ser humano y la posibilidad de distorsión, ya sea en la forma, la dimensión, el color y la perspectiva de lo observado. Estos son sólo algunos ejemplos de cómo nuestro cerebro interpreta de manera distintiva el mundo que nos rodea. Como expresó el autor, el fin era crear una ilusion optica hipnótica, relajante y llamativa, también lo relaciona con la metáfora de ver las cosas desde diferentes perspectivas.


{{< p5-iframe sketch="dualaxisilusion.js" width="730" height="520" >}}

## Al detalle

En el siguiente video se puede observar sobre que ejes rota.


{{< p5-instance-div id="video" >}}
	let fingers;
	p5.setup = function() {
    p5.createCanvas(1280, 700);
    // specify multiple formats for different browsers
    fingers = p5.createVideo(['/portafolio/post/Ilusion4/Dual_Axis_Illusion.mov','/portafolio/post/Ilusion4/Dua_Axis_Illusion.webm']);
    fingers.hide(); // by default video shows up in separate dom
                    // element. hide it and draw it to the canvas instead 
  };

  p5.draw = function() {
    p5.background(150);
    p5.image(fingers, 0, 0); // draw a second copy to canvas
  };

  p5.mousePressed = function() {
    fingers.loop(); // set the video to loop and start playing  
  }

{{< /p5-instance-div >}}

{{< details title="code to the solution" open=false >}}
```js
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(35)
	background(10);
}
var t
var a,b,c
var aa,bb,cc
var l1,l2,r1,r2
var radX,radY
function draw() {
	radX=width/4
	radY=height/4
	background(15);
	t=frameCount*0.015

	//stroke(cos(2*t)*255,cos(2*t+2/5*PI)*255,cos(2*t+4/5*PI)*255)
    stroke(255)
  
	a=cos(t)*radX
	b=cos(t+PI*2/3)*radX
	c=cos(t+PI*4/3)*radX

	l1=cos(t*1.5+PI/2)*radY
	l2=cos(t*1.5+PI*3/2)*radY

	r1=cos(t*1.5)*radY
	r2=cos(t*1.5+PI)*radY

	aa=cos(t+PI*1/3)*radX
	bb=cos(t+PI*2/3+PI*1/3)*radX
	cc=cos(t+PI*4/3+PI*1/3)*radX
	
	strokeWeight(35)
	noFill();
	beginShape();
	curveVertex(width/2+a, height/2);
	curveVertex(width/2+a, height/2);
	curveVertex(width/2+cc, height/2+radY);
	curveVertex(width/2+c, height/2);
	curveVertex(width/2+bb, height/2-radY);
	curveVertex(width/2+b, height/2);
	curveVertex(width/2+aa, height/2+radY);
	curveVertex(width/2+a, height/2);
	curveVertex(width/2+cc, height/2-radY);
	curveVertex(width/2+c, height/2);
	curveVertex(width/2+bb, height/2+radY);
	curveVertex(width/2+b, height/2);
	curveVertex(width/2+aa, height/2-radY);
	curveVertex(width/2+a, height/2);
	curveVertex(width/2+cc, height/2+radY);
	endShape();

}

```
{{< /details >}}
