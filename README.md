# Portfolio - Lucas Alejo Bellesi

Sitio web estatico desarrollado como portfolio para la Tecnicatura Universitaria en Programacion de la UTN FRGP.

El proyecto usa solamente HTML, CSS y JavaScript vanilla. Incluye menu de navegacion, presentacion inicial con foto, informacion general, conocimientos, proyectos, redes y formulario de contacto conectado con Formspree.

## Estructura

- `index.html`: estructura principal del sitio.
- `styles.css`: estilos responsive y presentacion visual.
- `script.js`: menu mobile, fallback de foto y envio del formulario con Formspree.
- `assets/README.txt`: indicacion para colocar la foto personal.

## Foto personal

Para mostrar la foto en el inicio, colocar una imagen llamada `foto.jpg` dentro de la carpeta `assets`.

Ruta esperada:

```text
assets/foto.jpg
```

Si la imagen no existe, el sitio muestra un reemplazo visual con las iniciales.

Antes de entregar el trabajo, reemplazar ese reemplazo visual por una foto personal real en `assets/foto.jpg`.

## Como verlo localmente

Abrir el archivo `index.html` directamente en el navegador.

## Tema claro y oscuro

El sitio usa por defecto la preferencia del sistema del usuario. Desde el boton del encabezado se puede alternar manualmente entre modo claro y modo oscuro; esa preferencia queda guardada en el navegador.

## Cache busting

Los archivos estaticos principales se referencian con una version en la URL, por ejemplo:

```html
styles.css?v=20260508-8
script.js?v=20260508-8
assets/foto.jpg?v=20260508-8
```

Cuando se modifique `styles.css`, `script.js` o `assets/foto.jpg`, actualizar ese valor de version en `index.html` para que los navegadores descarguen la version nueva sin pedir un hard refresh.

## Formulario de contacto

El formulario envia los mensajes con Formspree usando el endpoint:

```text
https://formspree.io/f/xbdwzyba
```

El envio se realiza con JavaScript vanilla y `fetch`, por lo que la persona no sale de la pagina al enviar el mensaje.

## Como publicarlo con GitHub Pages

1. Subir estos archivos a un repositorio de GitHub.
2. Entrar al repositorio en GitHub.
3. Ir a `Settings` > `Pages`.
4. En `Build and deployment`, elegir la rama principal (`main`) y la carpeta `/root`.
5. Guardar los cambios.

Luego GitHub Pages va a generar una URL publica para entregar el portfolio.

Para este repositorio, la URL esperada deberia ser:

```text
https://lucasbellesi.github.io/portfolio/
```
