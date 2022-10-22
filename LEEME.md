[Read in english](./README.md)

```
Contribuidores : gigenam
Licencia       : GPLv2 or later
Licencia URI   : https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
```

![Package Version](https://img.shields.io/github/package-json/v/gigenam/mgblockslider)
![Required Node Version](https://img.shields.io/badge/Minimum->=16.x%20-blue?logo=node.js)
![Required PHP Version](https://img.shields.io/badge/Recomended->=7.0-blue?logo=php)
![Required WP Version](https://img.shields.io/badge/Required->=5.9-blue?logo=wordpress)
![Tested WP Version](https://img.shields.io/badge/Tested-6.0.2-lightgrey?logo=wordpress)

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

Instálalo como cualquier otro plugin, a través del directorio de plugins de WordPress
dentro de tu administración de WordPress o descargando este repositorio, y subiendo
el contenido de la carpeta `app` en tu servidor en /wp-content/plugins/.

Ve a la [Wiki](https://github.com/gigenam/mgblockslider/wiki/Inicio) para ver la
documentación completa y como personalizar todo.

## Preguntas Frecuentes (FAQ)

### ¿Cómo puedo cambiar el estilo del contenido que quiero mostrar?

Este plugin solo agrega estilos a sus propios elementos (flechas, puntos, etc.).
Todos los estilos de párrafos, encabezados, columnas, portadas o cualquier bloque
que agregues depende del tema que estés usando o la opción de bloque que puedas
modificar, como colores, espacios, tipografía, etc.

### ¿Qué tipo de alineaciones están soportados?

Si tu tema soporta alineaciones de bloques:

- Ninguna (lo cual es el ancho del contenido the tema).
- Izquierda.
- Derecha.
- Pantalla ancha.
- Ancho completo.

### ¿Puedo agregar colores o temas personalizados?

No para los elementos de control deslizante (flechas, puntos, etc.) a menos que
tenga un poco de conocimiento con la modificación de temas CSS y WP (o uses
complementos para ayudarte). En este caso es bastante fácil porque fue diseñado
para ser personalizable.

Si tienes algunas ideas geniales para nuevos temas/estilos, Házmelo saber.
Cualquier ayuda para mejorar es muy bienvenida.

Para una fácil personalización del contenido, la forma recomendada es editar los
bloques internos. Por ejemplo, agrega un bloque de párrafo y configura los estilos
personalizados en ese bloque. ¿Quiere más separación entre la tarjeta y el contenido?
Añade un bloque de grupo o similar y configurar los espaciados, alineaciones, etc.

### ¿Puedo agregar clases personalizadas para mejores modificaciones de CSS?

Sí, por supuesto. Como cualquier otro bloque, puede agregar tantas clases como
desee. Puede agregar clases personalizadas para el bloque principal y para las
tarjetas individuales.

Además, cuando configuras el título, estás agregando un ID personalizado al
elemento contenedor del slider principal.

### ¿Cómo funcionan las traducciones?

Por defecto todo está en inglés y viene con un par de tipos en español:

- `es_ES`
- `es_AR`
- `es_MX`

Cada cadena de texto está lista para traducir y puedes aprender a hacer tus
propias traducciones en la [Wiki](https://github.com/gigenam/mgblockslider/wiki/Inicio).

### ¿Dónde están las funciones PRO?

No hay. Primero y más importante, hice esto para mí y mis clientes, y es por eso
que tiene características mínimas y es fácil de ampliar. Si deseas cientos de
funcionalidades con una tonelada de botones y una interfaz de usuario realmente
sobre cargada, esto no es para ti.

¿Tienes ideas geniales para más opciones/temas o quieres contribuir a este proyecto?
Clonalo, haz lo que quieras, y crea un pull request con tus cambios. Ten en cuenta
la simplicidad de este proyecto.

¿Quieres contribuir sin código? Cada donación para mantener esto en marcha es muy
apreciada. Mira [este enlace](https://www.paypal.com/donate/?hosted_button_id=X73V9XW8Y94C8).

Sin dinero, sin código? No hay problema. Por favor, compártelo, deja una valoración
y avísame si encuentras problemas o errores en el foro de soporte.

## Cambios

Mira [CHANGELOG.md](./CHANGELOG.md) para todas las actualizaciones de este repo.

Mira [Changelog.txt](./app/changelog.txt) para todas las actualizaciones del plugin.
