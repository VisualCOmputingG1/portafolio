---
title: Moving Dots Illusion
subtitle: Puntos en movimiento
summary: Ilusión óptica realizada con circulos que aparentan un movimiento ondultario entre ellos
authors:
- Stevan
tags: []
categories: []
date: "2021-11-04T00:00:00Z"
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

En esta ilusión de puntos en movimiento, los puntos parecen moverse en un movimiento ondulatorio, pero en realidad los puntos están girando en su lugar, creando una ilusión de movimiento ondulado.

## Usabilidad

Las ilusiones de movimiento suelen funcionar presentando un patrón compuesto por colores o tonos de alto contraste. Estos aspectos contrastantes desencadenan diferentes señales neuronales simultáneamente, lo que da como resultado un efecto de detección de movimiento cuando en realidad no hay movimiento. 


{{< p5-iframe sketch="contournsIlusion.js" width="730" height="730" >}}


{{< details title="code to the solution" open=false >}}
```js
let angle = 0;
function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(50);
  for (let i = 50; i < width - 45; i += 50) {
    for (let j = 50; j < height - 45; j += 50) {

      push()
      fill(0, 168, 0);
      stroke(0, 0, 150);
      strokeWeight(3);
      ellipse(i, j, 25, 25);
      pop()

      push()
      translate(i, j);
      rotate(HALF_PI + i - angle * 3)
      stroke(0, 168, 168);
      strokeWeight(3);
      noFill();
      arc(0, 0, 30, 30, 0, PI)
      pop()

      push()
      translate(i, j);
      rotate(QUARTER_PI * j + angle * 4)
      stroke(0, 255, 255);
      strokeWeight(3);
      noFill();
      arc(0, 0, 25, 25, PI , 0)
      pop()

      angle += 0.0005

    }
  }
}

```
{{< /details >}}
