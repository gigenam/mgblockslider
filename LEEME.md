[Read in english](./README.md)

```
Contribuidores : gigenam
Licencia       : GPLv2 or later
Licencia URI   : https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
```

![WordPress Plugin Version](https://img.shields.io/wordpress/plugin/v/mg-block-slider?label=Versión)
![Required Node Version](https://img.shields.io/badge/Mínimo->=16.x%20-blue?logo=node.js)
![WordPress Plugin Required PHP Version](https://img.shields.io/wordpress/plugin/required-php/mg-block-slider?label=Recomendado&logo=php)
![WordPress Plugin: Required WP Version](https://img.shields.io/wordpress/plugin/wp-version/mg-block-slider?label=Mínimo&logo=wordpress)
![WordPress Plugin: Tested WP Version](https://img.shields.io/wordpress/plugin/tested/mg-block-slider?label=Probado&logo=wordpress)

![MG Block Slider Banner](./app/assets/img/banner.png)

# MG Block Slider

Un bloque de slideshow simple para usarlo en cualquier editor de bloques con
cualquier tipo de contenido. Entradas, páginas, widgets. Cualquier cosa y en
cualquier lugar que quieras.

## Descripción

Crea un slideshow de casi cualquier otro bloque predeterminado. Imágenes, videos,
grupos, columnas, etc. Con una interfaz de bloque simple y un par de configuraciones
que puedes personalizar y agregar tantos slideshows en tu contenido como quieras.

En el primer paso, cuando agregues una nueva tarjeta, verá solo un par de bloques
para seleccionar. Esto es por simplicidad y para resaltar los más comunes (y más
probados), pero puedes agregar cualquier cosa dentro. Por ejemplo, ¿Quieres deslizar
Entradas, widgets, archivos, incluso productos de woocommerce? Agrega un bloque
de grupo, o cover, o columnas y coloca cualquier bloque dentro.

Un par de ejemplos de lo que puedes configurar con este plugin.

- Múltiple navegaciones (flechas, puntos, miniaturas).
- Comienza automáticamente a cambiar las tarjetas y se detiene al pasar el puntero.
- Cambiar las tarjetas con gestos táctiles o teclas de flecha.
- Múltiple animaciones.
- Múltiple transiciones y la posibilidad de agregar personalizadas con CSS.
- Tiempos personalizados entre tarjetas y velocidad de cambio.
- Interacciones personalizadas para videos.
- Temas Claro y Oscuro.
- Un par de estilos para flechas y puntos.
- Textos en español e ingles (mira FAQ), y listo para traducir.
- Amigable con desarrolladores, puedes agregar tus propios estilos con solo un par
  de lineas de CSS.

Ve a la [Wiki](https://github.com/gigenam/mgblockslider/wiki/Inicio) para ver la
documentación completa y como personalizar todo.

## Instalación

Instalarlo como cualquier otro plugin, a través del directorio de plugins de WordPress
dentro de tu administración de WordPress o descargando este repositorio, compilando,
y subiendo el contenido de la carpeta `app` en tu servidor en /wp-content/plugins/.

Ve a la [Wiki](https://github.com/gigenam/mgblockslider/wiki/Inicio) para ver la
documentación completa y como personalizar todo.

## Desarrollo

Instala todas las dependencias con `npm start` o `npm start:no-composer`.

Hay tareas separadas para php, js y el desarrollo de bloques.

- Corre `npm run dev` para modificar los archivos principales del slider de js,
  css e imágenes.
- Corre `npm run blocks` para modificar los bloques del editor.

¿Listo para producción?

- Corre `npm run build` y `npm run build-blocks`.

Para más información, revisa los archivos [package.json](package.json) y
[gulpfile.js](gulpfile.js).

## Preguntas Frecuentes

Revisa el archivo [readme.txt](./app/readme.txt#L40)
(o la [página del plugin](https://wordpress.org/plugins/mg-block-slider)).

## Cambios

Mira [CHANGELOG.md](./CHANGELOG.md) para todas las actualizaciones de este repo.

Mira [Changelog.txt](./app/changelog.txt) para todas las actualizaciones del plugin.
