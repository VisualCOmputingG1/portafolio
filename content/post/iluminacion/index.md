---
title: Algoritmo del pintor
subtitle: Es un algoritmo para la determinación de la superficie visible en gráficos de computadora 3D que funciona polígono por polígono en lugar de píxel por píxel, fila por fila o área por base de área de otros algoritmos de eliminación de superficies ocultas.
summary: El algoritmo del pintor crea imágenes ordenando los polígonos dentro de la imagen por su profundidad y colocando cada polígono en orden desde el objeto más lejano hasta el más cercano.
authors:
- Stevan
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
  caption: 'Image credit: [**wikipedia**](https://en.wikipedia.org/wiki/Painter%27s_algorithm)'
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

El nombre "algoritmo del pintor" se refiere a la técnica empleada por muchos pintores donde comienzan pintando partes distantes de una escena antes que partes más cercanas, cubriendo así algunas áreas de partes distantes. De manera similar, el algoritmo del pintor ordena todos los polígonos en una escena por su profundidad y luego los pinta en este orden, del más lejano al más cercano. Pintará sobre las partes que normalmente no son visibles, resolviendo así el problema de visibilidad, a costa de haber pintado áreas invisibles de objetos distantes. _[**Algoritmo del pintor**](https://en.wikipedia.org/wiki/Painter%27s_algorithm)_

![img1.png](img1.png)

En esta imagen de ejemplo se pintan primero las montañas lejanas, seguidas por el prado; finalmente se dibujan los objetos más cercanos, los árboles.


## Algoritmo

Conceptualmente, el algoritmo de Painter funciona de la siguiente manera:

  1. Ordenar cada polígono por profundidad
  2. Coloque cada polígono desde el polígono más lejano al polígono más cercano

{{< p5-iframe sketch="painterAlgorithm.js" width="850" height="600" >}}


## Ventajas
  * El algoritmo del pintor no es tan complejo en estructura como sus otras contrapartes del algoritmo de clasificación en profundidad.
  * Esta simplicidad lo hace útil en escenarios de salida de gráficos de computadora básicos donde un renderizado no sofisticado deberá realizarse con poca dificultad.
  * El algoritmo del pintor prioriza el uso eficiente de la memoria, pero a expensas de una mayor potencia de procesamiento, ya que se deben renderizar todas las partes de todas las imágenes.


## Limitaciones

  * En el caso de superposición cíclica, como se muestra en la siguiente figura, los polígonos A, B y C se superponen entre sí de tal manera que es imposible determinar qué polígono está por encima de los demás.

  ![img2.png](img2.png)

  * El caso de perforar polígonos surge cuando un polígono se cruza con otro. De manera similar a la superposición cíclica, este problema se puede resolver cortando los polígonos ofensivos.

  * En implementaciones básicas, el algoritmo del pintor puede ser ineficaz. Obliga al sistema a representar cada punto en cada polígono del conjunto visible, incluso si ese polígono está ocluido en la escena final. Esto significa que, para escenas detalladas, el algoritmo del pintor puede sobrecargar el hardware de la computadora.