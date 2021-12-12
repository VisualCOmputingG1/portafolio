---
title: Ejemplo de rasterizacion
summary: The mid-point circle es un algoritmo usado para determinar los puntos necesarios para rasrterizar un circulo.
subtitle: The mid-point circle
authors:
- Santiago
tags: []
categories: ["RENDERING"]
date: "2021-11-04T00:00:00Z"
featured: false
draft: 
share: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  caption: 'Image credit: [fgeeksforgeeks](https://www.geeksforgeeks.org/mid-point-circle-drawing-algorithm/)'
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

Usamos el algoritmo del punto medio para calcular todos los puntos perimetrales en el primer octante, y luego los reflejamos a los demas octantes, basados en la propiedad simetrica de la figura a generar
el algoritmo es muy similar al algoritmo para generar lineas basado en el punto medio, lo unico que cambia es la condicion de frontera

paara cualquier pixel (x,y), el siguiente pixel en ser pintado es bien sea ``` (x, y+1) ``` o ``` (x-1, y+1) ```. Esto se decide en los siguientes pasos:
1. Encuentra el punto medio ``` p ``` para ambos posibles pixeles ``` (x-0.5, y+1) ```
2. si  ``` p ``` yace dentro del perimetro del perimetro o bien sobre el, entonces pintamos ``` (x, y+1) ```, de otro modo si esta afuera pintmaremos ```  (x-1, y+1) ```
[geeksforgeeks](https://www.geeksforgeeks.org/mid-point-circle-drawing-algorithm/)

### Condicion de frontera
decidir si el punto yace dentro o fuera del perimetro se decide a travez de la siguiente formula:
```python 
F(p) = x2 + y2 - r2 
if F(p)<0: return inside
else if F(p) == 0: return inside # it means to be on the perimeter
else: return outside
 ```

## Ejemplo estatico

![](295px-Midpoint_circle_algorithm_animation_(radius_23).gif)

## Implementacion

{{< p5-iframe sketch="contournsIlusion.js" width="625" height="625" >}}



{{< details title="code to the solution" open=false >}}
```js
// initial values
// initial values
let x, y, r, d, xc, yc;

let i = 0;
let grids = 26;
let scalFact;

function setup() {
    createCanvas(600, 600);
    background(0);

    scalFact = width / grids;
    r = 8 * scalFact;

    xc = 12 * scalFact;
    yc = 12 * scalFact;

    showGrids();
    showRefCircle();
    bresenham();
}

function showGrids() {
    stroke(255);
    for (i; i < grids * scalFact; i += scalFact) {
        line(i, 0, i, height);
        line(0, i, width, i);
    }
}

function showRefCircle() {
    stroke(200);
    noFill();
    circle(xc + (scalFact / 2), yc + (scalFact / 2), r * 2);
}

function bresenham() {
    x = 0;
    y = r;

    d = (3 * scalFact) - (2 * r);

    symPlot();
    while (x <= y) {
        if (d <= 0) {
            d = d + (4 * x) + (6 * scalFact);
        } else {
            d = d + (4 * x) - (4 * y) + (10 * scalFact);
            y -= scalFact;
        }

        x += scalFact;
        symPlot();
    }
}

function symPlot() {
    fillPixel(x + xc, y + yc);
    fillPixel(x + xc, -y + yc);
    fillPixel(-x + xc, -y + yc);
    fillPixel(-x + xc, y + yc);
    fillPixel(y + xc, x + yc);
    fillPixel(y + xc, -x + yc);
    fillPixel(-y + xc, -x + yc);
    fillPixel(-y + xc, x + yc);
}

function fillPixel(x, y) {
    noStroke();
    squareColor = color(255, 255, 255);
    squareColor.setAlpha(100);
    fill(squareColor);
    square(x, y, scalFact);
}

```
{{< /details >}}
