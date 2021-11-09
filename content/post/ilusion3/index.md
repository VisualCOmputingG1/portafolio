---
title: Pies escalonados
subtitle: Movimiento/Tiempo/Contraste
summary: Ilusión de los buses escalonados. Los bloques parecen tener un desplazamiento alternante, asi como dos pies yendo punta a punta.
authors:
  - Camilo
tags: [Movimiento, Tiempo, Contraste]
categories: []
date: "2021-11-08T00:00:00Z"
featured: false
draft:
share: false
---

## Descripción

Observe el movimiento de los rectangulos azul y amarillo. Los bloques parecen tener un desplazamiento alternante, asi como dos pies yendo punta a punta. Este efecto es más pronunciado si no se mira a los rectangulos directamente si no se mira entre ellos, y también cuando estos no estan del todo juntos, asi como se ve en la animación.

## Explicación

Cuando el rectangulo azul se encuentra sobre las franjas blancas, el contraste es alto y fácilmente visible, por lo que parece moverse más rápido de lo que realmente lo esta haciendo. Por el contrario cuando el rectangulo azul está en las franjas de color negro, el contraste es bajo y más difícil de ver, por lo que el movimiento parece más lento.

Los efectos opuestos ocurren con el bus amarillo. Para mayor claridad puede ver el efecto en: Wikipedia y Michael Bach's blog

## Usabilidad

Haga click sobre la imagen para remover/poner las barrras y ver como los dos objetos van a velocidad constante y siempre se mantienen a la misma distancia el uno del otro.

{{< p5-iframe sketch="piesEscalonados.js" width="730" height="730" >}}

{{< details title="code to the solution" open=false >}}

```js
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
```

{{< /details >}}
