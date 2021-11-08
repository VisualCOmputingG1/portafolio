---
title: Contornos Ilusorios
subtitle: cuando se forma una figura geométrica, el ojo humano tiende a identificarlo por encima del resto de imágenes, 
aun cuando en realidad no existe
summary: este fenómeno nos hace ver que figuras geométricas resaltan, o inclusive que están en otro color, siendo que
no es realmente asi
authors:
- Santiago
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

Contornos ilusorios o contornos subjetivos son ilusiones ópticas que evocan la percepción de una era sin luminancia o 
cambio de color dentro del borde. El brillo ilusorio y su profundidad ordenados son frecuentemente acompañados de 
contornos ilusorios. Friedrich Schumann es a menudo acreditado con el descubrimiento de los contornos ilusorios 
alrededor de los principios del siglo veinte, sin embargo los contornos ilusorios son presentados en un arte de 
citar a las Edades Medias. La hoja Científica Americana de Gaetano Kanizsa escrita en 1976 marca el resurgimiento de 
interés en los contornos ilusorios por científicos de visión. _[**contornos ilusorios**](https://es.wikipedia.org/wiki/Contornos_ilusorios)_

## Usabilidad

Al ser estimulos que afectan directamente las bases neuronales de las percepciones suelen ser utilizados para llamar la 
atencion de los receptores de manera discreta, formando figuras que realmente no estan en la imagen

![img_1.png](img_1.png)

{{< p5-iframe sketch="contournsIlusion.js" width="425" height="425" >}}


{{< details title="code to the solution" open=false >}}
```js
let angle = 0

function setup() {
  createCanvas(400, 400);
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
