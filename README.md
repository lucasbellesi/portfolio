# Portfolio academico - Lucas Bellesi

Sitio web estatico desarrollado como portfolio academico para la Tecnicatura Universitaria en Programacion de la UTN FRGP.

El proyecto usa solamente HTML, CSS y JavaScript vanilla. Incluye menu de navegacion, presentacion inicial con foto, informacion general, conocimientos, proyectos, redes y formulario de contacto demostrativo.

## Estructura

- `index.html`: estructura principal del sitio.
- `styles.css`: estilos responsive y presentacion visual.
- `script.js`: menu mobile, fallback de foto y formulario demostrativo.
- `assets/README.txt`: indicacion para colocar la foto personal.

## Foto personal

Para mostrar la foto en el inicio, colocar una imagen llamada `foto.jpg` dentro de la carpeta `assets`.

Ruta esperada:

```text
assets/foto.jpg
```

Si la imagen no existe, el sitio muestra un reemplazo visual con las iniciales.

## Como verlo localmente

Abrir el archivo `index.html` directamente en el navegador.

## Como publicarlo con GitHub Pages

1. Subir estos archivos a un repositorio de GitHub.
2. Entrar al repositorio en GitHub.
3. Ir a `Settings` > `Pages`.
4. En `Build and deployment`, elegir la rama principal (`main`) y la carpeta `/root`.
5. Guardar los cambios.

Luego GitHub Pages va a generar una URL publica para entregar el portfolio.
